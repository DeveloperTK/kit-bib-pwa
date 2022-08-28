import styles from "@/styles/AreaCard.module.css";
import { Button } from "react-bootstrap";

export interface AreaCardProps {
    areaId: number;
    title: string;
    subtitle: string;
}

const AreaDetailCard: React.FC<AreaCardProps> = ({ areaId, title, subtitle }) => {

    return (
        <div className={"card text-white " + styles['dark']}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-3" style={{fontVariant: 'small-caps'}}>{subtitle}</h6>

                <div className={"d-flex justify-content-center mb-2"}>
                    <h1 className="card-title pricing-card-title">
                        0
                        <small className="fw-light">
                            /0
                        </small>
                    </h1>
                </div>

                <div className="d-flex flex-wrap w-100 gap-2">
                    <Button variant="light">Übersicht</Button>
                    <Button variant="outline-light">Zufällig Auswählen</Button>
                    <Button variant="outline-warning">Verfügbarkeit Prüfen</Button>
                </div>
            </div>
        </div>
    )
}

export default AreaDetailCard;