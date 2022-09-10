import React from "react";
import Header from "../../layout/header/Header";
import MobileHeader from "../../layout/header/MobileHeader";
import Footer from "../../layout/footer/Footer";
import MobileFooter from "../../layout/footer/MobileFooter";
import { Link } from "react-router-dom";
import "./contact.css";

function Contact(props) {
  return (
    <div className="contact_page">
      <Header />
      <MobileHeader />
      <div className="main_part">
        <div className="heading">
          <Link to="/">Главная </Link>
          <p>»</p>
          <Link to="/contact">Контакты</Link>
        </div>
        <div className="locations">
          <div className="header">
            <h1>Контакты</h1>
          </div>
          <div className="for_information">
            <div className="main_office">
              <div className="info">
                <h2>Главный офис</h2>
                <div className="place">
                  <img src="./images/red_icon_geo.png" alt="" />
                  <div className="text">
                    <h3>г. Москва. Малый казенный пер. д. 2/1 стр. 2</h3>
                    <p>(10 мин. от метро курская или китай-город)</p>
                  </div>
                </div>
                <div className="place">
                  <img src="./images/red_icon_clock.png" alt="" />
                  <div className="text">
                    <h3>График работы офиса:</h3>
                    <p>Пн-Пт с 09:00 до 19:00. Без перерыва</p>
                  </div>
                </div>
              </div>
              <div className="map">
                <p>
                  Обращаем Ваше внимание, что по данному адресу нет шоурума.
                </p>
                <img src="./images/main_office_img.png" alt="err" />
              </div>
            </div>
            <div className="main_store">
              <div className="info">
                <h2>Наш склад</h2>
                <div className="place">
                  <img src="./images/red_icon_geo.png" alt="" />
                  <div className="text">
                    <h3>г. Люберцы, ул Гаршина д. 36</h3>
                    <p>Как добраться</p>
                  </div>
                </div>
                <div className="place">
                  <img src="./images/red_icon_clock.png" alt="" />
                  <div className="text">
                    <h3>График работы склада: </h3>
                    <p>Пн-Пт с 09:00 до 19:00. Без перерыва</p>
                  </div>
                </div>
              </div>
              <div className="map">
                <img src="./images/main_store_img.png" alt="err" />
              </div>
            </div>
          </div>
        </div>
        <div className="call_center">
          <div className="header">
            <h1>Контактный центр</h1>
          </div>
          <div className="for_information">
            <div className="first_part">
              <p>
                Ответим на любые ваши вопросы, проконсультируем в выборе и
                комплектации оборудования и расходных материалов, расскажем о
                способах оплаты и доставки, уточним наличие на складе.
              </p>
              <h3>
                <b>График работы менеджеров:</b> 09:00 - 23:59
              </h3>
              <h3>
                <b>Приём заказов через сайт:</b> Круглосуточно
              </h3>
              <h3>
                <b>По поводу приобретения,</b> обращайтесь к менеджеру магазина.
              </h3>
              <div className="button_actions">
                <button className="call_back">Заказать обратный звонок</button>
                <button className="online_question">
                  Задать вопрос онлайн
                </button>
              </div>
              <div className="for_link">
                <Link className="link" to="/">
                  Или свяжитесь с нами самостоятельно{" "}
                </Link>
              </div>
              <img src="./images/line.png" alt="" />
            </div>
            <div className="second_part">
              <Link className="link" to="/">
                Или свяжитесь с нами самостоятельно{" "}
              </Link>
              <div className="calls">
                <div className="moscow">
                  <h2>
                    8 (800) <b>800-00-00</b>
                  </h2>
                  <h3>Москва</h3>
                </div>
                <div className="russia">
                  <h2>
                    8 (800) <b>800-00-00</b>
                  </h2>
                  <h3>Вся Россия</h3>
                </div>
              </div>
              <div className="email">
                <div className="email_address">
                  <h2>youremail@mailbox.ru</h2>
                  <h3>e-mail</h3>
                </div>
                <div className="whatsApp">
                  <h2>
                    8 (800) <b>800-00-00</b>
                  </h2>
                  <h3>WhatsApp</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default Contact;
