import React from "react";
import { useTranslation } from "react-i18next";

const team = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className="container team-box">
        <h2 className="text-center">{t('info.team.title')}</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="head">
              <span>{t('info.team.col1')}</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/andrey.svg" alt="" />
              </div>
              <span className="name">Andrey</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/max.svg" alt="" />
              </div>
              <span className="name">Max</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="head">
              <span>{t('info.team.col3')}</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/yevhenii.svg" alt="" />
              </div>
              <span className="name">Yevhenii</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/roma-m.svg" alt="" />
              </div>
              <span className="name">Roman</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="head">
              <span>{t('info.team.col3')}</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/roman.svg" alt="" />
              </div>
              <span className="name">Roman</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/vitaly.svg" alt="" />
              </div>
              <span className="name">Vitaly</span>
            </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default team;
