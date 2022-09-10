import React from "react";
import "./header.css";
import Search from "./searchBox/Search";

function MiddleHeader(props) {
  return (
    <div className="middle_header">
      <div className="first_part">
        <div className="buttons">
          <button className="orange"></button>
          <button className="black"></button>
          <button className="yellow"></button>
        </div>
        <h2>Логотип вашего магазина</h2>
      </div>
      <div className="second_part">
        <div className="concepts">
          <ul>
            <li>
              <img src="./images/true_sign.png" alt="true" /> Лучшие цены
            </li>
            <li>
              <img src="./images/true_sign.png" alt="true" /> Бесплатная
              доставка
            </li>
            <li>
              <img src="./images/true_sign.png" alt="true" /> Гарантия от 3х лет
            </li>
            <li>
              <img src="./images/true_sign.png" alt="true" /> Более 1 000
              товаров
            </li>
          </ul>
        </div>
        <div className="search_panel">
          <Search />
        </div>
      </div>
      <div className="third_part">
        <div className="first_section">
          <img src="./images/icon_clock.png" alt="" />
          <p> Ежедневно с 9:00 до 21:00</p>
          <h3>
            8 (800) <b>800-00-00</b>
          </h3>
          <h3>
            8 (495) <b>700-00-00</b>
          </h3>
        </div>
        <div className="second_section">
          <a href="">
            <img src="./images/icon_mail.png" alt="mail" />
            youremail@mailbox.ru
          </a>
          <button>Заказать звонок</button>
        </div>
      </div>
    </div>
  );
}

export default MiddleHeader;
