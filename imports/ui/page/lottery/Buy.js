import React, { useState, useEffect } from 'react';

import Banner from '/imports/ui/components/banner/Banner';
import LinksList from '/imports/ui/components/linksList/linksList';
import Steps from '/imports/ui/components/Steps/Steps';
import Borrow from '/imports/ui/components/borrow/Borrow';
import Stats from '/imports/ui/components/stats/Stats';
import Subscribe from '/imports/ui/components/subscribe/Subscribe';
import NextDraw from "../../components/banner/components/NextDraw";
import Ticket from "/imports/ui/components/tickets/Ticket";

const BuyPage = () => {
  const [tickets, setTickets] = useState([{ id: 1 }]);

  const addTickets = () => {
    setTickets((oldTickets) => [...tickets, { id: tickets.length + 1 }]);
  };

  const buyTicket = (e) => {
    e.preventDefault();
    const [...checkedBoxes] = document.querySelectorAll("a[data-active=true]");

    const result = [];
    checkedBoxes.forEach((item) => {
      const index = result.findIndex((x) => x.id === item.name);
      if (index === -1) {
        result.push({ id: item.name, number: [item.id] });
      } else {
        result[index].number.push(item.id);
      }
    });

    console.log(result);
  };
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
              {tickets.map((x) => (
                <div key={x.id}>
                  <Ticket data={x} idTicket={tickets} />
                </div>
              ))}
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
                  <a href="#" className="btn btn-black" onClick={buyTicket}>
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
          </div>
        </div>
        <div className="new-tickets">
          <div className="container">
            <div className="head-box">
              <h2>New Tickets</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="list-new-tickets">
              <div className="item">
                <div className="head">
                  <span className="name">tony</span>
                  <span className="info">
                      game #1055
                      <span className="separator">/</span>
                      ID #83728
                    </span>
                </div>
                <div className="body">
                  <div className="number-list">
                    <span className="number">10</span>
                    <span className="number">10</span>
                    <span className="number">10</span>
                    <span className="number">10</span>
                    <span className="number">10</span>
                  </div>
                  <span className="price">
                      price
                      <span>13 wynne</span>
                    </span>
                </div>
              </div>
              <div className="item">
                <div className="head">
                  <span className="name">tony</span>
                  <span className="info">
                      game #1055
                      <span className="separator">/</span>
                      ID #83728
                    </span>
                </div>
                <div className="body">
                  <div className="number-list">
                    <span className="number">10</span>
                    <span className="number">10</span>
                    <span className="number">10</span>
                    <span className="number">10</span>
                    <span className="number">10</span>
                  </div>
                  <span className="price">
                      price
                      <span>13 wynne</span>
                    </span>
                </div>
              </div>
              <div className="item">
                <div className="head">
                  <span className="name">tony</span>
                  <span className="info">
                      game #1055
                      <span className="separator">/</span>
                      ID #83728
                    </span>
                </div>
                <div className="body">
                  <div className="number-list">
                    <span className="number">10</span>
                    <span className="number">10</span>
                    <span className="number">10</span>
                    <span className="number">10</span>
                    <span className="number">10</span>
                  </div>
                  <span className="price">
                      price
                      <span>13 wynne</span>
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BuyPage;