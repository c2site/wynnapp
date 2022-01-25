import React from "react";
import { useTranslation } from "react-i18next";

const PresalePage = () => {
  const {t, i18n} = useTranslation();
    return (
        <>
          <div className="inner-page presale-page">
            <div className="container">
              <div className="head-page">
                <div className="breadcrumbs">
                  <span className="name">{t('nav.home')}</span>
                  <span className="separator">
                                <img src="./img/arrow-breadcrumbs.svg" alt="" />
                              </span>
                  <span className="name">{t('rust.pre-sale')}</span>
                </div>
              </div>
              <h2 className="title-page">{t('rust.pre-sale')}</h2>
              <div className="flex row f-space-between">
                <div className="presale-bar col-lg-4">
                  <div className="head">
                    <h3>{t('rust.pre-sale')}</h3>
                  </div>
                  <form action="#" className="form">
                    <div className="input-box">
                      <label htmlFor="">{t('rust.amount')}</label>
                      <input type="number" name="" id="" />
                    </div>
                    <div className="input-box">
                      <label htmlFor="">{t('rust.total_win')}</label>
                      <input type="number" value="100" disabled />
                    </div>
                    <div className="progress-sale">
                      <div className="title-progress">
                        <span className="active">{t('rust.start')}</span>
                        <span>{t('rust.soft_cap')}</span>
                        <span>{t('rust.hard_cap')}</span>
                      </div>
                      <div className="line">
                        <div></div>
                      </div>
                    </div>
                    <p>{t('rust.pre_text')}</p>
                    <div className="btn-holder flex">
                      <button className="btn btn-active">{t('rust.soft_appruve')}</button>
                      <button className="btn btn-primary">{t('rust.send')}</button>
                    </div>
                  </form>
                </div>
                <div className="presale-info col-lg-8">
                  <div className="video-box">
                    <div className="img">
                      <img src="./img/img-video.png" alt="" />
                    </div>
                    <a href="#" className="play">
                      <svg width="50" height="53" viewBox="0 0 50 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_201_954)">
                          <circle cx="25" cy="25" r="25" fill="url(#paint0_linear_201_954)"/>
                        </g>
                        <path d="M20.5 18.7119C20.5 17.7804 21.447 17.1982 22.2045 17.6639L32.4318 23.952C33.1894 24.4178 33.1894 25.5822 32.4318 26.048L22.2045 32.3361C21.447 32.8019 20.5 32.2196 20.5 31.2881L20.5 18.7119Z" fill="#212129"/>
                        <defs>
                          <filter id="filter0_d_201_954" x="0" y="0" width="50" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="3"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_201_954"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_201_954" result="shape"/>
                          </filter>
                          <linearGradient id="paint0_linear_201_954" x1="-2.75862" y1="42.5532" x2="53.8587" y2="39.7424" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFE58B"/>
                            <stop offset="1" stop-color="#E8922D"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <p>{t('rust.under_video')}</p>
                </div>
              </div>
            </div>
          </div>
        </>
    )
};

export default PresalePage;