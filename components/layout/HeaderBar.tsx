import React, { ChangeEvent, Ref, RefObject, useRef } from "react";

import styles from '@/styles/HeaderBar.module.css';

interface HeaderBarProps {
    onChangeViewIndex: (id: number) => unknown;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ onChangeViewIndex }) => {
    const onChange = (id: number) => (_: ChangeEvent) => {
        const active: Ref<HTMLLabelElement> = selectLabelRefs[id];
        const other: Ref<HTMLLabelElement> = selectLabelRefs[Number(!id)];
        
        active.current.classList.remove('bg-dark');
        active.current.classList.remove('text-light');
        active.current.classList.add('bg-light');
        active.current.classList.add('text-dark');

        other.current.classList.remove('bg-light');
        other.current.classList.remove('text-dark');
        other.current.classList.add('bg-dark');
        other.current.classList.add('text-light');

        onChangeViewIndex(id);
    }

    const selectLabelRefs: RefObject<HTMLLabelElement>[] = [useRef(), useRef()]

    return(
        <nav className="mb-4 navbar navbar-dark bg-dark" style={{paddingBottom: 0}}>
            <div className="container-fluid justify-content-center">
                <div className="bg-dark p-4 text-center">
                    <h5 className="text-white h4">
                        KIT Bibliothek Raumbuchung
                    </h5>
                    <span className="text-muted">Aktuell freie Plätze und so.</span>
                </div>
            </div>
            <div className="container btn-group w-100 p-0" role="group">
                <input type="radio" className="btn-check" autoComplete="off" name="view" id="view-selector-0" onChange={onChange(0)} defaultChecked={true} />
                <label ref={selectLabelRefs[0]} className={"btn bg-light text-dark " + styles.navLink} htmlFor="view-selector-0">Standard</label>

                <input type="radio" className="btn-check" autoComplete="off" name="view" id="view-selector-1" onChange={onChange(1)} defaultChecked={false} />
                <label ref={selectLabelRefs[1]} className={"btn bg-dark text-light " + styles.navLink} htmlFor="view-selector-1">Detailansicht</label>
            </div>
        </nav>
    )
}

export default HeaderBar;