import { JSDOM } from "jsdom";

function getURL(day, month, year, area) {
    return `https://raumbuchung.bibliothek.kit.edu/sitzplatzreservierung/day.php?year=${year}&month=${month}&day=${day}&area=${area}`;
}

export default async function handler(req, res) {
    if (!req.query.area) {
        res.status(400).json({error: 400, message: "Missing GET parameter 'area'"})
        return
    }

    let now = new Date();
    let url = getURL(now.getDay(), now.getMonth() + 1, now.getFullYear(), req.query.area);

    let timeout = setTimeout(() => {
        res.status(500).json({error: 408, message: "Timeout: did not reach KIT Server in time"})
    }, 10000);

    console.log("fetching: ", url);

    await fetch(url)
        .then(response => response.text())
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
            res.status(500).json({error: 500, message: err})
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

    let timeBlocks = [];
    for (let row of bodyRows) {
        let spliceRow = [];
        let currentlyFree = 0;

        for (let i = 1; i < row.children.length; i++) {
            spliceRow.push(row.children[i].classList.contains('new'));
            if (row.children[i].classList.contains('new')) currentlyFree++;
        }

        timeBlocks.push({
            name: row[0],
            free: currentlyFree,
            data: spliceRow
        });
    }
    
    return {
        max: max,
        header: headerBlockRoomList,
        timeSlots: timeBlocks
    }
    
}
