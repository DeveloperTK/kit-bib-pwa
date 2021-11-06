import AreaCard from "./AreaCard";
import { useEffect, useState } from "react";
import TimeSlotSelector from "./TimeSlotSelector";
import * as GridStyle from '../../styles/CardDisplay.module.css';

export default function AreaGroup({ data, timeSlot }) {
    let [slot, setSlot] = useState(0);

    useEffect(() => {
        if (process.browser) {
            console.log("render from browser");
        }

        // TODO try and calculate current slot
    }, []);

    return (
        <div className="container mb-4">
            <h1>{ data.name }</h1>
            <TimeSlotSelector timeSlots={ data.timeSlots } selectedSlot={ slot } setSlot={ setSlot } />

            <div className={GridStyle.cardGrid}>
                { data.areas.map(area => <AreaCard key={ area.code } data={ area } slot={ slot } />) }
            </div>
        </div>
    )
}
