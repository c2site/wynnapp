import React from "react";
import { useTranslation } from "react-i18next";

const WynnRustPage = () => {
  const {t, i18n} = useTranslation();

        return (
          <div className="comming-page">
            <div className="container">
              <div className="flex f-space-between flex-center-y">
                <h1>{t('nav.rust')}<span>{t('comming_soon')}</span></h1>
                <div className="img-page">
                  <img src="/img/ico-wynnRust.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        )

}

export default WynnRustPage;