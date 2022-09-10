import React from "react";
import "./footer.css";

function MiddleFooter(props) {
  return (
    <div className="middle_footer">
      <div className="first_part">
        <div className="for_buyers">
          <h1>Для покупателей:</h1>
          <ul>
            <li>
              <a>Доставка</a>
            </li>
            <li>
              <a>Гарантия</a>
            </li>
            <li>
              <a>Политика конфиденциальности</a>
            </li>
            <li>
              <a>Отзывы</a>
            </li>
            <li>
              <a>Наши работы</a>
            </li>
          </ul>
        </div>
        <div className="about_company">
          <h1>О компании:</h1>
          <ul>
            <li>
              <a>О Нас</a>
            </li>
            <li>
              <a>Доставка и оплата</a>
            </li>
            <li>
              <a>Наши работы</a>
            </li>
            <li>
              <a>Контакты</a>
            </li>
            <li>
              <a>Гарантия</a>
            </li>
          </ul>
        </div>
        <div className="categories">
          <h1>Категории:</h1>
          <ul>
            <li>
              <a>Беседки</a>
            </li>
            <li>
              <a>Бани</a>
            </li>
            <li>
              <a>Площадки</a>
            </li>
            <li>
              <a>Дома</a>
            </li>
            <li>
              <a>Перголы</a>
            </li>
            <li>
              <a>Бренды</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="second_part">
        <div className="call_for_other_regions">
          <h1>Для регионов(звонок бесплатный)</h1>
          <p className="call_number">
            8 (800) <b>800-00-00</b>
          </p>
          <h2 className="email">Email: youremail@mailbox.ru</h2>
          <h2>Мы в соц.сетях:</h2>
          <div className="web_pages_links">
            <a>
              <img src="./images/whats_app_icon.png" alt="" />
            </a>
            <a>
              <img src="./images/you_tube_icon.png" alt="" />
            </a>
            <a>
              <img src="./images/instagram_icon.png" alt="" />
            </a>
          </div>
        </div>
        <div className="call_for_moscow">
          <h1>Для Москвы и Московской области</h1>
          <p className="call_number">
            8 (495) <b>700-00-00</b>
          </p>
          <h2>Сообщить об ошибке на сайте</h2>
          <div className="info_partners">
            <p>
              <b>ООО </b> "Фаза Групп"
            </p>
            <p>
              <b>ИНН </b> : 7751140879
            </p>
            <p>
              <b>ОГРН </b> : 1187746273461
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleFooter;
