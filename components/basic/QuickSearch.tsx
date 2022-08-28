import MRBS from "@/src/api";
import { NumberDate } from "@/src/types";
import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap";

export interface QuickSearchButtonProps {
    date: NumberDate;
    slot: number;
    areaId: number;
}

interface BookingOption {
    noneAvailable: boolean;
    name: string;
    url: string;
}

const QuickSearchButton: React.FC<QuickSearchButtonProps> = ({ date, slot, areaId }) => {
    let [bookingOption, setBookingOption] = useState<BookingOption>(null);

    // reset booking context if date or slot changes
    useEffect(() => setBookingOption(null), [date, slot]);

    // fetch seat allocation and search unbooked seat
    const findBooking: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.currentTarget.innerHTML = "..."
        const response = await MRBS.querySeatDetail(date, areaId);

        for (const roomId of Object.keys(response.fetchedRooms)) {
            const room = response.fetchedRooms[roomId];
            if (room.slots[slot] === true) {
                setBookingOption({
                    noneAvailable: false,
                    name: room.name,
                    url: `https://raumbuchung.bibliothek.kit.edu/sitzplatzreservierung/edit_entry.php?area=${areaId}&room=${roomId}&period=${slot}&year=${date.year}&month=${date.month}&day=${date.day}`
                });

                return;
            }
        }

        // no seats available in that time and slot
        setBookingOption({ noneAvailable: true, name: '', url: '' });
    }

    // open tab for booking seat, return to original state
    const book = () => {
        window.open(bookingOption.url, '_blank').focus()
        setBookingOption(null);
    }

    if (bookingOption === null) {
        return <Button variant="light" onClick={findBooking}>Schnellsuche</Button>
    } else if (bookingOption.noneAvailable === true) {
        return <Button variant="danger">Alles belegt!</Button>
    } else {
        return <Button variant="success" onClick={book}>{bookingOption.name} buchen!</Button>
    }
}

export default QuickSearchButton;