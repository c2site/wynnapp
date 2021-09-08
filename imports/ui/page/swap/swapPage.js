import React from "react";
import NextDraw from "../../components/banner/components/NextDraw";

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
                <div className="table history-table history-hash">
                    <form action="#" className="form form-hash">
                        <label>Get amount WYNN</label>
                        <div className="flex">
                            <input type="number" name="" id="" />

                        </div>
                    </form>
                    <div className="hash-btn">
                        <button className="btn btn-active">Swap</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwapPage;