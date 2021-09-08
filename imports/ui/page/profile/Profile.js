import React, {useState} from 'react';

import SendModal from '/imports/ui/components/modal/sendModal';
import ChangePassword from '/imports/ui/components/modal/changePassword';
import ChangeEmail from '/imports/ui/components/modal/changeEmail';
import ChangeName from '/imports/ui/components/modal/changeName';
import TwoFa from '/imports/ui/components/modal/TwoFA';
import SendWallet from '/imports/ui/components/modal/sendWallet';
import RatingModal from '/imports/ui/components/modal/RatingModal';
import СommissionModal from '/imports/ui/components/modal/СommissionModal';
import {useSubscribe} from "../../../api/hooks";
import { useTracker } from 'meteor/react-meteor-data'
import {Addr, Money} from "../../../api/mongo/money";
import {Transaction} from "../../../api/mongo/transactions";
import {Coin} from "../../../api/mongo/coins";
import Moment from "react-moment";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {toast} from "react-toastify";
import {Button} from "reactstrap";

import TwoFAModal from "./TwoFAModal";
import TwoFAConfirm from "/imports/ui/components/modal/TwoFAConfirm";

const Profile = () => {
  const [secret, setSecret] = useState('');
  const [token, setToken] = useState('');
  const [open, setOpen] = useState(false);

  const progress = {
    width: '33%',
  };

    useSubscribe('coin');
    useSubscribe('user.money');
    useSubscribe('user.addr');
    useSubscribe('user.transactions');
    useSubscribe('user.data');
    const user = useTracker(()=>Meteor.users.findOne(), []);
    const money = useTracker(()=> Money.find().fetch(), []);
    const addr = useTracker(()=>Addr.findOne(), []);
    const txs = useTracker(()=>Transaction.find().fetch(), [])
    const coin = (asset)=>{
        return Coin.findOne({asset: asset})?.name;
    }

  const handleDeactivate = () => {
    if (!token) {
      return;
    }

    Meteor.call('user.disable2fa', token, (e) => {
      if (e) {
        toast.error(e.reason);
      } else {
        setOpen(false);
      }
      setToken('');
    });
  }

  const toggle2FA = () => {
    if (user?.settings?.twoFa) {
      setOpen(true);
    } else {
      Meteor.call('user.enable2fa', (e, r) => {
        if (e) {
          console.log(e);
        } else {
          //console.log(r);
          setSecret(r);
        }
      });
    }
  };

    const type = (sender) => {
      if(addr?.address === sender) return 'red';
      return 'green'
    }
    return (
          <div className={'row'}>
            <div className="col-md-4">
              <div className="profile-info">
                <div className="info-list">
                  <div className="item">
                    <span className="name">email</span>
                    <span className="info">{user?.emails[0].address}</span>
                    {/*<ChangeEmail/>*/}
                    </div>
                  {/*<div className="item">*/}
                  {/*  <span className="name">name</span>*/}
                  {/*  <span className="info">Tony Stark</span>*/}
                  {/*  <ChangeName/>*/}
                  {/*</div>*/}
                  <div className="item">
                    <span className="name">password</span>
                    <span className="info">****************</span>
                    {/*<ChangePassword/>*/}
                  </div>
                  <div className="item" onClick={toggle2FA}>
                    <span className="name">2fa</span>
                    <span className="info">{user?.settings?.twoFa ? 'Active' : 'Disabled'}</span>
                  </div>
                  <div className="item">
                    <span className="name">rating</span>
                    <span className="info">
                      {user?.rating?.rating || 0}
                  <RatingModal />
                    </span>
              </div>
              <div className="item">
                <span className="name">fee</span>
                <span className="info">
                      {user?.rating?.fee * 100 || 0}%

                    </span>
              </div>

              <div className="item">
                <span className="name">Invite url</span>
                <span className="info">
                      https://wynn-games.com/?invite={user?.settings?.ref?.code}
                  <CopyToClipboard text={`https://wynn-games.com/?invite=${user?.settings?.ref?.code}`}
                                   onCopy={() => toast.success('Copy invite url')}>
                        <Button color="default">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13 4.5C13 5.05228 13.4477 5.5 14 5.5C14.5523 5.5 15 5.05228 15 4.5H13ZM5.42857 16C5.98086 16 6.42857 15.5523 6.42857 15C6.42857 14.4477 5.98086 14 5.42857 14V16ZM5 2H11V0H5V2ZM3 12V4H1V12H3ZM13 4V4.5H15V4H13ZM5.42857 14H5V16H5.42857V14ZM1 12C1 14.2091 2.79086 16 5 16V14C3.89543 14 3 13.1046 3 12H1ZM11 2C12.1046 2 13 2.89543 13 4H15C15 1.79086 13.2091 0 11 0V2ZM5 0C2.79086 0 1 1.79086 1 4H3C3 2.89543 3.89543 2 5 2V0Z"
                              fill="#CED0D3" />
                            <rect x="10" y="9" width="12" height="14" rx="3" stroke="#CED0D3" stroke-width="2" />
                          </svg>
                        </Button>
                      </CopyToClipboard>
                    </span>
              </div>
              {/*<div className="item progress-item">*/}
              {/*  <span className="name">next level</span>*/}
              {/*  <div className="progress">*/}
              {/*    <div style={progress}></div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="wallet-info">
            <h2>wallet adress</h2>
            <form action="#" className="form-copy">
              <div className="input-box">
                <input type="text" disabled value={addr?.address} name="" id="" />
                <CopyToClipboard text={addr?.address} onCopy={() => toast.success('Copy wallet address')}>
                    <span className="copy">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13 4.5C13 5.05228 13.4477 5.5 14 5.5C14.5523 5.5 15 5.05228 15 4.5H13ZM5.42857 16C5.98086 16 6.42857 15.5523 6.42857 15C6.42857 14.4477 5.98086 14 5.42857 14V16ZM5 2H11V0H5V2ZM3 12V4H1V12H3ZM13 4V4.5H15V4H13ZM5.42857 14H5V16H5.42857V14ZM1 12C1 14.2091 2.79086 16 5 16V14C3.89543 14 3 13.1046 3 12H1ZM11 2C12.1046 2 13 2.89543 13 4H15C15 1.79086 13.2091 0 11 0V2ZM5 0C2.79086 0 1 1.79086 1 4H3C3 2.89543 3.89543 2 5 2V0Z"
                        fill="#CED0D3" />
                      <rect x="10" y="9" width="12" height="14" rx="3" stroke="#CED0D3" stroke-width="2" />
                      </svg>
                    </span>
                </CopyToClipboard>
              </div>
            </form>
            <p>To replenish the wallet, copy the address and paste it into the corresponding line in the exchanger or
              wallet of another system.</p>
            <p>The Wynn wallet can only transfer cryptocurrency based on the TRON blockchain. The tokens with your
              balance
              that you can store here are listed below.</p>
            <p>* The minimum balance on your wallet cannot be lower than 5 TRC.</p>
          </div>
          <div className="wallets-list row">
            {money?.map(wallet => (
              <div className="col" key={wallet._id}>
                <div className="item">
                  <span className="name">{wallet.coins}</span>
                  <span className="info">{wallet.value()}</span>
                  <SendWallet wallet={wallet} />
                </div>
              </div>
            ))}

              </div>
              <div className="table profile-table">
                <div className="table-head">
                  <table>
                    <thead>
                    <tr>
                      <th>time</th>
                      <th>amount</th>
                      <th>coin</th>
                      <th colSpan="3">txid</th>
                    </tr>
                    </thead>
                  </table>
                </div>
                <table>
                  <tbody>
                  {txs?.map(tx=>(
                      <tr key={tx._id}>
                        <td className={type(tx.sender)}><Moment format={"HH:mm:ss DD/MM/YYYY"}>{tx.createdAt}</Moment></td>
                        <td className={type(tx.sender)}>{tx.value()}</td>
                        <td className={type(tx.sender)}>{coin(tx.asset)}</td>
                        <td className={type(tx.sender)} colSpan="3"><a href={`https://tronscan.io/#/transaction/${tx.txid}`} target={'_blank'}>{tx.txid}</a></td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <TwoFAModal secret={secret} close={() => setSecret(null)} />
              <TwoFAConfirm
                  open={open}
                  close={() => setOpen(false)}
                  confirm={handleDeactivate}
                  token={token}
                  onChange={(tkn) => setToken(tkn)}
              />
            </div>
          </div>
    )
}

export default Profile;