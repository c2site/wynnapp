import React, {useState} from 'react';
import {useSubscribe} from "../../../api/hooks";
import { useTracker } from 'meteor/react-meteor-data'
import {Lottery} from "../../../api/mongo/lottery";
import Loading from "../../components/loading";
import { useTranslation } from "react-i18next";

const History = () => {
  const {t, i18n} = useTranslation();
  const [limit, setLimit] = useState(5)
    const loading = useSubscribe(Meteor.subscribe('lottery.history', limit), [limit]);
    const list = useTracker(()=>Lottery.find().fetch(), []);
    const setLimits = () => {
      setLimit(limit + 5);
    }
    //if(loading) return (<Loading/>)
    return (
      <div className="history-page inner-page">
        <div className="container">
          <div className="head-page">
            <div className="breadcrumbs">
              <a href="#">{t('nav.home')}</a>
              <span className="separator">
                <img src="./img/arrow-breadcrumbs.svg" alt="" />
              </span>
              <a href="#">{t('nav.check')}</a>
            </div>
          </div>
          <div className="container">
            <h2 className="title-page mb15">{t('hash.title')}</h2>
          </div>
          <div className="scroll-history">
            <div className="table history-table">
              <div className="table-head">
                <table>
                  <thead>
                  <tr>
                    <th>{t('hash.game')}</th>
                    {/*<th>tickets</th>*/}
                    <th>{t('hash.win')}</th>
                    {/*<th>win amount</th>*/}
                    <th>{t('hash.label')}</th>
                    <th></th>
                  </tr>
                  </thead>
                </table>
              </div>
              <table>
                <tbody>
                {list?.map(lot=>(
                    <tr>
                      <td><span className="th-name">game</span>№{lot.id}</td>
                      {/*<td>12</td>*/}
                      <td>
                        <span className="th-name">{t('hash.win')}</span>
                        <div className="numbers">
                          {lot.numbers?.map(x=>(
                              <span className="number">{x}</span>
                          ))}
                        </div>
                      </td>
                      {/*<td className='green'>24500 WYNN</td>*/}
                      <td><span className="th-name">{t('hash.label')}</span><a href={` ${lot.hash}`}>{lot.hash}</a></td>
                      <td>
                        <div className="flex">
                          {/*<button className="btn btn-primary">check hash</button>*/}
                        </div>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
              <div className={'text-center mt20'}>
                <span className={'btn btn-primary'} onClick={()=>setLimits()}>{t('hash.more')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default History;