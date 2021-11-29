import React, { useState } from 'react';
import { Button, Modal, Form, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Moment from "react-moment";
import { useTracker } from 'meteor/react-meteor-data'
import {useSubscribe} from "../../../api/hooks";
import {Coin} from "../../../api/mongo/coins";
import { useTranslation } from "react-i18next";

const RatingModal = (props) => {
  const {
  } = props;
  const {t, i18n} = useTranslation();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  useSubscribe('coin');

  const list = useTracker(()=> Coin.find().fetch(), []);
  return (
    <>
      <Button className="btn-default" onClick={toggle}>?</Button>
      <Modal isOpen={modal} toggle={toggle} className={'modal-app modal-black'}>
        <ModalHeader toggle={toggle}>{t('form.rating')}</ModalHeader>
        <ModalBody>
          <div className="text-rating">
            <p>{t('rating.text')}</p>
          </div>
          <div className="flex f-space-between flex-wrap rating-table">
            <div className="table-holder">
              <table>
                <thead>
                <tr>
                  <th>{t('rating.rating')}</th>
                  <th>{t('rating.level')}</th>
                  <th>{t('rating.discount')}</th>
                </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10</td>
                    <td>{t('rating.vip')} 5 </td>
                    <td>1.1%</td>
                  </tr>
                  <tr>
                    <td>150</td>
                    <td>{t('rating.vip')} 4</td>
                    <td>2.2%</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>{t('rating.vip')} 3</td>
                    <td>3.3%</td>
                  </tr>
                  <tr>
                    <td>1000</td>
                    <td>{t('rating.vip')} 2</td>
                    <td>5.5%</td>
                  </tr>
                  <tr>
                    <td>5000</td>
                    <td>{t('rating.vip')} 1</td>
                    <td>10.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-holder">
              <table>
                  <thead>
                  <tr>
                    <th>{t('form.name')}</th>
                    <th>{t('form.amount')}</th>
                  </tr>
                  </thead>
                <tbody>
                {list?.map(coin=>(
                  <tr>
                    <td>{coin.name}</td>
                    <td>1 {coin.name} = { (1 / coin.rating ).toFixed(2)} {t('rating.rating')}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="btn-box">
            <Button color="close-white" onClick={toggle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6.00003L18.7742 18.7742" stroke="#FFFFBF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 18.7742L18.7742 6.00001" stroke="#FFFFBF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {t('form.close')}
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default RatingModal;
