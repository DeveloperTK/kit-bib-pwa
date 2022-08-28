import * as styles from '@/styles/TimeSlotSelector.module.css';
import {Fragment, useEffect, useState} from "react";

export default function TimeSlotSelector({ timeSlots, selectedSlot, setSlot, disabled }) {
    const [uniqueName, setUniqueName] = useState(null);
    useEffect(() => setUniqueName(Math.random().toString(16).substr(2, 5)), []);

    return (
        <div className="container d-flex my-4">
            <div className="btn-group flex-fill flex-wrap" role="group">
                {
                    timeSlots.map((slot, index) => <Fragment key={ slot.id }>
                        <input
                            type="radio"
                            className="btn-check"
                            name={ uniqueName }
                            id={ slot.id }
                            autoComplete="off"
                            onChange={() => setSlot(index)}
                            defaultChecked={ !disabled && selectedSlot === index }
                            disabled={ disabled }
                        />

                        <label className={"btn btn-outline-primary " + styles.label} htmlFor={slot.id}>
                            { slot.name } { slotFromToFormat(slot) }
                        </label>
                    </Fragment>)
                }
            </div>
        </div>
    );
}

function slotFromToFormat(slotData) {
    return `(${fill0(slotData.from.hour%24)}:${fill0(slotData.from.minute)} - ${fill0(slotData.to.hour%24)}:${fill0(slotData.to.minute)} Uhr)`
}

function fill0(n) {
    return ('00'+n).slice(-2);
}