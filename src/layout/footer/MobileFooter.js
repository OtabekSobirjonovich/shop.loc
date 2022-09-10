import React from "react";
import "./mobileFooter.css";

function MobileFooter(props) {
  return (
    <div className="mobile_footer">
      <div className="first_section">
        <div className="buttons">
          <button className="orange"></button>
          <button className="white"></button>
          <button className="yellow"></button>
        </div>
        <p>Логотип вашего магазина</p>
      </div>
      <div className="second_section">
        <div className="top_info">
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
                <a>Отзывы</a>
              </li>
              <li>
                <a>Наши работы</a>
              </li>
              <li>
                <a>Политика конфиденциальности</a>
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
        </div>
        <div className="categories">
          <h1>Категории:</h1>
          <ul>
            <div className="first_part">
              <li>
                <a>Беседки</a>
              </li>
              <li>
                <a>Бани</a>
              </li>
              <li>
                <a>Площадки</a>
              </li>
            </div>
            <div className="second_part">
              <li>
                <a>Дома</a>
              </li>
              <li>
                <a>Перголы</a>
              </li>
              <li>
                <a>Бренды</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="third_section">
        <h1 className="contacts">Контакты</h1>
        <div className="information">
          <p>Наш адрес:</p>
          <h1 className="address">Москва, ул. Новокосимская д.7</h1>
          <p>График работы: </p>
          <h2>
            Ежедневно с <b>9:00</b> до <b>21:00</b>
          </h2>
        </div>
        <div className="call_info">
          <div className="for_other_regions">
            <h1>Для регионов(звонок бесплатный)</h1>
            <p>
              8 (800) <b>800-00-00</b>
            </p>
          </div>
          <div className="for_moscow">
            <h1>Для Москвы и Московской области</h1>
            <p>
              8 (800) <b>700-00-00</b>
            </p>
          </div>
        </div>
        <button>Заказать звонок</button>
        <div className="email_info">
          <h1>Email: </h1>
          <p>youremail@mailbox.ru </p>
          <h1>Мы в соц.сетях:</h1>
          <div className="web_pages_links">
            <a href="">
              <img src="./images/whats_app_icon.png" alt="" />
            </a>
            <a href="">
              <img src="./images/you_tube_icon.png" alt="" />
            </a>
            <a href="">
              <img src="./images/instagram_icon.png" alt="" />
            </a>
          </div>
          <a className="sending_message" href="">
            Сообщить об ошибке на сайте
          </a>
        </div>
      </div>
      <div className="fourth_section">
        <h1>Принимаем к оплате:</h1>
        <div className="partners">
          <div className="first_part">
            <a href="https://cis.visa.com/">
              <img src="./images/visa_icon.png" alt="" />
            </a>
            <a href="https://www.jcb.com/">
              <img src="./images/jcb_icon.png" alt="" />
            </a>
            <a href="https://maestro.com/">
              <img src="./images/maestro_icon.png" alt="" />
            </a>
          </div>
          <div className="second_part">
            <a href="https://www.mastercard.us/en-us.html">
              <img src="./images/mastercard_icon.png" alt="" />
            </a>
            <a href="https://taxi.yandex.uz/ru_uz/">
              <img src="./images/yandex_icon.png" alt="" />
            </a>
            <a href="https://www.mircorp.com/">
              <img src="./images/mir_icon.png" alt="" />
            </a>
          </div>
        </div>
        <div className="basic_info">
          <p>
            <b>ООО</b>"Фаза Групп"
          </p>
          <p>
            <b>ИНН:</b> 7751140879{" "}
          </p>
          <p>
            <b>ОГРН:</b> 1187746273461
          </p>
        </div>
        <div className="offers">
          <p>Публичная оферта </p>
          <p>2013-{new Date().getFullYear()} - Товары для дач,</p>
          <p>деревянные конструкции под любые нужды</p>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;
