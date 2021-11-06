import * as styles from '../../styles/TimeSlotSelector.module.css';
import {Fragment, useEffect, useState} from "react";

export default function TimeSlotSelector({ timeSlots, selectedSlot, setSlot }) {
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
                            defaultChecked={ selectedSlot === index }
                        />

                        <label className={"btn btn-outline-primary " + styles.label} htmlFor={slot.id}>
                            {slot.name}
                        </label>
                    </Fragment>)
                }
            </div>
        </div>
    );
}