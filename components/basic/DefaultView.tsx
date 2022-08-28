import React, { useEffect, useState } from "react";
import AreaAvailabilityCard from "@/components/basic/AreaAvailabilityCard";
import RelativeDatePicker from "./RelativeDatePicker";
import { NumberDate, SeatBookingAPIResponse } from "@/src/types";
import MRBS from "@/src/api";

const areas = [
    {
        id: 42,
        title: "Altbau 1.OG KIT-BIB",
        subtitle: "Lehrbuchsammlung"
    },
    {
        id: 34,
        title: "Altbau 2.OG KIT-BIB",
        subtitle: "Lesesaal Naturwissenschaften"
    },
    {
        id: 35,
        title: "Altbau 2.OG (Empore)",
        subtitle: "Lesesaal Naturwissenschaften"
    },
    {
        id: 44,
        title: "Altbau 3.OG KIT-BIB",
        subtitle: "Lesesaal Medienzentrum"
    },
    {
        id: 40,
        title: "Altbau EG KIT-BIB",
        subtitle: "Lehrbuchsammlung"
    }
];

const DefaultView: React.FC = () => {
    let [date, setDate] = useState<NumberDate>();
    let [slot, setSlot] = useState<number>();

    let [data, setData] = useState<SeatBookingAPIResponse>();

    useEffect(() => {
        if (typeof date !== 'undefined' && date !== null) {
            MRBS.querySeatAvailability(date, areas.map(area => area.id))
                .then(response => setData(response))
                .catch(error => console.error(error));
        }
    }, [date]);

    return (<>
        <div className="container mb-4">
            <RelativeDatePicker onDateChange={setDate} onSlotChange={setSlot} />
        </div>

        <div className="container mb-2">
            <div className="row g-2">
                {areas.map((area, key) => <div key={key} className="col-12 col-md-6 col-xxl-3">
                    <AreaAvailabilityCard areaId={area.id} title={area.title} subtitle={area.subtitle} data={data?.['A' + area.id]} date={date} slot={slot} />
                </div>)}
            </div>
        </div>
    </>);
}

export default DefaultView;