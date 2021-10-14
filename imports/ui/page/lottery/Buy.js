import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data'

import NextDraw from "../../components/banner/components/NextDraw";
import {useSubscribe} from "../../../api/hooks";
import {Ticket} from "../../../api/mongo/ticket";
import {Notify, RandomNumber} from "../../utils";
import {Money} from "../../../api/mongo/money";
import {Price} from "../../../api/mongo/price";
import { toast } from 'react-toastify';
import {Meteor} from "meteor/meteor";

const BuyPage = () => {

  const [skip, setSkip] = useState(0);
  useSubscribe('user.money');
  useSubscribe('price');
  const loading = useSubscribe(Meteor.subscribe('lottery.all', skip), [skip]);
  const money = useTracker(()=>Money.find({userId: Meteor.userId()}).fetch(), []);
  const user = useTracker(()=>Meteor.user() , []);
  const list = useTracker(()=> Ticket.find().fetch(), []);
  const [selected, setSelected] = useState([]);
  const [coinName, setCoinName] = useState('wynn');
  const [price, setPrice] = useState(0);
  const [wait, setWait] = useState(false);

  const pool = useTracker(()=>Money.find({coins: coinName ,type: 'game', userId: {$in: ['game_4', 'game_3']}}).fetch(),[coinName]);
  const prices = useTracker(()=>Price.findOne({assetName: coinName}), [coinName]);
  const numbers = [];
  for(let i = 1; i <= 36; i++) {
    numbers.push(i)
  }

  const checkVal = () => {
    if(selected.length +1 > 9) {
      toast.error('Max 9 numbers')
      return false;
    } else return true;
  }

  const clear = () => {
    setSelected([]);
  }

  const onChangeBox = (value) => {
    const index = selected.indexOf(value);
    if (index === -1) {
      if(checkVal()) selected.push(value);
    } else {
      selected.splice(index, 1)
    }
    setSelected([...selected]);
  }

  const random = () => {
    setSelected([])
    for(let i = 0; i < 9; i++) {
      onChangeBox(RandomNumber(1, 36))
    }
  }

  const skipPage = (number) => {
    const page = (skip + number);
    setSkip(page);
  }

  useEffect(()=> {
    if(selected.length <= 4 || selected.length > 9) {
      setPrice(0)
    } else {
      setPrice(prices.prices[`price${selected.length}`].toFixed(2));
    }
  }, [selected, coinName])


  const buy = (e) => {
    e.preventDefault();
    setWait(true);
    Meteor.call('buy', selected, coinName, (err)=> {
      if(err) {
        toast.error(err.reason)
        setWait(false);
      } else {
        setSelected([])
        setWait(false);
      }


    })
  }

  const ChangeWallet = (e)=> {
    setCoinName(e.currentTarget.value)
  }

  if(loading) return (<div>Loading...</div>)

    return (
      <div className="buy-page inner-page">
        <div className="container">
          <div className="head-page">
            <div className="breadcrumbs">
              <a href="#">Home</a>
              <span className="separator">
                <img src="./img/arrow-breadcrumbs.svg" alt="" />
              </span>
              <a href="#">lottery 5/36</a>
              <span className="separator">
                <img src="./img/arrow-breadcrumbs.svg" alt="" />
              </span>
              <a href="#">buy</a>
            </div>
            <h2 className="title-page">buy</h2>
          </div>
          <NextDraw button={false} coins={coinName}/>
          <div className="row">
            <div className="col-lg-8">
              <div>
                <div className="ticket-block mb45m">
                  <div className="holder-ticket">
                    <div className="ticket-head" data-toggle="collapse" data-target="#ticket" role="button">
                      <div className="column">
                        <div className="info">
                          <span className="name">buy ticket 3/36</span>
                        </div>
                      </div>
                      <div className="column">
                        <button className="btn btn-chose" disabled={true}>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0001 2.63605L15.3638 2.77211L15.3637 7" stroke="#CED0D3" stroke-width="1.5"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <line x1="14.4905" y1="3.20083" x2="3.01197" y2="14.6793" stroke="#CED0D3"
                                  stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M15.3639 11.0682L15.2278 15.432L10.9999 15.4319" stroke="#CED0D3"
                                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <line x1="14.7992" y1="14.5587" x2="3.32069" y2="3.08014" stroke="#CED0D3"
                                  stroke-width="1.5" stroke-linecap="round"/>
                          </svg>
                          <span>random</span>
                        </button>
                        <button className="btn btn-default" onClick={()=>clear()}>
                          <svg width="19" height="20" viewBox="0 0 19 20" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.88647 15.2122L2.37169 4.91667H16.6281L16.1134 15.2122C16.0003 17.4741 14.1334 19.25 11.8687 19.25H7.13117C4.86645 19.25 2.99956 17.4741 2.88647 15.2122Z"
                                stroke="#CED0D3" stroke-width="1.5"/>
                            <path
                                d="M6.29175 5H12.7084V4C12.7084 2.75736 11.7011 1.75 10.4584 1.75H8.54175C7.29911 1.75 6.29175 2.75736 6.29175 4V5Z"
                                stroke="#CED0D3" stroke-width="1.5"/>
                            <path d="M0.791748 4.95833H18.2084" stroke="#CED0D3" stroke-width="1.5"
                                  stroke-linecap="round"/>
                            <path d="M11.875 9.70833V13.6667" stroke="#CED0D3" stroke-width="1.5"
                                  stroke-linecap="round"/>
                            <path d="M7.125 9.70833V13.6667" stroke="#CED0D3" stroke-width="1.5"
                                  stroke-linecap="round"/>
                          </svg>
                          <span>clear</span>
                        </button>
                      </div>
                    </div>
                    <div className="number-list">
                      {numbers.map(x=>(
                          <div className={"item"}>
                            <div className="payment-check" key={x}>
                              <input type="checkbox" id={x} onChange={()=>onChangeBox(x)} checked={selected.includes(x)}/>
                              <label htmlFor={x}>
                                {x}
                              </label>
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>
                  <div className="ticket-stats">
                    <div className="holder">
            <span className="number-tickets">
              select number <span> {selected.length} / 9 </span>
            </span>
                      <span className="price">
              price <span>{price} {coinName}</span>
            </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {user? (
                  <div className="ticket-balance">
                    <form className="contain-balance">
                      <h3>balance</h3>
                      <div className="balance-info">
                        <div className="form-control item">
                          <select value={coinName} defaultValue={coinName}  onChange={(e)=>ChangeWallet(e)}>
                            {money?.map(wallet=>(
                                <option key={wallet._id} value={wallet.coins}>{wallet.value()} {wallet.coins}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-black" onClick={(e)=>buy(e)} disabled={wait}>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0)">
                            <path d="M1.5 9.17071H0.5V9.87788L1.16675 10.1135L1.5 9.17071ZM1.5 14.8293L1.16675 13.8865L0.5 14.1221V14.8293H1.5ZM23.5 14.8293H24.5V14.1221L23.8332 13.8865L23.5 14.8293ZM23.5 9.17071L23.8332 10.1135L24.5 9.87788V9.17071H23.5ZM2.5 6C2.5 5.44772 2.94772 5 3.5 5V3C1.84315 3 0.5 4.34315 0.5 6H2.5ZM2.5 9.17071V6H0.5V9.17071H2.5ZM4.5 12C4.5 10.2568 3.38549 8.7765 1.83325 8.22787L1.16675 10.1135C1.9449 10.3886 2.5 11.1307 2.5 12H4.5ZM1.83325 15.7721C3.38549 15.2235 4.5 13.7432 4.5 12H2.5C2.5 12.8693 1.9449 13.6114 1.16675 13.8865L1.83325 15.7721ZM2.5 18V14.8293H0.5V18H2.5ZM3.5 19C2.94772 19 2.5 18.5523 2.5 18H0.5C0.5 19.6569 1.84314 21 3.5 21V19ZM21.5 19H3.5V21H21.5V19ZM22.5 18C22.5 18.5523 22.0523 19 21.5 19V21C23.1569 21 24.5 19.6569 24.5 18H22.5ZM22.5 14.8293V18H24.5V14.8293H22.5ZM20.5 12C20.5 13.7432 21.6145 15.2235 23.1668 15.7721L23.8332 13.8865C23.0551 13.6114 22.5 12.8693 22.5 12H20.5ZM23.1668 8.22787C21.6145 8.7765 20.5 10.2568 20.5 12H22.5C22.5 11.1308 23.0551 10.3886 23.8332 10.1135L23.1668 8.22787ZM22.5 6V9.17071H24.5V6H22.5ZM21.5 5C22.0523 5 22.5 5.44771 22.5 6H24.5C24.5 4.34315 23.1569 3 21.5 3V5ZM3.5 5H21.5V3H3.5V5Z" fill="white"/>
                            <path d="M15.5 4V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.5 11V13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.5 18V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                          </defs>
                        </svg>
                        buy ticket
                      </button>
                    </form>
                  </div>
              ) : (<></>)}
              <div className="info-text">
                <h6>Pick 5 numbers</h6>
                <p>You need to choose any 5 numbers. This can be done manually or by activating the “Random” mode at the top of the ticket. Random mode selects cells at random.</p>
                <p>Tickets are won, in which after the drawing there will be 3, 4 or 5 matches.</p>
              </div>
              <div className="info-text">
                <h6>Want to increase your chances of winning?</h6>
                <p>Add 1, 2, 3 or 4 additional numbers to your ticket (this is a paid service). You can also buy another ticket.</p>
              </div>
              <div className="info-text">
                <h6>Prize fund</h6>
                <p>Almost all the proceeds (90%) go to the prize fund, which is further distributed among the winners: 3 matches - 30%, 4 matches - 30%, 5 matches - 30%.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="prize-box">
          <h2>prize pool</h2>
          <div className="prize-list row">
            {pool?.map(money=>(
                <div className={'col'}>
                  <div className="item">
                    <div className="ico">
                      <img src="./img/ico-prize-01.svg" alt="" />
                    </div>
                    <span className="number">{money.value()} {money.coins}</span>
                    <span className="info">{(money.userId).replace(/^.{5}/, '')} matches</span>
                  </div>
                </div>
            ))}
          </div>
        </div>
        <div className="new-tickets">
          <div className="container">
            <div className="head-box">
              <h2>New Tickets</h2>
              {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>*/}
            </div>
            <div className="list-new-tickets">
              {list?.map(tic=> (
                  <div key={tic?._id} className="item">
                    <div className="head">
                      <span className="name">{tic?.user?.name || 'Anonyms'}</span>
                      <span className="info">
                      game #{tic?.lottery.id}
                        <span className="separator">/</span>
                      ID #{tic?.id}
                    </span>
                    </div>
                    <div className="body">
                      <div className="number-list">
                        {tic?.numbers.map(x=>(
                            <span key={x} className="number">{x}</span>
                        ))}
                      </div>
                      <span className="price">
                      price
                      <span>{tic?.price} {tic?.lottery.assetName}</span>
                    </span>
                    </div>
                  </div>
              ))}

              <span onClick={()=>skipPage(-(1))}>-</span><span onClick={()=>skipPage(1)}>=</span>

            </div>
          </div>
        </div>
      </div>
    )
}

export default BuyPage;
