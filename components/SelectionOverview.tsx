const SelectionOverview: React.FC<any> = () => {
    return (
        <div className="container">
            <div className="row g-2 w-100 mb-4">
                <div className="col-4 col-sm-4 col-md-2 p-1"><button className="w-100 btn btn-light" disabled>25.08.2022</button></div>
                <div className="col-4 col-sm-4 col-md-2 p-1"><button className="w-100 btn btn-light" disabled>A1 008</button></div>
                <div className="col-4 col-sm-4 col-md-2 p-1"><button className="w-100 btn btn-light" disabled>Morgen</button></div>
                <div className="col-6 col-sm-6 col-md-3 p-1"><button className="w-100 btn btn-danger">Entfernen</button></div>
                <div className="col-6 col-sm-6 col-md-3 p-1"><button className="w-100 btn btn-success">Buchen</button></div>
            </div>

            <div className="row g-2 w-100 mb-4">
                <div className="col-4 col-sm-4 col-md-2 p-1"><button className="w-100 btn btn-light" disabled>25.08.2022</button></div>
                <div className="col-4 col-sm-4 col-md-2 p-1"><button className="w-100 btn btn-light" disabled>A1 008</button></div>
                <div className="col-4 col-sm-4 col-md-2 p-1"><button className="w-100 btn btn-light" disabled>Nachmittag</button></div>
                <div className="col-6 col-sm-6 col-md-3 p-1"><button className="w-100 btn btn-danger">Entfernen</button></div>
                <div className="col-6 col-sm-6 col-md-3 p-1"><button className="w-100 btn btn-success">Buchen</button></div>
            </div>
        </div>
    )
}

export default SelectionOverview;