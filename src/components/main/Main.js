import React from "react";
import SimpleSlider from "../slider/Slider";
import SliderFeedback from "../slider/SliderFeedback";
import TabMain from "../tabs/TabMain";
import TabPromotionals from "../tabs/TabPromotions";
import Store from "../store/Store";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../data/useFetch";
import "./main.css";

function Main() {
  const [storeShow, setStoreShow] = useState(false);

  const onStoreShow = () => {
    setStoreShow(!storeShow);
  };
  return (
    <div className="main">
      <SimpleSlider />
      <div className="information_section">
        <div className="results_of_manufacturing">
          <p>
            <img src="./images/designing_products_icon.png" alt="1" />
            Изготовливаем конструкции по вашему дизайн-проекту
          </p>
          <p>
            <img src="./images/structuring_products_icon.png" alt="1" />
            Изготовили более 2 400 деревянных конструкций
          </p>
          <p>
            <img src="./images/production_area_icon.png" alt="1" />
            Собственное производство площадью 6 000 м2
          </p>
          <p>
            <img src="./images/manufacturing_years.png" alt="1" />
            Производим изделия из дерева с 1998 года
          </p>
          <p>
            <img src="./images/warranty_icon.png" alt="1" />
            Гарантия от 3х лет на все конструкции
          </p>
        </div>
        <div className="categories">
          <h1>Категории</h1>
          <div className="category_list">
            <div className="first_part">
              <div className="gazebos">
                <h2>Беседки</h2>
                <ul>
                  <div className="first_part">
                    <li>Подкатегория 1</li>
                    <li>Подкатегория 2</li>
                    <li>Подкатегория 3</li>
                  </div>
                  <div className="first_part">
                    <li>Подкатегория 4</li>
                    <li>Подкатегория 5</li>
                    <li>Подкатегория 6</li>
                  </div>
                </ul>
                <div className="for_image">
                  <img src="./images/gazebos_icon.png" alt="" />
                  <img src="./images/gazebos_grass.png" alt="" />
                </div>
              </div>
            </div>
            <div className="second_part">
              <div className="baths">
                <div className="header">
                  <h2>Бани</h2>
                  <ul>
                    <li>Подкатегория 1</li>
                    <li>Подкатегория 2</li>
                    <li>...</li>
                  </ul>
                </div>
                <div className="info">
                  <div className="for_image">
                    <img src="./images/bath_photo.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="pergols">
                <div className="header">
                  <h2>Бани</h2>
                  <ul>
                    <li>Подкатегория 1</li>
                    <li>Подкатегория 2</li>
                    <li>...</li>
                  </ul>
                </div>
                <div className="info">
                  <div className="for_image">
                    <img src="./images/pergol_photo.png" alt="" />
                    <img src="./images/pergol_grass.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="brands">
                <div className="header">
                  <h2>Бренды</h2>
                  <ul>
                    <li>Подкатегория 1</li>
                    <li>Подкатегория 2</li>
                    <li>...</li>
                  </ul>
                </div>
                <div className="info">
                  <div className="for_image">
                    <img src="./images/star_photo.png" alt="" />
                    <img src="./images/pergol_grass.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="third_part">
              <div className="playgrounds">
                <div className="header">
                  <h2>Детские площадки</h2>
                  <ul>
                    <li>Подкатегория 1</li>
                    <li>Подкатегория 2</li>
                    <li>Подкатегория 3</li>
                    <li>Подкатегория 4</li>
                    <li>Подкатегория 5</li>
                  </ul>
                </div>
                <div className="info">
                  <div className="for_image">
                    <img src="./images/playground_photo.png" alt="" />
                    <img src="./images/pergol_grass.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="house">
                <div className="header">
                  <h2>Дома</h2>
                  <ul>
                    <li>Подкатегория 1</li>
                    <li>Подкатегория 2</li>
                    <li>Подкатегория 3</li>
                    <li>Подкатегория 4</li>
                    <li>Подкатегория 5</li>
                  </ul>
                </div>
                <div className="info">
                  <div className="for_image">
                    <img src="./images/house_category_photo.png" alt="" />
                    <img src="./images/pergol_grass.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category_list_for_mobile">
            <div>
              <h1>Беседки</h1>
              <img src="./images/mobile_category_list1.png" alt="err" />
            </div>
            <div>
              <h1>Дома</h1>
              <img src="./images/mobile_category_list2.png" alt="err" />
            </div>
            <div>
              <h1>Площадки</h1>
              <img src="./images/mobile_category_list3.png" alt="err" />
            </div>
            <div>
              <h1>Перголы</h1>
              <img src="./images/mobile_category_list4.png" alt="err" />
            </div>
            <div>
              <h1>Бани</h1>
              <img src="./images/mobile_category_list5.png" alt="err" />
            </div>
            <div>
              <h1>Бренды</h1>
              <img src="./images/mobile_category_list2.png" alt="err" />
            </div>
          </div>
        </div>
        <div className="bestsellers">
          <h1>Хиты продаж</h1>
          <button className="store_button" onClick={() => onStoreShow()}>
            {/* <i class="fa-solid fa-store"></i> */}
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
          {storeShow && <Store onStoreShow={onStoreShow} />}
          <TabMain />
        </div>
        <div className="promotional_models">
          <h1>Акционные модели</h1>
          <TabPromotionals />
        </div>
        <h1>Отзывы наших клиентов</h1>
      </div>
      <div className="clients_feedback">
        <SliderFeedback />
        <div className="viewing_all_comments">
          <Link to="/reviews">Открыть все отзывы</Link>
        </div>
      </div>
      <div className="about_us">
        <div className="for_data">
          <div className="for_header">
            <h1>Немного о нас</h1>
          </div>
          <div className="for_info">
            <div className="short_info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                lacus integer nunc, ornare ipsum lorem nulla est. Augue eros
                adipiscing nec senectus duis nibh. In faucibus adipiscing tellus
                enim, consequat integer accumsan. Ultrices ipsum nulla consequat
                malesuada enim mollis est.{" "}
              </p>
            </div>
            <div className="full_info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                lacus integer nunc, ornare ipsum lorem nulla est. Augue eros
                adipiscing nec senectus duis nibh. In faucibus adipiscing tellus
                enim, consequat integer accumsan. Ultrices ipsum nulla consequat
                malesuada enim mollis est. Venenatis, sagittis, amet ornare
                donec purus suscipit nam sodales. Varius sit amet nullam
                dictumst massa consequat odio faucibus.{" "}
              </p>
              <h2>Никита Данилов, Руководитель компании</h2>
              <img src="./images/quatermark.png" alt="" />
            </div>
          </div>
        </div>
        <div className="for_image">
          <img src="./images/about_us_photo.png" alt="" />
        </div>
      </div>
      <div className="news_reviews">
        <div className="for_header">
          <h1>Статьи, новости и обзоры</h1>
        </div>
        <div className="for_info">
          <div className="cards">
            <div className="card">
              <div className="image">
                <img src="./images/playgroundImg1.jpg" alt="err" />
              </div>
              <div className="header">
                <h2>Как выбрать беседку для дачи</h2>
                <h3>19 сентября 2021</h3>
              </div>
              <div className="info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>
                <a>{`Читать далее >`}</a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="./images/house_card8.jpg" alt="err" />
              </div>
              <div className="header">
                <h2>Как выбрать беседку для дачи</h2>
                <h3>29 сентября 2020</h3>
              </div>
              <div className="info">
                <p>
                  «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                  для своего участка. Также мне хотелось бы отметить вежливость
                  работников компании, все подробно рассказали. Я считаю этот
                  магазин отличным. И наверняка буду покупать снова или
                  советовать коллегам.»
                </p>
                <a>{`Читать далее >`}</a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="./images/bathroomImg4.jpg" alt="err" />
              </div>
              <div className="header">
                <h2>Как выбрать беседку для дачи</h2>
                <h3>13 сентября 2022</h3>
              </div>
              <div className="info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisi sit vitae vitae vitae, sed tellus. Semper vitae, et
                  sed sed sed magna. At magna diam praesent amet, phasellus
                  gravida. Sagittis ut odio dignissim pellentesque. Tincidunt
                  suspendisse quam aliquam mus placerat platea facilisis libero,
                  platea. Etiam lacus, pellentesque molestie feugiat. Aliquam
                  interdum varius nunc sed pellentesque mattis.
                </p>
                <a>{`Читать далее >`}</a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="./images/house_card7.jpg" alt="err" />
              </div>
              <div className="header">
                <h2>Как выбрать беседку для дачи</h2>
                <h3>13 сентября 2022</h3>
              </div>
              <div className="info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  lacus integer nunc, ornare ipsum lorem nulla est. Augue eros
                  adipiscing nec senectus duis nibh. In faucibus adipiscing
                  tellus enim, consequat integer accumsan. Ultrices ipsum nulla
                  consequat malesuada enim mollis est.
                </p>
                <a>{`Читать далее >`}</a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="./images/house_card3.jpg" alt="err" />
              </div>
              <div className="header">
                <h2>Как выбрать беседку для дачи</h2>
                <h3>13 сентября 2022</h3>
              </div>
              <div className="info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>
                <a>{`Читать далее >`}</a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="./images/house_card6.jpg" alt="err" />
              </div>
              <div className="header">
                <h2>Как выбрать беседку для дачи</h2>
                <h3>13 сентября 2022</h3>
              </div>
              <div className="info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  lacus integer nunc, ornare ipsum lorem nulla est. Augue eros
                  adipiscing nec senectus duis nibh. In faucibus adipiscing
                  tellus enim, consequat integer accumsan. Ultrices ipsum nulla
                  consequat malesuada enim mollis est.
                </p>
                <a>{`Читать далее >`}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribing_form">
        <h1>Хотите быть в курсе выгодных предложений, акций и новинок?</h1>
        <form>
          <input type="text" placeholder="Имя" required />
          <input type="email" placeholder="Email" required />
          <button className="submit" type="submit">
            Подписаться
          </button>
        </form>
      </div>
    </div>
  );
}

export default Main;
