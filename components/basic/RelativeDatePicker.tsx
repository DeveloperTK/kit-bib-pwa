import { defaultDate, localDateInKTown, __currentSlot } from "@/src/utils";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react"
import TimeButtonGroup from "../TimeButtonGroup";
import { NumberDate } from "@/src/types";

export interface RelativeDatePickerProps {
    onDateChange: (date: NumberDate) => void;
    onSlotChange: (slot: number) => void;
}

const RelativeDatePicker: React.FC<RelativeDatePickerProps> = ({ onDateChange, onSlotChange }) => {
    let [slotValue, setSlotValue] = useState(__currentSlot());
    let [date, setDate] = useState(defaultDate());

    const setNow = () => {
        if (date != defaultDate()) {
            handleDateChange(defaultDate());
        }

        handleSlotChange(__currentSlot());
    }

    const setNext = () => {
        let slot = __currentSlot()
        if (slot == 3) {
            let date = new Date();
            date.setDate(date.getDate() + 1);

            handleDateChange(defaultDate(date));
            handleSlotChange(0);
        } else {
            handleSlotChange(slot + 1);
        }
    }

    const handleDateChange = (x: string) => {
        setDate(x);
        let [year, month, day] = x.split('-');
        onDateChange({ day: Number(day), month: Number(month), year: Number(year) });
    }

    const handleSlotChange = (y: number) => {
        setSlotValue(y);
        onSlotChange(y);
    }

    useEffect(() => {
        // trigger initial "change" to fetch data at load
        handleDateChange(date);
        handleSlotChange(slotValue);
    }, [])

    return <div className="form">
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Datum</label>
            <div className="col-sm-10 d-flex gap-2">
                <input type="date" className="form-control" style={{flex: 'max-content'}} required value={date} onChange={event => handleDateChange(event.target.value)}></input>
                <Button className="d-block" onClick={setNow}>Jetzt</Button>
                <Button className="d-block" onClick={setNext}>Nächster Block</Button>
            </div>
        </div>
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Uhrzeit</label>
            <div className="col-sm-10 d-flex gap-2">
                <TimeButtonGroup onChange={handleSlotChange} value={slotValue} />
            </div>
        </div>
    </div>
}

export default RelativeDatePicker;