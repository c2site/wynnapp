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
        <Button className="btn btn-default profile-btn" onClick={()=>FlowRouter.go('/profile')}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5253 14.3486C14.1995 13.6936 12.1695 12.9167 10 12.9167C7.83052 12.9167 5.80049 13.6936 4.47467 14.3486C3.45001 14.8547 2.83962 15.8875 2.70497 17.0224L2.5 18.75H17.5L17.295 17.0224C17.1604 15.8875 16.55 14.8547 15.5253 14.3486Z" stroke="white" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 9.16666C12.0711 9.16666 13.75 7.48772 13.75 5.41666C13.75 3.34559 12.0711 1.66666 10 1.66666C7.92893 1.66666 6.25 3.34559 6.25 5.41666C6.25 7.48772 7.92893 9.16666 10 9.16666Z" stroke="white" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{t('header.profile')}</span>
            <strong className="summ">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3334 6.00001V5.33334C11.3334 4.22877 10.438 3.33334 9.33341 3.33334H2.66675C1.56218 3.33334 0.666748 4.22877 0.666748 5.33334V8.00001C0.666748 9.10458 1.56218 10 2.66675 10H4.57151" stroke="white"/>
                    <rect x="4.66675" y="6" width="10.6667" height="6.66667" rx="2" stroke="white"/>
                    <ellipse cx="10.0001" cy="9.33333" rx="1.33333" ry="1.33333" stroke="white"/>
                </svg>
                {balance?.value()}
                <span>{t('header.wynn')}</span>
            </strong>
        </Button>
    )
}

export default ProfileBtn;