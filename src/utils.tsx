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
export function localDateInKTown(forcedDate?: Date) {

    let formatString = new Intl
        .DateTimeFormat('de-DE', { timeZone: "Europe/Berlin", dateStyle: 'medium', timeStyle: 'short' })
        .format(forcedDate || Date.now())

    let [date, time] = formatString
        .replace(/\s/g, '')
        .split(",")

    let [day, month, year] = date.split('.').map(a => Number(a));
    let [hour, minute] = time.split(':').map(a => Number(a));

    if (hour < 8) {
        let date = new Date(year, month - 1, day, hour, minute)
        date.setDate(date.getDate() - 1);
        [day, month, year, hour, minute] = [date.getDate(), date.getMonth() + 1, date.getFullYear(),
            date.getHours() + 24, date.getMinutes()]
    }

    return [day, month, year, hour, minute]
}

export function defaultDate(forcedDate?: Date) {
    let [day, month, year] = localDateInKTown(forcedDate || undefined);
    return (
        year
        + "-"
        + String(month).padStart(2, '0')
        + "-"
        + String(day).padStart(2, '0')
    )
}

/**
 * IMPORTANT: This is only teporary and works as long as the times don't change
 */
export function __currentSlot() {
    let timeString = new Intl.DateTimeFormat('de-DE', { timeZone: "Europe/Berlin", timeStyle: 'short' }).format(Date.now())
    let hour = Number(timeString.split(':')[0])
    if (hour < 8) {
        return 3
    } else if (hour < 13) {
        return 0
    } else if (hour < 18) {
        return 1
    } else if (hour < 22) {
        return 2
    } else {
        return 3
    }
}

export function GithubIcon() {
    return <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true"
                className="octicon octicon-mark-github v-align-middle">
        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
}

export const githubLink = "https://github.com/DeveloperTK/kit-bib-pwa";