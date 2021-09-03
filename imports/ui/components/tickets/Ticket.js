import React from "react";

import '/imports/ui/style/components/ticket/ticket.scss'
import TicketItem from "/imports/ui/components/tickets/TicketItem";

const Ticket = ({ data }) => {
  const numbers = [];

  for (let i = 1; i < 37; i++) {
    numbers.push(i);
  }

  return (
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
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0001 2.63605L15.3638 2.77211L15.3637 7" stroke="#CED0D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="14.4905" y1="3.20083" x2="3.01197" y2="14.6793" stroke="#CED0D3" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M15.3639 11.0682L15.2278 15.432L10.9999 15.4319" stroke="#CED0D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="14.7992" y1="14.5587" x2="3.32069" y2="3.08014" stroke="#CED0D3" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span>random</span>
            </button>
            <button className="btn btn-default">
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.88647 15.2122L2.37169 4.91667H16.6281L16.1134 15.2122C16.0003 17.4741 14.1334 19.25 11.8687 19.25H7.13117C4.86645 19.25 2.99956 17.4741 2.88647 15.2122Z" stroke="#CED0D3" stroke-width="1.5"/>
                <path d="M6.29175 5H12.7084V4C12.7084 2.75736 11.7011 1.75 10.4584 1.75H8.54175C7.29911 1.75 6.29175 2.75736 6.29175 4V5Z" stroke="#CED0D3" stroke-width="1.5"/>
                <path d="M0.791748 4.95833H18.2084" stroke="#CED0D3" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M11.875 9.70833V13.6667" stroke="#CED0D3" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M7.125 9.70833V13.6667" stroke="#CED0D3" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              clear
            </button>
          </div>
        </div>
        <div className="number-list">
          <TicketItem num={numbers} idTicket={data.id} />
        </div>
      </div>
        <div className="ticket-stats">
          <div className="holder">
            <span class="number-tickets">
              select number <span> 5 / 36 </span>
            </span>
            <span class="price">
              price <span>13 wynne</span>
            </span>
          </div>
        </div>
    </div>
  );
};

export default Ticket;
