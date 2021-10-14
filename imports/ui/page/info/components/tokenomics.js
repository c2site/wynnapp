import React from "react";

const Tokenomics = () => {
  return (
    <>
      <div className="container tokenomics-block">
        <h2 className="text-center">Tokenomics</h2>
        <div className="row f-align-center">
          <div className="col-lg-4">

          </div>
          <div className="col-lg-4">
            <div className="list-percent">
              <div className="item">
                <span className="percent">
                  <span className="color-1"></span>
                  0,5%
                </span>
                <span className="text">для проведения Pre-Sale</span>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-2"></span>
                  0,5%
                </span>
                <span className="text">для пополнения призового фонда лотереи</span>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-3"></span>
                  0,5%
                </span>
                <span className="text">для пополнения призового фонда бинарного опциона</span>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-4"></span>
                  1%
                </span>
                <span className="text">маркетинговый фонд</span>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-5"></span>
                  10%
                </span>
                <span className="text">фонд команды разработчиков</span>
              </div>
              <div className="item">
                <span className="percent">
                  <span className="color-6"></span>
                  80%
                </span>
                <span className="text">для пополнения призовых фондов</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="token-info">
              <h5>TokenInfo</h5>
              <div className="list">
                <div className="item">
                  <span>Биржевой тикер: <strong>Wynn</strong></span>
                </div>
                <div className="item">
                  <span>Тип: <strong>токен</strong></span>
                </div>
                <div className="item">
                  <span>Блокчейн: <strong>Tron</strong></span>
                </div>
                <div className="item">
                  <span>Стандарт токена: <strong>TRC-20</strong></span>
                </div>
                <div className="item">
                  <span>Эмиссия: <strong>50 000 000 токенов</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="token-text">
          <h5>Первоначальное распределение</h5>
          <p>Общая эмиссия токена Wynn составляет <strong>50 000 000</strong> токенов, которые распределены на специальных системных кошельках, каждый из которых имеет свое целевое предназначение, что исключает их нерациональное или нецелевое использование.</p>
          <div className="list">
            <p>0,5% или <strong>1 000 000 Wynn</strong> – зарезервированы для проведения Pre-Sale;</p>
            <p>0,5% или <strong>1 000 000 Wynn</strong> – резерв для пополнения призового фонда лотереи;</p>
            <p>0,5% или <strong>1 000 000 Wynn</strong> – резерв для пополнения призового фонда бинарного опциона;</p>
            <p>1% или <strong>2 000 000 Wynn</strong> – маркетинговый фонд для продвижения и масштабирования проекта.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
