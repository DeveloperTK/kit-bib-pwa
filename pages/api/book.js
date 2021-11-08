import { localDateInKTown } from "../../src/utils";

export default async function handler(req, res) {
    let [day, month, year] = localDateInKTown()
    res.redirect(
        'https://raumbuchung.bibliothek.kit.edu/sitzplatzreservierung/edit_entry.php'
        + `?area=${req.query.area}&room=${req.query.room}&period=${req.query.slot}`
        + `&day=${day}&month=${month}&year=${year}`
    )
}
