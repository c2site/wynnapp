import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const Boxs = () => {
    const {t, i18n} = useTranslation();
    const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    return (
        <>
        <div className="tab-box">
            <div className="head-text">
                <p>This section is intended for the purchase and sales of Boxes.
                    This is the ability to win a unique skin, transport, weapons - but this is only a small part of what will be created
                </p>
            </div>
            <div className="slider row">
                <Slider {...settings}>
                    <div className="col-lg-3">
                        <div className="item">
                        <span className="img-item">
                            <img src="./img/boxs/1.svg" alt="" />
                        </span>
                            <span className="name-item">
                            <p>Toy Chestplate</p>
                        </span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="item">
                        <span className="img-item">
                            <img src="./img/boxs/2.svg" alt="" />
                        </span>
                            <span className="name-item">
                            <p>Toy Chestplate</p>
                        </span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="item">
                        <span className="img-item">
                            <img src="./img/boxs/3.svg" alt="" />
                        </span>
                            <span className="name-item">
                            <p>Toy Chestplate</p>
                        </span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="item">
                        <span className="img-item">
                            <img src="./img/boxs/4.svg" alt="" />
                        </span>
                            <span className="name-item">
                            <p>Toy Chestplate</p>
                        </span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="item">
                        <span className="img-item">
                            <img src="./img/boxs/4.svg" alt="" />
                        </span>
                            <span className="name-item">
                            <p>Toy Chestplate</p>
                        </span>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
</>
);
};

export default Boxs;
