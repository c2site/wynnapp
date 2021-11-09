import React from "react";
import { useTranslation } from "react-i18next";

const infoBox = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className="container steps-block info-box">
        <div className="row f-align-center">
          <div className="col-lg-8">
            <p>{t('info.text1')}</p>
            <p>{t('info.text2')}</p>
            <p>{t('info.text3')}</p>
            <p>{t('info.text4')}</p>
            <a href="#" className="btn btn-primary">White Paper v.1.0.0</a>
          </div>
          <div className="col-lg-4 img">
            <img src="./img/img-info.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default infoBox;
