import React from "react";
import Header from "../../layout/header/Header";
import MobileHeader from "../../layout/header/MobileHeader";
import Footer from "../../layout/footer/Footer";
import MobileFooter from "../../layout/footer/MobileFooter";
import { Link } from "react-router-dom";
import "./delivery.css";

function Delivery(props) {
  return (
    <div className="delivery_page">
      <Header />
      <MobileHeader />
      <div className="delivery_section">
        <div className="pagination">
          <Link to="/">Главная</Link>
          <p>»</p>
          <Link to="/delivery">Доставка</Link>
        </div>
        <div className="delivery_and_payment">
          <h1>Доставка и оплата</h1>
          <div className="delivery_to_moscow">
            <h1>Доставка по Москве и области</h1>
            <div className="cards">
              <div className="card">
                <h2>Доставка по Москве</h2>
                <button>Бесплатная доставка при заказе от 30 000 руб</button>
                <ul>
                  <li>
                    <b>Быстрая и удобная доставка</b>, нашей курьерской службой
                  </li>
                  <li>
                    <b>Срок доставки:</b> от 3 часов с момента подтверждения
                    заказа
                  </li>
                  <li>
                    <b>Стоимость доставки:</b> в пределах МКАД : Бесплатно!
                  </li>
                </ul>
              </div>
              <div className="card">
                <h2>Время доставки</h2>
                <button>Доставка выполняется ежедневно, без выходных</button>
                <ul>
                  <li>
                    Время доставки согласовывается с менеджером, который
                    обязательно свяжется с Вами сразу после того, как Вы
                    разместите свой заказ!
                  </li>
                  <li>Доставка выполняется ежедневно, без выходных.</li>
                  <li>
                    <b>Время доставки</b> уточняется менеджером, в зависимости
                    от загруженности курьерской службы.
                  </li>
                  <li>
                    Если необходимо доставить товар по иному адресу, необходимо
                    сообщить адрес менеджеру службы доставки, который свяжется с
                    Вами непосредственно после оформления заказа на сайте.
                  </li>
                </ul>
              </div>
              <div className="card">
                <h2>Доставка по Московской области</h2>
                <button>Более 5км от МКАД - от 390 рублей</button>
                <ul>
                  <li>
                    <b>Доставка по МО более 5км от МКАД:</b> - 390руб., + 15руб.
                    за 1км
                  </li>
                  <li>
                    У вас есть возможность вскрыть упаковку и осмотреть товар
                  </li>
                  <li>
                    <b>Срок доставки:</b> от 3 часов с момента подтверждения
                    заказа
                  </li>
                  <li>
                    <b>Время доставки курьером:</b> с 8:00 до 24:00
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="delivery_over_russia">
            <h1>Доставка по России</h1>
            <div className="content">
              <div className="left_part">
                <p>
                  <b>Стоимость доставки рассчитывается индивидуально!</b>
                </p>
                <p>Рассчитать сроки и стоимость доставки может наш менеджер,</p>
                <p>или можете сделать это самостоятельно:</p>
                <a>Калькулятор стоимости доставки:</a>
                <div className="payments">
                  <div className="card">
                    <img src="./images/pek_logo.png" alt="err" />
                  </div>
                  <div className="card">
                    <img src="./images/line_logo.png" alt="err" />
                  </div>
                  <div className="card">
                    <img src="./images/transport_company_logo.png" alt="err" />
                  </div>
                </div>
                <div className="giving_question_online">
                  <h3>
                    За более детальной информацией вы можете обратиться к нашим
                    менеджерам.
                  </h3>
                  <button>Задать вопрос Online</button>
                </div>
              </div>
              <div className="right_part">
                <div className="card">
                  <div className="inline_card1">
                    <p>
                      <b>Оплата наложенным платежом</b>
                    </p>
                    <p>осуществляется доставка только </p>
                    <p>«Почтой России» или «EMS Почта России». </p>
                  </div>
                  <div className="inline_card2">
                    <p>
                      <b>Быстрая экспресс доставка 1-3 дня</b>
                    </p>
                    <p>по России «PONYEXPRESS» оплачивается </p>
                    <p>предоплатой на выставленный счет "СБЕРБАНК". </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="delivery_map">
          <div className="data">
            <h1>Доставляем по всей России</h1>
            <h1>транспортными компаниями</h1>
            <p>Более 1411 пунктов выдачи</p>
            <div className="delivery_actions">
              <h2>Куда нужно доставить товар?</h2>
              <div className="buttons">
                <button>Москва и область</button>
                <button>По всей России</button>
              </div>
            </div>
          </div>
          <div className="map">
            <img src="./images/russia_map.png" alt="err" />
          </div>
        </div>
        <div className="partners_section">
          <div className="payment_methods">
            <h1>Способы оплаты</h1>
            <div className="cards">
              <div className="card">
                <div className="for_image">
                  <img src="./images/payment_cash.png" alt="err" />
                </div>
                <p>Оплата наличными</p>
              </div>
              <div className="card">
                <div className="for_image">
                  <img src="./images/payment_visa.png" alt="err" />
                </div>
                <p>VISA</p>
              </div>
              <div className="card">
                <div className="for_image">
                  <img src="./images/payment_mastercard.png" alt="err" />
                </div>
                <p>Mastercard</p>
              </div>
              <div className="card">
                <div className="for_image">
                  <img src="./images/payment_yandexmoney.png" alt="err" />
                </div>
                <p>Яндекс Деньги</p>
              </div>
              <div className="card">
                <div className="for_image">
                  <img src="./images/payment_cber.png" alt="err" />
                </div>
                <p>Банк Сбер</p>
              </div>
              <div className="card">
                <div className="for_image">
                  <img src="./images/payment_qiwi_wallet.png" alt="err" />
                </div>
                <p>VISA QIWI WALLET</p>
              </div>
              <div className="card">
                <div className="for_image">
                  <img src="./images/payment_webmoney.png" alt="err" />
                </div>
                <p>WebMoney</p>
              </div>
            </div>
          </div>
          <div className="transportation_partners">
            <h1>Транспортные партнёры</h1>
            <div className="cards">
              <div className="card">
                <div className="for_image">
                  <img src="./images/business_line_partner.png" alt="err" />
                </div>
                <p>Деловые линии - dellin.ru</p>
              </div>
              <div className="card">
                <div className="for_image">
                  <img src="./images/pochta_russia_partner.png" alt="err" />
                </div>
                <p>Почта России</p>
              </div>
              <div className="card">
                <div className="for_image">
                  <img src="./images/pochta_ems_partner.png" alt="err" />
                </div>
                <p>EMS Почта России</p>
              </div>
              <div className="card">
                <div className="for_image">
                  <img src="./images/pony_partner.png" alt="err" />
                </div>
                <p>PONYEXPRESS</p>
              </div>
              <div className="card">
                <div className="for_image">
                  <img src="./images/pek_partner.png" alt="err" />
                </div>
                <p>ПЭК</p>
              </div>
            </div>
            <h3>
              Высокий уровень сервиса: более 95% киентов довольны
              сотрудничеством с нами. Мы арантируем качество и долговечность
              поставляемых изделий.
            </h3>
          </div>
        </div>
      </div>
      <div className="note_section">
        <h1>Обратите внимание!</h1>
        <div className="cards">
          <div className="card">
            <div className="for_image">
              <img src="./images/settings_red.png" alt="err" />
            </div>
            <p>
              Осмотрите товар внимательно на предмет дефектов, так как
              испорченный товар обмену не подлежит.
            </p>
          </div>
          <div className="card">
            <div className="for_image">
              <img src="./images/banning_red.png" alt="err" />
            </div>
            <p>
              В случае полного отказа от покупки, если отказ произошел не по
              нашей вине, доставку оплачивает заказчик.
            </p>
          </div>
          <div className="card">
            <div className="for_image">
              <img src="./images/returning_red.png" alt="err" />
            </div>
            <p>
              При возврате товара покупатель оплачивает полную стоимость
              доставки. Сумма будет удержана от общей суммы возврата.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default Delivery;
