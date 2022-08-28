import React from "react";
import { defaultDate } from "@/src/utils";
import TimeButtonGroup from '@/components/TimeButtonGroup';

const DateTimePicker: React.FC = () => {
    return <div className="container my-4">
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Datum</label>
            <div className="col-sm-10">
                <input type="date" className="form-control" required defaultValue={defaultDate()}></input>
            </div>
        </div>
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Slot</label>
            <div className="col-sm-10">
                <TimeButtonGroup onChange={(slotId) => {}} value={0} />
            </div>
        </div>
    </div>
}

export default DateTimePicker;