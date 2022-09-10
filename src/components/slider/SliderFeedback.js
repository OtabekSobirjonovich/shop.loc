import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderFeedback.css";

function SliderFeedback(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider_feedback">
      <Slider {...settings}>
        <div className="item">
          <div className="card">
            <div className="header">
              <div className="data">
                <h1>Алексей С.А.</h1>
                <h2>28 июня 2021</h2>
              </div>
              <div className="status">
                <img src="./images/five_star.png" alt="" />
                <p>Общая оценка: (4,8) </p>
              </div>
            </div>
            <div className="information">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a>Читать полностью</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="header">
              <div className="data">
                <h1>Алексей С.А.</h1>
                <h2>28 июня 2021</h2>
              </div>
              <div className="status">
                <img src="./images/five_star.png" alt="" />
                <p>Общая оценка: (4,8) </p>
              </div>
            </div>
            <div className="information">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a>Читать полностью</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="header">
              <div className="data">
                <h1>Алексей С.А.</h1>
                <h2>28 июня 2021</h2>
              </div>
              <div className="status">
                <img src="./images/five_star.png" alt="" />
                <p>Общая оценка: (4,8) </p>
              </div>
            </div>
            <div className="information">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a>Читать полностью</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="header">
              <div className="data">
                <h1>Алексей С.А.</h1>
                <h2>28 июня 2021</h2>
              </div>
              <div className="status">
                <img src="./images/five_star.png" alt="" />
                <p>Общая оценка: (4,8) </p>
              </div>
            </div>
            <div className="information">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a>Читать полностью</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="header">
              <div className="data">
                <h1>Алексей С.А.</h1>
                <h2>28 июня 2021</h2>
              </div>
              <div className="status">
                <img src="./images/five_star.png" alt="" />
                <p>Общая оценка: (4,8) </p>
              </div>
            </div>
            <div className="information">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a>Читать полностью</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="header">
              <div className="data">
                <h1>Алексей С.А.</h1>
                <h2>28 июня 2021</h2>
              </div>
              <div className="status">
                <img src="./images/five_star.png" alt="" />
                <p>Общая оценка: (4,8) </p>
              </div>
            </div>
            <div className="information">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a>Читать полностью</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="header">
              <div className="data">
                <h1>Алексей С.А.</h1>
                <h2>28 июня 2021</h2>
              </div>
              <div className="status">
                <img src="./images/five_star.png" alt="" />
                <p>Общая оценка: (4,8) </p>
              </div>
            </div>
            <div className="information">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a>Читать полностью</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="header">
              <div className="data">
                <h1>Алексей С.А.</h1>
                <h2>28 июня 2021</h2>
              </div>
              <div className="status">
                <img src="./images/five_star.png" alt="" />
                <p>Общая оценка: (4,8) </p>
              </div>
            </div>
            <div className="information">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a>Читать полностью</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="header">
              <div className="data">
                <h1>Алексей С.А.</h1>
                <h2>28 июня 2021</h2>
              </div>
              <div className="status">
                <img src="./images/five_star.png" alt="" />
                <p>Общая оценка: (4,8) </p>
              </div>
            </div>
            <div className="information">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a>Читать полностью</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="header">
              <div className="data">
                <h1>Алексей С.А.</h1>
                <h2>28 июня 2021</h2>
              </div>
              <div className="status">
                <img src="./images/five_star.png" alt="" />
                <p>Общая оценка: (4,8) </p>
              </div>
            </div>
            <div className="information">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a>Читать полностью</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="header">
              <div className="data">
                <h1>Алексей С.А.</h1>
                <h2>28 июня 2021</h2>
              </div>
              <div className="status">
                <img src="./images/five_star.png" alt="" />
                <p>Общая оценка: (4,8) </p>
              </div>
            </div>
            <div className="information">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a>Читать полностью</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="header">
              <div className="data">
                <h1>Алексей С.А.</h1>
                <h2>28 июня 2021</h2>
              </div>
              <div className="status">
                <img src="./images/five_star.png" alt="" />
                <p>Общая оценка: (4,8) </p>
              </div>
            </div>
            <div className="information">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a>Читать полностью</a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderFeedback;
