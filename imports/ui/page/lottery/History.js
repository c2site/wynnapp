import React from 'react';
import {useSubscribe} from "../../../api/hooks";
import { useTracker } from 'meteor/react-meteor-data'
import {Lottery} from "../../../api/mongo/lottery";
import Loading from "../../components/loading";

const History = () => {
    const loading = useSubscribe('lottery.history');
    const list = useTracker(()=>Lottery.find().fetch(), []);

    if(loading) return (<Loading/>)
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
                    {/*<th>tickets</th>*/}
                    <th>win numbers</th>
                    {/*<th>win amount</th>*/}
                    <th>hash</th>
                    <th></th>
                  </tr>
                  </thead>
                </table>
              </div>
              <table>
                <tbody>
                {list?.map(lot=>(
                    <tr>
                      <td>№{lot.id}</td>
                      {/*<td>12</td>*/}
                      <td>
                        <div className="numbers">
                          {lot.numbers?.map(x=>(
                              <span className="number">{x}</span>
                          ))}
                        </div>
                      </td>
                      {/*<td className='green'>24500 WYNN</td>*/}
                      <td><a href={` ${lot.hash}`}>{lot.hash}</a></td>
                      <td>
                        <div className="flex">
                          {/*<button className="btn btn-primary">check hash</button>*/}
                        </div>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}

export default History;