import React from "react";
import NextDraw from "../../components/banner/components/NextDraw";
import SendWallet from "../../components/modal/sendWallet";

const SwapPage = () => {
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
              <div className="wallet-info">
                <h2>Get amount WYNN</h2>
                <form action="#" className="form form-swap">
                  <div className="input-box flex f-align-center">
                    <input type="number" name="" id="" /> <span>= 1000 XXP</span>
                  </div>
                  <div className="hash-btn">
                    <button className="btn btn-black">Swap</button>
                  </div>
                </form>
                <div className="wallets-list row">
                  <div className="col-md-4">
                    <div className="item active">
                      <span className="name">wallet coins</span>
                      <span className="info">wallet value</span>
                      {/*<SendWallet wallet={wallet} />*/}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <span className="name">wallet coins</span>
                      <span className="info">wallet value</span>
                      {/*<SendWallet wallet={wallet} />*/}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <span className="name">wallet coins</span>
                      <span className="info">wallet value</span>
                      {/*<SendWallet wallet={wallet} />*/}
                    </div>
                  </div>
                </div>
                <p>To replenish the wallet, copy the address and paste it into the corresponding line in the exchanger or
                  wallet of another system.</p>
                <p>The Wynn wallet can only transfer cryptocurrency based on the TRON blockchain. The tokens with your
                  balance
                  that you can store here are listed below.</p>
                <p>* The minimum balance on your wallet cannot be lower than 5 TRX.</p>
              </div>
              <div className="scroll-history">
                <div className="table history-table">
                  <div className="table-head">
                    <table>
                      <thead>
                      <tr>
                        <th>game</th>
                        <th>tickets</th>
                        <th>win numbers</th>
                        <th>win amount</th>
                        <th>hash</th>
                        <th></th>
                      </tr>
                      </thead>
                    </table>
                  </div>
                  <table>
                    <tbody>
                    <tr>
                      <td>№1055</td>
                      <td>12</td>
                      <td>
                        <div className="numbers">
                          <span className="number">10</span>
                          <span className="number">10</span>
                          <span className="number">10</span>
                          <span className="number">10</span>
                          <span className="number">10</span>
                        </div>
                      </td>
                      <td className='green'>24500 WYNN</td>
                      <td>1aa2793c984e484a12f249fbc331ece54b33f50020d40075bbbdecc2422edfab</td>
                      <td>
                        <div className="flex">
                          <button className="btn btn-primary">check hash</button>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
        </div>
    )
}

export default SwapPage;