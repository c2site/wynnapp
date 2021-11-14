import React from "react";
import {FlowRouter} from "meteor/ostrio:flow-router-extra";
import {Button} from "reactstrap";
import { useTracker } from 'meteor/react-meteor-data'
import {Money} from "../../../../api/mongo/money";
import {Meteor} from "meteor/meteor";
import {useSubscribe} from "../../../../api/hooks";
import Loading from "../../loading";
import { useTranslation } from "react-i18next";

const ProfileBtn = () => {
  const {t, i18n} = useTranslation();
    const loading = useSubscribe('user.money');
    const balance = useTracker(()=> Money.findOne({userId: Meteor.userId(), coins: 'wynn'}), []);

    if(loading) return  <Loading />;
    return (
      <div className="profile-btn">
        <strong className="summ">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3334 6.00001V5.33334C11.3334 4.22877 10.438 3.33334 9.33341 3.33334H2.66675C1.56218 3.33334 0.666748 4.22877 0.666748 5.33334V8.00001C0.666748 9.10458 1.56218 10 2.66675 10H4.57151" stroke="white"/>
            <rect x="4.66675" y="6" width="10.6667" height="6.66667" rx="2" stroke="white"/>
            <ellipse cx="10.0001" cy="9.33333" rx="1.33333" ry="1.33333" stroke="white"/>
          </svg>
          {balance?.value()}
          <select>
            <option value="{t('header.wynn')}">{t('header.wynn')}</option>
            <option value="{t('header.wynn')}">{t('header.wynn')}</option>
          </select>
        </strong>
      </div>
    )
}

export default ProfileBtn;