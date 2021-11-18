import React from "react";
import InfoBox from "./components/infoBox";
import Tokenomics from "./components/tokenomics";
import Roadmap from "./components/roadmap";
import { useTranslation } from "react-i18next";

const InfoPage = () => {
  const {t, i18n} = useTranslation();
        return (
            <div className="inner-page">
                <div className="container">
                    <div className="head-page">
                        <div className="breadcrumbs">
                            <a href="#">{t('nav.home')}</a>
                            <span className="separator">
                              <img src="./img/arrow-breadcrumbs.svg" alt="" />
                            </span>
                            <a href="#">{t('nav.info')}</a>
                        </div>
                    </div>
                    <InfoBox/>
                    <Tokenomics/>
                  <div className="distribution-box">
                    <div className="container">
                      <div className="head-box">
                        <h2 className="black">{t('info.distribution')}</h2>
                        <p>{t('info.text')}</p>
                      </div>
                      <div className="distribution-list">
                        <div className="item center-top">
                          <span className="info">4 {t('info.match')}</span>
                          <strong>30%</strong>
                        </div>
                        <div className="item left">
                          <span className="info">5 {t('info.match')}</span>
                          <strong>30%</strong>
                        </div>
                        <div className="item center ticket">
                          <div className="ico">
                            <svg width="78" height="60" viewBox="0 0 78 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 21.128H0.5V22.1887L1.50013 22.5422L2 21.128ZM2 39.872L1.50013 38.4578L0.5 38.8113V39.872H2ZM74.875 39.872H76.375V38.8113L75.3749 38.4578L74.875 39.872ZM74.875 21.128L75.3749 22.5422L76.375 22.1887V21.128H74.875ZM3.5 6C3.5 5.72386 3.72386 5.5 4 5.5V2.5C2.067 2.5 0.5 4.067 0.5 6H3.5ZM3.5 21.128V6H0.5V21.128H3.5ZM10.125 30.5C10.125 25.5177 6.94014 21.2831 2.49987 19.7137L1.50013 22.5422C4.77926 23.7012 7.125 26.8286 7.125 30.5H10.125ZM2.49987 41.2863C6.94014 39.7169 10.125 35.4823 10.125 30.5H7.125C7.125 34.1714 4.77926 37.2988 1.50013 38.4578L2.49987 41.2863ZM3.5 55V39.872H0.5V55H3.5ZM4 55.5C3.72386 55.5 3.5 55.2761 3.5 55H0.5C0.5 56.933 2.067 58.5 4 58.5V55.5ZM72.875 55.5H4V58.5H72.875V55.5ZM73.375 55C73.375 55.2761 73.1511 55.5 72.875 55.5V58.5C74.808 58.5 76.375 56.933 76.375 55H73.375ZM73.375 39.872V55H76.375V39.872H73.375ZM66.75 30.5C66.75 35.4823 69.9349 39.7169 74.3751 41.2863L75.3749 38.4578C72.0957 37.2988 69.75 34.1714 69.75 30.5H66.75ZM74.3751 19.7137C69.9349 21.2831 66.75 25.5177 66.75 30.5H69.75C69.75 26.8286 72.0957 23.7012 75.3749 22.5422L74.3751 19.7137ZM73.375 6V21.128H76.375V6H73.375ZM72.875 5.5C73.1511 5.5 73.375 5.72386 73.375 6H76.375C76.375 4.067 74.808 2.5 72.875 2.5V5.5ZM4 5.5H72.875V2.5H4V5.5Z" fill="#1E2632"/>
                              <path d="M48 4V11" stroke="#1E2632" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M48 27V34" stroke="#1E2632" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M48 50V57" stroke="#1E2632" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                          <span className="name">{t('info.price_title')}</span>
                          <span className="arrow top">
                    <svg width="16" height="88" viewBox="0 0 16 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 86.5C7 87.0523 7.44772 87.5 8 87.5C8.55228 87.5 9 87.0523 9 86.5H7ZM8.70711 0.792892C8.31658 0.402367 7.68342 0.402367 7.29289 0.792892L0.928932 7.15685C0.538408 7.54738 0.538408 8.18054 0.928932 8.57107C1.31946 8.96159 1.95262 8.96159 2.34315 8.57107L8 2.91422L13.6569 8.57107C14.0474 8.96159 14.6805 8.96159 15.0711 8.57107C15.4616 8.18054 15.4616 7.54738 15.0711 7.15685L8.70711 0.792892ZM9 86.5L9 1.5H7L7 86.5H9Z" fill="#C4C4C4"/>
                    </svg>
                  </span>
                          <span className="arrow left">
                    <svg width="87" height="16" viewBox="0 0 87 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M86 9C86.5523 9 87 8.55228 87 8C87 7.44772 86.5523 7 86 7L86 9ZM0.292893 7.29289C-0.0976333 7.68341 -0.0976334 8.31657 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6568L2.41422 7.99999L8.07107 2.34314C8.46159 1.95261 8.46159 1.31945 8.07107 0.928925C7.68054 0.538401 7.04738 0.538401 6.65685 0.928925L0.292893 7.29289ZM86 7L1 6.99999L1 8.99999L86 9L86 7Z" fill="#C4C4C4"/>
                    </svg>
                  </span>
                          <span className="arrow right">
                    <svg width="87" height="16" viewBox="0 0 87 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M86.7071 8.70711C87.0976 8.31658 87.0976 7.68342 86.7071 7.29289L80.3431 0.928932C79.9526 0.538407 79.3195 0.538407 78.9289 0.928932C78.5384 1.31946 78.5384 1.95262 78.9289 2.34315L84.5858 8L78.9289 13.6569C78.5384 14.0474 78.5384 14.6805 78.9289 15.0711C79.3195 15.4616 79.9526 15.4616 80.3431 15.0711L86.7071 8.70711ZM1 6.99999C0.447716 6.99999 4.82823e-08 7.44771 0 7.99999C-4.82823e-08 8.55228 0.447716 8.99999 1 8.99999L1 6.99999ZM86 7L1 6.99999L1 8.99999L86 9L86 7Z" fill="#C4C4C4"/>
                    </svg>
                  </span>
                          <span className="arrow bottom">
                    <svg width="16" height="88" viewBox="0 0 16 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 87.2071C7.68342 87.5976 8.31658 87.5976 8.70711 87.2071L15.0711 80.8431C15.4616 80.4526 15.4616 79.8195 15.0711 79.4289C14.6805 79.0384 14.0474 79.0384 13.6569 79.4289L8 85.0858L2.34315 79.4289C1.95262 79.0384 1.31946 79.0384 0.928932 79.4289C0.538408 79.8195 0.538408 80.4526 0.928932 80.8431L7.29289 87.2071ZM9 1.5C9 0.947716 8.55228 0.5 8 0.5C7.44772 0.5 7 0.947716 7 1.5H9ZM9 86.5L9 1.5H7L7 86.5H9Z" fill="#C4C4C4"/>
                    </svg>
                  </span>
                        </div>
                        <div className="item right">
                          <span className="info">3 {t('info.match')}</span>
                          <strong>30%</strong>
                        </div>
                        <div className="item center-bottom">
                          <span className="info">{t('info.dev')}</span>
                          <strong>10%</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Roadmap/>
                  {/*<Team/>*/}
                </div>
            </div>
        )
}

export default InfoPage;