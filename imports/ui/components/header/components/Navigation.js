import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import React from "react";
import { useTranslation } from "react-i18next";
import { useTracker } from "meteor/react-meteor-data";
import { AboutMenuIcon, GameMenuIcon, HomeMenuIcon, InfoMenuIcon, LotoMenuIcon } from '../../../svg/icons';

const Navigation = ({ mobi, isShown, setIsShown }) => {
    const { t, i18n } = useTranslation();

    const login = useTracker(() => Meteor.user(), []);
    const nav = [
        { href: FlowRouter.path('home'), title: 'home',  icon: <HomeMenuIcon />},
        { href: FlowRouter.path('gamesCenter'), title: 'Game Center', icon: <GameMenuIcon /> },
        //{ href: '#', title: 'lottery', icon: <LotoMenuIcon /> },

        { href: FlowRouter.path('info'), title: 'Info', icon: <InfoMenuIcon /> },
    ]
    // if (login) {
    //     nav.push({
    //         href: FlowRouter.path('profile'), title: t('header.profile'), name: 'profile'
    //     })
    // }

    console.log(isShown)
    const go = (name) => {
        if (mobi) setIsShown(!isShown);
        FlowRouter.go(name);
    }

    return (
        <>
            <ul className="nav">
                {nav.map(n=>(
                <li>
                    <a href={n.href}>
                        {n.icon}
                        {n.title}
                    </a>
                </li>
                ))}

                {/*<li>*/}
                {/*    <a href={FlowRouter.path('home')}>*/}
                {/*        <HomeMenuIcon />*/}
                {/*        Home*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#">*/}
                {/*        <GameMenuIcon />*/}
                {/*        game center*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#">*/}
                {/*        <LotoMenuIcon />*/}
                {/*        lottery*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*/!*<li>*!/*/}
                {/*/!*    <a href="#">*!/*/}
                {/*/!*        <AboutMenuIcon />*!/*/}
                {/*/!*        about us*!/*/}
                {/*/!*    </a>*!/*/}
                {/*/!*</li>*!/*/}
                {/*<li>*/}
                {/*    <a href={FlowRouter.path('info')}>*/}
                {/*        <InfoMenuIcon />*/}
                {/*        token info*/}
                {/*    </a>*/}
                {/*</li>*/}

            </ul>
        </>
    );
};

export default Navigation;

