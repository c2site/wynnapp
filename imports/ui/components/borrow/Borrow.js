import React from "react";
import {useSubscribe} from "../../../api/hooks";

import { useTracker } from 'meteor/react-meteor-data'
import {Ticket} from "../../../api/mongo/ticket";

const Borrow = () => {
  useSubscribe('lottery.tickets', []);
  const list = useTracker(()=>Ticket.find().fetch(), []);
  return (
    <>
      <div className="borrow-box">
        <div className="container">
          <div className="head-box">
            <h2 className='black'><span>THE SMARTER WAY</span>LEND AND BORROW</h2>
            <p>The World's First Crypto Lending Marketplace and Affordable and competitive interest rates</p>
          </div>
          <div className="table coin-table">
            <div className="table-head">
              <table>
                <thead>
                <tr>
                  <th>User</th>
                  <th>bet id</th>
                  <th>bet amount</th>
                  <th>game</th>
                  <th>profit</th>
                </tr>
                </thead>
              </table>
            </div>
            <table>
              <tbody>
              {list?.map(ticket=>(
                  <tr key={ticket._id}>
                    <td>{ticket?.user?.name || 'Anonyms'}</td>
                    <td>{ticket.id}</td>
                    <td className='red'>{ticket.price} {ticket.lottery.assetName}</td>
                    <td className='game1'>{ticket.name}</td>
                    <td className='green'>{ticket.win} {ticket.lottery.assetName}</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Borrow;
