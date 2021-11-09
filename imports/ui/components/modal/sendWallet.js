import React, { useState } from 'react';
import { Button, Modal, Form, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Meteor} from "meteor/meteor";
import {toast} from "react-toastify";
import { useTranslation } from "react-i18next";

const SendWallet = (props) => {
  const {
    wallet
  } = props;
  const {t, i18n} = useTranslation();

  const [modal, setModal] = useState(false);
  const [send, setSend] = useState({address: '', amount: 0});
  const toggle = () => setModal(!modal);


  const onSubmit = (e) => {
    e.preventDefault();

    Meteor.call('user.send.coin', {wallet, send}, (err) => {
      if(err) {
        toast.error(err.reason);
      } else {
        setSend({address: '', amount: 0});
        toggle()
      }
    });
  };

  const change = (e) => {
    const newState = { [e.currentTarget.name]: e.currentTarget.value };
    setSend((prevState) => ({ ...prevState, ...newState }));

  }

  const max = () => {
    const newState = { ['amount']: wallet.value() };
    setSend((prevState) => ({ ...prevState, ...newState }));
  }

  return (
    <>
      <Button className="btn-hide" onClick={toggle}></Button>
      <Modal isOpen={modal} toggle={toggle} className={'modal-app'}>
        <ModalHeader toggle={toggle}>{t('form.send')}  ({wallet.value()} {wallet.coins})</ModalHeader>
        <ModalBody>
          <Form className="form" onSubmit={()=>onSubmit}>
            <div className="row">
              <div className="col-md-9">
                <div className="input-box">
                  <Label for="">{t('form.wallet_address')}</Label>
                  <Input type="text" name={'address'} onChange={change} value={send.address} />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-box">
                  <Label for="">{t('form.amount')}</Label>
                  <div className="input-max">
                    <Input type="number" name={'amount'} onChange={change} value={send.amount} />
                    <span className="max" onClick={max} >{t('form.max')}</span>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <div className="btn-box">
            <Button color="black" onClick={()=>onSubmit} type={'submit'}>
              <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11.3137L6.65685 16.9706L17.9706 5.65687" stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
              {t('form.send')}
            </Button>
            <Button color="close-default" onClick={toggle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6.00003L18.7742 18.7742" stroke="#1E2632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 18.7742L18.7742 6.00001" stroke="#1E2632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {t('form.close')}
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default SendWallet;
