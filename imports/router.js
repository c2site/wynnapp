import React from 'react';
import {Meteor} from "meteor/meteor";
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { FlowRouterTitle } from 'meteor/ostrio:flow-router-title';

import { mount } from 'react-mounter';
import {App} from "./ui/App";
import HomePage from "./ui/page/home/HomePage";
import BuyPage from "./ui/page/lottery/Buy";
import Profile from "./ui/page/profile/Profile";
import HistoryPage from "./ui/page/lottery/History";
import HashPage from "./ui/page/lottery/Hash";
//import MyTickets from "./ui/page/profile/MyTickets";
import {cookies} from "./ui/utils";
import ProfileTickets from "./ui/page/profile/profileTickets";
import SwapPage from "./ui/page/swap/swapPage";
import OptionPage from "./ui/page/option/optionPage";
import WynnRustPage from "./ui/page/wynnRust/wynnRustPage";
import FreeCoinPage from "./ui/page/freeCoin/freeCoinPage";

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

const title = (text) => `Wynn Games - ${text}`

FlowRouter.globals.push({
    title: 'Wynn Games'
});

FlowRouter.route('/', {
    name: 'home',
    title: title('Home'),
    action() {
        mountMain(HomePage);
        invite()
    }
});

FlowRouter.route('/buy', {
    name: 'buy',
    title: title('Buy'),
    action() {
        mountMain(BuyPage);
    },
});

FlowRouter.route('/profile', {
    name: 'profile',
    title: title('Profile'),
    action() {
        mountMain(Profile);
    },
    whileWaiting,
});

FlowRouter.route('/profile/my-tickets', {
    name: 'profile.tickets',
    title: title('My Tickets'),
    action() {
        mountMain(ProfileTickets);
    },
    whileWaiting,
});

FlowRouter.route('/history', {
    name: 'history',
    title: title('Game History'),
    action() {
        mountMain(HistoryPage);
    }
});


FlowRouter.route('/hash', {
    name: 'hash',
    title: title('Check Hash'),
    action() {
        mountMain(HashPage);
    },
});


FlowRouter.route('/swap', {
    name: 'swap',
    title: title('Swap coin'),
    action() {
        mountMain(SwapPage);
    },
    whileWaiting
});

FlowRouter.route('/option', {
    name: 'option',
    title: title('option'),
    action() {
        mountMain(OptionPage);
    },
    whileWaiting
});

FlowRouter.route('/wynn-rust', {
    name: 'wynnRust',
    title: title('wynn rust'),
    action() {
        mountMain(WynnRustPage);
    },
    whileWaiting
});

FlowRouter.route('/free-coin', {
    name: 'freeCoin',
    title: title('free coin'),
    action() {
        mountMain(FreeCoinPage);
    },
    whileWaiting
});

new FlowRouterTitle(FlowRouter);
