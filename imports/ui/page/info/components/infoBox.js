import React from "react";

const infoBox = () => {
  return (
    <>
      <div className="container steps-block info-box">
        <div className="row f-align-center">
          <div className="col-lg-8">
            <p><strong>Wynn-Game</strong> - платформа для блокчейн лотерей, бинарных опционов и экономических игр с прозрачным и независимым алгоритмом выигрыша. <br/>
              В отличии от обычных онлайн аналогов, наша команда провела интеграцию децентрализованного блокчейна сети Tron в игровую индустрию, реализовав все функции  интуитивно удобном интерфейсе.Тем самым полностью стерев границы и правила онлайн лотерей.
            </p>
            <p>Теперь абсолютно не важно, в какой стране вы находитесь, какие законы приняты. <br/>
              Абсолютно никто не сможет повлиять на результаты игры.А самое главное все расчеты в рамках платформы Wynn Games производятся исключительно в криптовалюте. Платформа принимает к оплате: Tron (TRX), Tether (TRC-20) и собственный нативный токен Wynn.</p>
            <a href="#" className="btn btn-primary">White Paper v.1.0.0</a>
          </div>
          <div className="col-lg-4 img">
            <img src="./img/img-info.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default infoBox;
