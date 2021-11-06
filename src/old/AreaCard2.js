import styles from '../../styles/AreaCard.module.css'
import Link from "next/link";

export default function AreaCard2(param) {
    if (!param) return (<></>);
    let areaData = param.areaData;
    return (
        <div>
            {/* col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6 */}
            <div className={"card " + getCardStyle(areaData.current)} style={{ width: '100%', border: 'none', borderRadius: '.75rem' }}>
                <div className={"card-body"}>
                    <h5 className="card-title">{areaData.title}</h5>
                    <h6 className="card-subtitle mb-3">{areaData.name}</h6>

                    <div className={"d-flex justify-content-center mb-2"}>
                        <h1 className="card-title pricing-card-title">
                            {areaData.current}
                            <small className="fw-light">
                                /{areaData.max}
                            </small>
                        </h1>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-light" href={`/api/book?area=${areaData.code}&room=${areaData.nextFree}`} rel="noopener noreferrer" target="_blank"
                                disabled={typeof areaData.current !== 'number' || areaData.current <= 0}

                        >
                            Platz Buchen
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function getCardStyle(current) {
    if (current == 0) {
        return 'text-white ' + styles.danger;
    } else if (current <= 10) {
        return 'text-dark ' + styles.warning;
    } else if (typeof current === 'number') {
        return 'text-white ' + styles.success;
    } else {
        return 'text-white ' + styles.dark;
    }
}