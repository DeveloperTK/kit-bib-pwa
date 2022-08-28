import React, { useEffect, useState } from "react";

import styles from '@/styles/TimeSlotSelector.module.css'

interface TimeButtonGroupProps {
    onChange: (slotId: number) => unknown,
    value: number
}

const TimeButtonGroup: React.FC<TimeButtonGroupProps> = (props: TimeButtonGroupProps) => {
    let [value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    const onChangeHandler = (index: number) => () => {
        setValue(index);
        props.onChange(index);
    }

    return (
        <div className="btn-group flex-fill flex-wrap w-100" role="group">
            <input type="radio" className="btn-check" autoComplete="off"
                name="slot" id="slot-0"
                onChange={onChangeHandler(0)} checked={value == 0} />
            <label className={"btn btn-outline-primary " + styles.label} htmlFor="slot-0">Morgen (8:00 - 13:00)</label>

            <input type="radio" className="btn-check" autoComplete="off"
                name="slot" id="slot-1"
                onChange={onChangeHandler(1)} checked={value == 1} />
            <label className={"btn btn-outline-primary " + styles.label} htmlFor="slot-1">Nachmittag (13:00 - 18:00)</label>

            <input type="radio" className="btn-check" autoComplete="off"
                name="slot" id="slot-2"
                onChange={onChangeHandler(2)} checked={value == 2} />
            <label className={"btn btn-outline-primary " + styles.label} htmlFor="slot-2">Abend (18:00 - 22:00)</label>

            <input type="radio" className="btn-check" autoComplete="off"
                name="slot" id="slot-3"
                onChange={onChangeHandler(3)} checked={value == 3} />
            <label className={"btn btn-outline-primary " + styles.label} htmlFor="slot-3">Nacht (22:00 - 08:00)</label>
        </div>
    );
}

export default TimeButtonGroup