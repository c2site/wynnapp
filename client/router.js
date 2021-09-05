import React from 'react';

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { mount } from 'react-mounter';
import {App} from "../imports/ui/App";
import HomePage from "../imports/ui/page/home/HomePage";
import BuyPage from "../imports/ui/page/lottery/Buy";
import Profile from "../imports/ui/page/profile/Profile";
import ProfilePage from "../imports/ui/page/profile/ProfilePage";
import MyTickets from "../imports/ui/page/profile/MyTickets";

const mountMain = (Page) => mount(App, { Page }, { rootProps: { className: 'app' } });


FlowRouter.route('/', {
    name: 'home',
    action() {
        mountMain(HomePage);
    },
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
});