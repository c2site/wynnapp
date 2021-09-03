import React from 'react';

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { mount } from 'react-mounter';
import {App} from "../imports/ui/App";
import HomePage from "../imports/ui/page/home/HomePage";
import BuyPage from "../imports/ui/page/lottery/Buy";

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