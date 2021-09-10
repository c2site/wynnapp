import React, {useState} from "react";
import {useParam} from "../../../api/hooks";
import {toast} from "react-toastify";
import {Input, Label, Button, Form} from "reactstrap";
import TokenInput from "../../components/modal/TokenInput";
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

const RecoveryPassword = () => {
    const token = useParam('token');
    const [pass, setPass] = useState('');
    const [repeat, setRepeat] = useState('');
    const [secret, setSecret] = useState('');
    const [show, setShow] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!pass) {
            toast.error('recovery.empty_input_password');
            return;
        }

        if (pass !== repeat) {
            toast.error('recovery.password_not_match');
            return;
        }

        const methodArguments = [
            {
                user: { token },
                twoFactorReset: Accounts._hashPassword(pass),
                twoFactorToken: secret || null,
            },
        ];

        Accounts.callLoginMethod({
            methodArguments,
            userCallback: (e) => {
                if (e) {
                    if (e.error === 'two-factor-required') {
                        setShow(true);
                    } else {
                        toast.error(e.reason);
                    }
                } else {
                    toast.success('recovery.password_done');
                    //Meteor.call('change_pass');
                    FlowRouter.go('/');
                }
            },
        });
    };

    return (
        <>
            <Form className={'recovery-form password-form form sing'} onSubmit={onSubmit}>
                {show ? (
                    <>
                        <Label className="label in text-center">Enter 2FA code</Label>
                        <TokenInput token={secret} onChange={(tkn) => setSecret(tkn)} offset={3} size={6} />
                    </>
                ) : (
                    <>
                        <div className={'input-box'}>
                            <Label for="pass1" className="label in">
                                Password
                            </Label><Input type={'password'} id={'pass1'} value={pass} onChange={(e) => setPass(e.currentTarget.value)} />
                        </div>
                        <div className="input-box">
                            <Label for="pass2" className="label in">
                                Password confirm
                            </Label>
                            <Input
                                type={'password'}
                                id={'pass2'}
                                value={repeat}
                                onChange={(e) => setRepeat(e.currentTarget.value)}
                            />
                        </div>
                    </>
                )}
                <div className="btn-box text-center">
                    <Button color={'primary'} type={'submit'}>
                        Change
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default RecoveryPassword;