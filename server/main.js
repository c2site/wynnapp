import { Meteor } from 'meteor/meteor';
import './money/init';


import './lottery/publish';
import './lottery/methods';

import './money/publish';

import './cron';

Meteor.startup(() => {

});
