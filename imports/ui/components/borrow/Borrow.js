import React from "react";

const Borrow = () => {
  return (
    <>
      <div className="borrow-box">
        <div className="container">
          <div className="head-box">
            <h2 className='black'><span>THE SMARTER WAY</span>LEND AND BORROW</h2>
            <p>The World's First Crypto Lending Marketplace and Affordable and competitive interest rates</p>
          </div>
          <div className="table coin-table">
            <div className="table-head">
              <table>
                <thead>
                <tr>
                  <th>User</th>
                  <th>bet id</th>
                  <th>bet amount</th>
                  <th>game</th>
                  <th>profit</th>
                </tr>
                </thead>
              </table>
            </div>
            <table>
              <tbody>
              <tr>
                <td>Tomas</td>
                <td>B28827002</td>
                <td className='red'>0.0000154 BTC</td>
                <td className='game1'>Lottery 5/36</td>
                <td className='green'>0.0000154 BTC</td>
              </tr>
              <tr>
                <td>Tomas</td>
                <td>B28827002</td>
                <td className='red'>0.0000154 BTC</td>
                <td className='game2'>Option</td>
                <td className='green'>0.0000154 BTC</td>
              </tr>
              <tr>
                <td>Tomas</td>
                <td>B28827002</td>
                <td className='red'>0.0000154 BTC</td>
                <td className='game3'>Dice</td>
                <td className='green'>0.0000154 BTC</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Borrow;
