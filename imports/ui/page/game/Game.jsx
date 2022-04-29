import React from "react";
import ReactImageGallery from "react-image-gallery";
import { BasketIcon, DeviceAndroidIcon, DeviceIosIcon, DevicePcIcon, DevicePsIcon, DownLoadIcon, PriceIcon, RoketIcon, ServerIcon, UsersIcon } from "../../svg/icons";

const Game = () => {

    const images = [
        {
            original: '/img/game-single-img.png',
            thumbnail: '/img/game-single-img.png',
        },
        {
            original: '/img/rust/rust1.jpg',
            thumbnail: '/img/rust/rust1.jpg',
        },
        {
            original: '/img/rust/rust2.jpg',
            thumbnail: '/img/rust/rust2.jpg',
        },
        {
            original: '/img/rust/rust3.jpg',
            thumbnail: '/img/rust/rust3.jpg',
        },
        {
            original: '/img/rust/rust4.jpg',
            thumbnail: '/img/rust/rust4.jpg',
        },

    ];

    return (
        <div className="redesign-page secondary-page">
            <div className="container">
                <div className="inner-container">
                    <h2 className="section__title">Wynn Games Center</h2>

                    <div className="game-slider">
                        <ReactImageGallery items={images} thumbnailPosition={'bottom'} showFullscreenButton={false} showPlayButton={false} showNav={false} />
                        <div className="games__platforms">
                            <div className="platforms__item">
                                <DevicePcIcon />
                                <p>PC</p>
                            </div>
                            <div className="platforms__item">
                                <DevicePsIcon />
                                <p>PS 4</p>
                            </div>
                            <div className="platforms__item">
                                <DevicePsIcon />
                                <p>PS 5</p>
                            </div>
                        </div>
                        <h2 className="name name--show-md">Rust</h2>
                        <div className="game-slider__bottom --show-pc">
                            <h2 className="name">Rust</h2>
                            <div className="game-slider__contnent">
                                <div className="homeAbout__bottom">
                                    <div className="item">
                                        <ServerIcon />
                                        <p>
                                            server <br />online:
                                        </p>
                                        <span>0</span>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users <br />online:
                                        </p>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className="btns">
                                    <a href="#" className="btn-yellow">
                                        <DownLoadIcon />
                                        download
                                    </a>
                                    <a href="#" className="btn-yellow">
                                        <BasketIcon />
                                        buy game
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="game-slider__bottom --show-md">
                            <div className="game-slider__contnent">
                                <div className="homeAbout__bottom">
                                    <div className="item">
                                        <ServerIcon />
                                        <p>
                                            server <br />online:
                                        </p>
                                        <span>0</span>
                                    </div>
                                    <div className="item">
                                        <UsersIcon />
                                        <p>
                                            Users <br />online:
                                        </p>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className="btns">
                                    <a href="#" className="btn-yellow">
                                        <DownLoadIcon />
                                        download
                                    </a>
                                    <a href="#" className="btn-yellow">
                                        <BasketIcon />
                                        buy game
                                    </a>
                                </div>
                            </div>
                        </div>

                    <div className="game-content">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <h4>Why do we use it?</h4>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
                        </p>
                        <h4>Where does it come from?</h4>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                        <p>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                        <h4>Where can I get some?</h4>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                    </div>

                    <div className="nft-market">
                        <h2 className="section__title">nft market</h2>
                        <div className="nft-market__wrapper columns-5">

                            <div className="col">
                                <div className="nft-market__item">
                                    <div className="img">
                                        <img src="/img/skin/1.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="top">
                                            <div className="icon">
                                                <PriceIcon />
                                            </div>
                                            <div className="prices">
                                                <p className="eth">
                                                    price:
                                                    &nbsp;<span>0.3 ETH</span>
                                                </p>
                                                <p className="wynn">194898.94 WYNN</p>
                                            </div>
                                        </div>
                                        <a href="#" className="btn-yellow btn-small">
                                            <BasketIcon />
                                            buy
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="nft-market__item">
                                    <div className="img">
                                        <img src="/img/skin/2.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="top">
                                            <div className="icon">
                                                <PriceIcon />
                                            </div>
                                            <div className="prices">
                                                <p className="eth">
                                                    price:
                                                    &nbsp;<span>0.3 ETH</span>
                                                </p>
                                                <p className="wynn">194898.94 WYNN</p>
                                            </div>
                                        </div>
                                        <a href="#" className="btn-yellow btn-small">
                                            <BasketIcon />
                                            buy
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="nft-market__item">
                                    <div className="img">
                                        <img src="/img/skin/3.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="top">
                                            <div className="icon">
                                                <PriceIcon />
                                            </div>
                                            <div className="prices">
                                                <p className="eth">
                                                    price:
                                                    &nbsp;<span>0.3 ETH</span>
                                                </p>
                                                <p className="wynn">194898.94 WYNN</p>
                                            </div>
                                        </div>
                                        <a href="#" className="btn-yellow btn-small">
                                            <BasketIcon />
                                            buy
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="nft-market__item">
                                    <div className="img">
                                        <img src="/img/skin/4.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="top">
                                            <div className="icon">
                                                <PriceIcon />
                                            </div>
                                            <div className="prices">
                                                <p className="eth">
                                                    price:
                                                    &nbsp;<span>0.3 ETH</span>
                                                </p>
                                                <p className="wynn">194898.94 WYNN</p>
                                            </div>
                                        </div>
                                        <a href="#" className="btn-yellow btn-small">
                                            <BasketIcon />
                                            buy
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="nft-market__item">
                                    <div className="img">
                                        <img src="/img/skin/1.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="top">
                                            <div className="icon">
                                                <PriceIcon />
                                            </div>
                                            <div className="prices">
                                                <p className="eth">
                                                    price:
                                                    &nbsp;<span>0.3 ETH</span>
                                                </p>
                                                <p className="wynn">194898.94 WYNN</p>
                                            </div>
                                        </div>
                                        <a href="#" className="btn-yellow btn-small">
                                            <BasketIcon />
                                            buy
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Game