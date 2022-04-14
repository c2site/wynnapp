import React from "react";
import { DeviceAndroidIcon, DeviceIosIcon, DevicePcIcon, DevicePsIcon, RoketIcon, ServerIcon, UsersIcon } from "../../svg/icons";
import {FlowRouter} from "meteor/ostrio:flow-router-extra";

const GamesCenter = () => {

    return (
        <div className="redesign-page secondary-page">
            <div className="container">
                <div className="inner-container">
                    <h2 className="section__title">WynnGames Center</h2>
                    <div className="row games-grid">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item" onClick={e=>FlowRouter.go('wynnRust')}>
                                <div className="games__img">
                                    <div className="games__platforms">
                                        <div className="platforms__item">
                                            <DevicePcIcon />
                                            <p>PC</p>
                                        </div>
                                        <div className="platforms__item">
                                            <DevicePsIcon />
                                            <p>PS 4</p>
                                        </div>
                                        <div className="platforms__item">
                                            <DevicePsIcon />
                                            <p>PS 5</p>
                                        </div>
                                    </div>
                                    <img src="./img/mainpage/rust-bg.png" alt="" />
                                    <a href={'/game-single/'} className="games__name">Rust</a>
                                </div>
                                <div className="games__info">
                                    <div className="item">
                                        <ServerIcon />
                                        <p>
                                            server online:
                                            <span>0</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>0</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div >


                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamesCenter