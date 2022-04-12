import React from "react";
import { useTranslation } from "react-i18next";

const infoBox = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="container steps-block info-box">
                <div className="row f-align-center">
                    <div className="col-lg-8">
                        <h2 className="title-page">{t('info.title')}</h2>
                        <p>
                            The Wynn Games Ecosystem is the foundation on which the future will be built. The purpose of which is to introduce and attract new people from the gaming industry to the world of cryptocurrencies. In this way our ecosystem will unite these two components into one, which will allow you to do what you like, i.e. to play and earn money. 
                        </p>
                        <p>
                            You don't need to be a famous YouTube blogger or popular on Twitch to do this. Absolutely anyone can start earning, whether you are a beginner or a pro, famous or common person - it does not matter! Everything will depend on your skills and gaming goals. We are also considering offers from developers to add their games to our Game Center and connect them to the Wynn SDK.
                        </p>
                        <p>
                            Thereby strengthening our foundation. Our ecosystem currently includes the following components: Game Center, Game Starter, Market Place, and Lottery. You can find all this on our official website. The Wynn Games team is not going to stop, there's still a lot of work ahead.
                        </p>
                        {/* <p>{t('info.text1')}</p> */}
                        {/* <p>{t('info.text2')}</p> */}
                        {/* <p>{t('info.text3')}</p> */}
                        {/* <p>{t('info.text4')}</p> */}
                        <a href={`https://docs.wynn-games.org/wynn-games/`} target={'_blank'} className="btn btn-primary">{t('docs')}</a>
                    </div>
                    <div className="col-lg-4 img">
                        <img src="./img/img-info.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default infoBox;
