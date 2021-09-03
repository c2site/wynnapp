import React, { useState, useEffect } from "react";

const TicketBoxElement = ({ num, idTicket }) => {

  const getCurrent = (e) => {
    e.preventDefault();
    let status = e.target.dataset.active;

    if (e.target.textContent === e.target.id) {
      if (status === "true") {
        status = "false";
        e.target.setAttribute("data-active", status);
        e.target.classList.remove("active");
      } else {
        status = "true";
        e.target.setAttribute("data-active", status);
        e.target.classList.add("active");
      }
    }
  };

  return num.map((n) => (
    <div key={n} className={"item"}>
      <div >
        <a
          data-active={false}
          href="#"
          className={`link number`}
          id={n}
          name={idTicket}
          onClick={getCurrent}
        >
          {n}
        </a>
      </div>
    </div>
  ));
};

export default TicketBoxElement;
