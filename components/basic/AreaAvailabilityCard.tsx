import React from "react";
import { NumberDate, SeatBookings } from "@/src/types";

import styles from '@/styles/AreaCard.module.css';
import { Button } from "react-bootstrap";
import QuickSearchButton from "./QuickSearch";

const fallbackDefaultSeats = {
    42: 24,
    34: 134,
    35: 48,
    44: 72,
    40: 46
}

export interface AreaAvailabilityCardProps {
    areaId: number;
    title: string;
    subtitle: string;
    data?: SeatBookings
    date: NumberDate;
    slot: number;
}

const AreaAvailabilityCard: React.FC<AreaAvailabilityCardProps> = ({ areaId, title, subtitle, data, date, slot }) => {
    const [free, total] = calculateSeats(areaId, data, slot);

    return (
        <div className={"card text-white w-100 " + mapStyles(free, total)}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-3" style={{fontVariant: 'small-caps'}}>{subtitle}</h6>

                <div className={"d-flex w-100"}>
                    <div className="d-inline-block align-self-center">
                        <QuickSearchButton date={date} slot={slot} areaId={areaId} />
                    </div>
                    <h1 className="card-title pricing-card-title" style={{marginLeft: 'auto'}}>
                        {free}
                        <small className="fw-light">
                            /{total}
                        </small>
                    </h1>
                </div>
            </div>
        </div>
    );
}

const calculateSeats = (areaId: number, data: SeatBookings, slot: number) => {
    let free: number;
    let total: number;

    if (typeof data == 'undefined') {
        free = 0;
        total = 0;
    } else if (typeof data[slot] == 'undefined') {
        free = fallbackDefaultSeats[areaId];
        total = fallbackDefaultSeats[areaId];
    } else {
        free = data[slot].free;
        total = data[slot].occupied + free;
    }

    return [free, total];
}

const mapStyles = (free: number, total: number) => {
    if (total === 0) {
        return styles.dark;
    } else if (free <= 0) {
        return styles.danger;
    } else if (free <= 10 || free < (total * 0.2)) {
        return styles.warning;
    } else {
        return styles.success;
    }
}

export default AreaAvailabilityCard;