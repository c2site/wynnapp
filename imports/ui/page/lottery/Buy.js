import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data'

import NextDraw from "../../components/banner/components/NextDraw";
import '/imports/ui/style/components/ticket/ticket.scss'
import {useSubscribe} from "../../../api/hooks";
import {Ticket} from "../../../api/mongo/ticket";
import TicketItem from "../../components/tickets/TicketItem";
import {Notify} from "../../utils";

const BuyPage = () => {

  useSubscribe('lottery.all', []);
  const list = useTracker(()=> Ticket.find().fetch(), []);
  const [selected, setSelected] = useState([]);
  const numbers = [];
  for(let i = 1; i <= 36; i++) {
    numbers.push(i)
  }
  const onChangeBox = (value) => {
    if(selected.length > 11) Notify();
    const index = selected.indexOf(value);
    if (index === -1) {
      selected.push(value);
    } else {
      selected.splice(index, 1)
    }
    setSelected([...selected]);
  }



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
          <NextDraw button={false}/>
          <div className="row">
            <div className="col-md-8">
              <div>
                <div className="ticket-block">
                  <div className="holder-ticket">
                    <div className="ticket-head" data-toggle="collapse" data-target="#ticket" role="button">
                      <div className="column">
                        <div className="info">
                          <span className="name">buy ticket 3/36</span>
                        </div>
                      </div>
                      <div className="column">
                        <button className="btn btn-chose">
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
                        <button className="btn btn-default">
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
                          clear
                        </button>
                      </div>
                    </div>
                    <div className="number-list">
                      {numbers.map(x=>(
                          <div className={"item"}>
                            <div className="payment-check" key={x}>
                              <input type="checkbox" onChange={()=>onChangeBox(x)} checked={selected.includes(x)}/>
                              <label htmlFor="">
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
              select number <span> {selected.length} / 11 </span>
            </span>
                      <span className="price">
              price <span>13 wynne</span>
            </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ticket-balance">
                <div className="contain-balance">
                  <h3>balance</h3>
                  <div className="balance-info">
                  <span className="item">
                    14000 wynne
                  </span>
                    <span className="item">
                    0.0001150 BTC
                  </span>
                  </div>
                  <a href="#" className="btn btn-black">
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
                  </a>
                </div>
              </div>
              <div className="info-text">
                <h6>Выберите 5 чисел</h6>
                <p>Вам нужно выбрать 5 любых чисел. Это можно сделать вручную или активизировать режим “Random” в верхней части билета.  Режим “Random” выбирает ячейки случайным образом.</p>
                <p>Выигрывают билеты, в которых после розыгрыша окажется 3, 4 или 5 совпадений. </p>
              </div>
              <div className="info-text">
                <h6>Хотите увеличить шансы на выигрыш?</h6>
                <p>Добавьте к билету еще 1, 2, 3 или 4 дополнительных числа (это платная услуга). Также вы можете купите еще один билет.</p>
              </div>
              <div className="info-text">
                <h6>Призовой фонд</h6>
                <p>Почти все вырученные средства (90%) поступают в призовой фонд, который в дальнейшем распределяется между победителями: 3 совпадения - 30%,
                  4 совпадения - 30%, 5 совпадений - 30%.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="prize-box">
          <h2>prize pool</h2>
          <div className="prize-list">
            <div className="item">
              <div className="ico">
                <img src="./img/ico-prize-01.svg" alt="" />
              </div>
              <span className="number">345943 WYNNE</span>
              <span className="info">4 matches</span>
            </div>
            <div className="item">
              <div className="ico">
                <img src="./img/ico-prize-02.svg" alt="" />
              </div>
              <span className="number">2193 WYNNE</span>
              <span className="info">3 matches</span>
            </div>
          </div>
        </div>
        <div className="distribution-box">
          <div className="container">
            <div className="head-box">
              <h2 className="black">Distribution</h2>
              <p>90% вырученных денег от продажи билетов идут в призовой фонд</p>
            </div>
            <div className="distribution-list">
              <div className="line">
                <div className="item center">
                  <span className="info">4 match</span>
                  <strong>30%</strong>
                </div>
              </div>
              <div className="line">
                <div className="item">
                  <span className="info">5 match</span>
                  <strong>30%</strong>
                </div>
                <div className="item center ticket">
                  <div className="ico">
                    <svg width="78" height="60" viewBox="0 0 78 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 21.128H0.5V22.1887L1.50013 22.5422L2 21.128ZM2 39.872L1.50013 38.4578L0.5 38.8113V39.872H2ZM74.875 39.872H76.375V38.8113L75.3749 38.4578L74.875 39.872ZM74.875 21.128L75.3749 22.5422L76.375 22.1887V21.128H74.875ZM3.5 6C3.5 5.72386 3.72386 5.5 4 5.5V2.5C2.067 2.5 0.5 4.067 0.5 6H3.5ZM3.5 21.128V6H0.5V21.128H3.5ZM10.125 30.5C10.125 25.5177 6.94014 21.2831 2.49987 19.7137L1.50013 22.5422C4.77926 23.7012 7.125 26.8286 7.125 30.5H10.125ZM2.49987 41.2863C6.94014 39.7169 10.125 35.4823 10.125 30.5H7.125C7.125 34.1714 4.77926 37.2988 1.50013 38.4578L2.49987 41.2863ZM3.5 55V39.872H0.5V55H3.5ZM4 55.5C3.72386 55.5 3.5 55.2761 3.5 55H0.5C0.5 56.933 2.067 58.5 4 58.5V55.5ZM72.875 55.5H4V58.5H72.875V55.5ZM73.375 55C73.375 55.2761 73.1511 55.5 72.875 55.5V58.5C74.808 58.5 76.375 56.933 76.375 55H73.375ZM73.375 39.872V55H76.375V39.872H73.375ZM66.75 30.5C66.75 35.4823 69.9349 39.7169 74.3751 41.2863L75.3749 38.4578C72.0957 37.2988 69.75 34.1714 69.75 30.5H66.75ZM74.3751 19.7137C69.9349 21.2831 66.75 25.5177 66.75 30.5H69.75C69.75 26.8286 72.0957 23.7012 75.3749 22.5422L74.3751 19.7137ZM73.375 6V21.128H76.375V6H73.375ZM72.875 5.5C73.1511 5.5 73.375 5.72386 73.375 6H76.375C76.375 4.067 74.808 2.5 72.875 2.5V5.5ZM4 5.5H72.875V2.5H4V5.5Z" fill="#1E2632"/>
                      <path d="M48 4V11" stroke="#1E2632" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M48 27V34" stroke="#1E2632" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M48 50V57" stroke="#1E2632" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <span className="name">TicketPrice</span>
                  <span className="arrow top">
                    <svg width="16" height="88" viewBox="0 0 16 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 86.5C7 87.0523 7.44772 87.5 8 87.5C8.55228 87.5 9 87.0523 9 86.5H7ZM8.70711 0.792892C8.31658 0.402367 7.68342 0.402367 7.29289 0.792892L0.928932 7.15685C0.538408 7.54738 0.538408 8.18054 0.928932 8.57107C1.31946 8.96159 1.95262 8.96159 2.34315 8.57107L8 2.91422L13.6569 8.57107C14.0474 8.96159 14.6805 8.96159 15.0711 8.57107C15.4616 8.18054 15.4616 7.54738 15.0711 7.15685L8.70711 0.792892ZM9 86.5L9 1.5H7L7 86.5H9Z" fill="#C4C4C4"/>
                    </svg>
                  </span>
                  <span className="arrow left">
                    <svg width="87" height="16" viewBox="0 0 87 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M86 9C86.5523 9 87 8.55228 87 8C87 7.44772 86.5523 7 86 7L86 9ZM0.292893 7.29289C-0.0976333 7.68341 -0.0976334 8.31657 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6568L2.41422 7.99999L8.07107 2.34314C8.46159 1.95261 8.46159 1.31945 8.07107 0.928925C7.68054 0.538401 7.04738 0.538401 6.65685 0.928925L0.292893 7.29289ZM86 7L1 6.99999L1 8.99999L86 9L86 7Z" fill="#C4C4C4"/>
                    </svg>
                  </span>
                  <span className="arrow right">
                    <svg width="87" height="16" viewBox="0 0 87 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M86.7071 8.70711C87.0976 8.31658 87.0976 7.68342 86.7071 7.29289L80.3431 0.928932C79.9526 0.538407 79.3195 0.538407 78.9289 0.928932C78.5384 1.31946 78.5384 1.95262 78.9289 2.34315L84.5858 8L78.9289 13.6569C78.5384 14.0474 78.5384 14.6805 78.9289 15.0711C79.3195 15.4616 79.9526 15.4616 80.3431 15.0711L86.7071 8.70711ZM1 6.99999C0.447716 6.99999 4.82823e-08 7.44771 0 7.99999C-4.82823e-08 8.55228 0.447716 8.99999 1 8.99999L1 6.99999ZM86 7L1 6.99999L1 8.99999L86 9L86 7Z" fill="#C4C4C4"/>
                    </svg>
                  </span>
                  <span className="arrow bottom">
                    <svg width="16" height="88" viewBox="0 0 16 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 87.2071C7.68342 87.5976 8.31658 87.5976 8.70711 87.2071L15.0711 80.8431C15.4616 80.4526 15.4616 79.8195 15.0711 79.4289C14.6805 79.0384 14.0474 79.0384 13.6569 79.4289L8 85.0858L2.34315 79.4289C1.95262 79.0384 1.31946 79.0384 0.928932 79.4289C0.538408 79.8195 0.538408 80.4526 0.928932 80.8431L7.29289 87.2071ZM9 1.5C9 0.947716 8.55228 0.5 8 0.5C7.44772 0.5 7 0.947716 7 1.5H9ZM9 86.5L9 1.5H7L7 86.5H9Z" fill="#C4C4C4"/>
                    </svg>
                  </span>
                </div>
                <div className="item">
                  <span className="info">3 match</span>
                  <strong>30%</strong>
                </div>
              </div>
              <div className="line">
                <div className="item center">
                  <span className="info">dev</span>
                  <strong>10%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="new-tickets">
          <div className="container">
            <div className="head-box">
              <h2>New Tickets</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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

            </div>
          </div>
        </div>
      </div>
    )
}

export default BuyPage;