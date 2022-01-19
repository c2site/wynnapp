import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data'

import NextDraw from "../../components/banner/components/NextDraw";
import {useSubscribe} from "../../../api/hooks";
import {Ticket} from "../../../api/mongo/ticket";
import {cookies, Notify, RandomNumber} from "../../utils";
import {Money} from "../../../api/mongo/money";
import {Price} from "../../../api/mongo/price";
import { toast } from 'react-toastify';
import Registration from "../../components/header/components/Registration";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import {Meteor} from "meteor/meteor";
import { useTranslation } from "react-i18next";
import BuyUse from "./BuyUse";

const BuyPage = () => {
  const {t, i18n} = useTranslation();
  const login = useTracker(()=>Meteor.users.findOne(), []);

  const [skip, setSkip] = useState(5);
  useSubscribe('user.money');
  useSubscribe('price');
  useSubscribe(Meteor.subscribe('lottery.all', skip), [skip])
  const money = useTracker(()=>Money.find({userId: Meteor.userId()}).fetch(), []);
  const list = useTracker(()=> Ticket.find({}).fetch(), []);
  const [selected, setSelected] = useState([]);
  const [price, setPrice] = useState(0);
  const [wait, setWait] = useState(false);

  console.log(list);
  const pool = useTracker(()=>Money.find({coins: login?.settings?.dmoney || 'wynn' ,type: 'game', userId: {$in: ['game_4', 'game_3']}}).fetch(),[login]);
  const prices = useTracker(()=>Price.findOne({assetName: login?.settings?.dmoney || 'wynn'}), [login]);
  const wallet = useTracker(()=>Money.findOne({userId: Meteor.userId(), coins: login?.settings?.dmoney || 'wynn'}), [login])
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

  const skipPage = () => {
    let page = (skip + 5);
    setSkip(page);
  }

  useEffect(()=> {
    if(selected.length <= 4 || selected.length > 9) {
      setPrice(0)
    } else {
      setPrice(prices.prices[`price${selected.length}`].toFixed(2));
    }
  }, [selected, login])


  const buy = (e) => {
    e.preventDefault();
    setWait(true);
    Meteor.call('buy', selected, login?.settings?.dmoney, (err)=> {
      if(err) {
        toast.error(t(err.reason))
        setWait(false);
      } else {
        setSelected([])
        setWait(false);
      }


    })
  }

  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen((prevState) => !prevState);
  const ChangeWallet = (e)=> {
    Meteor.call('user.setMoney', e.currentTarget.value);
    setOpen(!isOpen);
    toggle();
  }


    return (
      <div className="buy-page inner-page">
        <div className="container">
          <div className="head-page">
            <div className="breadcrumbs">
              <span className="name">{t('nav.home')}</span>
              <span className="separator">
                <img src="./img/arrow-breadcrumbs.svg" alt="" />
              </span>
              <span className="name">{t('nav.lottery')} 5/36</span>
              <span className="separator">
                <img src="./img/arrow-breadcrumbs.svg" alt="" />
              </span>
              <span className="name">{t('nav.buy')}</span>
            </div>
          </div>
          <h2 className="title-page">{t('buy.title')}</h2>
          <h3 className="mb45">{t('nav.lottery')} 5/36</h3>
          <NextDraw button={false} coins={!login ? 'wynn' : login?.settings?.dmoney}/>
          <div className="row">
            <div className="col-lg-8">
              <div>
                <div className="ticket-block mb45m">
                  <div className="holder-ticket">
                    <div className="ticket-head" data-toggle="collapse" data-target="#ticket" role="button">
                      <div className="column">
                        <div className="info">
                          <span className="name">{t('buy.info_name')} 3/36</span>
                        </div>
                      </div>
                      <div className="column">
                        {/*<button className="btn btn-chose" disabled={true}>*/}
                        {/*  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"*/}
                        {/*       xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <path d="M11.0001 2.63605L15.3638 2.77211L15.3637 7" stroke="#CED0D3" stroke-width="1.5"*/}
                        {/*          stroke-linecap="round" stroke-linejoin="round"/>*/}
                        {/*    <line x1="14.4905" y1="3.20083" x2="3.01197" y2="14.6793" stroke="#CED0D3"*/}
                        {/*          stroke-width="1.5" stroke-linecap="round"/>*/}
                        {/*    <path d="M15.3639 11.0682L15.2278 15.432L10.9999 15.4319" stroke="#CED0D3"*/}
                        {/*          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>*/}
                        {/*    <line x1="14.7992" y1="14.5587" x2="3.32069" y2="3.08014" stroke="#CED0D3"*/}
                        {/*          stroke-width="1.5" stroke-linecap="round"/>*/}
                        {/*  </svg>*/}
                        {/*  <span>{t('buy.random')}</span>*/}
                        {/*</button>*/}
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
                          <span>{t('buy.clear')}</span>
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
              {t('buy.select')} <span> {selected.length} / 9 </span>
            </span>
                      <span className="price">
              {t('buy.price')} <span>{price} {!login ? 'wynn' : login?.settings?.dmoney}</span>
            </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <BuyUse />
              <div className="info-text">
                <h6>{t('buy.title2')}</h6>
                <p>{t('buy.text1')}</p>
                <p>{t('buy.text2')}</p>
              </div>
              <div className="info-text">
                <p>{t('buy.text3')}</p>
              </div>
              <div className="info-text">
                <h6>{t('buy.title3')}</h6>
                <p>{t('buy.text4')}</p>
              </div>
              <div className="info-text">
                <h6>{t('buy.title4')}</h6>
                <p>{t('buy.text5')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="prize-holder">
          <div className="prize-box">
            <h2>{t('buy.title4')}</h2>
            <div className="prize-list row">
              {pool?.map(money=>(
                  <div className={'col'} key={money._id}>
                    <div className="item">
                      <div className="ico">
                        <img src="./img/ico-prize-01.svg" alt="" />
                      </div>
                      <span className="number">{money.value()} {money.coins}</span>
                      <span className="info">{(money.userId).replace(/^.{5}/, '')} {t('buy.matches')}</span>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          <div className="new-tickets">
            <div className="container">
              <div className="head-box">
                <h2>{t('buy.title5')}</h2>
                {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>*/}
              </div>
              <div className="list-new-tickets">
                {list?.map(tic=> (
                    <div key={tic?._id} className="item">
                      <div className="head">
                        <span className="name">{tic?.user?.name || 'Anonyms'}</span>
                        <span className="info">
                        {t('buy.game')} #{tic?.lottery.id}
                          <span className="separator">/</span>
                        ID #{tic?.id}
                      </span>
                      </div>
                      <div className="body">
                        <div className="number-list w-50">
                          {tic?.numbers.map(x=>(
                              <span key={x} className="number"><span>{x}</span></span>
                          ))}
                        </div>
                        <span className="price">
                        {t('buy.price')}
                        <span>{tic?.price} {tic?.lottery.assetName}</span>
                      </span>
                      </div>
                    </div>
                ))}
                <div className={'text-center mt20'}>
                  <span className={'btn btn-primary'} onClick={(e)=>skipPage()}>{t('buy.more')}</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BuyPage;
