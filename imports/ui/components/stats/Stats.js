import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const [data, setData] = useState({lottery: 0, users: 0, win: 0});
  const {t, i18n} = useTranslation();

  return (
    <>
      <div className="stats-box container">
        <h2>
          {t('stats.title')}
        </h2>
        <div className="stats-list">
          <div className="item">
            <div className="ico">
              <svg width="135" height="135" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.63794 50.625L28.1246 11.25H106.874L129.361 50.625L67.499 123.75L5.63794 50.625Z" stroke="#77FEFE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.625 50.625H129.375" stroke="#77FEFE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M45 50.625L50.625 11.25" stroke="#77FEFE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M90 50.625L84.375 11.25" stroke="#77FEFE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M67.5 123.75L45 50.625" stroke="#77FEFE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M67.5 123.75L90 50.625" stroke="#77FEFE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span className="number">{data?.lottery}</span>
            <span className="name">{t('stats.games')}</span>
          </div>
          <div className="item">
            <div className="ico">
              <svg width="135" height="135" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M94.6253 118.125V106.875C94.6253 100.908 92.2547 95.1847 88.0352 90.9651C83.8156 86.7455 78.0926 84.375 72.1253 84.375H27.1252C21.1579 84.375 15.4349 86.7455 11.2153 90.9651C6.99577 95.1847 4.62524 100.908 4.62524 106.875V118.125" stroke="#77FF85" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M49.6248 61.875C62.0512 61.875 72.1248 51.8014 72.1248 39.375C72.1248 26.9486 62.0512 16.875 49.6248 16.875C37.1984 16.875 27.1248 26.9486 27.1248 39.375C27.1248 51.8014 37.1984 61.875 49.6248 61.875Z" stroke="#77FF85" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M128.375 118.125V106.875C128.371 101.889 126.712 97.0466 123.657 93.1065C120.603 89.1664 116.327 86.3523 111.5 85.106" stroke="#77FF85" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M89.0002 17.606C93.8401 18.8452 98.1298 21.6599 101.193 25.6065C104.257 29.553 105.919 34.4069 105.919 39.4028C105.919 44.3988 104.257 49.2527 101.193 53.1992C98.1298 57.1458 93.8401 59.9605 89.0002 61.1997" stroke="#77FF85" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span className="number">{data?.users}</span>
            <span className="name">{t('stats.users')}</span>
          </div>
          <div className="item">
            <div className="ico">
              <svg width="135" height="122" viewBox="0 0 135 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M102.016 2H32.9842C32.9842 2 28.5197 34.6154 32.9842 54.725C38.2727 78.5463 55.9947 87.5 55.9947 87.5V116H79.0053V87.5C79.0053 87.5 96.7273 78.5463 102.016 54.725C106.48 34.6154 102.016 2 102.016 2Z" stroke="#F2DA62" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M122.822 61.0507L122.54 59.5776L122.822 61.0507ZM132.829 21.1474L131.345 20.9263L132.829 21.1474ZM103 21.5H131.84V18.5H103V21.5ZM131.345 20.9263L126.144 55.8215L129.111 56.2638L134.313 21.3686L131.345 20.9263ZM122.54 59.5776L96.7176 64.5268L97.2824 67.4732L123.105 62.5239L122.54 59.5776ZM126.144 55.8215C125.862 57.7117 124.417 59.2178 122.54 59.5776L123.105 62.5239C126.233 61.9243 128.641 59.4142 129.111 56.2638L126.144 55.8215ZM131.84 21.5C131.534 21.5 131.3 21.2284 131.345 20.9263L134.313 21.3686C134.538 19.8578 133.367 18.5 131.84 18.5V21.5Z" fill="#F2DA62"/>
                <path d="M12.1778 61.0507L12.4602 59.5776L12.1778 61.0507ZM2.17105 21.1474L3.65465 20.9263L2.17105 21.1474ZM32 21.5H3.16012V18.5H32V21.5ZM3.65465 20.9263L8.85642 55.8215L5.88921 56.2638L0.687439 21.3686L3.65465 20.9263ZM12.4602 59.5776L38.2824 64.5268L37.7176 67.4732L11.8954 62.5239L12.4602 59.5776ZM8.85642 55.8215C9.1382 57.7117 10.5832 59.2178 12.4602 59.5776L11.8954 62.5239C8.76716 61.9243 6.35884 59.4142 5.88921 56.2638L8.85642 55.8215ZM3.16012 21.5C3.46562 21.5 3.6997 21.2284 3.65465 20.9263L0.687439 21.3686C0.462227 19.8578 1.63262 18.5 3.16012 18.5V21.5Z" fill="#F2DA62"/>
                <path d="M31 116H99" stroke="#F2DA62" stroke-width="3"/>
              </svg>
            </div>
            <span className="number">{data?.win}</span>
            <span className="name">{t('stats.winners')}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
