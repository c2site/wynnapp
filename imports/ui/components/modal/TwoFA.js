import React, { useState } from 'react';
import { Button, Modal, Label, Input, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { toast } from "react-toastify";
import otplib from "otplib";
import QRCode from "qrcode.react";
import { useTracker } from 'meteor/react-meteor-data'

import TokenInput from "./TokenInput";
import TwoFAConfirm from "./TwoFAConfirm";
import { useTranslation } from "react-i18next";


const QR = ({ secret }) => {
  if (!secret) {
    return <></>;
  }
  const user = Meteor.users.findOne({});
  const otpauth = otplib.authenticator.keyuri(user.emails[0].address, 'Wynne', secret);
  console.log(otpauth);
  return (
    <QRCode value={otpauth} level="H" size={256} />
  )
}

const TwoFA = () => {
  const {t, i18n} = useTranslation();
  const [openDeactivate, setDeactivate] = useState(false);
  const [secret, setSecret] = useState('');
  const [token, setToken] = useState('');
  const user = useTracker(()=>Meteor.users.findOne({}), []);
  console.log(user);

  const enable2FA = () => {
    if (token.length !== 6 || isNaN(Number(token))) {
      toast.error('Invalid code');
      return;
    }

    Meteor.call('user.confirm2fa', token, (e) => {
      if (e) {
        toast.error('Invalid code');
      } else {
        setSecret('');
        toast.success('Two-Factor has activated');
      }
    });
  };

  const toggle2FA = () => {
    if (user?.settings?.twoFa) {
      setDeactivate(true);
    } else {
      Meteor.call('user.enable2fa', (e, r) => {
        if (e) {
          console.log(e);
        } else {
          setSecret(r);
        }
      });
    }
  };

  const handleDeactivate = (tkn) => {
    if (!tkn) {
      return;
    }

    Meteor.call('user.disable2fa', tkn, (e) => {
      if (e) {
        toast.error(e.reason);
      } else {
        setDeactivate(false);
      }
      setToken('');
    });
  }

  const toggleSecret = () => setSecret('');

  console.log(secret);
  return (
    <>
      <Button className="btn-primary active-2fa" onClick={toggle2FA}>{t('active')}</Button>
      <Modal isOpen={!!secret} toggle={toggleSecret} className={'modal-app'}>
        <ModalHeader toggle={toggleSecret}>{t('2fa.title')}</ModalHeader>
        <ModalBody>
          <div className="twofa-box">
            <div className="img-holder">
              <QR secret={secret} />
            </div>
            <Row>
              <Col md={12}>
                <div className="input-box">
                  <Label for="">{t('2fa.code')}</Label>
                  <TokenInput type="text" placeholder={t('2fa.code')} token={token} onChange={(tkn) => setToken(tkn)} />
                </div>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="btn-box">
            <Button color="black" onClick={enable2FA} type={'submit'}>
              <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11.3137L6.65685 16.9706L17.9706 5.65687" stroke="white"
                      strokeLinecap="round" />
              </svg>
              {t('form.save')}
            </Button>
            <Button color="close-default" onClick={toggleSecret}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6.00003L18.7742 18.7742" stroke="#1E2632" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" />
                <path d="M6 18.7742L18.7742 6.00001" stroke="#1E2632" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" />
              </svg>
              {t('form.close')}
            </Button>
          </div>
        </ModalFooter>
      </Modal>
      <TwoFAConfirm
        open={openDeactivate}
        close={() => setDeactivate(false)}
        confirm={handleDeactivate}
      />
    </>
  );
}

export default TwoFA;
