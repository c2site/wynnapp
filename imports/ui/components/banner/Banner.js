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
            <div className="btn-holder">
              <button className="btn btn-primary">get started now</button>
              <a href={'https://discord.gg/2tPXTF7795'}  target={'_blank'} className="btn btn-default">Discord</a>
              <a href={'https://www.wynn-games.com/wp/White_Paper_WYNN_GAMES.pdf'}  target={'_blank'} className="btn btn-primary">White Paper v.1.0.0</a>
            </div>
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
