import React from "react";
import "./header.css";

function TopHeader(props) {
  return (
    <div className="top_header">
      <div className="for_location">
        <div className="user_location">
          <img src="./images/Icon_geo.png" alt="loc" />
          <p>Ваш город: Константинополь</p>
        </div>
        <div className="office_location">
          <img src="./images/Icon_geo.png" alt="loc" />
          <p>Наш офис: Москва, ул. Новокосимская д.7</p>
        </div>
      </div>
      <div className="for_links">
        <a href="">Статьи</a>
        <a href="">Оплата</a>
        <a href="">Гарантия</a>
        <a href="">Дилерам</a>
        <a href="">Вакансии</a>
      </div>
    </div>
  );
}

export default TopHeader;
