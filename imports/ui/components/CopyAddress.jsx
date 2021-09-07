import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import { Input } from 'reactstrap';
import { toast } from 'react-toastify';

const IconCopy = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.5 6.25H1.25C0.559648 6.25 0 6.80965 0 7.5V18.75C0 19.4404 0.559648 20 1.25 20H12.5C13.1904 20 13.75 19.4404 13.75 18.75V7.5C13.75 6.80965 13.1904 6.25 12.5 6.25ZM12.5 18.75H1.25V7.5H12.5V18.75Z"
      fill="#292F45" />
    <path
      d="M18.75 0H7.5C6.80965 0 6.25 0.559648 6.25 1.25V4.375H7.5V1.25H18.75V12.5H15.625V13.75H18.75C19.4404 13.75 20 13.1904 20 12.5V1.25C20 0.559648 19.4404 0 18.75 0Z"
      fill="#292F45" />
  </svg>
);

const CopyAddress = ({ address }) => {
  return (
    <CopyWrap>
      <Input type="text" value={address} disabled />
      <CopyToClipboard text={address} onCopy={() => toast.success('Copied!')}>
        <CopyButton type={'button'}>
          <IconCopy />
        </CopyButton>
      </CopyToClipboard>
    </CopyWrap>

  );
};

export default CopyAddress;

const CopyWrap = styled.div`
  position: relative;
  width: 100%;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  background: none;
`;

