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
import RecoveryPassword from "./ui/page/recovery/recoveryPassword";
import OptionPage from "./ui/page/option/optionPage";
import WynnRustPage from "./ui/page/wynnRust/wynnRustPage";
import FreeCoinPage from "./ui/page/freeCoin/freeCoinPage";
import InfoPage from "./ui/page/info/infoPage";
import {Tracker} from "meteor/tracker";
import ErrorPage from "./ui/page/404/404";
import FaqPage from "./ui/page/faq/faq";
import PresalePage from "./ui/page/presale/presale";
import HomePageOld from './ui/page/home/HomePageOld';
import GamesCenter from './ui/page/gamesCenter/GamesCenter';
import Game from './ui/page/game/Game';
import Lottery from './ui/page/lottery/Lottery';
import Promotion from './ui/page/promotion/Promotion';

const mountMain = (Page) => mount(App, { Page }, { rootProps: { className: 'app' } });

function checkAuth(ctx, redirect) {
    if (Meteor.loggingIn()) return;
    if (!Meteor.userId()) FlowRouter.go('home');
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
    title: 'Wynn Games',
});
FlowRouter.notFound = {
    title: '404: Page not found',
    action: function () {
        mountMain(ErrorPage)
    }
};

FlowRouter.triggers.enter([ () => { window.scrollTo(0, 0); } ]);


FlowRouter.route('/recoveryPassword/:token', {
    name: 'recoveryPassword',
    action() {
        mountMain(RecoveryPassword);
    },
});

FlowRouter.route('/verifyEmail/:token', {
    name: 'verifyEmail',
    action({ token }) {
        Accounts.verifyEmail(token, () => {
            //Meteor.call('user.verify');
            FlowRouter.go('/');
        });
    },
});


FlowRouter.route('/', {
    name: 'home',
    title: title('Home'),
    action() {
        mountMain(HomePage);
        invite()
    }
});

FlowRouter.route('/games-center', {
    name: 'gamesCenter',
    title: title('WynnGames Center'),
    action() {
        mountMain(GamesCenter);
    },
});

FlowRouter.route('/promotion', {
    name: 'promotion',
    title: title('Promotion'),
    action() {
        mountMain(Promotion);
    },
});

FlowRouter.route('/lottery', {
    name: 'lottery',
    title: title('Wynn Games Center'),
    action() {
        mountMain(Lottery);
    },
});

FlowRouter.route('/games-center', {
    name: 'gamesCenter',
    title: title('Wynn Games Center'),
    action() {
        mountMain(GamesCenter);
    },
});

FlowRouter.route('/game-single', {
    name: 'game',
    title: title('Wynn Games Center'),
    action() {
        mountMain(Game);
    },
});

// FlowRouter.route('/old', {
//     name: 'HomePageOld',
//     title: title('HomePageOld'),
//     action() {
//         mountMain(HomePageOld);
//     }
// });

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
    triggersEnter() {
        whileWaiting()
    },
});

// FlowRouter.route('/my-tickets', {
//     name: 'profile.tickets',
//     title: title('My Tickets'),
//     action() {
//         mountMain(ProfileTickets);
//     },
//     triggersEnter() {
//         whileWaiting()
//     },
// });

// FlowRouter.route('/history', {
//     name: 'history',
//     title: title('Game History'),
//     action() {
//         mountMain(HistoryPage);
//     }
// });


// FlowRouter.route('/hash', {
//     name: 'hash',
//     title: title('Check Hash'),
//     action() {
//         mountMain(HashPage);
//     },
// });


// FlowRouter.route('/swap', {
//     name: 'swap',
//     title: title('Swap coin'),
//     action() {
//         mountMain(SwapPage);
//     },
//     whileWaiting
// });

// FlowRouter.route('/option', {
//     name: 'option',
//     title: title('option'),
//     action() {
//         mountMain(OptionPage);
//     }
// });

FlowRouter.route('/wynn-rust', {
    name: 'wynnRust',
    title: title('wynn rust'),
    action() {
        mountMain(WynnRustPage);
    }
});

FlowRouter.route('/info', {
    name: 'infoPage',
    title: title('info'),
    action() {
        mountMain(InfoPage);
    }
});

FlowRouter.route('/faq', {
    name:'faqPage',
    title: title('F.A.Q.'),
    action() {
        mountMain(FaqPage)
    }
});

// FlowRouter.route('/presale', {
//     name:'presalePage',
//     title: title('Pre-Sale'),
//     action() {
//         mountMain(PresalePage)
//     }
// })

// FlowRouter.route('/free-coin', {
//     name: 'freeCoin',
//     title: title('free coin'),
//     action() {
//         mountMain(FreeCoinPage);
//     },
//     whileWaiting
// });

new FlowRouterTitle(FlowRouter);
