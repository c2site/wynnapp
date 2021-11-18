import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import React from "react";
import {useTranslation} from "react-i18next";
import {useTracker} from "meteor/react-meteor-data";

const Navigation = ({mobi, isShown, setIsShown}) => {
  const {t, i18n} = useTranslation();

  const login = useTracker(()=>Meteor.user(), []);
  const nav = [
    {href: FlowRouter.path('/'), title:t('nav.home'), name: 'home'},
    {href: FlowRouter.path('info'), title:t('nav.info'), name: 'info'},
    {href: FlowRouter.path('buy'), title:t('nav.lottery'), name: 'buy'},
    {href: FlowRouter.path('history'), title:t('nav.history'), name: 'history'},
  ]
  if(login) {
    nav.push({
      href: FlowRouter.path('profile'), title:t('header.profile'), name: 'profile'
    })
  }

  console.log(isShown)
  const go = (name)=>{
    if(mobi) setIsShown(!isShown);
    FlowRouter.go(name);
  }

  return (
    <>
          <ul className="nav">
            {nav.map(n=>(
                <li key={n.name}><a  onClick={()=>go(n.name)} href={n.href}>{n.title}</a></li>
            ))}
          </ul>
    </>
  );
};

export default Navigation;
