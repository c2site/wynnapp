import React, { useState } from 'react';
import { Button, Modal, Form, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Moment from "react-moment";
import { useTracker } from 'meteor/react-meteor-data'
import {useSubscribe} from "../../../api/hooks";
import {Coin} from "../../../api/mongo/coins";

const RatingModal = (props) => {
  const {
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  useSubscribe('coin');

  const list = useTracker(()=> Coin.find().fetch(), []);
  return (
    <>
      <Button className="btn-default" onClick={toggle}>?</Button>
      <Modal isOpen={modal} toggle={toggle} className={'modal-app'}>
        <ModalHeader toggle={toggle}>rating</ModalHeader>
        <ModalBody>
          <div className="table profile-table">
            <div className="table-head">
              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                </tr>
                </thead>
              </table>
            </div>
            <table>
              <tbody>
              {list?.map(coin=>(
                  <tr>
                    <td>{coin.name}</td>
                    <td>1 {coin.name} = { (1 / coin.rating ).toFixed(2)} rating</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="btn-box">
            <Button color="close-default" onClick={toggle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6.00003L18.7742 18.7742" stroke="#1E2632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 18.7742L18.7742 6.00001" stroke="#1E2632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Close
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default RatingModal;
