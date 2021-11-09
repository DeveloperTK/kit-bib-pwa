import { JSDOM } from "jsdom";
import { localDateInKTown } from "../../src/utils";
import { default as dummy_handler } from "./dummy_fetch";
import cacheData from "memory-cache"
import areaConfig from "../../src/areas.config";

function getURL(day, month, year, area) {
    return `https://raumbuchung.bibliothek.kit.edu/sitzplatzreservierung/day.php?day=${day}&month=${month}&year=${year}&area=${area}`;
}

export default async function handler(req, res) {
    if (process.env.NODE_ENV === 'developments') {
        return await dummy_handler(req, res);
    } else {
        return await handler_production(req, res);
    }
}

async function fetchWithCache(url, cached) {
    let cachedResult = cacheData.get(url);

    if (cached && cachedResult) {
        console.log("cacheRes: ", url)
        return cachedResult
    } else {
        console.log("fetching: ", url)
        let response = await (fetch(url).then(response => response.text()))
        cacheData.put(url, response, areaConfig.requestCacheDuration)
        return response
    }
}

async function handler_production(req, res) {
    if (!req.query.area) {
        res.status(400).json({error: 400, message: "Missing GET parameter 'area'"})
        return
    }

    const cached = (typeof req.query.cached === 'undefined' || req.query.cached);

    let [day, month, year] = localDateInKTown()
    let url = getURL(day, month, year, req.query.area)

    let timeout = setTimeout(() => {
        res.status(408).json({error: 408, message: "Timeout: did not reach KIT Server in time"})
    }, 10000);

    await fetchWithCache(url, cached)
        .then(text => {
            try {
                clearTimeout(timeout);
                res.status(200).json(parseText(text))
            } catch(err) {
                console.error(err);
                res.status(500).json({error: 500, message: "could not parse html body", url: url})
            }
        })
        .catch(err => {
            clearTimeout(timeout);
            res.status(500).json({error: 500, message: err, note: "top catch"})
        })
}

function parseText(text) {
    let fetchDom = new JSDOM(text);
    let table = fetchDom.window.document.querySelector('#day_main');
    let headerEntries = table
        .children[0] // <thead>
        .children[0] // <tr>
        .children // array of <td>

    // first element should be ignored but array starts at 0
    let max = headerEntries.length - 1;    

    let bodyRows = table
        .children[2] // tbody
        .children // array of rows

    let headerBlockRoomList = [];
    for (let i = 1; i < headerEntries.length; i++) {
        headerBlockRoomList.push(headerEntries[i].dataset.room)
    }

    let timeSlots = [];
    for (let row of bodyRows) {
        let spliceRow = [];
        let currentlyFree = 0;

        for (let i = 1; i < row.children.length; i++) {
            spliceRow.push(row.children[i].classList.contains('new'));
            if (row.children[i].classList.contains('new')) currentlyFree++;
        }

        timeSlots.push({
            name: row[0],
            free: currentlyFree,
            data: spliceRow
        });
    }
    
    return {
        max: max,
        header: headerBlockRoomList,
        timeSlots: timeSlots
    }
    
}
