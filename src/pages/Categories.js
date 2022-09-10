import React, { useState } from "react";
import { Progress } from "reactstrap";
import { Link } from "react-router-dom";
import AccordionComponent from "../components/accordion/Accordion";
import Footer from "../layout/footer/Footer";
import MobileFooter from "../layout/footer/MobileFooter";
import Header from "../layout/header/Header";
import MobileHeader from "../layout/header/MobileHeader";
import BestsellerSlider from "../components/slider/BestsellerSlider";
import TabMain from "../components/tabs/TabMain";
import TabForCategories from "../components/tabs/TabForCategories";
import "./categories.css";

function Categories(props) {
  return (
    <div>
      <Header />
      <MobileHeader />
      <div className="categories_content">
        <div className="wrapper">
          <div className="sidebar">
            <div className="for_accordion">
              <AccordionComponent />
            </div>
            <div className="for_filter">
              <div className="header">
                <h1>Фильтры</h1>
                <h2>Очистить</h2>
                <img src="./images/clearing_icon.png" alt="err" />
              </div>
              <div className="filter_data">
                <div className="for_delivery">
                  <form>
                    <h1>Срок доставки</h1>
                    <div>
                      <input type="radio" name="filter" id="1" />
                      <label htmlFor="1">
                        Доступен самовывоз<strong>(192)</strong>
                      </label>
                    </div>
                    <div>
                      <input type="radio" name="filter" id="2" defaultChecked />
                      <label htmlFor="2">
                        Доставка до 3х дней<strong>(11)</strong>
                      </label>
                    </div>
                    <div>
                      <input type="radio" name="filter" id="3" />
                      <label htmlFor="3">
                        Под заказ<strong>(122)</strong>
                      </label>
                    </div>
                  </form>
                </div>
                <div className="for_cost">
                  <h1>Стоимость, руб. </h1>
                  <div className="cost_buttons">
                    <button>1000</button>
                    <button>190 606</button>
                  </div>
                  <img src="./images/range.png" alt="" />
                </div>
                <div className="for_brand">
                  <h1>Бренд</h1>
                  <div className="searching_brands">
                    <input type="text" placeholder="Поиск ..." />
                    <button>
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                  <form className="brandslist">
                    <div>
                      <input type="checkbox" />
                      <label>
                        TimberFort<b>(192)</b>
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" checked />
                      <label>
                        Besedorf<b>(11)</b>
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>
                        Kamin 24<b>(122)</b>
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>
                        Lympa<b>(1922)</b>
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>
                        TimberFort<b>(192)</b>
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" checked />
                      <label>
                        Besedorf<b>(11)</b>
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>
                        Kamin 24<b>(122)</b>
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>
                        Lympa<b>(1922)</b>
                      </label>
                    </div>
                  </form>
                  <a>Показать все ...</a>
                </div>
                <div className="for_location">
                  <h1>Расположение</h1>
                  <form>
                    <div>
                      <input type="checkbox" />
                      <label>Пристенно-угловое</label>
                    </div>
                    <div>
                      <input type="checkbox" checked />
                      <label>Пристенное</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>Центральностоящее</label>
                    </div>
                  </form>
                </div>
                <div className="for_extra_features">
                  <div class="form-check form-switch">
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Скидка
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                  <div class="form-check form-switch">
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Бесплатная доставка
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                  <div class="form-check form-switch">
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Гарантия 5+ лет
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                  <div class="form-check form-switch">
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Рассрочка
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main_part">
            <div className="top_info">
              <div className="cards">
                <div className="card">
                  <img src="./images/category1.png" alt="err" />
                </div>
                <div className="card">
                  <img src="./images/category2.png" alt="err" />
                </div>
                <div className="card">
                  <img src="./images/category3.png" alt="err" />
                </div>
              </div>
            </div>
            <div className="for_pagination">
              <Link to="/">Главная</Link>
              <p>»</p>
              <Link to="/categories">Беседки для дачи </Link>
            </div>
            <div className="gazebos_for_cottage">
              <div className="header">
                <h1>Беседки для дачи</h1>
                <button className="empty_line"></button>
              </div>
              <div className="extra_div_for_mobile_section">
                <div className="for_image">
                  <img src="./images/category_discount.png" alt="err" />
                </div>
                <div className="for_button">
                  <button>
                    <img src="./images/cebab_icon.png" alt="err" />
                    Каталог товаров
                  </button>
                </div>
              </div>
              <div className="base">
                <div className="cards">
                  <div className="card">
                    <p>Ярмарочные домики</p>
                    <img src="./images/fair_houses.png" alt="" />
                  </div>
                  <div className="card">
                    <p>Ярмарочные домики</p>
                    <img src="./images/fair_houses.png" alt="" />
                  </div>
                  <div className="card">
                    <p>Ярмарочные домики</p>
                    <img src="./images/fair_houses.png" alt="" />
                  </div>
                  <div className="card">
                    <p>Ярмарочные домики</p>
                    <img src="./images/fair_houses.png" alt="" />
                  </div>
                  <div className="card">
                    <p>Ярмарочные домики</p>
                    <img src="./images/fair_houses.png" alt="" />
                  </div>
                  <div className="card">
                    <p>Ярмарочные домики</p>
                    <img src="./images/fair_houses.png" alt="" />
                  </div>
                  <div className="card">
                    <p>Ярмарочные домики</p>
                    <img src="./images/fair_houses.png" alt="" />
                  </div>
                  <div className="card">
                    <p>Ярмарочные домики</p>
                    <img src="./images/fair_houses.png" alt="" />
                  </div>
                  <div className="card">
                    <p>Ярмарочные домики</p>
                    <img src="./images/fair_houses.png" alt="" />
                  </div>
                  <div className="card">
                    <p>Ярмарочные домики</p>
                    <img src="./images/fair_houses.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div></div>
                <button className="show_all">Показать еще</button>
                <div></div>
              </div>
              <div className="narrow_categories">
                <h1>Узкие категории: </h1>
                <div className="buttons">
                  <button>Белые беседки для дачи</button>
                  <button>Каменные беседки</button>
                  <button>Хай-тек беседки</button>
                  <button>Ярмарочные домики</button>
                  <button>Торговые павильоны</button>
                  <button>Пример категории</button>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {/* <img src="./images/dropdown_to_down_icon.png" alt="" /> */}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bestsellers_section">
              <h1>Хиты продаж</h1>
              <BestsellerSlider />
              <div className="for_tab">
                <TabForCategories />
              </div>
            </div>
            <div className="pagination_section">
              <div className="pagination_buttons">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link">1</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">3</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">4</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">5</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">6</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">7</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">8</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">9</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">...</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">Дальше</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="finding_page">
                <h1>Перейти на страницу:</h1>
                <input type="text" />
                <button>Дальше</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribing_form">
        <div className="header">
          <h1>Хотите быть в курсе выгодных предложений, акций и новинок?</h1>
        </div>
        <form>
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="Email" />
          <button>Подписаться</button>
        </form>
      </div>
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default Categories;
