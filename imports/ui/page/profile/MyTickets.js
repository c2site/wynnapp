import React from 'react';


const MyTickets = () => {
    return (
          <div className="row">
            <div className="col-md-8">
              <div className="list-new-tickets my-tickets">
                  <div className="item">
                    <div className="head">
                      <span className="info">
                      game #1055
                        <span className="separator">/</span>
                      ID #83728
                    </span>
                      <div className="status wait">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.75">
                            <ellipse cx="10.9997" cy="11" rx="9.16667" ry="9.16667" stroke="white" stroke-width="2"/>
                            <path d="M11 6.83334V11.8333L13.0833 13.9167" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                        </svg>
                        wait
                      </div>
                    </div>
                    <div className="body">
                      <div className="number-list">
                        <span className="number">10</span>
                        <span className="number">10</span>
                        <span className="number">10</span>
                        <span className="number">10</span>
                        <span className="number">10</span>
                      </div>
                      <span className="price">
                      price
                      <span>13 wynne</span>
                    </span>
                    </div>
                  </div>
                <div className="item">
                  <div className="head">
                      <span className="info">
                      game #1055
                        <span className="separator">/</span>
                      ID #83728
                    </span>
                    <span className="win">
                      win
                      <span>394 wynne</span>
                    </span>
                    <div className="status win">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10.9997" cy="11" r="9.16667" stroke="#C6C8CB" stroke-width="2"/>
                        <path d="M8.5 10.9581L10.2678 12.7259L13.8033 9.19032" stroke="#C6C8CB" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                      win
                    </div>
                  </div>
                  <div className="body">
                    <div className="number-list">
                      <span className="number">10</span>
                      <span className="number">10</span>
                      <span className="number">10</span>
                      <span className="number">10</span>
                      <span className="number">10</span>
                    </div>
                    <span className="price">
                      price
                      <span>13 wynne</span>
                    </span>
                  </div>
                </div>
                <div className="item">
                  <div className="head">
                      <span className="info">
                      game #1055
                        <span className="separator">/</span>
                      ID #83728
                    </span>
                    <div className="status lose">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                          <circle cx="9.99967" cy="10" r="9.16667" stroke="#CFD1D3" stroke-width="2"/>
                          <path d="M6.66699 13.75C6.66699 13.75 8.09556 12.5 10.0003 12.5C11.9051 12.5 13.3337 13.75 13.3337 13.75" stroke="#CFD1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6.66699 7.5H6.87533" stroke="#CFD1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M13.333 7.5H13.5413" stroke="#CFD1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="20" height="20" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      lose
                    </div>
                  </div>
                  <div className="body">
                    <div className="number-list">
                      <span className="number">10</span>
                      <span className="number">10</span>
                      <span className="number">10</span>
                      <span className="number">10</span>
                      <span className="number">10</span>
                    </div>
                    <span className="price">
                      price
                      <span>13 wynne</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-tickets">
                <h4>ВАШИ БИЛЕТЫ</h4>
                <div className="info-list">
                  <div className="info-item">
                    <div className="ico wait">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.75">
                          <ellipse cx="10.9997" cy="11" rx="9.16667" ry="9.16667" stroke="white" stroke-width="2"/>
                          <path d="M11 6.83333V11.8333L13.0833 13.9167" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                      </svg>
                    </div>
                    <strong className="name">WAIT</strong>
                    <p>Эти билеты еще ждут розыгрыша. Как только определится выигрышная комбинация, он перейдет в раздел Win или Lose.</p>
                  </div>
                  <div className="info-item">
                    <div className="ico win">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10.9997" cy="11" r="9.16667" stroke="#C6C8CB" stroke-width="2"/>
                        <path d="M8.5 10.9581L10.2678 12.7259L13.8033 9.19032" stroke="#C6C8CB" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </div>
                    <strong className="name">WIN</strong>
                    <p>Ваши билеты, в которых есть 3, 4 или 5 совпадений (совпавшие числа подсвечиваются). Это выигрышные билеты.</p>
                  </div>
                  <div className="info-item">
                    <div className="ico lose">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                          <circle cx="9.99967" cy="10" r="9.16667" stroke="#CFD1D3" stroke-width="2"/>
                          <path d="M6.66699 13.75C6.66699 13.75 8.09556 12.5 10.0003 12.5C11.9051 12.5 13.3337 13.75 13.3337 13.75" stroke="#CFD1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6.66699 7.5H6.87533" stroke="#CFD1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M13.333 7.5H13.5413" stroke="#CFD1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="20" height="20" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <strong className="name">LOSE</strong>
                    <p>Билеты, в которых не оказалось ни одного совпадения.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default MyTickets;