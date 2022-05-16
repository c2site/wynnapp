import React from 'react';
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

import {
  DeviceAndroidIcon,
  DeviceIosIcon,
  DevicePcIcon,
  DevicePsIcon,
  DiscordIcon,
  IconCheckFalse,
  IconCheckTrue,
  IconCheckUnderway,
  PlayIcon,
  RoketIcon,
  ServerIcon,
  SliderNextIcon,
  SliderPrevIcon,
  StartIcon,
  TelegramIcon,
  TwitterIcon,
  UsersIcon
} from '../../svg/icons';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import ReactPlayer from 'react-player';

const HomePage = () => {
  const {t, i18n} = useTranslation();

  function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
      <button
        className={className}
        style={{...style}}
        onClick={onClick}
      >
        <SliderPrevIcon />
      </button>
    );
  }

  function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
      <button
        className={className}
        style={{...style}}
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

              {/*<div className="col-xl-4 col-lg-6 col-md-8 mx-lg-0 mx-md-auto col-sm-12">*/}
              {/*    <div className="top-games__item">*/}
              {/*        <div className="top-games__img">*/}
              {/*            <div className="top-games__platforms">*/}
              {/*                <div className="platforms__item">*/}
              {/*                    <DeviceAndroidIcon />*/}
              {/*                    <p>android</p>*/}
              {/*                </div>*/}
              {/*                <div className="platforms__item">*/}
              {/*                    <DeviceIosIcon />*/}
              {/*                    <p>ios</p>*/}
              {/*                </div>*/}
              {/*            </div>*/}
              {/*            <img src="./img/mainpage/tower-game-bg.png" alt="" />*/}
              {/*           <a href={'/game-single/'} className="top-games__name">Tower of Misery</a>*/}
              {/*        </div>*/}
              {/*        <div className="top-games__info">*/}
              {/*            <div className="item">*/}
              {/*                <ServerIcon />*/}
              {/*                <p>*/}
              {/*                    server online:*/}
              {/*                    <span>13</span>*/}
              {/*                </p>*/}
              {/*            </div>*/}
              {/*            <div className="item">*/}
              {/*                <UsersIcon />*/}
              {/*                <p>*/}
              {/*                    Users online:*/}
              {/*                    <span>17 550</span>*/}
              {/*                </p>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}

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
                      Fast and simple integration system that allows synchronization of any application with blockchain
                      technology in a few clicks.
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
                      In-game loyalty system which provides players with special rewards for acquiring certain add-ons.
                      It's possible to connect to all games at once.
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
                      A system which allows users to exchange NFT between all the games and all the characters in the
                      Wynn Games Ecosystem.
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
                      Currency exchange system with transfer function from one game to another. Games are hosted
                      exclusively at the Wynn Games Center.
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
                      An easy and handy dev panel for developers to connect the required application to the Wynn Games
                      Ecosystem and the Wynn Games Center.
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
                    The first experimental game in our ecosystem was Rust. Using the Wynn SDK system, we synced it with
                    Binance Smart Chain. Upon completion, the team conducted testing on the Wynn Rust server. We tested
                    all the features of the Wynn Games ecosystem and made sure everything worked flawlessly. Rust is a
                    project of Facepunch Studios. The main idea of the game is to survive at any cost. Events will take
                    place in an extremely hostile environment where the whole world is turned against you.
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
                          Acts as a reliable and safe platform where games of different categories are located. In Game
                          Center, you can connect them to the Wynn SDK system. You can use the search engine to quickly
                          find a game that interests you.
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
                          Here you can sell, buy and exchange different goods. A specialized marketplace for players to
                          earn in-game items, currency and even their in-game experience.
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
                          A place for game developers who want to join our Wynn SDK system. We will provide them with
                          all the resources they need to achieve their goals.
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
                          An easy boost or the right resource won't hurt anyone. This is the reason why the Wynn Games
                          Ecosystem created the single Lottery system. Do your best and Try your luck!
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
                      The Wynn Games Ecosystem is the foundation on which the future will be built. The purpose of which
                      is to introduce and attract new people from the gaming industry to the world of cryptocurrencies.
                      In this way our ecosystem will unite these two components into one, which will allow you to do
                      what you like, i.e. to play and earn money. You don't need to be a famous YouTube blogger or
                      popular on Twitch to do this. Absolutely anyone can start earning, whether you are a beginner or a
                      pro, famous or common person - it does not matter! Everything will depend on your skills and
                      gaming goals. We are also considering offers from developers to add their games to our Game Center
                      and connect them to the Wynn SDK. Thereby strengthening our foundation. Our ecosystem currently
                      includes the following components: Game Center, Game Starter, Market Place, and Lottery. You can
                      find all this on our official website. The Wynn Games team is not going to stop, there's still a
                      lot of work ahead.
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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12.3137L9.65685 17.9706L20.9706 6.65687" stroke="#28D83A" stroke-width="2"
                                      stroke-linecap="round" />
                            </svg>
                          {t('info.roadmap.complete')}
                        </span>
            <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M12.0015 6.59305C14.2439 5.63875 19.2494 5.00206 19.2494 5.00206C19.2494 5.00206 18.6127 10.0075 17.6584 12.2499C16.1151 15.8764 10.057 18.4371 10.057 18.4371L5.81434 14.1944C5.81434 14.1944 8.37507 8.13635 12.0015 6.59305Z"
                                  stroke="#F6C465" stroke-width="1.5" />
                                <path d="M10.0558 18.4371L13.5913 21.9726L15.3591 15.2551" stroke="#F6C465"
                                      stroke-width="1.5" />
                                <path d="M5.81438 14.1944L2.27884 10.6589L8.99636 8.89113" stroke="#F6C465"
                                      stroke-width="1.5" />
                                <path
                                  d="M5.27382 16.1793C6.05756 15.7656 7.00191 15.382 7.00191 15.382L8.86351 17.2436C8.86351 17.2436 8.42713 18.1657 8.06618 18.9717C7.70524 19.7777 4.75372 19.4978 4.75372 19.4978C4.75372 19.4978 4.49009 16.593 5.27382 16.1793Z"
                                  stroke="#F6C465" stroke-width="1.5" />
                                <path
                                  d="M12.1777 6.41626C12.1777 6.41626 12.5313 8.18403 14.2991 9.95179C16.0668 11.7196 17.8346 12.0731 17.8346 12.0731"
                                  stroke="#F6C465" stroke-width="1.5" />
                            </svg>
              {t('info.roadmap.underway')}
                        </span>
            <span>
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.75" y="3.125" width="17.5" height="16.625" rx="3" stroke="#D94848"
                                      stroke-width="1.5" />
                                <path d="M6.125 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M14.875 1.375V3.125" stroke="#D94848" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M1.75 7.5H19.25" stroke="#D94848" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M6.5625 11.875H8.3125" stroke="#D94848" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.6875 11.875H14.4375" stroke="#D94848" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.5625 15.375H8.3125" stroke="#D94848" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.6875 15.375H14.4375" stroke="#D94848" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
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
                        <span className="name">Andey P</span>
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
                          <a href={'https://twitter.com/romochka_buchik'} target={'_blank'}
                             className="social-items__item">
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
                          <a href={'https://twitter.com/KurilovVitaly/'} target={'_blank'}
                             className="social-items__item">
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
                        <img src="./img/photo-03.svg" alt="" />
                      </div>
                      <div className="team-item__content">
                        <span className="name">Vasile D</span>
                        <p className="position">Team Representative (I.M)</p>
                        <div className="social-items">
                          <a href={'https://twitter.com/vasiledorofeev'} target={'_blank'}
                             className="social-items__item">
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
                        <img src="./img/photo-01.svg" alt="" />
                      </div>
                      <div className="team-item__content">
                        <span className="name">Artemiy N</span>
                        <p className="position">CMO</p>
                        <div className="social-items">
                          {/*<a href={'https://t.me/Mooti_s'} target={'_blank'} className="social-items__item">*/}
                          {/*    <TelegramIcon />*/}
                          {/*</a>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="item">
                    <div className="team-item__wrapper">
                      <div className="img">
                        <img src="./img/photo-02.svg" alt="" />
                      </div>
                      <div className="team-item__content">
                        <span className="name">Kieu S</span>
                        <p className="position">PR</p>
                        <div className="social-items">
                          {/*<a href={'https://t.me/Mooti_s'} target={'_blank'} className="social-items__item">*/}
                          {/*    <TelegramIcon />*/}
                          {/*</a>*/}
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
                <a href={'https://devgent.net/'} target={'_blank'} className="partners__item">
                  <svg width="250" height="110" viewBox="0 0 202 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M46.4751 92.0683C38.6668 92.0683 32.3154 98.4196 32.3154 106.228C32.3154 114.036 38.6668 120.388 46.4751 120.388C50.2964 120.388 53.8603 118.896 56.5081 116.187L57.6161 115.197L53.3237 110.97L52.2463 112.047C50.7413 113.552 48.6387 114.416 46.4751 114.416C43.138 114.416 40.163 112.427 38.9808 109.212L60.6347 109.312V106.228C60.6304 98.4196 54.2834 92.0683 46.4751 92.0683ZM38.8892 103.105C40.163 100.025 43.1424 98.0358 46.4751 98.0358C49.8252 98.0358 52.7915 100.025 53.9388 103.24L38.8892 103.105Z"
                      fill="#00CAD6"></path>
                    <path
                      d="M83.9157 91.968L75.0779 111.423L66.4844 91.968H59.9717L72.5304 120.388H77.7999L90.5637 91.968H83.9157Z"
                      fill="#00CAD6"></path>
                    <path
                      d="M136.279 92.0683C128.47 92.0683 122.119 98.4196 122.119 106.228C122.119 114.036 128.47 120.388 136.279 120.388C140.1 120.388 143.664 118.896 146.312 116.187L147.42 115.197L143.127 110.97L142.05 112.047C140.545 113.552 138.442 114.416 136.279 114.416C132.942 114.416 129.967 112.427 128.785 109.212L150.438 109.312V106.228C150.438 98.4196 144.087 92.0683 136.279 92.0683ZM128.693 103.105C129.967 100.025 132.946 98.0358 136.279 98.0358C139.633 98.0358 142.6 100.025 143.742 103.24L128.693 103.105Z"
                      fill="#fff"></path>
                    <path
                      d="M193.179 91.9679L193.279 84.0157H187.111V120.388H193.179L193.279 98.0357L201.328 98.0576V91.9898L193.179 91.9679Z"
                      fill="#fff"></path>
                    <path
                      d="M168.472 92.0683C165.793 92.0683 163.198 92.8622 160.803 94.2581V91.968H154.635V120.388L160.716 120.488V120.388H160.799V104.967C161.222 101.089 164.48 98.0488 168.467 98.0488C172.742 98.0488 176.223 101.526 176.223 105.8L176.123 120.388H182.208V105.8C182.208 98.2321 176.044 92.0683 168.472 92.0683Z"
                      fill="#fff"></path>
                    <path
                      d="M22.1992 94.5809C19.8261 92.9363 17.0518 92.0683 14.164 92.0683C6.35571 92.0683 0 98.4196 0 106.228C0 114.036 6.35134 120.388 14.164 120.388C17.0038 120.388 19.7433 119.541 22.2559 118.028V120.348V120.383H28.3237V120.348H28.3847L28.424 84.0113H22.1992V94.5809ZM14.164 114.42C9.64916 114.42 5.97183 110.747 5.97183 106.228C5.97183 101.709 9.64479 98.0357 14.164 98.0357C18.7574 98.0357 22.3518 101.635 22.3518 106.228C22.3562 110.747 18.6789 114.42 14.164 114.42Z"
                      fill="#00CAD6"></path>
                    <path
                      d="M93.0635 131.564C93.0635 136.192 96.8717 140 101.5 140H104.196L106.948 134.142H101.5C100.095 134.142 98.9219 132.968 98.9219 131.564C98.9219 130.159 100.095 128.985 101.5 128.985H109.409L112.161 123.127H101.496C96.8717 123.123 93.0635 126.874 93.0635 131.564Z"
                      fill="#fff"></path>
                    <path
                      d="M116.47 89.8043L112.055 94.2189C109.861 92.823 107.275 91.9898 104.487 91.9898C96.6613 91.9898 90.2969 98.3542 90.2969 106.18C90.2969 114.006 96.6613 120.37 104.487 120.37C112.313 120.37 118.677 114.006 118.677 106.18C118.677 103.393 117.84 100.81 116.448 98.6159L120.863 94.2014L116.47 89.8043ZM104.491 114.394C99.9547 114.394 96.2774 110.717 96.2774 106.18C96.2774 101.643 99.9547 97.966 104.491 97.966C109.028 97.966 112.705 101.643 112.705 106.18C112.705 110.717 109.028 114.394 104.491 114.394Z"
                      fill="#fff"></path>
                    <path
                      d="M100.67 74.384C121.125 74.384 137.788 57.7204 137.788 37.1178H119.306C119.306 47.4213 110.821 55.7531 100.67 55.7531C90.367 55.7531 82.0352 47.4213 82.0352 37.1178C82.0352 26.967 90.367 18.6353 100.67 18.6353V0C80.0679 0 63.4043 16.6636 63.4043 37.1178C63.4043 57.7204 80.0679 74.384 100.67 74.384Z"
                      fill="#fff"></path>
                    <path
                      d="M119.187 0.00436401V7.54222C119.187 17.8108 110.869 26.1295 100.6 26.1295C94.4931 26.1295 89.6162 31.0675 89.6162 37.1135C89.6162 43.1595 94.4888 48.0975 100.6 48.0975C106.646 48.0975 111.584 43.1595 111.584 37.1135C111.584 33.2006 112.827 29.3357 115.126 26.1644C117.377 23.0542 120.588 20.6724 124.226 19.4423C127.031 18.4913 129.897 18.6571 132.837 18.6571H137.84V0.00436401H119.187Z"
                      fill="#00CAD6"></path>
                  </svg>
                </a>
              </div>

              <div className="partners__col">
                <a href={'https://www.bitmart.com/'} target={'_blank'} className="partners__item">
                  <img src="./img/mainpage/partner-img-5.svg" alt="" />
                </a>
              </div>

              <div className="partners__col">
                <a href={'https://contractchecker.app/'} target={'_blank'} className="partners__item">
                  <img src="./img/mainpage/partner-img-6.svg" alt="" />
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