import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import React from "react";
import {useTranslation} from "react-i18next";

const Navigation = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
          <ul className="nav">
            <li>
              <a href={FlowRouter.path('/')}
              >{t('nav.home')}</a></li>
            <li><a href={FlowRouter.path('info')}>{t('nav.info')}</a></li>
            <li>
              <a href={FlowRouter.path('buy')}
            >{t('nav.lottery')}</a></li>
            <li>
              <a href={FlowRouter.path('history')}
              >{t('nav.history')}</a></li>
            <li>
              <a href={FlowRouter.path('profile')}
              >{t('header.profile')}</a></li>
            {/*<li><a href={FlowRouter.path('swap')}>{t('nav.buy-wynn')}</a></li>*/}
            {/*<li><a href="#">{t('nav.option')}</a></li>*/}
            {/*<li><a href="#">{t('nav.contact')}</a></li>*/}
          </ul>
    </>
  );
};

export default Navigation;
