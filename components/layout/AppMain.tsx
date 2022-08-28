import { localDateInKTown } from "@/src/utils";
import React from "react";
import DefaultView from "@/components/basic/DefaultView";
import DetailView from "@/components/DetailView";

export interface AppMainProps {
    viewIndex: number;
} 

const AppMain: React.FC<AppMainProps> = ({ viewIndex }) => {

    let timeWarning = <></>

    if (localDateInKTown()[3] >= 24) {
        timeWarning = <h5 className="container text-center text-danger fw-bold mb-4">
            Zeit-Slots zwischen 0:00 und 8:00 Uhr morgens müssen im Vortag unter &quot;nachts verbucht werden.
        </h5>
    }

    return <main>
        {timeWarning}

        {(() => {
            if (viewIndex === 0) {
                return <DefaultView />
            } else if (viewIndex === 1) {
                return <div className="container text-center">Detail view is disabled!</div>
            } else {
                return <div className="container text-center">View index {viewIndex} not found!</div>
            }
        })()}
    </main>
}

export default AppMain;