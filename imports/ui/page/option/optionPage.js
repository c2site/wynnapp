import React from "react";
import Loading from "../../components/loading";
import { useTranslation } from "react-i18next";

const OptionPage = () => {
  const {t, i18n} = useTranslation();

        return (
            <div className="comming-page">
                <div className="container">
                  <div className="flex f-space-between flex-center-y">
                    <h1>{t('nav.option')}<span>{t('comming_soon')}</span></h1>
                    <div className="img-page">
                      <img src="/img/ico-option.svg" alt="" />
                    </div>
                  </div>
                </div>

            </div>
        )

}

export default OptionPage;