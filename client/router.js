import React from 'react';
import {Meteor} from "meteor/meteor";
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { mount } from 'react-mounter';
import {App} from "../imports/ui/App";
import HomePage from "../imports/ui/page/home/HomePage";
import BuyPage from "../imports/ui/page/lottery/Buy";
import Profile from "../imports/ui/page/profile/Profile";
import ProfilePage from "../imports/ui/page/profile/ProfilePage";
import HistoryPage from "../imports/ui/page/lottery/History";
import HashPage from "../imports/ui/page/lottery/Hash";
import MyTickets from "../imports/ui/page/profile/MyTickets";
import {cookies} from "../imports/ui/utils";
import ProfileTickets from "../imports/ui/page/profile/profileTickets";

const mountMain = (Page) => mount(App, { Page }, { rootProps: { className: 'app' } });

function checkAuth(ctx, redirect) {
    if (Meteor.loggingIn()) return;
    if (!Meteor.userId()) FlowRouter.redirect('/');
}

const invite = () => {
    const i = FlowRouter.getQueryParam('invite');
    if(!cookies.get('invite')) {
        cookies.set('invite', i);
    }

}

function whileWaiting() {
    console.log('while waiting');

    const computation = Tracker.autorun(checkAuth);
    computation.onStop(() => console.log('waiting stopped'));
    return computation;
}

FlowRouter.route('/', {
    name: 'home',
    action() {
        mountMain(HomePage);
        invite()
    }
});

FlowRouter.route('/buy', {
    name: 'buy',
    action() {
        mountMain(BuyPage);
    },
});

FlowRouter.route('/profile', {
    name: 'profile',
    action() {
        mountMain(ProfilePage);
    },
    whileWaiting,
});

FlowRouter.route('/profile/my-tickets', {
    name: 'profile.tickets',
    action() {
        mountMain(ProfileTickets);
    },
    whileWaiting,
});

FlowRouter.route('/history', {
    name: 'history',
    action() {
        mountMain(HistoryPage);
    },
    whileWaiting,
});


FlowRouter.route('/hash', {
    name: 'hash',
    action() {
        mountMain(HashPage);
    },
});