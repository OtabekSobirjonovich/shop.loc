import React from "react";
import { Link } from "react-router-dom";
import "./mobileNavbarElements.css";

function MobileNavbarElements(props) {
  const { showMobileNavbarElements, setShowMobileNavbarElements } = props;
  return (
    <div className="mobile_navbar_elements">
      <div className="mobile_navbar">
        <button
          className="closing_button"
          onClick={() => {
            setShowMobileNavbarElements(!showMobileNavbarElements);
          }}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
        <h1>Каталог товаров</h1>
        <ul>
          <li>
            <Link to="/">Главная </Link>
          </li>
          <li>
            <Link to="/aboutCompany">О компании</Link>
          </li>
          <li>
            <Link to="/reviews">Отзывы</Link>
          </li>
          <li>
            <Link to="/">Наши работы</Link>
          </li>
          <li>
            <Link to="/delivery">Доставка</Link>
          </li>
          <li>
            <Link to="/contact">Контакты</Link>
          </li>
        </ul>
        <div
          className="closing_navbar_elements"
          onClick={() => setShowMobileNavbarElements(!showMobileNavbarElements)}
        >
          закрыт
        </div>
      </div>
    </div>
  );
}

export default MobileNavbarElements;
