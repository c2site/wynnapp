import { Meteor } from 'meteor/meteor';
// import './money/init';


import './lottery/publish';
import './lottery/methods';

import './money/publish';
import './money/methods';

import './user/publish';
import './user/methods'
import './user/users';

import './cron';
import {getPrice} from "./price/price";
import './api';
import Lottery_manage from "./lottery/lottery_manage";

Meteor.startup(() => {
    //getPrice();
    //Lottery_manage.create();
});

import './migration';
