import { useEffect, useState } from "react";
import Link from 'next/link';
import styles from "../../styles/AreaCard.module.css";

export default function AreaCard({ data, slot, disabled, single }) {

    let [singleSlot, setSingleSlot] = useState(single ? 0 : undefined);
    const [slotSelectorId, setSlotSelectorId] = useState(null);
    useEffect(() => setSlotSelectorId(Math.random().toString(16).substr(2, 5)), []);

    let [fetchedData, setFetchedData] = useState(null)
    let [bookingState, setBookingState] = useState({ step: 0, room: 0 })

    const getSlot = () => single ? singleSlot : slot;

    useEffect(() => {
        if (!disabled) fetchData(data.code, setFetchedData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let currentlyFree = nullSafe(() => fetchedData.timeSlots[getSlot()].free, '--')
    let maxBookings = nullSafe(() => fetchedData.max, '--')

    return (
        <div className={"card " + getCardStyle(currentlyFree, maxBookings)}>
            <div className="card-body">
                <h5 className="card-title">{ data.name }</h5>
                <h6 className="card-subtitle mb-3" style={{fontVariant: 'small-caps'}}>geöffnet</h6>

                <div className={"d-flex justify-content-center mb-2"}>
                    <h1 className="card-title pricing-card-title">
                        {currentlyFree}
                        <small className="fw-light">
                            /{maxBookings}
                        </small>
                    </h1>
                </div>

                <div className="d-flex justify-content-center">
                    { renderSingleSlotSelector(single, singleSlot, setSingleSlot, data, slotSelectorId, disabled) }
                    { renderButtonStep(bookingState, setBookingState, maxBookings, currentlyFree, data, getSlot()) }
                </div>
            </div>
        </div>
    )
}

function nullSafe(accessor, or) {
    try {
        return accessor();
    } catch (err) {
        if (err instanceof TypeError) {
            return or
        } else {
            throw err
        }
    }
}

function fetchData(areaCode, setFetchedData) {
    // all http request /should/ be directed to https
    // noinspection HttpUrlsUsage
    fetch(`${window.location.protocol}//${window.location.host}/api/fetch?area=${areaCode}`)
        .then(res => res.json())
        .then(data => setFetchedData(data))
        .catch(error => console.error(error))
}

function getCardStyle(current, max) {
    if (current === 0) {
        return 'text-white ' + styles.danger;
    } else if (current/max <= 0.2 && current <= 10) {
        return 'text-dark ' + styles.warning;
    } else if (typeof current === 'number') {
        return 'text-white ' + styles.success;
    } else {
        return 'text-white ' + styles.dark;
    }
}

function renderButtonStep(bookingState, setBookingState, maxBookings, currentlyFree, data, slot) {
    switch (bookingState.step) {
        case 0:
            return <button className={"btn btn-light"} disabled={typeof maxBookings !== 'number' || currentlyFree <= 0}
                           onClick={() => bookButton(bookingState, setBookingState,
                               { areaCode: data.code, slot })}>
                Platz Suchen
            </button>
        case 1:
            return <button className={"btn btn-light"} disabled>...</button>
        case 2:
            return <a href={`/api/book?area=${data.code}&slot=${slot}&room=${bookingState.room}`}
                         rel="noopener noreferrer" target="_blank"
                         onClick={() => bookButton(bookingState, setBookingState)}
                         type="button" className="btn btn-light"
            >Jetzt Buchen!</a>
        case 3:
            return <button className={"btn btn-light"} disabled>Fehler!</button>
    }
}

function bookButton(bookingState, setBookingState, bookingData) {
    switch (bookingState.step) {
        case 0:
            if (!bookingData) throw new Error("bookingData is undefined!");

            fetch(`${window.location.protocol}//${window.location.host}/api/fetch?area=${bookingData.areaCode}`)
                .then(res => res.json())
                .then(res => {
                    if (res.timeSlots[bookingData.slot].free === 0) {
                        console.error("free slots: ", res.timeSlots[bookingData.slot].free);
                        // set to error
                        setBookingState({ step: 3, room: 0 });
                        // reset to step 0 after 5 seconds
                        setTimeout(() => setBookingState({ step: 0, room: 0 }), 5 * 1000);
                    } else {
                        let nextFreeIndex;

                        res.timeSlots[bookingData.slot].data.forEach((available, index) => {
                            if (!nextFreeIndex && available) nextFreeIndex = index
                        })

                        if (!nextFreeIndex) {
                            console.error("no free index: ", nextFreeIndex);
                            // set to error
                            setBookingState({ step: 3, room: 0 });
                            // reset to step 0 after 5 seconds
                            setTimeout(() => setBookingState({ step: 0, room: 0 }), 5 * 1000);
                        } else {
                            setBookingState({ step: 2, room: res.header[nextFreeIndex] });
                        }
                    }
                })
                .catch(error => console.error(error))

            setBookingState({step: 1, room: 0});
            break;
        case 2:
            setBookingState({step: 0, room: 0});
            break;
        case 3:
            setBookingState({step: 0, room: 0});
            break;
    }
}

function slotFromToFormat(slotData) {
    return `(${fill0(slotData.from.hour)}:${fill0(slotData.to.minute)} - ${fill0(slotData.to.hour)}:${fill0(slotData.to.minute)} Uhr)`
}

function fill0(n) {
    return ('00'+n%24).slice(-2);
}

function renderSingleSlotSelector(isSingle, singleSlot, setSingleSlot, data, slotSelectorId, disabled) {
    if (!isSingle) return <></>

    return (
        <div className="dropdown" style={{marginRight: '.6rem'}}>
            <button className="btn btn-light dropdown-toggle" type="button" id={ slotSelectorId }
                    data-bs-toggle="dropdown" aria-expanded="false" disabled={ disabled }>
                { nullSafe(() => data.timeSlots[singleSlot].name, "Konfigurationsfehler!") }
            </button>
            <ul className="dropdown-menu" aria-labelledby={ slotSelectorId }>
                { nullSafe(() => data.timeSlots, [{name: 'invalid'}]).map((slotData, index) =>
                    <li key={slotData.name + index}>
                        <button className="dropdown-item" type="button" onClick={() => setSingleSlot(index)}>{ slotData.name + " " + slotFromToFormat(slotData) }</button>
                    </li>
                )}
            </ul>
        </div>
    )
}