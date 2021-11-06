import AreaGroup from "./AreaGroup";
import AreaCard from "./AreaCard";

import areaConfig from "../areas.config";

export default function AppMain(props) {
    return (
        <main>
            { areaConfig.groups.map((group) => <AreaGroup key={ group.name } data={ group } />) }
            <div className="container mb-4">
                { areaConfig.areas.map(area => <AreaCard key={ area.code } grouped={ false } data={ area } />) }
            </div>
        </main>
    )
}

/*
<AreaGroup title="KIT-Bibliothek Süd">
    <AreaCard code="20" title="1.OG (LSW)" />
    <AreaCard code="19" title="2.OG (LST)" />
    <AreaCard code="21" title="3.OG (LSG)" />
    <AreaCard code="42" title="Altbau 1.OG (LBS)" />
    <AreaCard code="34" title="Altbau 2.OG (LSN)" />
    <AreaCard code="35" title="Altbau 2.OG Empore" />
    <AreaCard code="40" title="Altbau EG (LBS)" />
</AreaGroup>

<AreaGroup title="Fachbibliothek HKA">
    <AreaCard code="29" title="Lernräume Ost" />
    <AreaCard code="28" title="Lernräume West" />
</AreaGroup>

<AreaCard code="32" title="DHBW Lernplätze" />
<AreaCard code="25" title="KIT Fachbib Mathematik" />
<AreaCard code="24" title="KIT Fachbib Physik" />
<AreaCard code="26" title="KIT-BIB Nord" />
<AreaCard code="37" title="KIT Lernzentrum (Süd)" />
*/