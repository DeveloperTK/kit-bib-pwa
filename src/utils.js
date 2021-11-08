/**
 * @returns {string[]} [day, month, year] while month is 1-12 and NOT 0-11
 */
export function localDateInKTown() {
    return new Intl
        .DateTimeFormat('de-DE', { timeZone: "Europe/Berlin" })
        .format(Date.now())
        .split(".")
}
