import React from 'react';


const History = () => {

    return (
      <div className="history-page inner-page">
        <div className="container">
          <div className="head-page">
            <div className="breadcrumbs">
              <a href="#">Home</a>
              <span className="separator">
                <img src="./img/arrow-breadcrumbs.svg" alt="" />
              </span>
              <a href="#">Check Lotery</a>
            </div>
            <h2 className="title-page">Check Lotery</h2>
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

export default History;