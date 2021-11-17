import React from "react";


import NextDraw from '/imports/ui/components/banner/components/NextDraw';
import Registration from "../header/components/Registration";
import { useTranslation } from "react-i18next";
import Login from "../header/components/Login";
import ProfileBtn from "../header/components/profileBtn";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { useTracker } from "meteor/react-meteor-data";

const Banner = () => {
  const {t, i18n} = useTranslation();
  const login = useTracker(()=>Meteor.user(), []);
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
              {!login ? (<Registration color="primary" text={t('banner.started')}/>) : (
                <button className="btn btn-primary" onClick={()=>FlowRouter.go('/profile')}>{t('banner.started')}</button>
              )}
              <a href={`https://www.wynn-games.com/wp/White_Paper_${i18n.language}.pdf`}  target={'_blank'} className="btn btn-active">White Paper v.1.0.0</a>
            </div>
            <div className="btn-holder">
              <a href={'https://discord.gg/2tPXTF7795'}  target={'_blank'} className="btn btn-black">
                <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4_3)">
                    <path d="M20.9231 2.02692C20.1385 2.35385 19.2885 2.61538 18.4385 2.68077C19.3538 2.15769 20.0077 1.30769 20.3346 0.326923C19.4846 0.85 18.5692 1.17692 17.5885 1.37308C16.8038 0.523077 15.6923 0 14.5154 0C12.1615 0 10.2 1.89615 10.2 4.31538C10.2 4.64231 10.2 4.96923 10.3308 5.29615C6.73462 5.1 3.59615 3.4 1.43846 0.784615C1.04615 1.43846 0.85 2.15769 0.85 2.94231C0.85 4.44615 1.63462 5.75385 2.74615 6.53846C2.02692 6.53846 1.37308 6.34231 0.784615 6.01538C0.784615 6.01538 0.784615 6.01538 0.784615 6.08077C0.784615 8.17308 2.28846 9.87308 4.25 10.2654C3.92308 10.3308 3.53077 10.3962 3.13846 10.3962C2.87692 10.3962 2.61538 10.3962 2.35385 10.3308C2.87692 12.0308 4.51154 13.2731 6.34231 13.3385C4.90385 14.45 3.00769 15.1692 1.04615 15.1692C0.719231 15.1692 0.326923 15.1692 0 15.1038C1.89615 16.2808 4.18462 17 6.60385 17C14.5154 17 18.8308 10.4615 18.8308 4.77308C18.8308 4.57692 18.8308 4.38077 18.8308 4.25C19.6154 3.66154 20.3346 2.87692 20.9231 2.02692Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_4_3">
                      <rect width="20.9231" height="17" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                twitter
              </a>
              <a href={'https://discord.gg/2tPXTF7795'}  target={'_blank'} className="btn btn-black">
                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.67066 9.886L6.38945 14.074C6.79179 14.074 6.96604 13.891 7.17501 13.6712L9.06134 11.7625L12.97 14.7932C13.6869 15.2162 14.1919 14.9935 14.3853 14.095L16.9509 1.36605L16.9517 1.3653C17.179 0.243303 16.5684 -0.195445 15.87 0.0798037L0.789228 6.19302C-0.240005 6.61602 -0.224421 7.22352 0.614266 7.49877L4.46982 8.76851L13.4255 2.83529C13.847 2.53979 14.2302 2.70329 13.915 2.99879L6.67066 9.886Z" fill="white"/>
                </svg>
                telegram
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
