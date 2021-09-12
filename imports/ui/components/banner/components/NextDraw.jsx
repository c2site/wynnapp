import React from "react";
import { useTracker } from 'meteor/react-meteor-data'
//import '/imports/ui/style/components/banner/nextDraw.scss'
import {useSubscribe} from "../../../../api/hooks";
import {Lottery} from "../../../../api/mongo/lottery";
import {Money} from "../../../../api/mongo/money";
import Countdown from 'react-countdown';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import Loading from "../../loading";


const NextDraw = ({button, coins = 'wynn'})=> {

  const assetName = coins;
  useSubscribe ('lottery', []);
  const loading = useSubscribe('money.game', []);
  const lottery = useTracker(()=>Lottery.findOne({assetName: assetName}), [assetName]);
  const money = useTracker(()=> Money.findOne({userId: 'game_5', coins: assetName}), [assetName]);

  const renderer = ({ hours, minutes, seconds, completed })=> {
        return (
            <div className="timer">
                {/*<span>00d</span>*/}
                {/*<span className="separator"></span>*/}
                <span>{hours}h</span>
                <span className="separator"></span>
                <span>{minutes}m</span>
                <span className="separator"></span>
                <span>{seconds}s</span>
            </div>
        )
    }

  if(loading) {
      return (<Loading />)
  } else {
      return (
          <>
              <div className="next-draw">
                  <div className="inner">
                      <div className="win-number">
                          <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.5651 2H8.4349C8.4349 2 7.45638 9.1525 8.4349 13.5625C9.59402 18.7865 13.4783 20.75 13.4783 20.75V27H18.5217V20.75C18.5217 20.75 22.406 18.7865 23.5651 13.5625C24.5436 9.1525 23.5651 2 23.5651 2Z" stroke="#1E2632" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M29.308 10.5412L28.0723 10.3529L29.308 10.5412ZM23.3333 7.25H28.8361V4.75H23.3333V7.25ZM28.5889 6.96234L28.0723 10.3529L30.5437 10.7295L31.0604 7.33894L28.5889 6.96234ZM24.2518 14.306L21.7696 14.7714L22.2304 17.2286L24.7126 16.7632L24.2518 14.306ZM28.0723 10.3529C27.7682 12.3485 26.2359 13.934 24.2518 14.306L24.7126 16.7632C27.7409 16.1954 30.0796 13.7755 30.5437 10.7295L28.0723 10.3529ZM28.8361 7.25C28.683 7.25 28.5659 7.11367 28.5889 6.96234L31.0604 7.33894C31.2679 5.97698 30.2138 4.75 28.8361 4.75V7.25Z" fill="#1E2632"/>
                              <path d="M2.69199 10.5412L3.92773 10.3529L2.69199 10.5412ZM8.66667 7.25H3.16392V4.75H8.66667V7.25ZM3.41107 6.96234L3.92773 10.3529L1.45626 10.7295L0.9396 7.33894L3.41107 6.96234ZM7.74815 14.306L10.2304 14.7714L9.76964 17.2286L7.28743 16.7632L7.74815 14.306ZM3.92773 10.3529C4.23183 12.3485 5.76406 13.934 7.74815 14.306L7.28743 16.7632C4.25907 16.1954 1.92041 13.7755 1.45626 10.7295L3.92773 10.3529ZM3.16392 7.25C3.317 7.25 3.43413 7.11367 3.41107 6.96234L0.9396 7.33894C0.732062 5.97698 1.78623 4.75 3.16392 4.75V7.25Z" fill="#1E2632"/>
                              <path d="M8 27H23" stroke="#1E2632" stroke-width="2.5"/>
                          </svg>
                          <strong>{money?.value()} {lottery?.assetName}</strong>
                      </div>
                      <div className="flex f-space-between f-align-center">
                          <div className="name">
                              <h2>
                                  next draw
                                  <span>CHOOSE YOUR DREAM TICKETS</span>
                              </h2>
                          </div>
                          <Countdown
                              date={lottery?.close}
                              intervalDelay={1000}
                              renderer={renderer}
                          />
                          {button ? (
                              <button className={'btn btn-primary'} onClick={()=>FlowRouter.go('/buy')}>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1 9.17071H0V9.87788L0.666754 10.1135L1 9.17071ZM1 14.8293L0.666754 13.8865L0 14.1221V14.8293H1ZM23 14.8293H24V14.1221L23.3332 13.8865L23 14.8293ZM23 9.17071L23.3332 10.1135L24 9.87788V9.17071H23ZM2 6C2 5.44772 2.44772 5 3 5V3C1.34315 3 0 4.34315 0 6H2ZM2 9.17071V6H0V9.17071H2ZM4 12C4 10.2568 2.88549 8.7765 1.33325 8.22787L0.666754 10.1135C1.4449 10.3886 2 11.1307 2 12H4ZM1.33325 15.7721C2.88549 15.2235 4 13.7432 4 12H2C2 12.8693 1.4449 13.6114 0.666754 13.8865L1.33325 15.7721ZM2 18V14.8293H0V18H2ZM3 19C2.44772 19 2 18.5523 2 18H0C0 19.6569 1.34314 21 3 21V19ZM21 19H3V21H21V19ZM22 18C22 18.5523 21.5523 19 21 19V21C22.6569 21 24 19.6569 24 18H22ZM22 14.8293V18H24V14.8293H22ZM20 12C20 13.7432 21.1145 15.2235 22.6668 15.7721L23.3332 13.8865C22.5551 13.6114 22 12.8693 22 12H20ZM22.6668 8.22787C21.1145 8.7765 20 10.2568 20 12H22C22 11.1308 22.5551 10.3886 23.3332 10.1135L22.6668 8.22787ZM22 6V9.17071H24V6H22ZM21 5C21.5523 5 22 5.44771 22 6H24C24 4.34315 22.6569 3 21 3V5ZM3 5H21V3H3V5Z" fill="#212129"/>
                                      <path d="M15 4V6" stroke="#212129" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M15 11V13" stroke="#212129" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M15 18V20" stroke="#212129" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                  buy tickets
                              </button>
                          ) : (
                              <></>
                          )}

                      </div>
                  </div>
              </div>
          </>
      );
  }
};

export default NextDraw;
