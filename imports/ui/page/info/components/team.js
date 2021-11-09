import React from "react";
import { useTranslation } from "react-i18next";

const team = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className="container team-box">
        <h2 className="text-center">{t('info.team.title')}</h2>
        <div className="row">
          <div className="col-lg-3">
            <div className="head">
              <span>{t('info.team.col1')}</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/photo.jpg" alt="" />
              </div>
              <span className="name">Jane Cooper</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/photo.jpg" alt="" />
              </div>
              <span className="name">Jane Cooper</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="head">
              <span>{t('info.team.col3')}</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/photo.jpg" alt="" />
              </div>
              <span className="name">Jane Cooper</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/photo.jpg" alt="" />
              </div>
              <span className="name">Jane Cooper</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="head">
              <span>{t('info.team.col3')}</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/photo.jpg" alt="" />
              </div>
              <span className="name">Jane Cooper</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/photo.jpg" alt="" />
              </div>
              <span className="name">Jane Cooper</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="head">
              <span>{t('info.team.col4')}</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/photo.jpg" alt="" />
              </div>
              <span className="name">Jane Cooper</span>
            </div>
            <div className="item">
              <div className="img">
                <img src="./img/photo.jpg" alt="" />
              </div>
              <span className="name">Jane Cooper</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default team;
