import React from 'react';
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { DeviceAndroidIcon, DeviceIosIcon, DevicePcIcon, DevicePsIcon, DiscordIcon, IconCheckFalse, IconCheckTrue, PlayIcon, RoketIcon, ServerIcon, SliderNextIcon, SliderPrevIcon, StartIcon, TelegramIcon, TwitterIcon, UsersIcon } from '../../svg/icons';
import ReactPlayer from 'react-player';

const HomePage = () => {
    const { t, i18n } = useTranslation();

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button
                className={className}
                style={{ ...style }}
                onClick={onClick}
            >
                <SliderPrevIcon />
            </button>
        );
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button
                className={className}
                style={{ ...style }}
                onClick={onClick}
            >
                <SliderNextIcon />
            </button>
        );
    }

    const sliderRoadmapSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const sliderPartnersSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const sliderTeamsSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        // variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="redesign-page home">
            <section className="banner">
                <div className="container">
                    <h2 className="banner__subtitle color-yellow">Games ecosystem</h2>
                    <h1 className="banner__title">Wynn Games</h1>
                    <div className="social">
                        <a href={"https://twitter.com/EcosystemWynn"} target={"_blank"} className="social__item">
                            <span className="icon" style={{
                                backgroundColor: "#1FC8FE"
                            }}>
                                <TwitterIcon />
                            </span>
                            <span className="text">Twitter</span>
                        </a>
                        <a href={"https://t.me/WynnGamesGroup"} target={"_blank"} className="social__item">
                            <span className="icon" style={{
                                backgroundColor: "#1BA8EC"
                            }}>
                                <TelegramIcon />
                            </span>
                            <span className="text">Telegram</span>
                        </a>
                        <a href={"https://discord.com/invite/JTmQBNUsJ8"} target={"_blank"} className="social__item">
                            <span className="icon" style={{
                                backgroundColor: "#404EED"
                            }}>
                                <DiscordIcon />
                            </span>
                            <span className="text">Discord</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="top-games">
                <div className="container">
                    <h2 className="section__title text-center mb-12 mb-100 mb-md-55">top games</h2>
                    {/*<p className="section__text text-center mb-100">*/}
                    {/*    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s*/}
                    {/*</p>*/}
                    <div className="top-games__wrapper">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-8 mx-lg-0 mx-md-auto col-sm-12">
                                <div className="top-games__item" onClick={e=>FlowRouter.go('wynnRust')}>
                                    <div className="top-games__img">
                                        <div className="top-games__platforms">
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
                                        <a href={'/game-single/'} className="top-games__name">Rust</a>
                                    </div>
                                    <div className="top-games__info">
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
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-8 mx-lg-0 mx-md-auto col-sm-12">
                                <div className="top-games__item">
                                    <div className="top-games__img">
                                        <img src="./img/mainpage/comming-game-bg.png" alt="" />
                                    </div>
                                    <div className="top-games__info">
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

                            <div className="col-xl-4 col-lg-6 col-md-8 mx-lg-0 mx-md-auto col-sm-12">
                                <div className="top-games__item">
                                    <div className="top-games__img">
                                        <img src="./img/mainpage/comming-game-bg.png" alt="" />
                                    </div>
                                    <div className="top-games__info">
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

                        </div>
                    </div>
                </div>
            </section>

            <section className="howItWorks">
                <div className="container">
                    <h2 className="section__title text-center mb-12 mb-100 mb-md-55">How it works?</h2>
                    {/*<p className="section__text text-center mb-100">*/}
                    {/*    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s*/}
                    {/*</p>*/}
                    <div className="howItWorks__wrapper">
                        <div className="row">

                            <div className="col-xl-4 col-lg-6 col-md-8 mx-md-auto col-sm-12">
                                <div className="howItWorks__item">
                                    <div className="img">
                                        <img src="./img/mainpage/how-works-1.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>Wynn SDK</h4>
                                        <p>
                                            Fast and simple integration system that allows synchronization of any application with blockchain technology in a few clicks.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-8 mx-md-auto col-sm-12">
                                <div className="howItWorks__item">
                                    <div className="img">
                                        <img src="./img/mainpage/how-works-2.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>Loyalty system</h4>
                                        <p>
                                            In-game loyalty system which provides players with special rewards for acquiring certain add-ons. It's possible to connect to all games at once.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-8 mx-md-auto col-sm-12">
                                <div className="howItWorks__item">
                                    <div className="img">
                                        <img src="./img/mainpage/how-works-3.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>NFT Skins</h4>
                                        <p>
                                            A system which allows users to exchange NFT between all the games and all the characters in the Wynn Games Ecosystem.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-8 mx-md-auto col-sm-12">
                                <div className="howItWorks__item">
                                    <div className="img">
                                        <img src="./img/mainpage/how-works-4.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>Games Currency exchange</h4>
                                        <p>
                                            Currency exchange system with transfer function from one game to another. Games are hosted exclusively at the Wynn Games Center.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-8 mx-md-auto col-sm-12">
                                <div className="howItWorks__item">
                                    <div className="img">
                                        <img src="./img/mainpage/how-works-5.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>Dev Panel </h4>
                                        <p>
                                            An easy and handy dev panel for developers to connect the required application to the Wynn Games Ecosystem and the Wynn Games Center.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-8 mx-md-auto col-sm-12">
                                <div className="howItWorks__item">
                                    <div className="img">
                                        <img src="./img/mainpage/how-works-6.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>Wynn Incubator</h4>
                                        <p>The Wynn Games Ecosystem offers developers support in making their visions come true.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="homeAbout">
                <img src="./img/mainpage/decoration.svg" alt="" className="decoration right" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                            <div className="homeAbout__content">
                                <h2 className="section__title mb-15">Wynn Games + Rust</h2>
                                <div className="section__text mb-50">
                                    <p>
                                        The first experimental game in our ecosystem was Rust. Using the Wynn SDK system, we synced it with Binance Smart Chain. Upon completion, the team conducted testing on the Wynn Rust server. We tested all the features of the Wynn Games ecosystem and made sure everything worked flawlessly. Rust is a project of Facepunch Studios. The main idea of the game is to survive at any cost. Events will take place in an extremely hostile environment where the whole world is turned against you.
                                    </p>
                                </div>
                                <div className="homeAbout__bottom">
                                    <div className="item">
                                        <ServerIcon />
                                        <p>
                                            server <br />online:
                                        </p>
                                        <span>0</span>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users <br />online:
                                        </p>
                                        <span>0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 center-vertical">
                            <div className="homeAbout__video ">
                                {/* <button className="btn-play">
                                    <PlayIcon />
                                </button> */}
                                <div className="video-box">
                                    <div className="img">
                                        <ReactPlayer
                                            url="https://www.youtube.com/embed/LGcECozNXEw"
                                            width="100%"
                                            height="438px"
                                            playing
                                            playIcon={
                                                <button className="btn-play">
                                                    <PlayIcon />
                                                </button>
                                            }
                                            light="./img/mainpage/rust-video-bg.jpg"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ecosystem">
                <div className="container">
                    <div className="ecosystem__wrapper">
                        <div className="row flex-column-reverse-lg">
                            <div className="col-xl-6 col-lg-12">
                                <div className="ecosystem__items">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="ecosystem__item">
                                                <div className="img">
                                                    <img src="./img/mainpage/ecosystem-img-1.png" alt="" />
                                                </div>
                                                <h4>Game center</h4>
                                                <p>
                                                    Acts as a reliable and safe platform where games of different categories are located. In Game Center, you can connect them to the Wynn SDK system. You can use the search engine to quickly find a game that interests you.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="ecosystem__item">
                                                <div className="img">
                                                    <img src="./img/mainpage/ecosystem-img-2.png" alt="" />
                                                </div>
                                                <h4>Market Place</h4>
                                                <p>
                                                    Here you can sell, buy and exchange different goods. A specialized marketplace for players to earn in-game items, currency and even their in-game experience.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="ecosystem__item">
                                                <div className="img">
                                                    <img src="./img/mainpage/ecosystem-img-3.png" alt="" />
                                                </div>
                                                <h4>Game Starter</h4>
                                                <p>
                                                    A place for game developers who want to join our Wynn SDK system. We will provide them with all the resources they need to achieve their goals.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="ecosystem__item">
                                                <div className="img">
                                                    <img src="./img/mainpage/ecosystem-img-4.png" alt="" />
                                                </div>
                                                <h4>Lottery</h4>
                                                <p>
                                                    An easy boost or the right resource won't hurt anyone. This is the reason why the Wynn Games Ecosystem created the single Lottery system. Do your best and Try your luck!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="ecosystem__content center-vertical">
                                    <h2 className="section__title mb-15">Ecosystem</h2>
                                    <div className="section__text">
                                        <p>
                                            The Wynn Games Ecosystem is the foundation on which the future will be built. The purpose of which is to introduce and attract new people from the gaming industry to the world of cryptocurrencies. In this way our ecosystem will unite these two components into one, which will allow you to do what you like, i.e. to play and earn money. You don't need to be a famous YouTube blogger or popular on Twitch to do this. Absolutely anyone can start earning, whether you are a beginner or a pro, famous or common person - it does not matter! Everything will depend on your skills and gaming goals. We are also considering offers from developers to add their games to our Game Center and connect them to the Wynn SDK. Thereby strengthening our foundation. Our ecosystem currently includes the following components: Game Center, Game Starter, Market Place, and Lottery. You can find all this on our official website. The Wynn Games team is not going to stop, there's still a lot of work ahead.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* sliderRoadmapSettings */}
            <section className="roadmapSection">
                <img src="./img/mainpage/decoration.svg" alt="" className="decoration left" />
                <div className="container">
                    <h2 className="section__title text-center mb-12">{t('info.roadmap.title')}</h2>
                    <div className="info-check mb-100">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            {t('info.roadmap.complete')}
                        </span>
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0015 6.59305C14.2439 5.63875 19.2494 5.00206 19.2494 5.00206C19.2494 5.00206 18.6127 10.0075 17.6584 12.2499C16.1151 15.8764 10.057 18.4371 10.057 18.4371L5.81434 14.1944C5.81434 14.1944 8.37507 8.13635 12.0015 6.59305Z" stroke="#F6C465" stroke-width="1.5" />
                                <path d="M10.0558 18.4371L13.5913 21.9726L15.3591 15.2551" stroke="#F6C465" stroke-width="1.5" />
                                <path d="M5.81438 14.1944L2.27884 10.6589L8.99636 8.89113" stroke="#F6C465" stroke-width="1.5" />
                                <path d="M5.27382 16.1793C6.05756 15.7656 7.00191 15.382 7.00191 15.382L8.86351 17.2436C8.86351 17.2436 8.42713 18.1657 8.06618 18.9717C7.70524 19.7777 4.75372 19.4978 4.75372 19.4978C4.75372 19.4978 4.49009 16.593 5.27382 16.1793Z" stroke="#F6C465" stroke-width="1.5" />
                                <path d="M12.1777 6.41626C12.1777 6.41626 12.5313 8.18403 14.2991 9.95179C16.0668 11.7196 17.8346 12.0731 17.8346 12.0731" stroke="#F6C465" stroke-width="1.5" />
                            </svg>
                            {t('info.roadmap.underway')}
                        </span>
                        <span>
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848" stroke-width="1.5" />
                                <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {t('info.roadmap.planning')}
                        </span>
                    </div>
                    <div className="roadmapSection__wrapper">
                        <div className="slider row">
                            <Slider {...sliderRoadmapSettings}>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="item roadmap__item">
                                        <div className="head">
                                            <span>STAGE 1 (2021 2/2) </span>
                                        </div>
                                        <div className="body">
                                            <div className="box">
                                                <IconCheckTrue />
                                                <span>Formation of a development team</span>
                                            </div>
                                            <div className="box">
                                                <IconCheckTrue />
                                                <span>Creation of the Wynn Games test platform</span>
                                            </div>
                                            <div className="box">
                                                <IconCheckTrue />
                                                <span>Launch of blockchain test network</span>
                                            </div>
                                            <div className="box">
                                                <IconCheckTrue />
                                                <span>Start beta testing</span>
                                            </div>
                                            <div className="box">
                                                <IconCheckTrue />
                                                <span>Successful bugfix test</span>
                                            </div>
                                            <div className="box">
                                                <IconCheckTrue />
                                                <span>Launch of the main blockchain on the BSC Chain</span>
                                            </div>
                                            <div className="box">
                                                <IconCheckTrue />
                                                <span>Start advertising campaign</span>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="roadmap__item">
                                        <div className="item">
                                            <div className="head">
                                                <span>STAGE 2 (2022 1/2)</span>
                                            </div>
                                            <div className="body">
                                                <div className="box">
                                                    <IconCheckTrue />
                                                    <span>Minting a Wynn fan token</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckTrue />
                                                    <span>Getting ready to start Wynn SDK development</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckTrue />
                                                    <span>Start of pre-sale</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckTrue />
                                                    <span>Start of Game Center development</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Official testing of Wynn SDK system</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Coingecko listing</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>CoinMarketCap listing</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckTrue />
                                                    <span>Increase the number of the development staff</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckTrue />
                                                    <span>Creation of “Wynn Rust” server</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckTrue />
                                                    <span>Launch of alpha testing for the “Wynn Rust” server</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Move "Wynn Rust" to beta testing</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Official launch of Wynn Games SDK system</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="roadmap__item">
                                        <div className="item">
                                            <div className="head">
                                                <span>STAGE 2 (2022 2/2)</span>
                                            </div>
                                            <div className="body">
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Release of the “Wynn Rust” server</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Token listing on crypto exchanges</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Test stage of Wynn Games Center </span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Wynn Games NFT MARKET PLACE development</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Game Starter system preparing</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Implementation of Wynn as a native payment method</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Advertising campaign</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Start of development Games Starter system</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Test stage of Games Starter system</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Test stage of NFT MARKET PLACE</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Launch of alpha testing for the “Wynn FUTURES”</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Start of “Wynn FUTURES” beta testing</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="roadmap__item">
                                        <div className="item">
                                            <div className="head">
                                                <span>STAGE 3 (2023 1/2)</span>
                                            </div>
                                            <div className="body">
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Official release of Wynn Games NFT MARKET PLACE </span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Official release of Games Starter system </span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Game Starter listing campaign </span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Launch of the “Wynn FUTURES” </span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Official release of Wynn Games Center  </span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Adding new trading pairs to "Wynn FUTURES" </span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Update lottery algorithm </span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Add new types of lotteries </span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Beta testing of "4 out of 20" lottery </span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Establishment of the Wynn Games Education Academy </span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Launch of the Wynn Games Education Academy video courses </span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="roadmap__item">
                                        <div className="item">
                                            <div className="head">
                                                <span>STAGE 3 (2023 2/2)</span>
                                            </div>
                                            <div className="body">
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Development of Wynn Incubator</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Release of a mobile application for Android</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Alpha testing of a mobile application for iOS</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Test stage of Wynn Incubator system</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Release of a mobile application for iOS</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Beta testing of "6 out of 45" lottery</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Add the ability to buy tickets using fiat</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Official release of Wynn Incubator service</span>
                                                </div>
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>Alpha testing of plugins for popular internet browsers</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="roadmap__item">
                                        <div className="item">
                                            <div className="head">
                                                <span>STAGE 4 (2024 1/2 & 2/2)</span>
                                            </div>
                                            <div className="body">
                                                <div className="box">
                                                    <IconCheckFalse />
                                                    <span>TBA</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            {/* sliderTeamsSettings */}
            <section className="teamSection">
                <div className="container">
                    <h2 className="section__title text-center mb-100">team</h2>
                    <div className="teamSection__wrapper">
                        <div className="slider row">
                            <Slider {...sliderTeamsSettings}>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="item">
                                        <div className="team-item__wrapper">
                                            <div className="img">
                                                <img src="./img/max.svg" alt="" />
                                            </div>
                                            <div className="team-item__content">
                                                <span className="name">Maksim S</span>
                                                <p className="position">Founder</p>
                                                <div className="social-items">
                                                    <a href="https://twitter.com/MSakovec" target={'_blank'} className="social-items__item">
                                                        <TwitterIcon />
                                                    </a>
                                                    <a href={'https://t.me/MaksimWYNN'} target={'_blank'} className="social-items__item">
                                                        <TelegramIcon />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="item">
                                        <div className="team-item__wrapper">
                                            <div className="img">
                                                <img src="./img/andrey.svg" alt="" />
                                            </div>
                                            <div className="team-item__content">
                                                <span className="name">Andrew P</span>
                                                <p className="position">Block-Chain Developer</p>
                                                <div className="social-items">
                                                    <a href={'https://twitter.com/pirsdev'} target={'_blank'} className="social-items__item">
                                                        <TwitterIcon />
                                                    </a>
                                                    <a href={'https://t.me/pirsdev'} className="social-items__item">
                                                        <TelegramIcon />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="item">
                                        <div className="team-item__wrapper">
                                            <div className="img">
                                                <img src="./img/yevhenii.svg" alt="" />
                                            </div>
                                            <div className="team-item__content">
                                                <span className="name">Yevhenii Y</span>
                                                <p className="position">Chief designer</p>
                                                <div className="social-items">
                                                    <a href={'https://t.me/revenson'} target={'_blank'} className="social-items__item">
                                                        <TelegramIcon />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="item">
                                        <div className="team-item__wrapper">
                                            <div className="img">
                                                <img src="./img/roma-m.svg" alt="" />
                                            </div>
                                            <div className="team-item__content">
                                                <span className="name">Roman B</span>
                                                <p className="position">Author & Writer</p>
                                                <div className="social-items">
                                                    <a href={'https://twitter.com/romochka_buchik'} target={'_blank'} className="social-items__item">
                                                        <TwitterIcon />
                                                    </a>
                                                    <a href={'https://t.me/Wynn_Author'} target={'_blank'} className="social-items__item">
                                                        <TelegramIcon />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="item">
                                        <div className="team-item__wrapper">
                                            <div className="img">
                                                <img src="./img/roman.svg" alt="" />
                                            </div>
                                            <div className="team-item__content">
                                                <span className="name">Roman V</span>
                                                <p className="position">Marketing Strategy & Community mng.</p>
                                                <div className="social-items">
                                                    <a href={'https://twitter.com/mrfFates'} target={'_blank'} className="social-items__item">
                                                        <TwitterIcon />
                                                    </a>
                                                    <a href={'https://t.me/mFateS'} target={'_blank'} className="social-items__item">
                                                        <TelegramIcon />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="item">
                                        <div className="team-item__wrapper">
                                            <div className="img">
                                                <img src="./img/vitaly.svg" alt="" />
                                            </div>
                                            <div className="team-item__content">
                                                <span className="name">Vitaliy K</span>
                                                <p className="position">Project manager</p>
                                                <div className="social-items">
                                                    <a href={'https://twitter.com/KurilovVitaly/'} target={'_blank'} className="social-items__item">
                                                        <TwitterIcon />
                                                    </a>
                                                    <a href={'https://t.me/userZXC'} target={'_blank'} className="social-items__item">
                                                        <TelegramIcon />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="item">
                                        <div className="team-item__wrapper">
                                            <div className="img">
                                                <img src="./img/vasile.svg" alt="" />
                                            </div>
                                            <div className="team-item__content">
                                                <span className="name">Vasile D</span>
                                                <p className="position">Team Representative (I.M) </p>
                                                <div className="social-items">
                                                    <a href={'https://twitter.com/vasiledorofeev'} target={'_blank'} className="social-items__item">
                                                        <TwitterIcon />
                                                    </a>
                                                    <a href={'https://t.me/vasiled13'} target={'_blank'} className="social-items__item">
                                                        <TelegramIcon />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="item">
                                        <div className="team-item__wrapper">
                                            <div className="img">
                                                <img src="./img/Timurz.svg" alt="" />
                                            </div>
                                            <div className="team-item__content">
                                                <span className="name">Timur Z</span>
                                                <p className="position">Game Designer</p>
                                                <div className="social-items">
                                                    <a href={'https://t.me/Mooti_s'} target={'_blank'} className="social-items__item">
                                                        <TelegramIcon />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partners">
                <div className="container">
                    <h2 className="section__title text-center mb-100">Partners</h2>
                    <div className="slider partners__wrapper">
                        <Slider {...sliderPartnersSettings}>

                            <div className="partners__col">
                                <a href={'https://kondr.io/'} target={'_blank'} className="partners__item">
                                    <img src="./img/mainpage/partner-img-1.svg" alt="" />
                                </a>
                            </div>

                            <div className="partners__col">
                                <a className="partners__item">
                                    <svg width="282" height="41" viewBox="0 0 282 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3" clip-path="url(#clip0_2424_977)">
                                            <path d="M0.236328 39.423H2.48719V0H0.236328V39.423Z" fill="#2BE2B3" />
                                            <path d="M37.1504 39.423H39.4012V0H37.1504V39.423Z" fill="#2BE2B3" />
                                            <path d="M34.8991 39.4232H32.5732V20.9937H1.36133V18.5098H34.8991V39.4232Z" fill="#2BE2B3" />
                                            <path d="M30.3976 39.4222H28.1467V25.8004H1.88672V23.3164H30.3976V39.4222Z" fill="#2BE2B3" />
                                            <path d="M25.9711 39.4226H23.7202V31.0894H1.96191V28.6855H25.9711V39.4226Z" fill="#2BE2B3" />
                                            <path d="M14.1914 39.4238H16.4423V29.8887H14.1914V39.4238Z" fill="#2BE2B3" />
                                            <path d="M9.16504 39.4235H11.4159V30.4492H9.16504V39.4235Z" fill="#2BE2B3" />
                                            <path d="M4.73828 39.4238H6.98914V29.8887H4.73828V39.4238Z" fill="#2BE2B3" />
                                            <path d="M4.73828 0V20.9134H38.2761V18.4295H6.98914V0H4.73828Z" fill="#2BE2B3" />
                                            <path d="M9.76465 0V16.1057H38.2755V13.6218H12.0155V0H9.76465Z" fill="#2BE2B3" />
                                            <path d="M37.6752 10.7372H13.666V0H15.9919V8.33335H37.7502L37.6752 10.7372Z" fill="#2BE2B3" />
                                            <path d="M23.1201 9.53528H25.371V0H23.1201V9.53528Z" fill="#2BE2B3" />
                                            <path d="M28.1475 8.97432H30.3983V0H28.1475V8.97432Z" fill="#2BE2B3" />
                                            <path d="M32.6484 9.53528H34.8993V0H32.6484V9.53528Z" fill="#2BE2B3" />
                                            <path d="M99.6488 0.400641H94.0967V40.0641H135.888V28.6859H105.651V11.3782H135.888V0H99.6488V0.400641Z" fill="#2BE2B3" />
                                            <path d="M269.514 0.400391V17.2273L254.134 0.400391H243.479V40.0638H254.659V22.1952L270.04 40.0638H281.219V0.400391H269.514Z" fill="#2BE2B3" />
                                            <path d="M175.203 0.400421V13.7818H157.047V0.400421H145.492V40.0639H157.572V26.2017H175.654V40.0639H187.733V25.6408H176.554L187.733 13.7017V0.320312H175.203V0.400421Z" fill="#2BE2B3" />
                                            <path d="M83.4431 0.400391H49.5302H48.1797V40.0638H58.8337V31.6504H74.2146V40.0638H84.8687V0.400391H83.4431ZM74.5897 19.7113H59.2089V11.7786H74.5897V19.7113Z" fill="#2BE2B3" />
                                            <path d="M200.038 0.400611H196.812V40.0641H199.588H233.501V28.6859H207.09V25.7211H233.501V14.423H207.09V11.4583H233.501V0.0800781H200.038V0.400611Z" fill="#2BE2B3" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2424_977">
                                                <rect width="280.907" height="40.0641" fill="white" transform="translate(0.236328)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>

                            <div className="partners__col">
                                <a className="partners__item">
                                    <svg width="150" height="54" viewBox="0 0 180 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3" clip-path="url(#clip0_2424_1035)">
                                            <path d="M0.67339 0.264619C0.264299 0.480908 0.240234 2.01896 0.240234 26.8681C0.240234 47.079 0.312427 53.3274 0.529004 53.5436C0.745582 53.7599 6.9782 53.832 27.0959 53.832H53.398L53.759 53.3033C54.0959 52.8227 54.144 49.9148 54.144 26.9161C54.144 3.91749 54.0959 1.00961 53.759 0.528972L53.398 0.00026679H27.2402C9.91403 0.0242988 0.938095 0.0963949 0.67339 0.264619ZM35.8552 18.4809C35.9996 18.7933 36.0959 21.8935 36.0959 26.9161C36.0959 31.9388 35.9996 35.039 35.8552 35.3514C35.6146 35.784 35.2536 35.808 27.0718 35.808C18.89 35.808 18.529 35.784 18.2884 35.3514C18.144 35.039 18.0477 31.9388 18.0477 26.8921C18.0477 19.8027 18.0959 18.8654 18.4568 18.4569C18.8178 18.0483 19.4194 18.0243 27.2162 18.0243C35.2536 18.0243 35.6146 18.0483 35.8552 18.4809Z" fill="white" />
                                            <path d="M63.4569 0.432843C63.0719 0.841388 63.0479 3.0283 63.0479 26.9882C63.0479 50.3954 63.096 53.1111 63.4329 53.4475C63.7457 53.784 64.8767 53.832 72.0719 53.832H80.35L80.711 53.3033C81.0479 52.8467 81.096 51.573 81.096 44.2913V35.808H89.711C96.088 35.808 98.3981 35.7359 98.6147 35.5196C99.0238 35.1111 99.0238 18.7212 98.6147 18.3127C98.3981 18.0964 96.088 18.0243 89.711 18.0243H81.096V9.54099C81.096 2.25928 81.0479 0.98558 80.711 0.528972L80.35 0.00026679H72.096C64.4195 0.00026679 63.8179 0.0242988 63.4569 0.432843Z" fill="white" />
                                            <path d="M99.2883 0.528109C98.9514 0.984717 98.9033 2.21035 98.9033 9.05948C98.9033 16.7497 98.9274 17.0862 99.3846 17.5428C99.8418 17.9994 100.179 18.0234 107.879 18.0234C114.738 18.0234 115.965 17.9754 116.422 17.6389L116.951 17.2784V9.03545C116.951 1.36923 116.927 0.768429 116.518 0.407948C116.109 0.0474677 115.171 -0.000596367 107.855 -0.000596367H99.6493L99.2883 0.528109Z" fill="white" />
                                            <path d="M126.24 0.528109C125.904 0.984717 125.855 2.21035 125.855 9.05948C125.855 16.7497 125.88 17.0862 126.337 17.5428C126.794 17.9994 127.131 18.0234 134.831 18.0234C141.69 18.0234 142.917 17.9754 143.374 17.6389L143.904 17.2784V9.01142C143.904 1.82584 143.856 0.696333 143.519 0.383916C143.206 0.0474677 142.075 -0.000596367 134.88 -0.000596367H126.601L126.24 0.528109Z" fill="white" />
                                            <path d="M162.384 0.263756C161.975 0.480045 161.951 1.15294 161.951 8.89126C161.951 16.197 161.999 17.3265 162.336 17.6389C162.649 17.9754 163.756 18.0234 170.759 18.0234C175.86 18.0234 178.989 17.9273 179.301 17.7831C179.735 17.5428 179.759 17.1823 179.759 9.05948C179.759 2.78712 179.686 0.504077 179.47 0.287788C179.085 -0.0967245 163.01 -0.120757 162.384 0.263756Z" fill="white" />
                                            <path d="M144.144 18.4815C144 18.7939 143.903 21.894 143.903 26.9167C143.903 31.9394 144 35.0396 144.144 35.352C144.385 35.7846 144.746 35.8086 152.927 35.8086C161.109 35.8086 161.47 35.7846 161.711 35.352C161.855 35.0396 161.951 31.9154 161.951 26.8206C161.951 19.8273 161.903 18.7218 161.566 18.4094C161.254 18.0729 160.123 18.0249 152.807 18.0249C144.746 18.0249 144.385 18.0489 144.144 18.4815Z" fill="white" />
                                            <path d="M99.3846 36.2886C98.9274 36.7453 98.9033 37.0817 98.9033 44.772C98.9033 51.6211 98.9514 52.8467 99.2883 53.3033L99.6493 53.832H107.927C115.123 53.832 116.254 53.784 116.566 53.4475C116.903 53.1351 116.951 52.0056 116.951 44.82V36.553L116.422 36.1925C115.965 35.8561 114.738 35.808 107.879 35.808C100.179 35.808 99.8418 35.832 99.3846 36.2886Z" fill="white" />
                                            <path d="M126.337 36.2886C125.88 36.7453 125.855 37.0817 125.855 44.772C125.855 51.6211 125.904 52.8467 126.24 53.3033L126.601 53.832H134.88C142.075 53.832 143.206 53.784 143.519 53.4475C143.856 53.1351 143.904 52.0056 143.904 44.82V36.553L143.374 36.1925C142.917 35.8561 141.69 35.808 134.831 35.808C127.131 35.808 126.794 35.832 126.337 36.2886Z" fill="white" />
                                            <path d="M162.481 36.1925L161.951 36.5529V44.9401C161.951 52.9909 161.975 53.3513 162.408 53.5917C163.106 53.9521 179.085 53.9281 179.47 53.5436C179.686 53.3273 179.759 51.0443 179.759 44.7719C179.759 36.6491 179.735 36.2886 179.301 36.0483C178.989 35.9041 175.908 35.808 170.927 35.808C164.165 35.808 162.938 35.856 162.481 36.1925Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2424_1035">
                                                <rect width="180" height="53.8318" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>

                            <div className="partners__col">
                                <a className="partners__item">
                                    <svg width="250" height="53" viewBox="0 0 350 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3" clip-path="url(#clip0_2425_1046)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M64.7007 13.4336V28.398H49.9345V15.3586C49.9345 14.2954 49.072 13.4336 48.0083 13.4336H43.0244V49.094C43.0244 50.1575 43.8865 51.0195 44.9506 51.0195H49.9345V34.4331H64.7007V49.094C64.7007 50.1575 65.5627 51.0195 66.6269 51.0195H71.6105V15.3586C71.6105 14.2954 70.7482 13.4336 69.6841 13.4336H64.7007Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M93.686 22.2949V40.1059C93.686 41.7243 92.8603 43.2585 91.4584 44.0681C87.5456 46.328 83.4964 43.505 83.4964 39.783V24.22C83.4964 23.1568 82.6341 22.2949 81.5702 22.2949H76.5664V40.4175C76.5664 46.2489 81.3393 51.0197 87.1731 51.0197H90.0093C95.8433 51.0197 100.616 46.2489 100.616 40.4175V24.22C100.616 23.1568 99.7539 22.2949 98.6902 22.2949H93.686Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M170.547 51.0209H175.531V25.7986C175.531 24.7349 174.668 23.873 173.605 23.873H168.621V49.0954C168.621 50.1591 169.483 51.0209 170.547 51.0209Z" fill="#2483FF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M172.076 21.1389C174.206 21.1389 175.932 19.413 175.932 17.2841C175.932 15.1552 174.206 13.4297 172.076 13.4297C169.946 13.4297 168.22 15.1552 168.22 17.2841C168.22 19.413 169.946 21.1389 172.076 21.1389Z" fill="#2483FF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M124.934 39.0935C124.934 42.5202 122.129 44.8012 118.701 44.8012C115.273 44.8012 112.468 42.5202 112.468 39.0935V34.2036C112.468 30.7767 115.273 28.4957 118.701 28.4957C122.129 28.4957 124.934 30.7767 124.934 34.2036V39.0935ZM118.701 22.2773C111.453 22.2773 105.522 27.4599 105.522 34.7046V38.6232C105.522 45.8679 111.453 51.0197 118.701 51.0197C125.949 51.0197 131.88 45.8679 131.88 38.6232V34.7046C131.88 27.4599 125.949 22.2773 118.701 22.2773Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M156.299 39.0944C156.299 42.5213 153.494 44.8023 150.065 44.8023C146.638 44.8023 143.832 42.5213 143.832 39.0944V34.2047C143.832 30.7778 146.638 28.4968 150.065 28.4968C153.494 28.4968 156.299 30.7778 156.299 34.2047V39.0944ZM150.065 22.2784C147.8 22.2784 145.664 22.7847 143.797 23.702V15.3278C143.797 14.2642 142.934 13.4023 141.871 13.4023H136.887V38.6243C136.887 45.8693 142.817 51.0208 150.065 51.0208C157.314 51.0208 163.244 45.8693 163.244 38.6243V34.7057C163.244 27.461 157.314 22.2784 150.065 22.2784Z" fill="#2483FF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M294.084 39.2126C294.084 42.6038 291.308 44.8615 287.916 44.8615C284.521 44.8615 281.745 42.6038 281.745 39.2126V34.3728C281.745 30.9816 284.521 28.7241 287.916 28.7241C291.308 28.7241 294.084 30.9816 294.084 34.3728V39.2126ZM287.916 22.5697C285.674 22.5697 283.557 23.0703 281.711 23.9778V15.333C281.711 14.2808 280.858 13.4277 279.803 13.4277H274.872V38.7473C274.872 45.9175 280.741 51.0157 287.916 51.0157C295.088 51.0157 300.957 45.9175 300.957 38.7473V34.8685C300.957 27.6985 295.088 22.5697 287.916 22.5697Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M349.456 50.887V46.5501C349.456 45.5234 348.624 44.6923 347.598 44.6959C346.557 44.6995 345.253 44.7028 344.153 44.7028C341.346 44.7028 341.475 43.2999 341.475 39.6628V15.3137C341.475 14.2892 340.646 13.459 339.622 13.459H334.562V40.4942C334.562 47.0413 336.252 50.887 343.321 50.887C346.054 50.887 348.034 50.8096 349.456 50.8875V50.887Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M217.018 28.5564H203.647V32.1981C203.647 33.2929 204.535 34.1804 205.63 34.1804H211.981V37.4002C211.981 39.7756 211.388 41.5287 210.161 42.7643C208.656 44.3182 206.572 45.1392 204.137 45.1392C201.943 45.1392 199.854 44.3798 198.55 43.1083C196.738 41.3331 196.348 39.4055 196.348 32.2501C196.348 25.1355 196.738 23.2166 198.549 21.4432C199.886 20.1392 202.494 19.1526 204.655 19.1526C211.965 19.1526 214.42 21.7456 216.251 24.1066H216.491V18.8269C216.491 18.0464 216.118 17.3168 215.508 16.8294C212.446 14.3796 209.394 13.4844 204.137 13.4844C199.892 13.4844 196.261 14.8178 193.349 17.4473C189.326 21.078 189.326 25.1746 189.327 31.9613V32.5388C189.326 39.3254 189.326 43.4216 193.349 47.0523C196.221 49.6458 199.952 51.0161 204.137 51.0161C208.533 51.0161 212.402 49.5373 215.326 46.7399L215.327 46.7389C217.937 44.2338 219.001 39.4364 219.001 34.4479V30.5382C219.001 29.4439 218.114 28.5564 217.018 28.5564Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M238.807 50.887V46.5501C238.807 45.5234 237.975 44.6923 236.948 44.6959C235.909 44.6995 234.605 44.7028 233.503 44.7028C230.696 44.7028 230.827 43.2999 230.827 39.6628V15.3137C230.827 14.2892 229.997 13.459 228.972 13.459H223.913V40.4942C223.913 47.0413 225.601 50.887 232.672 50.887C235.404 50.887 237.385 50.8096 238.806 50.8875L238.807 50.887Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M263.006 39.2131C263.006 42.6043 260.23 44.862 256.837 44.862C253.445 44.862 250.669 42.6043 250.669 39.2131V34.3735C250.669 30.9824 253.445 28.7246 256.837 28.7246C260.23 28.7246 263.006 30.9824 263.006 34.3735V39.2131ZM256.837 22.5703C249.665 22.5703 243.794 27.6993 243.794 34.8693V38.7478C243.794 45.9183 249.665 51.0163 256.837 51.0163C264.012 51.0163 269.881 45.9183 269.881 38.7478V34.8693C269.881 27.6993 264.012 22.5703 256.837 22.5703Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M322.777 38.1394V45.277C322.245 45.3801 321.655 45.4623 321.017 45.5208C319.452 45.668 318.05 45.6948 316.422 45.5467C315.784 45.4892 315.194 45.3266 314.672 45.0672C314.166 44.8155 313.751 44.4576 313.408 43.9724C313.082 43.5128 312.917 42.8337 312.917 41.9544C312.917 40.5844 313.404 39.6034 314.411 38.9542C315.482 38.2629 317.103 37.9119 319.234 37.9119C319.807 37.9119 320.507 37.9447 321.334 38.0102C321.873 38.0533 322.357 38.0965 322.777 38.1394ZM326.476 24.9871C324.426 23.3508 321.43 22.5215 317.568 22.5215C316.134 22.5215 314.624 22.6261 313.082 22.8318C311.848 22.9966 310.098 23.2326 308.885 23.5121C308.393 23.6255 308.302 24.0119 308.302 24.4745V28.1642C308.302 28.8217 308.31 29.4198 309.007 29.2501C310.306 28.9337 312.826 28.3756 313.512 28.2627C314.593 28.0846 315.772 27.9949 317.014 27.9949C318.949 27.9949 320.423 28.3408 321.396 29.0207C322.312 29.6615 322.777 30.8812 322.777 32.6454V32.8589C322.432 32.8273 322.055 32.7969 321.643 32.7693C320.871 32.7173 319.884 32.6909 318.678 32.6909C317.033 32.6909 315.439 32.8774 313.943 33.2451C312.423 33.6196 311.057 34.1981 309.882 34.9659C308.686 35.7491 307.727 36.7427 307.032 37.9224C306.329 39.1103 305.975 40.5017 305.975 42.0558C305.975 43.6344 306.279 45.0087 306.878 46.1395C307.482 47.2806 308.353 48.2321 309.463 48.9664C310.553 49.6915 311.893 50.2216 313.442 50.5443C314.948 50.8571 316.654 51.0158 318.512 51.0158C319.864 51.0158 329.607 50.8787 329.607 46.2443C329.607 40.8739 329.607 32.847 329.607 32.847C329.607 29.2918 328.554 26.6474 326.476 24.9871Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3342 16.0434C22.3342 8.5587 18.6864 2.12226 15.9119 0.0262982C15.9005 0.0197058 15.6996 -0.093245 15.7167 0.206053L15.7127 0.215282C15.4823 14.6664 8.09629 18.5832 4.03569 23.8594C-5.33518 36.0351 3.37966 49.3845 12.2541 51.8518C17.2196 53.2324 11.1073 49.4092 10.3203 41.3338C9.36835 31.5734 22.3342 24.1232 22.3342 16.0434Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5916 20.9632C26.5348 20.9245 26.4538 20.8982 26.3982 20.9905C26.2454 22.8096 24.3864 26.7009 22.0301 30.274C14.0381 42.3941 18.5925 48.2367 21.1533 51.3747C22.6404 53.1963 21.1533 51.3747 24.8701 49.513C25.1612 49.3672 32.1221 45.4652 32.8758 36.5752C33.6055 27.9661 28.4325 22.5397 26.5916 20.9632Z" fill="#2483FF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2425_1046">
                                                <rect width="350" height="52.7397" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>

                            <div className="partners__col">
                                <a className="partners__item">
                                    <svg width="250" height="55" viewBox="0 0 350 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3" clip-path="url(#clip0_2425_1076)">
                                            <path d="M67.4901 41.8296C66.6762 41.8296 66.1008 41.661 65.7639 41.3244C65.4552 40.9875 65.3008 40.4542 65.3008 39.7244V15.3473C65.3008 14.6173 65.4691 14.0839 65.806 13.7473C66.1429 13.3823 66.7041 13.1998 67.4901 13.1998H77.8051C81.7347 13.1998 84.6256 14.0279 86.4784 15.6839C88.3308 17.3399 89.2571 19.8099 89.2571 23.0938C89.2571 26.3498 88.3308 28.8058 86.4784 30.4618C84.6538 32.0899 81.7628 32.9039 77.8051 32.9039H73.8054V39.7244C73.8054 40.4542 73.6371 40.9875 73.3002 41.3244C72.9634 41.661 72.3879 41.8296 71.574 41.8296H67.4901V41.8296ZM77.1317 26.799C78.2825 26.799 79.1666 26.4902 79.7841 25.8727C80.4295 25.2552 80.7524 24.329 80.7524 23.094C80.7524 21.8309 80.4295 20.8905 79.7841 20.273C79.1666 19.6555 78.2825 19.3468 77.1317 19.3468H73.8054V26.799H77.1317ZM99.2 42.461C96.5617 42.461 94.4426 41.6189 92.8426 39.935C91.2707 38.2227 90.4849 35.823 90.4849 32.7353C90.4849 30.3777 91.0183 28.3145 92.0847 26.5462C93.1795 24.7779 94.7092 23.4167 96.674 22.4623C98.6669 21.4801 100.954 20.9889 103.537 20.9889C105.67 20.9889 107.551 21.2274 109.178 21.7047C110.834 22.1536 112.35 22.8132 113.725 23.6834V40.5244C113.725 41.0577 113.627 41.4085 113.431 41.5768C113.234 41.7454 112.841 41.8296 112.252 41.8296H107.957C107.649 41.8296 107.41 41.7875 107.242 41.7031C107.073 41.591 106.933 41.4225 106.821 41.1979L106.273 39.935C105.459 40.805 104.477 41.4367 103.326 41.8296C102.204 42.2506 100.828 42.461 99.2 42.461V42.461ZM102.358 36.735C103.452 36.735 104.308 36.4684 104.926 35.9353C105.543 35.402 105.852 34.644 105.852 33.6615V27.0938C105.319 26.841 104.645 26.7148 103.831 26.7148C102.344 26.7148 101.151 27.2339 100.253 28.2725C99.3825 29.311 98.9475 30.7705 98.9475 32.6511C98.9475 35.3738 100.084 36.735 102.358 36.735V36.735ZM119.585 41.8296C118.77 41.8296 118.195 41.661 117.858 41.3244C117.522 40.9875 117.353 40.4542 117.353 39.7244V22.9255C117.353 22.4203 117.437 22.0834 117.606 21.9151C117.802 21.7184 118.195 21.6203 118.785 21.6203H123.121C123.458 21.6203 123.711 21.6766 123.879 21.7889C124.075 21.873 124.188 22.0413 124.216 22.294L124.426 23.5572C125.212 22.7711 126.237 22.1536 127.5 21.7047C128.791 21.2274 130.222 20.9889 131.794 20.9889C134.068 20.9889 135.906 21.6345 137.31 22.9255C138.713 24.1886 139.415 26.0692 139.415 28.5673V39.7244C139.415 40.4542 139.246 40.9875 138.91 41.3244C138.601 41.661 138.039 41.8296 137.225 41.8296H133.141C132.328 41.8296 131.738 41.661 131.373 41.3244C131.036 40.9875 130.868 40.4542 130.868 39.7244V29.1145C130.868 28.2725 130.685 27.6692 130.321 27.3042C129.956 26.9394 129.38 26.7569 128.594 26.7569C127.752 26.7569 127.079 26.9815 126.573 27.4304C126.096 27.8796 125.858 28.4971 125.858 29.2831V39.7244C125.858 40.4542 125.689 40.9875 125.353 41.3244C125.044 41.661 124.482 41.8296 123.669 41.8296H119.585V41.8296ZM154.297 42.461C150.367 42.461 147.336 41.5487 145.202 39.7244C143.069 37.9001 142.003 35.2476 142.003 31.767C142.003 29.6339 142.494 27.7533 143.476 26.1255C144.459 24.4973 145.876 23.2342 147.729 22.3361C149.609 21.438 151.827 20.9889 154.381 20.9889C156.317 20.9889 157.946 21.1714 159.265 21.5361C160.612 21.9011 161.805 22.4623 162.843 23.2203C163.152 23.417 163.307 23.6695 163.307 23.9782C163.307 24.2028 163.194 24.4973 162.97 24.8624L161.243 27.8514C161.047 28.2446 160.808 28.441 160.528 28.441C160.359 28.441 160.093 28.3287 159.728 28.1042C158.97 27.6271 158.254 27.2763 157.581 27.0517C156.935 26.8271 156.121 26.7148 155.139 26.7148C153.735 26.7148 152.599 27.164 151.728 28.0621C150.886 28.9602 150.465 30.1951 150.465 31.767C150.465 33.367 150.9 34.602 151.77 35.4719C152.641 36.314 153.834 36.735 155.349 36.735C156.247 36.735 157.061 36.6088 157.791 36.3561C158.521 36.1036 159.265 35.7528 160.023 35.3036C160.416 35.079 160.696 34.9667 160.865 34.9667C161.117 34.9667 161.342 35.1632 161.538 35.5563L163.433 38.7981C163.573 39.0787 163.643 39.3033 163.643 39.4716C163.643 39.7244 163.475 39.9629 163.138 40.1875C161.959 40.9454 160.668 41.5066 159.265 41.8716C157.889 42.2645 156.233 42.461 154.297 42.461V42.461ZM174.318 42.461C171.68 42.461 169.561 41.6189 167.961 39.935C166.389 38.2227 165.603 35.823 165.603 32.7353C165.603 30.3777 166.136 28.3145 167.203 26.5462C168.297 24.7779 169.827 23.4167 171.792 22.4623C173.785 21.4801 176.073 20.9889 178.655 20.9889C180.788 20.9889 182.669 21.2274 184.296 21.7047C185.952 22.1536 187.468 22.8132 188.844 23.6834V40.5244C188.844 41.0577 188.745 41.4085 188.549 41.5768C188.352 41.7454 187.96 41.8296 187.37 41.8296H183.076C182.767 41.8296 182.528 41.7875 182.36 41.7031C182.191 41.591 182.051 41.4225 181.939 41.1979L181.391 39.935C180.578 40.805 179.595 41.4367 178.444 41.8296C177.322 42.2506 175.946 42.461 174.318 42.461V42.461ZM177.476 36.735C178.571 36.735 179.427 36.4684 180.044 35.9353C180.662 35.402 180.97 34.644 180.97 33.6615V27.0938C180.437 26.841 179.764 26.7148 178.949 26.7148C177.462 26.7148 176.269 27.2339 175.371 28.2725C174.501 29.311 174.066 30.7705 174.066 32.6511C174.066 35.3738 175.202 36.735 177.476 36.735V36.735ZM215.291 40.2296C215.487 40.4542 215.585 40.7069 215.585 40.9875C215.585 41.24 215.501 41.4506 215.333 41.6189C215.164 41.7593 214.94 41.8296 214.659 41.8296H208.133C207.74 41.8296 207.446 41.8014 207.249 41.7454C207.081 41.661 206.898 41.5066 206.702 41.2823L200.976 33.4932V39.7244C200.976 40.4542 200.808 40.9875 200.471 41.3244C200.134 41.661 199.558 41.8296 198.744 41.8296H194.661C193.847 41.8296 193.271 41.661 192.934 41.3244C192.626 40.9875 192.471 40.4542 192.471 39.7244V15.3473C192.471 14.6173 192.64 14.0839 192.976 13.7473C193.313 13.3823 193.875 13.1998 194.661 13.1998H198.744C199.558 13.1998 200.134 13.3823 200.471 13.7473C200.808 14.0839 200.976 14.6173 200.976 15.347V29.4514L206.534 22.2099C206.702 21.9853 206.884 21.8309 207.081 21.7468C207.277 21.6624 207.572 21.6203 207.965 21.6203H214.491C214.772 21.6203 214.982 21.7047 215.122 21.873C215.291 22.0134 215.375 22.2099 215.375 22.4623C215.375 22.7432 215.277 22.9957 215.08 23.2203L207.881 31.4725L215.291 40.2296ZM228.961 42.461C226.604 42.461 224.499 42.0681 222.646 41.2823C220.822 40.4962 219.376 39.3173 218.31 37.7457C217.243 36.1738 216.71 34.2512 216.71 31.9777C216.71 28.4129 217.72 25.6902 219.741 23.8096C221.762 21.929 224.667 20.9889 228.456 20.9889C232.161 20.9889 234.968 21.9151 236.877 23.7675C238.814 25.5921 239.782 28.1323 239.782 31.388C239.782 32.7916 239.164 33.4932 237.929 33.4932H224.709C224.709 34.7001 225.158 35.6266 226.057 36.2719C226.983 36.9175 228.372 37.2402 230.225 37.2402C231.375 37.2402 232.33 37.1421 233.088 36.9457C233.873 36.7211 234.66 36.3984 235.445 35.9774C235.782 35.8369 236.007 35.7667 236.119 35.7667C236.372 35.7667 236.582 35.9353 236.75 36.2719L238.182 38.9665C238.322 39.2473 238.393 39.4577 238.393 39.5981C238.393 39.8506 238.224 40.0894 237.887 40.3137C236.737 41.0716 235.431 41.6189 233.972 41.9558C232.512 42.2927 230.842 42.461 228.961 42.461V42.461ZM232.204 29.3252C232.204 28.2585 231.895 27.4304 231.277 26.841C230.66 26.2517 229.733 25.9569 228.498 25.9569C227.263 25.9569 226.323 26.2656 225.678 26.8831C225.032 27.4727 224.709 28.2867 224.709 29.3252H232.204ZM254.213 42.461C251.855 42.461 249.623 42.2225 247.518 41.7454C245.413 41.2399 243.715 40.5383 242.424 39.6402C241.947 39.3315 241.708 39.0085 241.708 38.6719C241.708 38.4473 241.792 38.2088 241.961 37.9561L244.024 34.6722C244.248 34.3353 244.473 34.167 244.697 34.167C244.838 34.167 245.076 34.2651 245.413 34.4615C246.452 35.0511 247.63 35.5282 248.95 35.893C250.269 36.258 251.574 36.4405 252.865 36.4405C254.184 36.4405 255.153 36.244 255.77 35.8509C256.416 35.458 256.738 34.8266 256.738 33.9563C256.738 33.1143 256.388 32.4547 255.686 31.9777C255.012 31.5003 253.735 30.8971 251.855 30.1673C249.02 29.1006 246.802 27.9077 245.202 26.5883C243.631 25.2413 242.845 23.4167 242.845 21.1151C242.845 18.3364 243.841 16.2173 245.834 14.7577C247.827 13.2979 250.479 12.5684 253.791 12.5684C256.093 12.5684 258.058 12.7787 259.686 13.1998C261.342 13.5929 262.745 14.2104 263.896 15.0522C264.373 15.4173 264.612 15.7542 264.612 16.0629C264.612 16.2593 264.528 16.4837 264.359 16.7364L262.296 20.0205C262.043 20.3572 261.819 20.5257 261.622 20.5257C261.482 20.5257 261.243 20.4274 260.907 20.2309C259.279 19.1643 257.342 18.6312 255.097 18.6312C253.89 18.6312 252.963 18.8276 252.318 19.2205C251.672 19.6134 251.349 20.2591 251.349 21.1572C251.349 21.7746 251.518 22.2801 251.855 22.673C252.191 23.0659 252.641 23.4167 253.202 23.7255C253.791 24.0061 254.69 24.3711 255.896 24.8203L256.696 25.1148C258.773 25.929 260.402 26.7148 261.58 27.4727C262.787 28.2022 263.699 29.1145 264.317 30.2093C264.934 31.2757 265.243 32.623 265.243 34.2511C265.243 36.7492 264.303 38.7421 262.422 40.2296C260.57 41.7173 257.833 42.461 254.213 42.461ZM274.189 41.8296C273.768 41.8296 273.446 41.7593 273.22 41.6189C272.996 41.4787 272.827 41.1979 272.715 40.7768L267.284 22.5886C267.228 22.4203 267.2 22.294 267.2 22.2099C267.2 21.817 267.48 21.6203 268.042 21.6203H273.599C273.965 21.6203 274.23 21.6905 274.399 21.8307C274.569 21.9432 274.681 22.1394 274.735 22.4203L277.008 31.9777L279.872 24.2727C280.014 23.9361 280.153 23.7115 280.293 23.5992C280.462 23.4588 280.743 23.3889 281.137 23.3889H283.787C284.181 23.3889 284.448 23.4588 284.588 23.5992C284.757 23.7113 284.91 23.9361 285.052 24.2727L287.872 31.9777L290.189 22.4203C290.271 22.1397 290.383 21.9432 290.525 21.8309C290.664 21.6905 290.918 21.6205 291.282 21.6205H296.883C297.443 21.6205 297.724 21.817 297.724 22.2099C297.724 22.294 297.697 22.4203 297.64 22.5886L292.167 40.7768C292.055 41.1979 291.885 41.4787 291.661 41.6189C291.465 41.7593 291.156 41.8296 290.735 41.8296H286.61C286.216 41.8296 285.921 41.7593 285.724 41.6189C285.528 41.4506 285.361 41.17 285.219 40.7768L282.44 33.1563L279.661 40.7768C279.549 41.17 279.38 41.4506 279.156 41.6189C278.959 41.7593 278.667 41.8296 278.273 41.8296H274.189ZM308.396 42.461C305.757 42.461 303.64 41.6189 302.038 39.935C300.467 38.2227 299.681 35.823 299.681 32.7353C299.681 30.3777 300.213 28.3145 301.282 26.5462C302.375 24.7779 303.905 23.4167 305.869 22.4623C307.864 21.4801 310.15 20.9889 312.732 20.9889C314.866 20.9889 316.746 21.2274 318.375 21.7047C320.03 22.1536 321.547 22.8132 322.921 23.6834V40.5244C322.921 41.0577 322.823 41.4085 322.626 41.5768C322.429 41.7454 322.038 41.8296 321.448 41.8296H317.153C316.844 41.8296 316.607 41.7875 316.437 41.7031C316.268 41.591 316.129 41.4225 316.017 41.1979L315.47 39.935C314.656 40.805 313.672 41.4367 312.522 41.8296C311.399 42.2506 310.025 42.461 308.396 42.461V42.461ZM311.555 36.735C312.648 36.735 313.506 36.4684 314.123 35.9353C314.741 35.402 315.049 34.644 315.049 33.6615V27.0938C314.514 26.841 313.842 26.7148 313.028 26.7148C311.538 26.7148 310.347 27.2339 309.448 28.2725C308.579 29.311 308.142 30.7705 308.142 32.6511C308.142 35.3738 309.282 36.735 311.555 36.735V36.735ZM328.738 50.3342C327.924 50.3342 327.35 50.1659 327.011 49.829C326.702 49.4921 326.549 48.9588 326.549 48.229V24.1044C327.812 23.2063 329.399 22.4624 331.306 21.873C333.216 21.2837 335.208 20.9889 337.284 20.9889C345.763 20.9889 350 24.5817 350 31.767C350 35.023 349.101 37.6192 347.306 39.5561C345.508 41.4927 342.97 42.461 339.686 42.461C338.76 42.461 337.861 42.3487 336.989 42.1241C336.148 41.8998 335.446 41.591 334.885 41.1979V48.229C334.885 48.9588 334.716 49.4921 334.38 49.829C334.044 50.1659 333.467 50.3342 332.653 50.3342H328.738V50.3342ZM337.875 36.7771C339.082 36.7771 339.981 36.3282 340.569 35.4298C341.186 34.5036 341.495 33.2686 341.495 31.7249C341.495 29.9006 341.131 28.6233 340.402 27.8935C339.7 27.1358 338.604 26.7569 337.118 26.7569C336.161 26.7569 335.405 26.8831 334.844 27.1358V33.8301C334.844 34.7845 335.109 35.5143 335.642 36.0195C336.178 36.5246 336.921 36.7771 337.875 36.7771V36.7771Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6547 54.2642C18.6787 54.2582 12.2536 52.3443 7.76453 48.9066C3.22163 45.4276 0.811523 40.4904 0.811523 34.9038C0.811523 29.521 3.21617 25.6396 5.93721 23.0159C8.06972 20.9598 10.4227 19.6432 12.0612 18.8855C11.6908 17.7484 11.2285 16.2598 10.8148 14.7221C10.2615 12.6648 9.71863 10.2505 9.71863 8.4817C9.71863 6.38798 10.1749 4.28497 11.4058 2.65109C12.7063 0.924864 14.6643 0 17.0194 0C18.8602 0 20.423 0.682787 21.6462 1.86066C22.8156 2.98634 23.5943 4.48169 24.1317 6.04044C25.076 8.77924 25.4438 12.2202 25.5468 15.6544H27.8028C27.9061 12.2202 28.2735 8.77924 29.2181 6.04044C29.7555 4.48169 30.5336 2.98661 31.7033 1.86066C32.9268 0.68306 34.4894 0 36.3301 0C38.6856 0 40.6432 0.924864 41.9438 2.65109C43.1746 4.28497 43.6312 6.38798 43.6312 8.4817C43.6312 10.2505 43.088 12.6648 42.5347 14.7221C42.1211 16.2598 41.6588 17.7484 41.2883 18.8855C42.9268 19.6432 45.2801 20.9598 47.4123 23.0161C50.1334 25.6396 52.538 29.521 52.538 34.9038C52.538 40.4904 50.1282 45.4276 45.585 48.9066C41.0959 52.3443 34.6708 54.2582 26.6949 54.2642H26.6547V54.2642Z" fill="#633001" />
                                            <path d="M17.0188 1.99219C13.5693 1.99219 11.9813 4.59219 11.9813 8.18754C11.9813 11.0455 13.8264 16.769 14.5832 18.9971C14.7537 19.4985 14.486 20.0474 13.998 20.2416C11.2332 21.343 3.07422 25.3752 3.07422 34.6099C3.07422 44.3375 11.3658 51.6722 26.6562 51.684L26.6742 51.6837L26.6925 51.684C41.9827 51.6722 50.2742 44.3375 50.2742 34.6099C50.2742 25.3752 42.1152 21.343 39.3505 20.2416C38.8625 20.0476 38.595 19.4985 38.7652 18.9971C39.5223 16.7692 41.3674 11.0455 41.3674 8.18754C41.3674 4.59191 39.7794 1.99219 36.3297 1.99219C31.3641 1.99219 30.1261 9.09792 30.0379 16.7244C30.0321 17.2334 29.6245 17.6466 29.1207 17.6466H24.228C23.7239 17.6466 23.3166 17.2334 23.3106 16.7244C23.2223 9.09792 21.9846 1.99219 17.0188 1.99219V1.99219Z" fill="#D1884F" />
                                            <path d="M26.6925 48.5663C15.4581 48.5663 3.09362 42.4912 3.07422 34.627V34.6636C3.07422 44.3991 11.3789 51.7376 26.6925 51.7376C42.0062 51.7376 50.3108 44.3991 50.3108 34.6636V34.627C50.2914 42.4912 37.927 48.5663 26.6925 48.5663V48.5663Z" fill="#FEDC90" />
                                            <path d="M20.451 32.2118C20.451 34.867 19.2089 36.2498 17.6767 36.2498C16.1444 36.2498 14.9023 34.867 14.9023 32.2118C14.9023 29.5566 16.1444 28.1738 17.6767 28.1738C19.2089 28.1738 20.451 29.5566 20.451 32.2118V32.2118ZM38.484 32.2118C38.484 34.867 37.242 36.2498 35.7097 36.2498C34.1775 36.2498 32.9354 34.867 32.9354 32.2118C32.9354 29.5566 34.1775 28.1738 35.7097 28.1738C37.242 28.1738 38.484 29.5566 38.484 32.2118V32.2118Z" fill="#633001" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2425_1076">
                                                <rect width="350" height="54.3716" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>

                            <div className="partners__col">
                                <a className="partners__item">
                                    <svg width="280" height="65" viewBox="0 0 280 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3" clip-path="url(#clip0_2425_1062)">
                                            <path d="M218.801 32.1029C218.801 30.4639 218.801 28.9222 218.748 27.4984C218.712 26.1552 218.579 24.8164 218.35 23.4924C218.136 22.2833 217.758 21.1091 217.227 20.0021C216.666 18.8608 215.917 17.8224 215.01 16.9305C213.724 15.6132 212.195 14.5589 210.506 13.8265C208.679 13.0865 206.723 12.7196 204.752 12.7476C202.773 12.722 200.81 13.0887 198.974 13.8265C197.276 14.5489 195.736 15.5986 194.443 16.9158C193.538 17.8071 192.792 18.8458 192.235 19.9874C191.709 21.0946 191.337 22.269 191.13 23.4776C190.906 24.8021 190.778 26.1409 190.747 27.4837C190.711 28.9075 190.694 30.4492 190.702 32.0882C190.711 33.7272 190.702 35.2571 190.747 36.6897C190.778 38.0325 190.906 39.3713 191.13 40.6958C191.337 41.9044 191.709 43.0788 192.235 44.186C192.794 45.3263 193.54 46.3646 194.443 47.2576C195.734 48.5758 197.274 49.624 198.974 50.341C200.808 51.0836 202.773 51.4524 204.752 51.4258C206.723 51.4549 208.68 51.0859 210.506 50.341C212.195 49.6183 213.725 48.5707 215.01 47.2576C215.915 46.3641 216.664 45.326 217.227 44.186C217.758 43.079 218.136 41.9048 218.35 40.6958C218.576 39.3755 218.707 38.0406 218.742 36.7015C218.786 35.2689 218.807 33.736 218.795 32.1L218.801 32.1029ZM211.373 32.1029C211.373 33.9188 211.346 35.431 211.284 36.6337C211.249 37.6216 211.151 38.6063 210.989 39.5815C210.879 40.2313 210.68 40.863 210.4 41.4593C210.172 41.9399 209.874 42.384 209.515 42.7769C208.962 43.4104 208.276 43.9137 207.505 44.2508C206.638 44.6219 205.704 44.8105 204.761 44.8051C203.813 44.8092 202.874 44.6207 202.001 44.2508C201.212 43.92 200.507 43.4163 199.938 42.7769C199.577 42.3857 199.279 41.9413 199.054 41.4593C198.781 40.8624 198.592 40.2304 198.494 39.5815C198.336 38.6057 198.238 37.6213 198.199 36.6337C198.146 35.431 198.119 33.9207 198.119 32.1029C198.119 30.2871 198.146 28.7719 198.199 27.5692C198.238 26.5816 198.336 25.5972 198.494 24.6214C198.592 23.9725 198.781 23.3405 199.054 22.7436C199.28 22.262 199.578 21.8176 199.938 21.4259C200.508 20.7875 201.213 20.2839 202.001 19.952C202.873 19.578 203.812 19.3893 204.761 19.3978C205.704 19.388 206.639 19.5769 207.505 19.952C208.275 20.2902 208.961 20.7933 209.515 21.4259C209.873 21.8194 210.171 22.2634 210.4 22.7436C210.68 23.3399 210.879 23.9716 210.989 24.6214C211.151 25.5966 211.249 26.5813 211.284 27.5692C211.349 28.7689 211.373 30.2841 211.373 32.1029Z" fill="#2BE2B3" />
                                            <path d="M277.993 13.7315C277.99 13.3731 277.7 13.0833 277.342 13.0801H271.214C270.854 13.0817 270.564 13.3724 270.562 13.7315V36.3707L255.617 13.2628C255.516 13.1066 255.428 13.0801 255.207 13.0801H249.524C249.166 13.0848 248.877 13.3737 248.872 13.7315V50.4672C248.877 50.8245 249.166 51.1125 249.524 51.1157H255.649C256.007 51.1141 256.296 50.8247 256.298 50.4672V27.769L271.246 50.93C271.349 51.0862 271.432 51.1127 271.656 51.1127H277.336C277.694 51.1112 277.984 50.8222 277.988 50.4642L277.993 13.7315Z" fill="#2BE2B3" />
                                            <path d="M236.913 13.7315C236.911 13.3724 236.62 13.0817 236.261 13.0801H230.139C229.78 13.0817 229.489 13.3724 229.487 13.7315V50.4642C229.489 50.8234 229.78 51.1141 230.139 51.1157H236.261C236.62 51.1141 236.911 50.8234 236.913 50.4642V13.7315Z" fill="#2BE2B3" />
                                            <path d="M163.618 32.1021C163.618 30.2745 163.639 28.7534 163.692 27.5418C163.728 26.554 163.826 25.5694 163.986 24.594C164.552 21.322 167.058 19.3911 170.256 19.3911C172.344 19.4088 174.236 20.1812 175.445 21.938C175.992 22.7583 176.391 23.6682 176.624 24.6265C176.642 24.7274 176.734 24.7978 176.836 24.7886H184.043C184.147 24.7886 184.185 24.7178 184.167 24.6176C183.38 20.1576 181.001 16.1515 176.798 14.1676C174.732 13.2111 172.477 12.7325 170.2 12.7674C166.142 12.7674 162.724 14.1568 159.945 16.9356C158.359 18.4818 157.276 20.4709 156.838 22.6426C156.414 24.7807 156.199 27.9329 156.195 32.0992C156.191 36.2654 156.406 39.4166 156.838 41.5528C157.272 43.7273 158.352 45.7203 159.936 47.2715C162.713 50.0484 166.132 51.4368 170.192 51.4368C172.468 51.4712 174.722 50.9937 176.789 50.0395C180.992 48.0557 183.371 44.0496 184.158 39.5896C184.176 39.4864 184.138 39.4186 184.035 39.4186H176.824C176.722 39.4079 176.629 39.479 176.612 39.5807C176.379 40.5378 175.98 41.4467 175.433 42.2662C174.224 44.0348 172.332 44.7983 170.245 44.8131C167.046 44.8131 164.541 42.8852 163.975 39.6131C163.815 38.6377 163.716 37.6531 163.68 36.6653C163.639 35.4479 163.618 33.9239 163.618 32.1021Z" fill="#2BE2B3" />
                                            <path d="M87.4939 13.7315C87.4923 13.3724 87.2015 13.0817 86.8424 13.0801H80.7198C80.3607 13.0817 80.07 13.3724 80.0684 13.7315V50.4672C80.0716 50.8252 80.3618 51.1141 80.7198 51.116H86.8424C87.2004 51.1141 87.4907 50.8252 87.4939 50.4672V39.6841L92.4079 33.8091L102.501 50.9211C102.579 51.0473 102.719 51.1217 102.867 51.116H110.307C110.649 51.116 110.711 50.9035 110.54 50.6116L97.3248 28.2082L109.449 13.6637C109.694 13.369 109.591 13.0889 109.207 13.0889H101.074C100.976 13.0831 100.88 13.1274 100.821 13.2068L87.4939 29.1899V13.7315Z" fill="#2BE2B3" />
                                            <path d="M132.101 44.8133C128.655 44.8133 125.53 41.6237 125.53 37.8152V13.7315C125.528 13.3724 125.238 13.0817 124.879 13.0801H118.756C118.397 13.0817 118.106 13.3724 118.104 13.7315V37.7208C118.104 46.1074 124.377 51.437 132.101 51.437C139.824 51.437 146.097 46.1074 146.097 37.7208V13.7315C146.094 13.3731 145.804 13.0833 145.445 13.0801H139.32C138.962 13.0833 138.673 13.3736 138.671 13.7315V37.8152C138.671 41.6208 135.544 44.8133 132.101 44.8133Z" fill="#2BE2B3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.524 32.1022L37.5315 51.1127L49.5291 39.1151C51.6745 37.1834 54.9566 37.2693 56.9979 39.3106C59.0392 41.3519 59.1251 44.6341 57.1934 46.7794L41.3607 62.615C39.234 64.7066 35.8231 64.7066 33.6964 62.615L10.8538 39.7665V53.3471C10.8538 56.3443 8.42413 58.774 5.42692 58.774C2.42972 58.774 0 56.3443 0 53.3471V10.8397C0 7.84246 2.42972 5.41275 5.42692 5.41275C8.42413 5.41275 10.8538 7.84246 10.8538 10.8397V24.4202L33.6935 1.57765C35.8195 -0.515465 39.2317 -0.515465 41.3578 1.57765L57.2023 17.4103C59.134 19.5557 59.048 22.8378 57.0067 24.8791C54.9654 26.9204 51.6833 27.0063 49.538 25.0747L37.5404 13.0771L18.524 32.1022ZM37.5404 26.6694C35.3427 26.6682 33.3608 27.9911 32.519 30.0211C31.6772 32.0512 32.1413 34.3884 33.6948 35.9428C35.2484 37.4972 37.5853 37.9625 39.6158 37.1218C41.6463 36.2811 42.9703 34.2999 42.9703 32.1022C42.971 30.6614 42.3994 29.2792 41.3811 28.2598C40.3628 27.2404 38.9813 26.6673 37.5404 26.6665V26.6694Z" fill="#2BE2B3" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2425_1062">
                                                <rect width="280" height="64.2623" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>

                            <div className="partners__col">
                                <a className="partners__item">
                                    <svg width="210" height="66" viewBox="0 0 210 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3" clip-path="url(#clip0_2425_1086)">
                                            <path d="M38.6192 47.7559H21.2969V65.0835H38.6192V47.7559Z" fill="#ABEBF4" />
                                            <path d="M53.9545 23.9082H21.2969V41.1728H59.8529V23.9082H53.9545Z" fill="#00B3C8" />
                                            <path d="M74.8784 0H21.2969V17.3276H74.8784V0Z" fill="#009BB5" />
                                            <path d="M17.3224 23.9082H0V41.2332H17.3224V23.9082Z" fill="#00B3C8" />
                                            <path d="M107.848 23.5377V32.2318H125.356V40.9257H107.848V54.5259H96.6074V14.8438H127.714V23.4747H107.848V23.5377ZM143.92 23.7241H131.751V14.8438H167.265V23.7241H155.158V54.4629H143.92V23.7241ZM197.071 54.4629L188.874 42.1674L180.804 54.4629H168.013L182.356 34.4656L168.572 14.9041H181.174L189.123 26.3307L196.945 14.9041H209.055L195.268 34.0299L209.984 54.5232H197.071V54.4629Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2425_1086">
                                                <rect width="210" height="65.1" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>

                            <div className="partners__col">
                                <a className="partners__item">
                                    <svg width="250" height="74" viewBox="0 0 300 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3" clip-path="url(#clip0_2425_1160)">
                                            <path d="M198.196 2.70453C197.336 3.56519 196.721 4.7947 196.721 5.5324C196.721 6.14716 201.516 14.7537 207.418 24.5898C216.885 40.5734 217.992 43.0324 218.115 48.6881C218.237 63.0734 203.115 72.1718 190.696 65.0406C184.549 61.598 181.721 57.1718 180.983 50.2865C180.492 44.8767 180.983 43.2783 186.393 33.8111C189.713 28.0324 192.91 23.4832 193.401 23.7291C194.016 23.8521 197.336 29.016 200.778 35.0406C206.434 44.7537 207.172 46.8439 207.172 53.1144C207.172 59.8767 207.295 60.1226 209.385 57.9095C210.615 56.6799 211.967 53.4832 212.336 50.7783C213.074 45.3685 211.598 42.0488 200.041 22.3767L193.278 10.8193L185.164 24.3439C175.205 40.9422 173.36 47.4586 176.311 56.3111C180 67.4996 192.049 75.1226 202.746 73.1554C216.885 70.4504 224.754 60.3685 223.524 46.2291C223.033 40.9422 221.311 37.0078 212.705 22.7455C199.057 -0.123336 199.918 0.983221 198.196 2.70453Z" fill="#326DEC" />
                                            <path d="M2.45898 39.3435V61.4746H6.76226H11.0655V39.3435V17.2123H6.76226H2.45898V39.3435Z" fill="#326DEC" />
                                            <path d="M25.8195 18.6872C20.5326 21.5151 19.549 25.2036 19.9179 40.8184C20.2867 53.9741 20.5326 55.5725 23.1146 58.0315C25.4507 60.4905 27.172 60.8594 35.1638 60.8594C43.5245 60.8594 44.754 60.4905 46.8441 57.9086C48.1966 56.1872 49.1802 53.1135 49.1802 50.2856C49.1802 45.7364 48.9343 45.4905 45.4917 45.4905C42.5408 45.4905 41.8031 45.9823 41.8031 48.1954C41.8031 53.1135 40.0818 54.343 34.3031 53.8512L28.8933 53.4823V39.343V25.2036L34.3031 24.8348C40.0818 24.343 41.8031 25.5725 41.8031 30.3676C41.8031 32.7036 42.5408 33.1954 45.4917 33.1954C48.9343 33.1954 49.1802 32.9495 49.1802 28.4004C49.1802 20.7774 46.1064 18.0725 36.7622 17.5807C31.8441 17.2118 27.7867 17.7036 25.8195 18.6872Z" fill="#326DEC" />
                                            <path d="M63.3194 18.3184C57.7866 20.6545 57.1719 22.8676 57.1719 39.4659C57.1719 54.22 57.2948 55.4495 59.9997 58.0315C62.3358 60.4905 64.0571 60.8594 71.926 60.8594C79.7948 60.8594 81.5161 60.4905 83.8522 58.0315C86.5571 55.4495 86.6801 54.22 86.6801 39.343C86.6801 24.4659 86.4342 23.2364 83.9752 20.6545C81.762 18.5643 79.5489 17.8266 73.5243 17.5807C69.2211 17.4577 64.6719 17.7036 63.3194 18.3184ZM78.0735 39.343V53.4823H71.926H65.7784L65.4096 40.6954C65.2866 33.5643 65.4096 27.0479 65.7784 26.1872C66.1473 24.9577 68.1145 24.5889 72.1719 24.8348L78.0735 25.2036V39.343Z" fill="#326DEC" />
                                            <path d="M98.3604 39.3435V61.4746H108.811C126.27 61.4746 127.869 59.6303 127.869 39.3435C127.869 19.0566 126.27 17.2123 108.811 17.2123H98.3604V39.3435ZM117.787 26.0648C119.754 28.032 119.754 50.6549 117.787 52.6221C116.926 53.4828 114.221 54.0976 111.639 54.0976H106.967V39.3435V24.5894H111.639C114.221 24.5894 116.926 25.2041 117.787 26.0648Z" fill="white" />
                                            <path d="M136.476 39.3435V61.4746H140.779H145.082V53.4828C145.082 46.2287 145.328 45.491 147.664 45.491C149.508 45.491 151.107 47.4582 153.812 53.4828C157.377 60.9828 157.869 61.4746 161.803 61.4746C164.14 61.4746 165.984 60.9828 165.984 60.3681C165.984 59.7533 164.508 55.8189 162.787 51.8844L159.59 44.5074L162.172 41.9254C164.262 39.8353 164.754 37.8681 164.754 30.8599C164.754 23.114 164.508 22.1303 161.558 19.7943C158.73 17.5812 156.517 17.2123 147.418 17.2123H136.476V39.3435ZM155.533 31.3517V37.4992L150.369 37.8681L145.082 38.2369V31.3517V24.4664L150.369 24.8353L155.533 25.2041V31.3517Z" fill="white" />
                                            <path d="M234.099 18.8102C233.853 19.6708 233.73 29.5069 233.853 40.5725L234.222 60.8594H238.525H242.828L243.197 53.7282L243.566 46.72H248.484C256.845 46.72 261.517 44.0151 263.115 38.1135C265.082 30.8594 263.607 22.6217 259.673 19.6708C257.214 17.5807 254.755 17.2118 245.656 17.2118C237.91 17.2118 234.591 17.7036 234.099 18.8102ZM254.263 31.5971L254.632 38.1135H249.099H243.443V31.2282V24.4659L248.73 24.8348L253.894 25.2036L254.263 31.5971Z" fill="white" />
                                            <path d="M274.549 18.6877C270.861 20.409 268.771 26.0648 269.631 32.2123C270.492 38.8517 273.32 41.4336 282.049 43.4008C290.041 45.2451 292.869 47.8271 290.656 51.3926C289.672 52.7451 287.705 53.4828 284.508 53.4828C280.451 53.4828 279.467 52.991 278.115 50.0402C276.762 47.3353 275.779 46.5976 273.197 46.9664C270.246 47.3353 269.877 47.8271 270.123 51.6385C270.369 58.2779 274.918 61.4746 284.016 61.4746C296.066 61.4746 300 58.1549 300 47.95C300 40.6959 296.189 37.1304 286.721 35.532C280.205 34.3025 278.975 33.6877 278.361 31.2287C277.254 26.9254 279.836 24.3435 285.123 24.8353C288.689 25.0812 289.672 25.8189 289.918 27.909C290.287 30.2451 291.148 30.7369 294.59 30.7369C298.525 30.7369 298.77 30.491 298.77 26.5566C298.77 20.1631 294.344 17.2123 284.754 17.3353C280.697 17.3353 276.025 17.95 274.549 18.6877Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2425_1160">
                                                <rect width="300" height="73.7705" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>

                            <div className="partners__col">
                                <a className="partners__item">
                                    <svg width="300" height="77" viewBox="0 0 400 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3" clip-path="url(#clip0_2425_1126)">
                                            <path d="M33.2667 0L0 19.2V57.6L33.2667 76.8L66.5333 57.6V19.2L33.2667 0ZM33.2667 0L0 19.2V57.6L33.2667 76.8L66.5333 57.6V19.2L33.2667 0Z" fill="white" />
                                            <path d="M46.4 61.8H41.6667L36 56.6V53.9333L41.8667 48.3333V39.4667L49.5333 34.4667L58.2667 41.0667L46.4 61.8ZM26.8 47.8L27.6667 39.4667L24.8 32H41.7333L38.9333 39.4667L39.7333 47.8H33.2H26.8ZM30.6667 56.6L25 61.8667H20.2L8.26667 41.0667L17.0667 34.5333L24.8 39.4667V48.3333L30.6667 53.9333V56.6ZM20.1333 16.6H46.3333L49.4667 29.9333H17.0667L20.1333 16.6ZM33.2667 0L0 19.2V57.6L33.2667 76.8L66.5333 57.6V19.2L33.2667 0Z" fill="#03316C" />
                                            <path d="M103.866 56.2006C95.0663 56.2006 88.5996 49.334 88.5996 40.8673C88.5996 32.4006 95.1329 25.334 103.933 25.334C109.533 25.334 113 27.4006 115.733 30.4006L111.533 34.934C109.466 32.734 107.266 31.2673 103.866 31.2673C98.9329 31.2673 95.3329 35.534 95.3329 40.734C95.3329 46.0673 98.9996 50.334 104.2 50.334C107.4 50.334 109.733 48.8006 111.866 46.6673L115.933 50.734C113 53.8673 109.6 56.2006 103.866 56.2006Z" fill="white" />
                                            <path d="M128.8 56.2009H122V25.4009H128.8V32.6009C130.667 28.2009 134.067 25.1342 139.267 25.4009V32.6009H138.867C132.933 32.6009 128.8 36.4676 128.8 44.3342V56.2009Z" fill="white" />
                                            <path d="M174.8 25.2676L159.8 64.4676H152.933L156.2 56.2009L143.333 25.2676H150.6L159.333 48.1342L167.733 25.2676H174.8Z" fill="white" />
                                            <path d="M194.8 31.2009C190.2 31.2009 186.2 34.9342 186.2 40.7342C186.2 46.5342 190.267 50.2676 194.8 50.2676C199.467 50.2676 203.267 46.6009 203.267 40.7342C203.267 34.8676 199.4 31.2009 194.8 31.2009ZM196.333 56.1342C191.467 56.1342 188.4 53.6676 186.333 50.9342V64.4676H179.533V25.2676H186.333V30.8009C188.533 27.7342 191.6 25.2676 196.333 25.2676C203.333 25.2676 210.133 30.8009 210.133 40.6676C210.133 50.5342 203.4 56.1342 196.333 56.1342Z" fill="white" />
                                            <path d="M225 31.7341V46.2675C225 48.8675 226.333 49.9341 228.667 49.9341H231.333V56.0008H226.667C221.733 56.0008 218.2 53.8008 218.2 47.3341V31.7341H214.467V25.9341H218.2V17.8008H225V25.9341H231.333V31.7341H225Z" fill="white" />
                                            <path d="M252.733 31.2006C247.266 31.2006 243.8 35.4673 243.8 40.6673C243.8 45.934 247.533 50.2673 252.8 50.2673C258.266 50.2673 261.733 46.0006 261.733 40.8006C261.866 35.534 258.066 31.2006 252.733 31.2006ZM252.733 56.2006C243.733 56.2006 237.066 49.334 237.066 40.8673C237.066 32.334 243.8 25.334 252.866 25.334C261.933 25.334 268.6 32.2006 268.6 40.734C268.6 49.134 261.933 56.2006 252.733 56.2006Z" fill="white" />
                                            <path d="M333.466 31.2006C328 31.2006 324.533 35.4673 324.533 40.6673C324.533 45.934 328.266 50.2673 333.533 50.2673C339 50.2673 342.466 46.0006 342.466 40.8006C342.533 35.534 338.8 31.2006 333.466 31.2006ZM333.466 56.2006C324.466 56.2006 317.8 49.334 317.8 40.8673C317.8 32.334 324.533 25.334 333.6 25.334C342.666 25.334 349.333 32.2006 349.333 40.734C349.333 49.134 342.6 56.2006 333.466 56.2006Z" fill="white" />
                                            <path d="M389.6 25.2676C396.067 25.2676 400 29.3342 400 36.6009V56.1342H393.2V38.6676C393.2 33.9342 391 31.4676 387.2 31.4676C383.534 31.4676 380.867 34.0676 380.867 38.8009V56.2009H374.067V38.6676C374.067 34.0676 371.8 31.4676 368.067 31.4676C364.334 31.4676 361.734 34.2676 361.734 38.8676V56.2009H354.934V25.3342H361.734V30.4009C363.667 27.8009 366.2 25.3342 370.734 25.3342C375 25.3342 377.934 27.4009 379.534 30.5342C382 27.3342 385.134 25.2676 389.6 25.2676Z" fill="white" />
                                            <path d="M281.066 49.9336V53.4003L280.866 53.7336L277.866 55.4003H277.466L274.533 53.7336L274.333 53.4003V49.9336L274.533 49.6003L277.466 47.9336H277.866L280.866 49.6003L281.066 49.9336Z" fill="white" />
                                            <path d="M301.667 56.1326C292.867 55.9326 286.534 48.9326 286.667 40.4659C286.8 31.9993 293.467 25.0659 302.334 25.2659C307.934 25.3993 311.4 27.5326 314.067 30.5993L309.8 35.0659C307.8 32.8659 305.6 31.2659 302.2 31.1993C297.267 31.1326 293.6 35.2659 293.534 40.5326C293.4 45.8659 297 50.1993 302.2 50.2659C305.4 50.3326 307.8 48.8659 309.934 46.7326L313.934 50.8659C310.934 53.9993 307.467 56.2659 301.667 56.1326Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2425_1126">
                                                <rect width="400" height="76.8" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>

                            <div className="partners__col">
                                <a className="partners__item">
                                    <svg width="289" height="61" viewBox="0 0 329 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3" clip-path="url(#clip0_2424_974)">
                                            <path d="M48.7094 35.9857C47.7264 36.6272 46.5795 36.7439 45.7057 36.219C44.6135 35.5191 43.9582 33.9443 43.9582 31.7864V25.1958C43.9582 22.0463 42.8113 19.7717 40.8453 19.1885C37.514 18.1386 35.0018 22.5129 34.0734 24.146L28.1754 34.236V21.813C28.1208 18.9552 27.247 17.2638 25.6086 16.7389C24.5164 16.3889 22.878 16.5639 21.2943 19.1301L8.13287 41.6431C6.3853 38.0853 5.4569 34.1193 5.4569 30.095C5.4569 16.5056 15.6693 5.48242 28.1754 5.48242C40.6815 5.48242 50.8939 16.5056 50.8939 30.095V30.1533V30.2116C51.0031 32.8362 50.2385 34.9358 48.7094 35.9857ZM55.9181 30.095V30.0367V29.9783C55.8635 13.4728 43.412 0 28.1754 0C12.8841 0 0.432617 13.4728 0.432617 30.095C0.432617 46.6589 12.8841 60.19 28.1754 60.19C35.2203 60.19 41.8829 57.3321 47.0164 52.1413C48.054 51.0915 48.1087 49.4001 47.1256 48.292C46.1972 47.1838 44.6135 47.1255 43.5759 48.117C43.5759 48.117 43.5759 48.117 43.5213 48.1753C39.3708 52.3746 33.8004 54.7659 28.0661 54.7659C21.3489 54.7659 15.3416 51.6164 11.1911 46.6006L23.0419 26.3039V35.6941C23.0419 40.185 24.6802 41.6431 26.0455 42.0513C27.4108 42.4596 29.4861 42.168 31.7251 38.3769L38.2239 27.1205C38.4424 26.7705 38.6062 26.4206 38.8247 26.1873V31.903C38.8247 36.1023 40.4084 39.4851 43.139 41.1181C45.5965 42.6346 48.7094 42.4596 51.2761 40.7682C54.4436 38.5519 56.1366 34.7026 55.9181 30.095ZM94.5832 19.83C95.2386 20.2383 95.8393 21.2298 95.8393 22.1047C95.8393 23.5044 94.7471 24.6709 93.491 24.6709C93.1633 24.6709 92.8903 24.5542 92.6172 24.4959C91.1427 23.3294 89.2859 22.5712 87.3199 22.5712C82.6779 22.5712 79.5104 26.5956 79.5104 31.6114C79.5104 36.6272 82.7325 40.5932 87.3199 40.5932C89.6136 40.5932 91.6888 39.6017 93.2179 38.027C93.6002 37.7354 94.0917 37.5604 94.5832 37.5604C95.8393 37.5604 96.8223 38.6102 96.8223 39.9517C96.8223 40.8265 96.3308 41.5847 95.7301 41.993C93.491 44.0343 90.4873 45.3758 87.3745 45.3758C80.275 45.3758 74.4861 39.1351 74.4861 31.4364C74.4861 23.7377 80.275 17.4971 87.3745 17.4971C89.9958 17.4388 92.508 18.3136 94.5832 19.83ZM107.581 25.6624C112.441 25.6624 116.483 30.0367 116.483 35.4608C116.483 40.8265 112.387 45.4341 107.581 45.4341C102.502 45.4341 98.2968 40.8849 98.2968 35.4608C98.2968 30.0367 102.502 25.6624 107.581 25.6624ZM107.526 40.5932C109.656 40.5932 111.458 38.4353 111.458 35.5191C111.458 32.6029 109.656 30.7365 107.526 30.7365C105.233 30.7365 103.321 32.5446 103.321 35.5191C103.321 38.3769 105.233 40.5932 107.526 40.5932ZM119.541 42.4013V28.6369C119.541 27.1205 120.633 25.8957 122.053 25.8957C123.418 25.8957 124.565 27.1205 124.565 28.6369V42.4013C124.565 43.9177 123.418 45.1425 122.053 45.1425C120.688 45.1425 119.541 43.8594 119.541 42.4013ZM119.159 20.7049C119.159 18.8969 120.469 17.4971 122.053 17.4971C123.691 17.4971 125.002 18.9552 125.002 20.7049C125.002 22.4546 123.691 23.8544 122.053 23.8544C120.415 23.796 119.159 22.3963 119.159 20.7049ZM134.177 34.9358V42.4013C134.177 43.9177 133.03 45.1425 131.665 45.1425C130.299 45.1425 129.152 43.9177 129.152 42.4013V27.9953C129.152 26.8289 130.026 25.8957 131.118 25.8957C132.211 25.8957 133.03 26.8872 133.03 27.9953C135.051 25.954 136.853 25.6624 138.546 25.6624C143.57 25.6624 145.809 29.6867 145.809 34.2943V42.4013C145.809 43.9177 144.662 45.1425 143.297 45.1425C141.932 45.1425 140.785 43.9177 140.785 42.4013V34.9358C140.785 32.6029 140.512 30.6199 137.344 30.6199C135.105 30.6199 134.177 32.6029 134.177 34.9358ZM162.083 37.7937C161.483 37.7937 161.1 37.5021 160.773 37.0938L154.929 30.3283V42.4013C154.929 43.9177 153.782 45.1425 152.417 45.1425C151.052 45.1425 149.905 43.9177 149.905 42.4013V18.4886C150.069 18.0803 150.451 17.7887 150.833 17.7887C151.27 17.7887 151.652 18.197 151.926 18.4886L161.264 29.6867C161.537 30.0367 161.865 30.2116 162.083 30.2116C162.247 30.2116 162.629 30.0367 162.902 29.6867L172.241 18.4886C172.514 18.197 172.842 17.7887 173.333 17.7887C173.77 17.7887 174.153 18.0803 174.262 18.4886V42.4013C174.262 43.9177 173.17 45.1425 171.75 45.1425C170.384 45.1425 169.237 43.9177 169.237 42.4013V30.3283L163.394 37.0938C162.957 37.5021 162.575 37.7937 162.083 37.7937ZM186.222 40.5932C188.461 40.5932 190.372 38.4353 190.372 35.5191C190.372 32.6029 188.406 30.6782 186.222 30.6782C184.037 30.6782 182.235 32.6612 182.235 35.5191C182.235 38.3186 183.983 40.5932 186.222 40.5932ZM191.574 43.0428L191.464 42.4013C190.481 44.4426 187.369 45.3758 185.403 45.3758C180.706 45.3758 177.211 40.8265 177.211 35.4024C177.211 30.0367 180.761 25.6041 185.676 25.6041C186.495 25.6041 189.335 25.8374 191.519 28.5786L191.628 27.937C191.628 26.7705 192.447 25.8374 193.54 25.8374C194.632 25.8374 195.506 26.8289 195.506 27.937V42.9845C195.506 44.151 194.632 45.0842 193.54 45.0842C192.393 45.1425 191.574 44.151 191.574 43.0428ZM209.322 30.6199H208.776C205.609 30.7949 205.008 32.7195 205.008 34.9358V42.4013C205.008 43.9177 203.861 45.1425 202.496 45.1425C201.131 45.1425 199.984 43.9177 199.984 42.4013V27.9953C199.984 26.8289 200.858 25.8957 201.95 25.8957C203.042 25.8957 203.861 26.8872 203.861 27.9953C205.718 26.129 207.247 25.7207 208.776 25.6624H209.268C210.469 25.6624 211.562 26.7705 211.562 28.1703C211.616 29.4534 210.524 30.6199 209.322 30.6199ZM228.71 41.1181C228.928 41.5264 229.092 41.9347 229.092 42.4013C229.092 43.801 227.89 45.0842 226.58 45.0842C225.706 45.0842 224.941 44.3843 224.341 43.5677L218.552 36.3939V42.3429C218.552 43.8594 217.405 45.0842 216.04 45.0842C214.674 45.0842 213.528 43.8594 213.528 42.3429V20.4716C213.528 18.9552 214.62 17.7304 216.04 17.7304C217.46 17.7304 218.552 18.9552 218.552 20.4716V34.1193L224.341 27.2955C224.941 26.5956 225.651 25.8374 226.525 25.8374C227.781 25.8374 228.928 27.0622 228.928 28.4619C228.928 28.8702 228.819 29.3368 228.6 29.6867L224.013 35.0525L228.71 41.1181ZM238.54 30.6782C237.174 30.6782 234.935 31.4364 234.935 33.711H242.199C242.144 31.4364 239.85 30.6782 238.54 30.6782ZM245.093 37.1521H234.935C234.935 40.3599 237.83 40.8849 239.086 40.8849C240.014 40.8849 241.325 40.7099 242.363 40.185C242.69 39.9517 243.182 39.7767 243.673 39.7767C244.765 39.7767 245.694 40.7682 245.694 41.993C245.694 42.8095 245.202 43.5094 244.602 43.9177C243.073 45.1425 241.052 45.4341 239.14 45.4341C234.062 45.4341 229.856 42.5179 229.856 35.6941C229.856 30.3283 232.423 25.6624 238.431 25.6624C243.291 25.6624 246.95 29.0452 247.059 35.0525C247.059 36.1606 246.185 37.1521 245.093 37.1521ZM259.074 45.3758H257.708C253.886 45.3758 251.647 43.5677 251.647 37.2105V30.6199H250.336C249.134 30.6199 248.097 29.4534 248.097 28.1703C248.097 26.7705 249.189 25.6624 250.336 25.6624H251.647V20.5882C251.647 19.0718 252.739 17.847 254.159 17.847C255.524 17.847 256.671 19.0718 256.671 20.5882V25.6624H258.746C259.948 25.6624 260.985 26.7705 260.985 28.1703C260.985 29.4534 259.893 30.6199 258.746 30.6199H256.671V36.1606C256.671 39.835 256.835 40.5932 258.364 40.5932H259.074C260.275 40.5932 261.313 41.6431 261.313 42.9845C261.313 44.2676 260.275 45.3758 259.074 45.3758ZM283.376 19.83C284.031 20.2383 284.632 21.2298 284.632 22.1047C284.632 23.5044 283.54 24.6709 282.284 24.6709C281.956 24.6709 281.683 24.5542 281.41 24.4959C279.935 23.3294 278.079 22.5712 276.113 22.5712C271.471 22.5712 268.303 26.5956 268.303 31.6114C268.303 36.6272 271.525 40.5932 276.113 40.5932C278.406 40.5932 280.482 39.6017 282.011 38.027C282.393 37.7354 282.884 37.5604 283.376 37.5604C284.632 37.5604 285.615 38.6102 285.615 39.9517C285.615 40.8265 285.124 41.5847 284.523 41.993C282.284 44.0343 279.28 45.3758 276.167 45.3758C269.068 45.3758 263.279 39.1351 263.279 31.4364C263.279 23.7377 269.068 17.4971 276.167 17.4971C278.789 17.4388 281.355 18.3136 283.376 19.83ZM296.101 40.5932C298.34 40.5932 300.251 38.4353 300.251 35.5191C300.251 32.6029 298.285 30.6782 296.101 30.6782C293.861 30.6782 292.114 32.6612 292.114 35.5191C292.114 38.3186 293.916 40.5932 296.101 40.5932ZM301.452 43.0428L301.343 42.4013C300.36 44.4426 297.247 45.3758 295.281 45.3758C290.585 45.3758 287.09 40.8265 287.09 35.4024C287.09 30.0367 290.639 25.6041 295.554 25.6041C296.374 25.6041 299.213 25.8374 301.398 28.5786L301.507 27.937C301.507 26.7705 302.326 25.8374 303.418 25.8374C304.511 25.8374 305.385 26.8289 305.385 27.937V42.9845C305.385 44.151 304.511 45.0842 303.418 45.0842C302.272 45.1425 301.452 44.151 301.452 43.0428ZM319.092 40.5932C321.331 40.5932 323.079 38.3186 323.079 35.5191C323.079 32.6029 321.276 30.6782 319.092 30.6782C316.853 30.6782 314.942 32.6029 314.942 35.5191C314.942 38.4353 316.853 40.5932 319.092 40.5932ZM314.942 43.801V50.6249C314.942 52.1413 313.795 53.3661 312.429 53.3661C311.064 53.3661 309.917 52.1413 309.917 50.6249V27.9953C309.917 26.8289 310.791 25.8957 311.883 25.8957C312.976 25.8957 313.795 26.8872 313.795 28.2286C315.651 26.1873 317.945 25.6624 319.693 25.6624C324.553 25.6624 328.158 30.0367 328.158 35.4608C328.158 40.8265 324.717 45.4341 319.966 45.4341C318.491 45.3758 316.307 44.9092 314.942 43.801Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2424_974">
                                                <rect width="327.725" height="60.19" fill="white" transform="translate(0.432617)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>

                            <div className="partners__col">
                                <a className="partners__item">
                                    <svg width="289" height="93" viewBox="0 0 329 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3" clip-path="url(#clip0_2425_1139)">
                                            <path d="M135.776 36.3471C134.902 32.6132 132.662 29.9294 128.237 29.9294C121.736 29.9294 119.059 36.0554 119.059 42.2398C119.059 48.4242 121.79 54.5502 128.237 54.5502C132.935 54.5502 135.502 50.8162 135.94 46.0904H141.129C140.692 53.8501 135.557 59.1593 128.237 59.1593C119.168 59.1593 113.76 51.458 113.76 42.2398C113.76 33.0216 119.168 25.3203 128.237 25.3203C135.065 25.3787 140.419 29.4043 141.075 36.3471H135.776V36.3471ZM144.298 46.6739C144.298 39.4977 148.341 34.3635 155.333 34.3635C162.326 34.3635 166.368 39.4977 166.368 46.6739C166.368 53.8501 162.326 59.0426 155.333 59.0426C148.341 59.0426 144.298 53.8501 144.298 46.6739ZM161.561 46.6739C161.561 42.6482 159.649 38.4475 155.333 38.4475C151.017 38.4475 149.105 42.6482 149.105 46.6739C149.105 50.6995 151.017 54.9586 155.333 54.9586C159.649 54.9586 161.561 50.7579 161.561 46.6739ZM170.52 26.0788H175.328V30.9796H170.52V26.0788ZM170.52 35.0053H175.328V58.4008H170.52V35.0053ZM180.627 35.0053H185.216V38.4475L185.325 38.5642C186.745 35.9971 189.313 34.3635 192.154 34.4218C196.907 34.4218 199.911 37.164 199.911 42.3565V58.4008H195.104V43.6984C194.994 40.0228 193.683 38.4475 190.843 38.4475C187.619 38.4475 185.543 41.1313 185.543 44.5735V58.4008H180.736V35.0053H180.627ZM232.034 58.4008H228.647L227.827 54.6085C224.986 58.0508 222.419 59.1593 218.704 59.1593C209.635 59.1593 204.227 51.458 204.227 42.2398C204.227 33.0216 209.635 25.3203 218.704 25.3203C225.314 25.3203 230.886 29.0543 231.651 36.3471H226.461C225.97 32.0881 222.473 29.9294 218.649 29.9294C212.148 29.9294 209.471 36.0554 209.471 42.2398C209.471 48.4242 212.203 54.5502 218.649 54.5502C224.058 54.6669 227.062 51.1663 227.117 45.682H219.086V41.3647H231.979L232.034 58.4008ZM240.884 48.0158C240.884 51.6914 242.741 54.9586 246.784 54.9586C249.57 54.9586 251.263 53.675 252.137 51.0496H256.726C255.688 56.1838 251.591 59.0426 246.784 59.0426C239.9 59.0426 236.076 53.9084 236.076 46.7322C236.076 40.0811 240.173 34.3635 246.674 34.3635C253.558 34.3635 257.819 41.0146 256.999 48.0158H240.884ZM252.137 44.6319C251.973 41.3647 249.898 38.4475 246.62 38.4475C243.287 38.4475 240.993 41.1313 240.829 44.6319H252.137ZM275.464 42.8232C275.082 39.9644 273.115 38.4475 270.438 38.4475C267.925 38.4475 264.429 39.8477 264.429 46.9656C264.429 50.8746 266.013 54.9586 270.22 54.9586C273.006 54.9586 274.973 52.9749 275.41 49.591H280.217C279.343 55.6587 275.847 58.9843 270.165 58.9843C263.282 58.9843 259.512 53.7917 259.512 46.9072C259.512 39.8477 263.118 34.3051 270.329 34.3051C275.41 34.3051 279.725 37.0473 280.217 42.7649H275.464V42.8232ZM284.369 26.0788H289.176V44.4568L297.917 35.0053H303.872L295.459 43.5817L304.637 58.4008H298.737L292.017 47.0239L289.122 49.9994V58.4008H284.314L284.369 26.0788ZM305.948 46.6739C305.948 39.4977 309.99 34.3635 316.983 34.3635C324.03 34.3635 328.018 39.4977 328.018 46.6739C328.018 53.8501 323.976 59.0426 316.983 59.0426C309.99 59.0426 305.948 53.8501 305.948 46.6739ZM323.266 46.6739C323.266 42.6482 321.353 38.4475 317.038 38.4475C312.722 38.4475 310.81 42.6482 310.81 46.6739C310.81 50.6995 312.722 54.9586 317.038 54.9586C321.353 54.9586 323.266 50.7579 323.266 46.6739Z" fill="white" />
                                            <path d="M86.9358 46.0911C86.9905 64.8193 76.5561 81.7388 60.3857 88.9733C44.2152 96.2078 25.5864 92.3572 13.1308 79.1717C0.675176 65.9861 -3.09429 46.0911 3.51593 28.7633C10.1262 11.4354 25.9142 0.11681 43.3958 0.000123652C67.3783 -0.0582194 86.8266 20.5369 86.9358 46.0911Z" fill="#8DC63F" />
                                            <path d="M83.7133 46.0912C83.7679 63.4191 74.0984 79.055 59.1298 85.7645C44.1612 92.4739 26.9528 88.8567 15.4259 76.7213C3.89899 64.5276 0.40267 46.1496 6.52122 30.1636C12.6398 14.1192 27.226 3.67581 43.3964 3.55913C65.5762 3.44244 83.6041 22.4623 83.7133 46.0912Z" fill="#F9E988" />
                                            <path d="M44.3789 6.30123C46.9465 5.83449 49.5141 5.83449 52.0817 6.30123C54.6493 6.70963 57.1623 7.64312 59.4568 8.92667C61.7512 10.2686 63.7179 12.0772 65.6846 13.7691C67.6513 15.4611 69.6179 17.2114 71.4754 19.1367C73.3874 21.0037 75.0263 23.1624 76.392 25.4961C77.8124 27.8298 78.9597 30.3386 79.8337 32.9057C81.5273 38.1565 82.0736 43.8158 81.2541 49.1834H80.981C80.1615 43.8158 79.0143 38.74 77.2115 33.8975C76.392 31.4471 75.3541 29.055 74.2615 26.7796C73.0596 24.5043 71.8031 22.2289 70.3828 20.1285C68.9624 17.9698 67.1596 16.0445 65.1383 14.4693C63.117 12.894 60.7679 11.9022 58.5281 10.9687C56.2882 10.0352 53.9938 9.04335 51.6447 8.28489C49.2956 7.58478 46.8919 7.00135 44.3789 6.47626V6.30123V6.30123Z" fill="white" />
                                            <path d="M63.9365 30.9809C61.0411 30.1057 58.0365 28.8222 54.9772 27.5387C54.8133 26.7219 54.1031 25.73 52.7374 24.4465C50.7707 22.5795 47.0012 22.6378 43.7781 23.4546C40.2271 22.5795 36.6762 22.2294 33.2891 23.1046C5.59175 31.2726 21.2705 51.1093 11.1094 71.1209C12.5298 74.3881 28.1539 93.5247 50.7161 88.3905C50.7161 88.3905 43.0133 68.6122 60.4402 59.1023C74.5893 51.401 84.7505 37.0486 63.9365 30.9809Z" fill="#8BC53F" />
                                            <path d="M43.7783 23.4534C45.7996 23.6285 53.12 26.1372 54.9775 27.5374C53.3932 22.695 48.1487 22.0532 43.7783 23.4534Z" fill="#009345" />
                                            <path d="M67.3784 43.9913C67.3784 45.5666 65.5757 46.3834 64.5377 45.2748C63.4997 44.1663 64.2099 42.241 65.6849 42.1827C66.6136 42.241 67.3784 42.9995 67.3784 43.9913ZM45.6904 35.7649C45.6904 39.0905 43.7783 42.1243 40.8829 43.4079C37.9875 44.6914 34.6551 43.9913 32.4153 41.5992C30.1755 39.2072 29.5199 35.6482 30.7218 32.5561C31.9236 29.4639 34.7644 27.4219 37.8783 27.4219C39.9542 27.4219 41.9209 28.297 43.3413 29.8139C44.8709 31.4475 45.6904 33.5479 45.6904 35.7649Z" fill="white" />
                                            <path d="M43.3955 35.8223C43.3955 38.1561 42.0844 40.3148 40.0085 41.1899C37.9872 42.065 35.6381 41.5983 34.0538 39.9064C32.4695 38.2144 32.0325 35.764 32.852 33.547C33.6714 31.3883 35.6927 29.9297 37.8779 29.9297C40.9372 29.988 43.3955 32.6135 43.3955 35.8223Z" fill="#58595B" />
                                            <path d="M73.6612 47.6661C67.3787 52.3919 60.2222 55.9508 50.1157 55.9508C45.3629 55.9508 44.4341 50.5832 41.2656 53.2087C39.6267 54.5506 33.9452 57.5844 29.4109 57.4094C24.8766 57.176 17.5562 54.3172 15.5349 44.0488C14.7155 54.3756 14.3331 61.9601 10.6729 70.6533C17.884 83.022 35.0924 92.5319 50.7166 88.4479C49.0231 75.9041 59.2935 63.6521 65.0296 57.4094C67.2695 54.959 71.476 51.1083 73.6612 47.6661Z" fill="#8BC53F" />
                                            <path d="M73.3881 47.957C71.4215 49.8824 69.127 51.2826 66.7779 52.5078C64.3742 53.733 61.9159 54.6665 59.3482 55.4249C56.7806 56.1251 54.1038 56.6502 51.4269 56.4168C48.6954 56.1834 45.9639 55.1916 44.1611 53.0329L44.2704 52.9162C46.4556 54.4331 49.0232 54.9582 51.5362 55.0749C54.1038 55.1332 56.6714 54.9582 59.1844 54.4331C61.6973 53.8497 64.2103 53.0329 66.614 51.9827C69.0177 50.9325 71.3668 49.7073 73.3881 47.957Z" fill="#58595B" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2425_1139">
                                                <rect width="327.725" height="92.5904" fill="white" transform="translate(0.292969)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>


                            {/* <div className="partners__col">
                                <a className="partners__item">
                                    <img src="./img/mainpage/partner-img-1.svg" alt="" />
                                </a>
                            </div>
                            <div className="partners__col">
                                <a className="partners__item">
                                    <img src="./img/mainpage/partner-img-2.svg" alt="" />
                                </a>
                            </div>
                            <div className="partners__col">
                                <a className="partners__item">
                                    <img src="./img/mainpage/partner-img-3.svg" alt="" />
                                </a>
                            </div>

                            <div className="partners__col">
                                <a className="partners__item">
                                    <img src="./img/mainpage/partner-img-4.svg" alt="" />
                                </a>
                            </div>
                            <div className="partners__col">
                                <a className="partners__item">
                                    <img src="./img/mainpage/partner-img-2.svg" alt="" />
                                </a>
                            </div> */}
                        </Slider>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default HomePage;