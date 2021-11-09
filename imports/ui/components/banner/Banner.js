import React from "react";


import NextDraw from '/imports/ui/components/banner/components/NextDraw';
import Registration from "../header/components/Registration";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className="banner-box container">
        <div className="head-banner flex f-space-between f-align-center">
          <div className="title-box">
            <h1>
              <span>{t('banner.title')}</span>
              {t('banner.sub_title')}
            </h1>
            <div className="btn-holder">
              <Registration color="primary" text={t('banner.started')}/>
              <a href={'https://www.wynn-games.com/wp/White_Paper_WYNN_GAMES.pdf'}  target={'_blank'} className="btn btn-active">White Paper v.1.0.0</a>
              <a href={'https://discord.gg/2tPXTF7795'}  target={'_blank'} className="btn btn-black">
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.38857 19.4229H15.4L14.7714 17.4114L16.28 18.6686L17.6629 19.9257L20.1771 22V2.26286C20.1143 1.00571 19.0457 0 17.7257 0H2.38857C1.06857 0 0 1.06857 0 2.26286V17.16C0 18.48 1.06857 19.4229 2.38857 19.4229ZM5.02857 6.34857C6.72571 5.15429 8.23429 5.15429 8.23429 5.15429L8.36 5.28C6.28571 5.78286 5.40571 6.66286 5.40571 6.66286C5.40571 6.66286 5.65714 6.53714 6.09714 6.34857C8.86286 5.28 11.88 5.34286 14.6457 6.72571C14.6457 6.72571 13.7029 5.84571 11.8171 5.34286L11.9429 5.21714C12.1943 5.21714 13.64 5.28 15.1486 6.34857C15.1486 6.34857 16.8457 9.24 16.8457 12.76C16.7829 12.6971 15.7771 14.2686 13.2629 14.3314C13.2629 14.3314 12.8229 13.8286 12.5086 13.3886C14.0171 12.9486 14.5829 12.1314 14.5829 12.1314C14.08 12.4457 13.64 12.6343 13.2629 12.8229C12.6971 13.0743 12.1314 13.2 11.5657 13.3257C8.92571 13.7657 7.48 13.0114 6.03429 12.4457L5.53143 12.1943C5.53143 12.1943 6.09714 13.0743 7.54286 13.4514C7.16571 13.8914 6.78857 14.3943 6.78857 14.3943C4.21143 14.3314 3.33143 12.76 3.33143 12.76C3.33143 9.24 5.02857 6.34857 5.02857 6.34857Z" fill="white"/>
                  <path d="M12.1943 11.6914C12.8229 11.6914 13.3886 11.1257 13.3886 10.4343C13.3886 9.74283 12.8857 9.23997 12.1943 9.23997C11.5657 9.23997 11 9.80569 11 10.4971C11 11.1257 11.5029 11.6914 12.1943 11.6914Z" fill="white"/>
                  <path d="M7.91996 11.6914C8.54854 11.6914 9.11425 11.1257 9.11425 10.4343C9.11425 9.74283 8.61139 9.23997 7.91996 9.23997C7.29139 9.23997 6.72568 9.80569 6.72568 10.4971C6.78853 11.1257 7.29139 11.6914 7.91996 11.6914Z" fill="white"/>
                </svg>
                {t('header.discord')}
              </a>
            </div>
          </div>
          <div className="ico">
            <img src="./img/ico-banner.svg" alt="" />
          </div>
        </div>
        <div className="container">
          <NextDraw button={true}/>
        </div>
      </div>
    </>
  );
};

export default Banner;
