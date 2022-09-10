import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./simpleSlider.css";

function SimpleSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="simpleSlider">
      <Slider {...settings}>
        <div className="item">
          <div className="banner">
            <div className="house_image">
              <img src="./images/house.png" alt="" />
            </div>
            <div className="first_div">
              <h1>Беседки под ключ за 7 дней</h1>
              <div className="benefits">
                <h2>Выгода до 24%</h2>
                <h2>Сборка за 1 день</h2>
              </div>
            </div>
            <div className="second_div"></div>
          </div>
        </div>
        <div className="item">
          <div className="banner">
            <div className="house_image">
              <img src="./images/house.png" alt="" />
            </div>
            <div className="first_div">
              <h1>Беседки под ключ за 7 дней</h1>
              <div className="benefits">
                <h2>Выгода до 24%</h2>
                <h2>Сборка за 1 день</h2>
              </div>
            </div>
            <div className="second_div"></div>
          </div>
        </div>
        <div className="item">
          <div className="banner">
            <div className="house_image">
              <img src="./images/house.png" alt="" />
            </div>
            <div className="first_div">
              <h1>Беседки под ключ за 7 дней</h1>
              <div className="benefits">
                <h2>Выгода до 24%</h2>
                <h2>Сборка за 1 день</h2>
              </div>
            </div>
            <div className="second_div"></div>
          </div>
        </div>
        <div className="item">
          <div className="banner">
            <div className="first_div">
              <h1>Беседки под ключ за 7 дней</h1>
              <div className="benefits">
                <h2>Выгода до 24%</h2>
                <h2>Сборка за 1 день</h2>
              </div>
              <div className="house_image">
                <img src="./images/house.png" alt="" />
              </div>
            </div>
            <div className="second_div"></div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
