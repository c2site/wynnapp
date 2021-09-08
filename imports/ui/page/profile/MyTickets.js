import React from 'react';
import {useSubscribe} from "../../../api/hooks";
import { useTracker } from 'meteor/react-meteor-data'
import {Ticket} from "../../../api/mongo/ticket";
import {Meteor} from "meteor/meteor";


const MyTickets = () => {
  useSubscribe('lottery.user');
  const list = useTracker(()=>Ticket.find({userId: Meteor.userId()}).fetch(), []);
    return (
          <div className="row">
            <div className="col-lg-8">
              <div className="list-new-tickets my-tickets">
                {list?.map(ticket=>(
                    <div className="item" key={ticket._id}>
                      <div className="head">
                      <span className="info">
                      game #{ticket.lottery.id}
                        <span className="separator">/</span>
                      ID #{ticket.id}
                    </span>
                        <div className={'status '+ticket.status}>
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.75">
                              <ellipse cx="10.9997" cy="11" rx="9.16667" ry="9.16667" stroke="white" stroke-width="2"/>
                              <path d="M11 6.83334V11.8333L13.0833 13.9167" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                          </svg>
                          {ticket.status}
                        </div>
                      </div>
                      <div className="body">
                        <div className="number-list">
                          {ticket.numbers.map(x=>(
                              <span className="number" key={'k'+x}>{x}</span>
                          ))}
                        </div>
                        <span className="price">
                      price
                      <span>{ticket.price} {ticket.lottery.assetName}</span>
                    </span>
                      </div>
                    </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-tickets">
                <h4>YOUR TICKETS</h4>
                <div className="info-list">
                  <div className="info-item">
                    <div className="ico wait">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.75">
                          <ellipse cx="10.9997" cy="11" rx="9.16667" ry="9.16667" stroke="white" stroke-width="2"/>
                          <path d="M11 6.83333V11.8333L13.0833 13.9167" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                      </svg>
                    </div>
                    <strong className="name">WAIT</strong>
                    <p>These tickets are still awaiting a draw. As soon as the winning combination is determined, it will go to the Win or Lose section.</p>
                  </div>
                  <div className="info-item">
                    <div className="ico win">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10.9997" cy="11" r="9.16667" stroke="#C6C8CB" stroke-width="2"/>
                        <path d="M8.5 10.9581L10.2678 12.7259L13.8033 9.19032" stroke="#C6C8CB" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </div>
                    <strong className="name">WIN</strong>
                    <p>Your tickets that have 3, 4, or 5 matches (matched numbers are highlighted). These are winning tickets.</p>
                  </div>
                  <div className="info-item">
                    <div className="ico lose">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                          <circle cx="9.99967" cy="10" r="9.16667" stroke="#CFD1D3" stroke-width="2"/>
                          <path d="M6.66699 13.75C6.66699 13.75 8.09556 12.5 10.0003 12.5C11.9051 12.5 13.3337 13.75 13.3337 13.75" stroke="#CFD1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6.66699 7.5H6.87533" stroke="#CFD1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M13.333 7.5H13.5413" stroke="#CFD1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="20" height="20" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <strong className="name">LOSE</strong>
                    <p>Tickets that didn't match.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default MyTickets;