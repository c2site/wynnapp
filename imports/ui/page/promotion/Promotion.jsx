import React from 'react'
import { CopyIcon, DiscordColoredIcon, InstagramColoredIcon, MediumColoredIcon, TelegramColoredIcon, TelegramIcon, TwitterColoredIcon } from '../../svg/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

export const PromotionCopy = ({ link, Icon, text }) => {
    return (
        <CopyToClipboard
            text={link}
            onCopy={() => toast.success('Copied!')}
        >
            <div className="promotion-link copyClipboard">
                <div className="social-icon">
                    {Icon}
                </div>
                {text}
                <span className="copy-icon">
                    <CopyIcon />
                </span>
            </div>
        </CopyToClipboard>

    );
};

export const Promotionitem = ({ image, code }) => {

    return (
        <div className="promotion-item">
            <div className="promotion-item__img">
                <img src={image} alt="" />
            </div>
            <p className="promotion-item__title">Logo code</p>
            <div className="promotion-item__code">
                {code}
            </div>
        </div>
    )
}

const Promotion = () => {

    return (
        <>
            <div className="redesign-page secondary-page">
                <div className="container">
                    <div className="breadcrumbs">
                        <span className="name">Home</span>
                        <span className="separator">
                            <img src="./img/arrow-breadcrumbs.svg" alt="" />
                        </span>
                        <span className="name">Promotion</span>
                        <span className="separator">
                            <img src="./img/arrow-breadcrumbs.svg" alt="" />
                        </span>
                    </div>

                    <h2 className="section__title title--md">Promotion</h2>

                    <div className="promotion-socials mt-75">
                        <PromotionCopy
                            link={'#tglink'}
                            text={'Telegram'}
                            Icon={<TelegramColoredIcon />}
                        />
                        <PromotionCopy
                            link={'#discordlink'}
                            text={'Discord'}
                            Icon={<DiscordColoredIcon />}
                        />
                        <PromotionCopy
                            link={'#twitterlink'}
                            text={'Twitter'}
                            Icon={<TwitterColoredIcon />}
                        />
                        <PromotionCopy
                            link={'#mediumlink'}
                            text={'Medium'}
                            Icon={<MediumColoredIcon />}
                        />
                        <PromotionCopy
                            link={'#instlink'}
                            text={'Instagram'}
                            Icon={<InstagramColoredIcon />}
                        />
                    </div>

                    <div className="promotion-grid mt-75">
                        <div className="row">
                            <div className="col-lg-6">
                                <Promotionitem
                                    image={'/img/promotion-logo-1.svg'}
                                    code={
                                        '<a href="https://wynn-games.com/?ref=username"><img src="https://wynn-games.com/images/banner_468.gif" alt="" width="320" height="250" /></a>'
                                    }
                                />
                            </div>
                            <div className="col-lg-6">
                                <Promotionitem
                                    image={'/img/promotion-logo-2.svg'}
                                    code={
                                        '<a href="https://wynn-games.com/?ref=username"><img src="https://wynn-games.com/images/banner_468.gif" alt="" width="320" height="250" /></a>'
                                    }
                                />
                            </div>
                            <div className="col-lg-6">
                                <Promotionitem
                                    image={'/img/promotion-logo-3.svg'}
                                    code={
                                        '<a href="https://wynn-games.com/?ref=username"><img src="https://wynn-games.com/images/banner_468.gif" alt="" width="320" height="250" /></a>'
                                    }
                                />
                            </div>
                            <div className="col-lg-6">
                                <Promotionitem
                                    image={'/img/promotion-logo-4.svg'}
                                    code={
                                        '<a href="https://wynn-games.com/?ref=username"><img src="https://wynn-games.com/images/banner_468.gif" alt="" width="320" height="250" /></a>'
                                    }
                                />
                            </div>
                            <div className="col-lg-6">
                                <Promotionitem
                                    image={'/img/promotion-logo-5.svg'}
                                    code={
                                        '<a href="https://wynn-games.com/?ref=username"><img src="https://wynn-games.com/images/banner_468.gif" alt="" width="320" height="250" /></a>'
                                    }
                                />
                            </div>
                            <div className="col-lg-6">
                                <Promotionitem
                                    image={'/img/promotion-logo-6.svg'}
                                    code={
                                        '<a href="https://wynn-games.com/?ref=username"><img src="https://wynn-games.com/images/banner_468.gif" alt="" width="320" height="250" /></a>'
                                    }
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Promotion
