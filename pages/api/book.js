import {localTimeInKTown} from "../../src/Utils";

export default async function handler(req, res) {
    let date = localTimeInKTown()
    res.redirect('https://raumbuchung.bibliothek.kit.edu/sitzplatzreservierung/edit_entry.php?'
        + `area=${req.query.area}&room=${req.query.room}&period=${req.query.slot}&year=${date.getFullYear()}&month=${date.getMonth() + 1}&day=${date.getDay()}`);
}