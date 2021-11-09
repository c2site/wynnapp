import React from "react";
import {useSubscribe} from "../../../api/hooks";

import { useTracker } from 'meteor/react-meteor-data'
import {Ticket} from "../../../api/mongo/ticket";
import { useTranslation } from "react-i18next";

const Borrow = () => {
  const {t, i18n} = useTranslation();
  useSubscribe('lottery.tickets', []);
  const list = useTracker(()=>Ticket.find().fetch(), []);
  return (
    <>
      <div className="borrow-box">
        <div className="container">
          <div className="head-box">
            <h2 className='black'><span>{t('borrow.title')}</span>{t('borrow.sub_title')}</h2>
            {/*<p>The World's First Crypto Lending Marketplace and Affordable and competitive interest rates</p>*/}
          </div>
          <div className="scroll-table">
            <div className="table coin-table">
              <div className="table-head">
                <table>
                  <thead>
                  <tr>
                    <th>{t('borrow.table.user')}</th>
                    <th>{t('borrow.table.id')}</th>
                    <th>{t('borrow.table.amount')}</th>
                    <th>{t('borrow.table.game')}</th>
                    <th>{t('borrow.table.profit')}</th>
                  </tr>
                  </thead>
                </table>
              </div>
              <table>
                <tbody>
                {list?.map(ticket=>(
                    <tr key={ticket._id}>
                      <td><span className="th-name">{t('borrow.table.user')}</span>{ticket?.user?.name || 'Anonyms'}</td>
                      <td><span className="th-name">{t('borrow.table.id')}</span>{ticket.id}</td>
                      <td className='red'><span className="th-name">{t('borrow.table.amount')}</span>{ticket.price} {ticket.lottery.assetName}</td>
                      <td className='game1'><span className="th-name">{t('borrow.table.game')}</span>{ticket.name}</td>
                      <td className='green'><span className="th-name">{t('borrow.table.profit')}</span>{ticket.win} {ticket.lottery.assetName}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Borrow;
