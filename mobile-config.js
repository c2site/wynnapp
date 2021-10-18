/* Meteor mobile app configuration file */
/* More info: http://docs.meteor.com/#/full/mobileconfigjs */

/* general app information */
App.info({
    id: 'com.mirumagency.appname',
    name: 'App Name',
    version: '0.1.0'
});


/* general app preferences */
App.setPreference('Orientation', 'portrait');
App.setPreference('StatusBarOverlaysWebView', 'false');

/* whitelisted domains */
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('*.meteor.com/*');
App.accessRule('*.local/*');
App.accessRule('10.0.2.2:3000/*');
App.accessRule('*.yoursite.com/*');