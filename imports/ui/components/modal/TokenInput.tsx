import React from 'react';
import { Col, FormGroup, Input, Row } from 'reactstrap';

interface TokenInputProps {
  token: string;
  onChange: (token: string) => void;
  offset?: number;
  size?: number;
}

const regexp = new RegExp(`[^0-9]`);

const TokenInput: React.FC<TokenInputProps> = ({ token, onChange, offset = 4, size = 4 }) => {
  const handleChange = (e) => {
    const clear = e.currentTarget.value.replace(regexp, '');
    onChange(clear);
  };

  return (
      <div className="twofa-box">
        <div className="row">
          <div className="col-md-12">
            <div className="input-box">
              <FormGroup>
                <Input
                    className={'text-center'}
                    type={'text'}
                    value={token}
                    onChange={handleChange}
                    pattern={`[0-9]*`}
                    inputMode={'numeric'}
                    maxLength={6}
                />
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TokenInput;
