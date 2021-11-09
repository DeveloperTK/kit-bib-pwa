import React from "react";
import {GithubIcon} from "./utils";

export default class HeaderBar extends React.Component {
    render() {
        return(
            <nav className="mb-4 navbar navbar-dark bg-dark">
                <div className="container-fluid justify-content-center">
                    <div className="bg-dark p-4 text-center">
                        <h5 className="text-white h4">
                            KIT Bibliothek Raumbuchung
                        </h5>
                        <span className="text-muted">Aktuell freie Plätze und so.</span>
                    </div>
                </div>
            </nav>
        )
    }
}
