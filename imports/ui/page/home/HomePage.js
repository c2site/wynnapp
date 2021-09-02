import React from 'react';


const HomePage = () => {
    return (
      <div className="home">
        <div className="container">
          <section className="home__section-lottery">
            <h2 className="main-title home__title">Текущая лотерея</h2>
            <div className="home__lottery-wrapper">
              <div className="home-lottery__container">
              </div>
              <a href="/buy" className="home-lottery__ticket-wrapper">
                <svg className="home-lottery__ticket-icon">
                  <use href="./img/svg/sprite.svg#icon-ticket-main"></use>
                </svg>
                <p>Купить билет</p>
              </a>
            </div>
            <div className="home__draw-wrapper">

            </div>
            <h2 className="home__title second main-title">BTC на криптобиржах</h2>
            <div className="home__crypto-wrapper">

            </div>
          </section>
        </div>
        <section className="home__section-history">
          <div className="container">
            <h2 className="main-title home__history-title">История лотерей</h2>
            <div>

            </div>
            <button className="home__history-btn show-more">Показать еще</button>
          </div>
        </section>
        <section className="home__section-top">
          <div className="container">
            <h2 className="main-title top-title">ТОП-10 ПОБЕДИТЕЛЕЙ</h2>
            <div>

            </div>
          </div>
        </section>
        <section className="home__section-partners">
          <div className="container">

          </div>
        </section>
      </div>
    )
}

export default HomePage;