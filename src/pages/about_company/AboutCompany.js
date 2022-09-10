import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import MobileHeader from "../../layout/header/MobileHeader";
import MobileFooter from "../../layout/footer/MobileFooter";
import SliderFeedback from "../../components/slider/SliderFeedback";
import "./aboutCompany.css";

function AboutCompany(props) {
  return (
    <div className="about_company">
      <Header />
      <MobileHeader />
      <div className="main_part">
        <div className="heading">
          <div className="pagination">
            <Link to="/">Главная</Link>
            <p>»</p>
            <Link to="/aboutCompany">О компании</Link>
          </div>
          <h1>О компаниии</h1>
        </div>
        <div className="short_information">
          <div className="wrapper">
            <div className="for_info">
              <h2>Наша компания основана в 1998 году.</h2>
              <p>
                Более чем за 20 лет мы набирались опыта в своём деле и наладили
                производство большого масштаба. В день основания нашей компании
                мы поставили перед собой задачи: добиться высочайшего качества
                нашей продукции, работать только с лучшим деревом и расширить
                производство.
              </p>
            </div>
            <div className="for_image">
              <img src="./images/about_company_short.png" alt="err" />
            </div>
            <img
              src="./images/circle_border.png"
              alt="err"
              className="absolute_circle"
            />
          </div>
        </div>
        <div className="advanced_information">
          <div className="first_part">
            <div className="card">
              <div className="for_image">
                <img src="./images/advanced_info_card1.png" alt="" />
              </div>
              <div className="info">
                <h2>
                  На сегодняшний момент ежедневно на нашем производстве работают
                  более 50 высококвалифицированных сотрудников.
                </h2>
                <p>
                  Дружная команда инженеров, наладчиков и мастеров высокого
                  класса с большим вниманием и любовью относятся к своей работе.
                </p>
              </div>
              <img src="./images/circle_border.png" alt="err" id="first" />
              <img src="./images/circle_border.png" alt="err" id="second" />
            </div>
            <div className="card">
              <div className="for_image">
                <img src="./images/advanced_info_card2.png" alt="" />
              </div>
              <div className="info">
                <h2>
                  Мы используем большой парк лучших станков производства Италии
                  и Германии
                </h2>
                <p>
                  В отличние от всех других производителей, использующих
                  односторонние шлифовальные станки с ручной перекладкой дерева,
                  что не обеспечивает должного качества обработки, мы используем
                  немецкий четырёхсторонний. Уровень обработки дерева на таком
                  шлифовальном станке значительно выше и не уступает мировым
                  стандартам качества
                </p>
              </div>
              <img src="./images/circle_border.png" alt="err" id="first" />
              <img src="./images/circle_border.png" alt="err" id="second" />
            </div>
            <div className="card">
              <div className="for_image">
                <img src="./images/advanced_info_card3.png" alt="" />
              </div>
              <div className="info">
                <h2>
                  Большие сушильные камеры высокой производственной мощности
                </h2>
                <p>
                  Позволяют подготовить более 600 кубометров дерева в месяц, что
                  позволяет нам выполнять большие объёмы заказов без задержек.
                </p>
              </div>
              <img src="./images/circle_border.png" alt="err" id="first" />
              <img src="./images/circle_border.png" alt="err" id="second" />
            </div>
            <img
              src="./images/circle_border.png"
              alt="err"
              className="absolute_circle"
              id="absolute_circle1"
            />
            <img
              src="./images/circle_border.png"
              alt="err"
              className="absolute_circle"
              id="absolute_circle2"
            />
            <img
              src="./images/circle_border.png"
              alt="err"
              className="absolute_circle"
              id="absolute_circle3"
            />
          </div>
          <div className="second_part">
            <div className="card">
              <div className="for_image">
                <img src="./images/advanced_info_card4.png" alt="" />
              </div>
              <div className="info">
                <h2>
                  Для удобства клиентов наш офис находится в центре Москвы
                </h2>
                <p>
                  недалеко от станции метро Китай-город. Вы можете приехать к
                  нам, обсудить все детали за чашкой ароматного кофе или чая и
                  заключить договор.
                </p>
              </div>
              <img src="./images/circle_border.png" alt="err" id="first" />
              <img src="./images/circle_border.png" alt="err" id="second" />
            </div>
            <div className="card">
              <div className="for_image">
                <img src="./images/advanced_info_card5.png" alt="" />
              </div>
              <div className="info">
                <h2>
                  За столько времени работы наши инженеры разработали боле 500
                  уникальных конструкций
                </h2>
                <p>
                  разного рода: беседки, деревянные детские площадки, бани и т.
                  д. Имея такой колоссальный опыт мы точно знаем как правильно
                  обрабатывать дерево. Используем только самые лучшие пропитки и
                  краски для дерева проверенные временем. Вы можете быть уверены
                  в высоком качестве обработки и долговечности нашей продукции.
                </p>
              </div>
              <img src="./images/circle_border.png" alt="err" id="first" />
            </div>
            <img
              src="./images/circle_border.png"
              alt="err"
              className="absolute_circle"
              id="absolute_circle2"
            />
            <img
              src="./images/circle_border.png"
              alt="err"
              className="absolute_circle"
              id="absolute_circle3"
            />
          </div>
          <div className="third_part">
            <div className="heading">
              <h1>Примеры наших изделий</h1>
              <img
                src="./images/circle_border.png"
                alt="err"
                className="absolute_circle"
                id="absolute_circle3"
              />
            </div>
            <div className="info">
              <div className="images">
                <img src="./images/example_products1.png" alt="err" />
                <img src="./images/example_products2.png" alt="err" />
                <img src="./images/example_products3.png" alt="err" />
                <img src="./images/example_products4.png" alt="err" />
                <img src="./images/example_products5.png" alt="err" />
                <img src="./images/example_products6.png" alt="err" />
              </div>
            </div>
          </div>
        </div>
        <div className="why_choosing_us">
          <div className="heading">
            <img src="./images/circle_border.png" alt="err" />
            <h1>Почему нас выбирают?</h1>
          </div>
          <div className="info">
            <div className="cards">
              <div className="card">
                <div className="for_image">
                  <img src="./images/carpenter_icon.png" alt="" />
                </div>
                <div className="for_content">
                  <h2>Широкий ассортимент</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Luctus amet, cursus feugiat montes, tincidunt aenean
                    faucibus. Nunc curabitur pretium pellentesque velit id.{" "}
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="for_image">
                  <img src="./images/carpenter_icon.png" alt="" />
                </div>
                <div className="for_content">
                  <h2>Опыт производства с 1998г</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Luctus amet, cursus feugiat montes, tincidunt aenean
                    faucibus. Nunc curabitur pretium pellentesque velit id.{" "}
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="for_image">
                  <img src="./images/axe_icon.png" alt="" />
                </div>
                <div className="for_content">
                  <h2>Изделия на заказ</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Luctus amet, cursus feugiat montes, tincidunt aenean
                    faucibus. Nunc curabitur pretium pellentesque velit id.{" "}
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="for_image">
                  <img src="./images/ontime_icon.png" alt="" />
                </div>
                <div className="for_content">
                  <h2>Точно в срок </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Luctus amet, cursus feugiat montes, tincidunt aenean
                    faucibus. Nunc curabitur pretium pellentesque velit id.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comments">
          <div className="heading">
            <img src="./images/circle_border.png" alt="" />
            <h1>Отзывы наших клиентов</h1>
          </div>
          <div className="info">
            <SliderFeedback />
          </div>
        </div>
        <div className="details_of_company">
          <div className="info">
            <div className="heading">
              <img src="./images/circle_border.png" alt="err" />
              <h1>Реквизиты нашей компании</h1>
            </div>
            <div className="content">
              <div className="first_part">
                <p>
                  <b>ООО</b> "ДАНИЛОВ КОММЕРЦИЯ"
                </p>
                <h2 className="yuridic_address">
                  <b>Юридический адрес:</b>
                </h2>
                <h2>Москва, ул. Новокасимская д.7</h2>
                <h2 className="yuridic_address">
                  <b>ИНН:</b> 5190086002
                </h2>
                <h2 className="yuridic_address">
                  <b>ОГРН/ОГРНИП:</b> 1215100000906
                </h2>
              </div>
              <div className="second_part">
                <h2>
                  <b>КПП: 519001001</b>
                </h2>
                <h2 className="yuridic_address">
                  <b>Расчетный счёт:</b>
                </h2>
                <h2> 0000 0000 0000 0000 в ПАО БАНК</h2>
                <h2 className="yuridic_address">
                  <b>Корр./счёт:</b> 0000 0000 0000 0000
                </h2>
                <h2 className="yuridic_address">
                  <b>БИК:</b> 1215100000906
                </h2>
              </div>
            </div>
          </div>
          <div className="location">
            <img src="./images/map.png" alt="" />
          </div>
        </div>
        <div className="subscription_form">
          <h1>Хотите быть в курсе выгодных предложений, акций и новинок?</h1>
          <form>
            <input type="text" placeholder="Имя" required />
            <input type="email" placeholder="Email" required />
            <button type="submit" onClick={(e) => e.preventDefault()}>
              Подписаться
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default AboutCompany;
