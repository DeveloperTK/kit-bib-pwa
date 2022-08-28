import React from "react";
import AreaDetailCard from "@/components/AreaDetailCard";
import DateTimePicker from "@/components/DateTimePicker";
import SelectionOverview from "@/components/SelectionOverview";

import cardDisplayStyles from '@/styles/CardDisplay.module.css';

const DetailView: React.FC = () => {
    return (<>
        <h1 className="container">
            1. Datum Eingeben
        </h1>

        <DateTimePicker />

        <h1 className="container">
            2. Sitzplatz Auswählen
        </h1>

        <div className="container my-4">
            <div className={cardDisplayStyles.largeGrid}>
                <AreaDetailCard areaId={42} title="Altbau 1.OG KIT-BIB" subtitle="Lehrbuchsammlung" />
                <AreaDetailCard areaId={34} title="Altbau 2.OG KIT-BIB" subtitle="Lesesaal Naturwissenschaften" />
                <AreaDetailCard areaId={35} title="Altbau 2.OG (Empore)" subtitle="Lesesaal Naturwissenschaften" />
                <AreaDetailCard areaId={44} title="Altbau 3.OG KIT-BIB" subtitle="Lesesaal Medienzentrum" />
            </div>
            
        </div>

        <h1 className="container">
            3. Buchung Fertigstellen
        </h1>
        <div className="container my-4">
            <SelectionOverview />
        </div>
    </>)
}

export default DetailView;