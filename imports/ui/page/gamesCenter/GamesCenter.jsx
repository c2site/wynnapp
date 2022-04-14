import React from "react";
import { DeviceAndroidIcon, DeviceIosIcon, DevicePcIcon, DevicePsIcon, RoketIcon, ServerIcon, UsersIcon } from "../../svg/icons";

const GamesCenter = () => {

    return (
        <div className="redesign-page secondary-page">
            <div className="container">
                <div className="inner-container">
                    <h2 className="section__title">WynnGames Center</h2>
                    <div className="row games-grid">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
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
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
                                <div className="games__img">
                                    <div className="games__platforms">
                                        <div className="platforms__item">
                                            <DeviceAndroidIcon />
                                            <p>android</p>
                                        </div>
                                        <div className="platforms__item">
                                            <DeviceIosIcon />
                                            <p>ios</p>
                                        </div>
                                    </div>
                                    <img src="./img/mainpage/tower-game-bg.png" alt="" />
                                    <a href={'/game-single/'} className="games__name">Tower of Misery</a>
                                </div>
                                <div className="games__info">
                                    <div className="item">
                                        <ServerIcon />
                                        <p>
                                            server online:
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
                                <div className="games__img">
                                    <img src="./img/mainpage/comming-game-bg.png" alt="" />
                                </div>
                                <div className="games__info">
                                    <div className="item">
                                        <RoketIcon />
                                        <p>
                                            Coming Soon
                                        </p>
                                    </div>
                                    {/* <div className="item">
                                            <StartIcon />
                                            <div className="countdown">
                                                <span className="days">13 days</span>
                                                <span className="hours">10 hours</span>
                                                <span className="minutes">15 minutes</span>
                                                <span className="seconds">48 seconds</span>
                                            </div>
                                        </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
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
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
                                <div className="games__img">
                                    <div className="games__platforms">
                                        <div className="platforms__item">
                                            <DeviceAndroidIcon />
                                            <p>android</p>
                                        </div>
                                        <div className="platforms__item">
                                            <DeviceIosIcon />
                                            <p>ios</p>
                                        </div>
                                    </div>
                                    <img src="./img/mainpage/tower-game-bg.png" alt="" />
                                    <a href={'/game-single/'} className="games__name">Tower of Misery</a>
                                </div>
                                <div className="games__info">
                                    <div className="item">
                                        <ServerIcon />
                                        <p>
                                            server online:
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
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
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
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
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
                                <div className="games__img">
                                    <div className="games__platforms">
                                        <div className="platforms__item">
                                            <DeviceAndroidIcon />
                                            <p>android</p>
                                        </div>
                                        <div className="platforms__item">
                                            <DeviceIosIcon />
                                            <p>ios</p>
                                        </div>
                                    </div>
                                    <img src="./img/mainpage/tower-game-bg.png" alt="" />
                                    <a href={'/game-single/'} className="games__name">Tower of Misery</a>
                                </div>
                                <div className="games__info">
                                    <div className="item">
                                        <ServerIcon />
                                        <p>
                                            server online:
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
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
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
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
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
                                <div className="games__img">
                                    <div className="games__platforms">
                                        <div className="platforms__item">
                                            <DeviceAndroidIcon />
                                            <p>android</p>
                                        </div>
                                        <div className="platforms__item">
                                            <DeviceIosIcon />
                                            <p>ios</p>
                                        </div>
                                    </div>
                                    <img src="./img/mainpage/tower-game-bg.png" alt="" />
                                    <a href={'/game-single/'} className="games__name">Tower of Misery</a>
                                </div>
                                <div className="games__info">
                                    <div className="item">
                                        <ServerIcon />
                                        <p>
                                            server online:
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
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
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
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
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
                                <div className="games__img">
                                    <div className="games__platforms">
                                        <div className="platforms__item">
                                            <DeviceAndroidIcon />
                                            <p>android</p>
                                        </div>
                                        <div className="platforms__item">
                                            <DeviceIosIcon />
                                            <p>ios</p>
                                        </div>
                                    </div>
                                    <img src="./img/mainpage/tower-game-bg.png" alt="" />
                                    <a href={'/game-single/'} className="games__name">Tower of Misery</a>
                                </div>
                                <div className="games__info">
                                    <div className="item">
                                        <ServerIcon />
                                        <p>
                                            server online:
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="games__item">
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
                                            <span>13</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users online:
                                            <span>17 550</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamesCenter