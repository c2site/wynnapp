import React from "react";


import NextDraw from '/imports/ui/components/banner/components/NextDraw';

const Banner = () => {
  return (
    <>
      <div className="banner-box container">
        <div className="head-banner flex f-space-between f-align-center">
          <div className="title-box">
            <h1>
              <span>New crypto game</span>
              play to win
            </h1>
            <button className="btn btn-primary">get started now</button>
            <a hre={'https://discord.gg/2tPXTF7795'}  target={'_blank'} className="btn btn-primary">Discord</a>
          </div>
          <div className="ico">
            <img src="./img/ico-banner.svg" alt="" />
          </div>
        </div>
        <div className="container">
          <NextDraw button={true}/>
        </div>
      </div>
    </>
  );
};

export default Banner;
