/**
 * The new day starts at 6:00. From 0:00 to 5:59 is the last day plus 24 hours.
 * Example: each +1 hour
 * - 01.07. 22:30
 * - 01.07. 23:30
 * - 01.07. 24:30 (in real time: 02.07. 00:30)
 * - 01.07. 25:30 (in real time: 02.07. 01:30)
 * ...
 * - 01.07. 29:30 (in real time: 02.07. 05:30)
 * - 02.07. 06:30
 *
 * @returns {number[]} [day, month, year] while month is 1-12 and NOT 0-11
 */
export function localDateInKTown() {

    let formatString = new Intl
        .DateTimeFormat('de-DE', { timeZone: "Europe/Berlin", dateStyle: 'medium', timeStyle: 'short' })
        .format(Date.now())

    let [date, time] = formatString
        .replace(/\s/g, '')
        .split(",")

    let [day, month, year] = date.split('.').map(a => Number(a));
    let [hour, minute] = time.split(':').map(a => Number(a));

    if (hour < 6) {
        let date = new Date(year, month - 1, day, hour, minute)
        date.setDate(date.getDate() - 1);
        [day, month, year, hour, minute] = [date.getDate(), date.getMonth() + 1, date.getFullYear(),
            date.getHours() + 24, date.getMinutes()]
    }

    return [day, month, year, hour, minute]
}