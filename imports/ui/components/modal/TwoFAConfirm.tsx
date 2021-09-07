import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import TokenInput from './TokenInput';

interface TwoFAConfirmProps {
  open: boolean;
  close: () => void;
  confirm: () => void;
  token: string;
  onChange: (token: string) => void;
}

const TwoFAConfirm: React.FC<TwoFAConfirmProps> = ({ open, close, confirm, token, onChange }) => {
  return (
    <Modal isOpen={open} toggle={close} className="modal-app text-center">
      <ModalHeader toggle={close}>2fa confirmation</ModalHeader>
      <ModalBody>
        <TokenInput token={token} onChange={onChange} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={confirm} color={'primary'}>
          Send
        </Button>
        <Button color="white" onClick={close}>
          <span>Close</span>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default TwoFAConfirm;
