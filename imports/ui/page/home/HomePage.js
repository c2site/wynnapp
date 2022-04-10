import React from 'react';
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

import { DeviceAndroidIcon, DeviceIosIcon, DevicePcIcon, DevicePsIcon, DiscordIcon, PlayIcon, RoketIcon, ServerIcon, SliderNextIcon, SliderPrevIcon, StartIcon, TelegramIcon, TwitterIcon, UsersIcon } from '../../svg/icons';

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
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
        infinite: true,
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
        infinite: true,
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
                    <h2 className="banner__subtitle color-yellow">Game ecosystem</h2>
                    <h1 className="banner__title">WynnGames</h1>
                    <div className="social">
                        <a href="#" className="social__item">
                            <span className="icon" style={{
                                backgroundColor: "#1FC8FE"
                            }}>
                                <TwitterIcon />
                            </span>
                            <span className="text">Twitter</span>
                        </a>
                        <a className="social__item">
                            <span className="icon" style={{
                                backgroundColor: "#1BA8EC"
                            }}>
                                <TelegramIcon />
                            </span>
                            <span className="text">Telegram</span>
                        </a>
                        <a href="#" className="social__item">
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
                    <h2 className="section__title text-center mb-12">top games</h2>
                    {/*<p className="section__text text-center mb-100">*/}
                    {/*    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s*/}
                    {/*</p>*/}
                    <div className="top-games__wrapper">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-8 mx-lg-0 mx-md-auto col-sm-12">
                                <div className="top-games__item">
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
                                        <h2 className="top-games__name">Rust</h2>
                                    </div>
                                    <div className="top-games__info">
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

                            <div className="col-xl-4 col-lg-6 col-md-8 mx-lg-0 mx-md-auto col-sm-12">
                                <div className="top-games__item">
                                    <div className="top-games__img">
                                        <div className="top-games__platforms">
                                            <div className="platforms__item">
                                                <DeviceAndroidIcon />
                                                <p>android</p>
                                            </div>
                                            <div className="platforms__item">
                                                <DeviceIosIcon />
                                                <p>ios</p>
                                            </div>
                                        </div>
                                        <img src="./img/mainpage/pirates-bg.png" alt="" />
                                        <h2 className="top-games__name">pirates</h2>
                                    </div>
                                    <div className="top-games__info">
                                        <div className="item">
                                            <RoketIcon />
                                            <p>
                                                start
                                            </p>
                                        </div>
                                        <div className="item">
                                            <StartIcon />
                                            <div className="countdown">
                                                <span className="days">13 days</span>
                                                <span className="hours">10 hours</span>
                                                <span className="minutes">15 minutes</span>
                                                <span className="seconds">48 seconds</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-8 mx-lg-0 mx-md-auto col-sm-12">
                                <div className="top-games__item">
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
                                        <h2 className="top-games__name">Rust</h2>
                                    </div>
                                    <div className="top-games__info">
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
            </section>

            <section className="howItWorks">
                <div className="container">
                    <h2 className="section__title text-center mb-12">How it works?</h2>
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
                                <button className="btn-play">
                                    <PlayIcon />
                                </button>
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
                                            <span>{t('info.roadmap.list1.name')}</span>
                                        </div>
                                        <div className="body">
                                            <div className="box">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                                <span>{t('info.roadmap.list1.text1')}</span>
                                            </div>
                                            <div className="box">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                                <span>{t('info.roadmap.list1.text2')}</span>
                                            </div>
                                            <div className="box">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                                <span>{t('info.roadmap.list1.text3')}</span>
                                            </div>
                                            <div className="box">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                                <span>{t('info.roadmap.list1.text4')}</span>
                                            </div>
                                            <div className="box">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                                <span>{t('info.roadmap.list1.text5')}</span>
                                            </div>
                                            <div className="box">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                                <span>{t('info.roadmap.list1.text6')}</span>
                                            </div>
                                            <div className="box">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                                <span>{t('info.roadmap.list1.text7')}</span>
                                            </div>
                                            <div className="box">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                                <span>{t('info.roadmap.list1.text8')}</span>
                                            </div>
                                            <div className="box">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                                <span>{t('info.roadmap.list1.text9')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="roadmap__item">
                                        <div className="item">
                                            <div className="head">
                                                <span>{t('info.roadmap.list2.name')}</span>
                                            </div>
                                            <div className="body">
                                                <div className="box">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                                    </svg>
                                                    <span>{t('info.roadmap.list2.text1')}</span>
                                                </div>
                                                <div className="box">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                                    </svg>
                                                    <span>{t('info.roadmap.list2.text2')}</span>
                                                </div>
                                                <div className="box">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.0015 6.59305C14.2439 5.63875 19.2494 5.00206 19.2494 5.00206C19.2494 5.00206 18.6127 10.0075 17.6584 12.2499C16.1151 15.8764 10.057 18.4371 10.057 18.4371L5.81434 14.1944C5.81434 14.1944 8.37507 8.13635 12.0015 6.59305Z" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M10.0558 18.4371L13.5913 21.9726L15.3591 15.2551" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M5.81438 14.1944L2.27884 10.6589L8.99636 8.89113" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M5.27382 16.1793C6.05756 15.7656 7.00191 15.382 7.00191 15.382L8.86351 17.2436C8.86351 17.2436 8.42713 18.1657 8.06618 18.9717C7.70524 19.7777 4.75372 19.4978 4.75372 19.4978C4.75372 19.4978 4.49009 16.593 5.27382 16.1793Z" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M12.1777 6.41626C12.1777 6.41626 12.5313 8.18403 14.2991 9.95179C16.0668 11.7196 17.8346 12.0731 17.8346 12.0731" stroke="#F6C465" stroke-width="1.5" />
                                                    </svg>
                                                    <span>{t('info.roadmap.list2.text3')}</span>
                                                </div>
                                                <div className="box">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.0015 6.59305C14.2439 5.63875 19.2494 5.00206 19.2494 5.00206C19.2494 5.00206 18.6127 10.0075 17.6584 12.2499C16.1151 15.8764 10.057 18.4371 10.057 18.4371L5.81434 14.1944C5.81434 14.1944 8.37507 8.13635 12.0015 6.59305Z" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M10.0558 18.4371L13.5913 21.9726L15.3591 15.2551" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M5.81438 14.1944L2.27884 10.6589L8.99636 8.89113" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M5.27382 16.1793C6.05756 15.7656 7.00191 15.382 7.00191 15.382L8.86351 17.2436C8.86351 17.2436 8.42713 18.1657 8.06618 18.9717C7.70524 19.7777 4.75372 19.4978 4.75372 19.4978C4.75372 19.4978 4.49009 16.593 5.27382 16.1793Z" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M12.1777 6.41626C12.1777 6.41626 12.5313 8.18403 14.2991 9.95179C16.0668 11.7196 17.8346 12.0731 17.8346 12.0731" stroke="#F6C465" stroke-width="1.5" />
                                                    </svg>
                                                    <span>{t('info.roadmap.list2.text4')}</span>
                                                </div>
                                                <div className="box">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.0015 6.59305C14.2439 5.63875 19.2494 5.00206 19.2494 5.00206C19.2494 5.00206 18.6127 10.0075 17.6584 12.2499C16.1151 15.8764 10.057 18.4371 10.057 18.4371L5.81434 14.1944C5.81434 14.1944 8.37507 8.13635 12.0015 6.59305Z" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M10.0558 18.4371L13.5913 21.9726L15.3591 15.2551" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M5.81438 14.1944L2.27884 10.6589L8.99636 8.89113" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M5.27382 16.1793C6.05756 15.7656 7.00191 15.382 7.00191 15.382L8.86351 17.2436C8.86351 17.2436 8.42713 18.1657 8.06618 18.9717C7.70524 19.7777 4.75372 19.4978 4.75372 19.4978C4.75372 19.4978 4.49009 16.593 5.27382 16.1793Z" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M12.1777 6.41626C12.1777 6.41626 12.5313 8.18403 14.2991 9.95179C16.0668 11.7196 17.8346 12.0731 17.8346 12.0731" stroke="#F6C465" stroke-width="1.5" />
                                                    </svg>
                                                    <span>{t('info.roadmap.list2.text5')}</span>
                                                </div>
                                                <div className="box">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.0015 6.59305C14.2439 5.63875 19.2494 5.00206 19.2494 5.00206C19.2494 5.00206 18.6127 10.0075 17.6584 12.2499C16.1151 15.8764 10.057 18.4371 10.057 18.4371L5.81434 14.1944C5.81434 14.1944 8.37507 8.13635 12.0015 6.59305Z" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M10.0558 18.4371L13.5913 21.9726L15.3591 15.2551" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M5.81438 14.1944L2.27884 10.6589L8.99636 8.89113" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M5.27382 16.1793C6.05756 15.7656 7.00191 15.382 7.00191 15.382L8.86351 17.2436C8.86351 17.2436 8.42713 18.1657 8.06618 18.9717C7.70524 19.7777 4.75372 19.4978 4.75372 19.4978C4.75372 19.4978 4.49009 16.593 5.27382 16.1793Z" stroke="#F6C465" stroke-width="1.5" />
                                                        <path d="M12.1777 6.41626C12.1777 6.41626 12.5313 8.18403 14.2991 9.95179C16.0668 11.7196 17.8346 12.0731 17.8346 12.0731" stroke="#F6C465" stroke-width="1.5" />
                                                    </svg>
                                                    <span>{t('info.roadmap.list2.text6')}</span>
                                                </div>
                                                <div className="box">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2" stroke-linecap="round" />
                                                    </svg>
                                                    <span>{t('info.roadmap.list2.text7')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list2.text10')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list2.text8')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list2.text9')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="roadmap__item">
                                        <div className="item">
                                            <div className="head">
                                                <span>{t('info.roadmap.list3.name')}</span>
                                            </div>
                                            <div className="body">
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list3.text1')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list3.text7')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list3.text2')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list3.text3')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list3.text4')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list3.text5')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list3.text6')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="roadmap__item">
                                        <div className="item">
                                            <div className="head">
                                                <span>{t('info.roadmap.list4.name')}</span>
                                            </div>
                                            <div className="body">
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list4.text1')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list4.text2')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list4.text3')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list4.text4')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list4.text5')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="roadmap__item">
                                        <div className="item">
                                            <div className="head">
                                                <span>{t('info.roadmap.list5.name')}</span>
                                            </div>
                                            <div className="body">
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list5.text1')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list5.text2')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list5.text3')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list5.text4')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list5.text5')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list5.text6')}</span>
                                                </div>
                                                <div className="box">
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
                                                    <span>{t('info.roadmap.list5.text7')}</span>
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
                                                <img src="./img/andrey.svg" alt="" />
                                            </div>
                                            <div className="team-item__content">
                                                <span className="name">Andrey</span>
                                                <p className="position">Block-Chain Developer</p>
                                                <div className="social-items">
                                                    <a href="#" className="social-items__item">
                                                        <TwitterIcon />
                                                    </a>
                                                    <a href="#" className="social-items__item">
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
                                                <span className="name">Yevhenii</span>
                                                <p className="position">Chief designer</p>
                                                <div className="social-items">
                                                    <a href="#" className="social-items__item">
                                                        <TwitterIcon />
                                                    </a>
                                                    <a href="#" className="social-items__item">
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
                                                <span className="name">Roman</span>
                                                <p className="position">Marketing Strategy</p>
                                                <div className="social-items">
                                                    <a href="#" className="social-items__item">
                                                        <TwitterIcon />
                                                    </a>
                                                    <a href="#" className="social-items__item">
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
                                                <img src="./img/max.svg" alt="" />
                                            </div>
                                            <div className="team-item__content">
                                                <span className="name">Max</span>
                                                <p className="position">Founder</p>
                                                <div className="social-items">
                                                    <a href="#" className="social-items__item">
                                                        <TwitterIcon />
                                                    </a>
                                                    <a href="#" className="social-items__item">
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
                                                <span className="name">Roman</span>
                                                <p className="position">DEVELOPMENT</p>
                                                <div className="social-items">
                                                    <a href="#" className="social-items__item">
                                                        <TwitterIcon />
                                                    </a>
                                                    <a href="#" className="social-items__item">
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
                                                <span className="name">Vitaly</span>
                                                <p className="position">DEVELOPMENT</p>
                                                <div className="social-items">
                                                    <a href="#" className="social-items__item">
                                                        <TwitterIcon />
                                                    </a>
                                                    <a href="#" className="social-items__item">
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
                                                <span className="name">Vasily</span>
                                                <p className="position">DEVELOPMENT</p>
                                                <div className="social-items">
                                                    <a href="#" className="social-items__item">
                                                        <TwitterIcon />
                                                    </a>
                                                    <a href="#" className="social-items__item">
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
                                <a href="#" className="partners__item">
                                    <img src="./img/mainpage/partner-img-1.svg" alt="" />
                                </a>
                            </div>
                            <div className="partners__col">
                                <a href="#" className="partners__item">
                                    <img src="./img/mainpage/partner-img-2.svg" alt="" />
                                </a>
                            </div>
                            <div className="partners__col">
                                <a href="#" className="partners__item">
                                    <img src="./img/mainpage/partner-img-3.svg" alt="" />
                                </a>
                            </div>

                            <div className="partners__col">
                                <a href="#" className="partners__item">
                                    <img src="./img/mainpage/partner-img-4.svg" alt="" />
                                </a>
                            </div>
                            <div className="partners__col">
                                <a href="#" className="partners__item">
                                    <img src="./img/mainpage/partner-img-2.svg" alt="" />
                                </a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default HomePage;