import Head from 'next/head'

import styles from '../../styles/Home.module.css'

import HeaderBar from '../HeaderBar'
import FooterBar from '../FooterBar'
import AreaCard from "../main/AreaCard";
import React from 'react'

export default class Home extends React.Component {

    _isMounted = false

    constructor(props) {
        super(props);

        this.state = {
            currentTimeBlock: 0,
            fetchData: { },
            nextSeats: { }
        }
    }

    componentDidMount() {
        this._isMounted = true;
        if (process.browser) {
            this.getAreaData(this.props.areas, this.props.host).then();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    static async getInitialProps(context) {
        let { req } = context;
        let https = req.headers["x-forwarded-proto"] || req.connection.encrypted;
        let areas = await fetch('http://' + req.headers.host + '/api/areas').then(res => res.json());
        return { areas, host: req.headers.host, https: https }
    }

    async getAreaData(areas, host) {
        for (let id in areas) {
            this.state.fetchData['' + id] = await fetch('http://' + host + '/api/fetch?area=' + id).then(response => response.json());
            if (this._isMounted) this.setState(this.state);
        }
    }

    getSafeDataState(method) {
        try {
            return method(this.state.fetchData)
        } catch (ignored) {
            if (process.browser) console.debug(ignored);
        }
    }

    getSeatsForBlockDynamic(areaData, areaCode) {
        if (!areaData) return '--';

        let now = new Date();
        let result = '--';

        areaData.timeBlocks.forEach((block, index) => {
            let areaBlockInfo = this.props.areas[areaCode].blocks[index]
            if (this.isInBlock({ hour: now.getHours(), minute: now.getMinutes() }, areaBlockInfo)) {
                result = block.free;
            }
        });

        return result;
    }

    getSeatsForBlock(areaData, areaCode) {
        if (!areaData) return '--';
        if (!areaData.timeBlocks) return '--';
        console.log(this.state.currentTimeBlock);
        return areaData.timeBlocks[this.state.currentTimeBlock].free;
    }

    isInBlock(dateInfo, areaBlockInfo) {
        console.log(dateInfo);
        console.log(areaBlockInfo);
        if (dateInfo.hour === areaBlockInfo.from.hour) {
            return dateInfo.minute >= areaBlockInfo.from.minute;
        } else if (dateInfo.hour === areaBlockInfo.to.hour) {
            return dateInfo.minute < areaBlockInfo.to.minute;
        } else if (dateInfo.hour > areaBlockInfo.from.hour && dateInfo.hour < areaBlockInfo.to.hour) {
            return true;
        } else {
            // TODO this doesnt work
            console.log("what");
            return false;
        }
    }

    changeTimeBlock(blockIndex) {
        if (process.browser) {
            console.log("changed to time block: " + blockIndex);

            if (this.state) {
                let x = this.state;
                x.currentTimeBlock = blockIndex;
                if (this._isMounted) this.setState(x);
            } else {
                if (this._isMounted) this.setState({ currentTimeBlock: 0 });
            }
        }
    }

    getFreeSeat(areaData, areaCode) {
        if (!areaData || !areaCode) return this.state.nextSeats[areaCode];
        areaData.timeBlocks[this.state.currentTimeBlock].data.forEach((isFree, index) => {
            if (isFree) {
                console.info("free: " + areaData.header[index]);

                let newState = this.state;
                newState.nextSeats[areaCode] = areaData.header[index];
                if (this._isMounted) this.setState(this.state);

                return areaData.header[index];
            }
        });
    }

    render() {
        if (process.browser) {
            console.info("render in browser!");
            console.info(this.state);
        } else {
            console.info("render on server!");
        }



        return (
            <div className={"d-flex flex-column min-vh-100 bg-white"}>
                <Head>
                    <title>KIT Bibliothek Plätze</title>
                </Head>

                <HeaderBar />

                <div className="container d-flex mt-4">
                    <div className="btn-group flex-fill" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1"
                               autoComplete="off" onChange={() => this.changeTimeBlock(0)} defaultChecked />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Vormittag</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2"
                               autoComplete="off" onChange={() => this.changeTimeBlock(1)} />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Nachmittag</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3"
                               autoComplete="off" onChange={() => this.changeTimeBlock(2)} />
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">Abend</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio4"
                               autoComplete="off" onChange={() => this.changeTimeBlock(3)} />
                        <label className="btn btn-outline-primary" htmlFor="btnradio4">Nacht</label>
                    </div>
                </div>

                <div className={"container mb-3 " + styles.marginTop}>
                    <div className={styles.cardGrid}>
                        {Object.values(this.props.areas).sort((a, b) => a.sortOrder - b.sortOrder).map((x, i) =>
                            <AreaCard key={x.sortOrder + "_" + i} areaData={{
                                title: x.title,
                                name: x.name,
                                code: x.areaCode,
                                max: this.getSafeDataState(data => data[x.areaCode].max),
                                current: this.getSeatsForBlock(this.getSafeDataState(data => data[x.areaCode]), x.areaCode),
                                nextFree: this.getFreeSeat(this.getSafeDataState(data => data[x.areaCode]), x.areaCode)
                            }} />
                        )}
                    </div>
                </div>

                <FooterBar />
            </div>
        )
    }
}
