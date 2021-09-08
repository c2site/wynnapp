import React, { useState } from 'react';
import {Button, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';

import TokenInput from './TokenInput';

interface TwoFAConfirmProps {
  open: boolean;
  close: () => void;
  confirm: (token: string) => void;
}

const TwoFAConfirm: React.FC<TwoFAConfirmProps> = ({ open, close, confirm }) => {
  const [token, setToken] = useState('');

  const closeModal = () => {
    setToken('');
    close();
  };

  return (
    <Modal isOpen={open} toggle={closeModal} className="modal-app text-center">
      <ModalHeader toggle={closeModal}>2fa confirmation</ModalHeader>
      <ModalBody>
        <div className="twofa-box">
          <div className="row">
            <div className="col-md-12">
              <div className="input-box">
                <FormGroup>
                  <Label for="">2fa code</Label>
                  <TokenInput type="text" placeholder="2fa code" token={token} onChange={(tkn) => setToken(tkn)} />
                </FormGroup>
              </div>
            </div>
          </div>
        </div>

      </ModalBody>
      <ModalFooter>
        <div className="btn-box">
          <Button  onClick={() => confirm(token)} color={'black'}>
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.39325 9.83193C1.5655 9.51356 1.53105 8.3552 2.33842 7.98822L17.1842 1.24011C18.0254 0.857758 18.8908 1.7231 18.5084 2.56428L11.7603 17.4101C11.3933 18.2175 10.235 18.183 9.9166 17.3553L7.98633 12.3366C7.88475 12.0725 7.67605 11.8638 7.41196 11.7622L2.39325 9.83193Z" stroke="white" strokeWidth="2"/>
            </svg>
            Send
          </Button>
          <Button color="close-default" onClick={closeModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6.00003L18.7742 18.7742" stroke="#1E2632" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 18.7742L18.7742 6.00001" stroke="#1E2632" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Close
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default TwoFAConfirm;
