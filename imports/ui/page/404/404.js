import React from "react";
import { useTranslation } from "react-i18next";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

const ErrorPage = () => {
  const {t, i18n} = useTranslation();
        return (
            <div className="inner-page">
                <div className="container">
                    <div className="error-container">
                      <img src="/img/404.svg" alt="" />
                      <h1>{t('errorPage.title')}</h1>
                      <p>{t('errorPage.text')}</p>
                      <button className="btn btn-primary" onClick={()=>FlowRouter.go('/')}>{t('errorPage.btn')}</button>
                    </div>
                </div>
            </div>
        )
}

export default ErrorPage;