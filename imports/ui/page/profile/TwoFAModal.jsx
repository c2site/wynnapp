import React, { useState } from 'react';
import otplib from 'otplib';
import QRCode from 'qrcode.react';
import { Button, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, } from 'reactstrap';
import { toast } from 'react-toastify';
import styled from "styled-components";

import { useOpen } from '/imports/api/hooks';

import TokenInput from '/imports/ui/components/modal/TokenInput';
import CopyAddress from '/imports/ui/components/CopyAddress';

const TwoFAModal = ({ secret, close }) => {
  const [isOpen, toggle] = useOpen(secret, close);
  const [token, setToken] = useState('');

  const enable2FA = () => {
    if (token.length !== 6 || isNaN(Number(token))) {
      toast.error('Invalid code');
      return;
    }

    Meteor.call('user.confirm2fa', token, (e) => {
      if (e) {
        toast.error('Invalid code');
      } else {
        toggle();
        toast.success('Two-Factor has activated');
      }
    });
  };

  if (!secret) {
    return <></>;
  }
  const user = Meteor.user();
  const otpauth = otplib.authenticator.keyuri(user.emails[0].address, 'Wynn', secret);

  return (
    <Modal toggle={toggle} isOpen={isOpen} className="modal-app">
      <ModalHeader toggle={toggle}>Two-Factor Authentication</ModalHeader>
      <ModalBody>
        <h5>Two-factor authentication increases the security of your XPlatform account</h5>
        <p className={'mb-1'}>All you need is a compatible app on your smartphone, for example:</p>
        <UL>
          <li>Google Authenticator</li>
          <li>Duo</li>
          <li>Authy</li>
        </UL>
        <div className="d-flex justify-content-center">
          <div className="border p-3">
            <QRCode value={otpauth} level="H" size={256} />
          </div>
        </div>
        <FormGroup className={'mt-4'}>
          <CopyAddress address={secret} />
        </FormGroup>
        <p className={'mt-2'}>
          Scan this image with your app. You will see a 6-digit code on your screen.
          Enter the code below to verify your phone and complete the setup.
        </p>
        <TokenInput token={token} onChange={(tkn) => setToken(tkn)} />
      </ModalBody>
      <ModalFooter>
        <Button color={'primary'} onClick={enable2FA}>
          Activate
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default TwoFAModal;


const UL = styled.ul`
  padding-inline-start: 40px;

  &, & > li {
    list-style-type: disc !important;
  }
`;




