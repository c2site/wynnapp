import React, {useEffect, useState} from "react";
import {useSubscribe} from "../../../api/hooks";
import {useTracker} from "meteor/react-meteor-data";
import {Money} from "../../../api/mongo/money";
import {Price} from "../../../api/mongo/price";
import {Meteor} from "meteor/meteor";
import {toast} from "react-toastify";
import {Input, Label, Form} from 'reactstrap';

const SwapPage = () => {
    const [asset, setAsset] = useState('trx');
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    useSubscribe('price', []);
    useSubscribe('coin', []);
    useSubscribe('user.money', []);
    const loading = useSubscribe('money.swap', []);

    const prices = useTracker(()=>Price.findOne({assetName: asset}), [asset]);
    const money = useTracker(()=> Money.find({coins: {$ne: 'wynn'}, userId: Meteor.userId()}).fetch(), []);
    const swap = useTracker(()=> Money.findOne({type: 'swap'}), []);
    const swapOn = (e) => {
        e.preventDefault()
        console.log('methods')
        Meteor.call('swap', {amount, asset}, (err) => {
            if(err) {
                toast.error(err.reason);
            } else {
                toast.success(`You swap ${amount} WYNN. Wait transactions`);
            }
        });
    }
  const progress = {
    width: `${(swap?.value() / 2000000 * 100).toFixed(2)}%`,
  };

    useEffect(()=> {
        setPrice((prices?.prices?.price5 * amount).toFixed(2))
    }, [asset, amount]);

    if(loading) {
        return  (<div>Loading...</div>)
    } else {
        return (
            <div className="history-page inner-page">
                <div className="container">
                    <div className="head-page">
                        <div className="breadcrumbs">
                            <a href="#">Home</a>
                            <span className="separator">
                <img src="./img/arrow-breadcrumbs.svg" alt="" />
              </span>
                            <a href="#">Get WYNN</a>
                        </div>
                        <h2 className="title-page">Get WYNN</h2>
                    </div>
                    <div className="progress-box">
                        <div className="item progress-item">
                            <h5 className="name">Remainder {swap?.value()} WYNN</h5>
                            <div className="progress">
                                <div style={progress}></div>
                            </div>
                        </div>
                    </div>
                    <div className="wallet-info">
                        <h2>Get amount WYNN</h2>
                        <form className="form form-swap" onSubmit={(e)=>swapOn(e)}>
                            <div className="input-box flex f-align-center">
                                <input type="number" name="amount" value={amount} onChange={(e)=>setAmount(e.currentTarget.value)}/> <span>= {price || 0} {asset}</span>
                            </div>
                            <div className="hash-btn" onClick={(e)=>swapOn(e)}>
                                <button className="btn btn-black">Swap</button>
                            </div>
                        </form>
                        <Form className="wallets-list row">
                            <h2>Select coins</h2>
                            {money?.map(wallet=> (
                                <div className="col-md-4 holder-item" key={wallet._id}>
                                    <Input type="radio" id={wallet.coins} checked={wallet.coins === asset} value={wallet.coins} onChange={()=>setAsset(wallet.coins)}/>
                                    <Label className="item" htmlFor={wallet.coins} value={wallet.coins}>
                                        <span className="name">{wallet.coins}</span>
                                        <span className="info">{wallet.value()}</span>
                                    </Label>
                                </div>
                            ))}
                        </Form>
                    </div>
                    {/*<div className="scroll-history">*/}
                    {/*    <div className="table history-table">*/}
                    {/*        <div className="table-head">*/}
                    {/*            <table>*/}
                    {/*                <thead>*/}
                    {/*                <tr>*/}
                    {/*                    <th>game</th>*/}
                    {/*                    <th>tickets</th>*/}
                    {/*                    <th>win numbers</th>*/}
                    {/*                    <th>win amount</th>*/}
                    {/*                    <th>hash</th>*/}
                    {/*                    <th></th>*/}
                    {/*                </tr>*/}
                    {/*                </thead>*/}
                    {/*            </table>*/}
                    {/*        </div>*/}
                    {/*        <table>*/}
                    {/*            <tbody>*/}
                    {/*            <tr>*/}
                    {/*                <td>№1055</td>*/}
                    {/*                <td>12</td>*/}
                    {/*                <td>*/}
                    {/*                    <div className="numbers">*/}
                    {/*                        <span className="number">10</span>*/}
                    {/*                        <span className="number">10</span>*/}
                    {/*                        <span className="number">10</span>*/}
                    {/*                        <span className="number">10</span>*/}
                    {/*                        <span className="number">10</span>*/}
                    {/*                    </div>*/}
                    {/*                </td>*/}
                    {/*                <td className='green'>24500 WYNN</td>*/}
                    {/*                <td>1aa2793c984e484a12f249fbc331ece54b33f50020d40075bbbdecc2422edfab</td>*/}
                    {/*                <td>*/}
                    {/*                    <div className="flex">*/}
                    {/*                        <button className="btn btn-primary">check hash</button>*/}
                    {/*                    </div>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            </tbody>*/}
                    {/*        </table>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>
        )
    }

}

export default SwapPage;