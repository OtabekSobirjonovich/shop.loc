import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function LowerHeader(props) {
  return (
    <div className="lower_header">
      <ul>
        <Link to="/categories">
          <img src="./images/cebab_icon.png" alt="" /> Каталог товаров
        </Link>
        <li>
          <Link to="/aboutCompany">О компании</Link>
        </li>
        <li>
          <Link to="/reviews">Отзывы</Link>
        </li>
        <li>
          <a href="">Наши работы</a>
        </li>
        <li>
          <Link to="/delivery">Доставка</Link>
        </li>
        <li>
          <Link to="/contact">Контакты</Link>
        </li>
      </ul>
    </div>
  );
}

export default LowerHeader;
