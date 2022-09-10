import React from "react";
import Slider from "react-slick";
import useFetch from "../../data/useFetch";
import "./bestsellerSlider.css";

function BestsellerSlider(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    SlidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const { data } = useFetch("http://localhost:4000/cards");
  return (
    <div className="bestseller_slider">
      <Slider {...settings}>
        {data &&
          data.map((card) => (
            <div className="card" key={card.id}>
              <div className="content">
                <div className="for_image">
                  <img src={card.img} alt="er" />
                </div>
                <div className="for_subheader">
                  <h3>{card.location}</h3>
                  <h3>{card.locatonId}</h3>
                </div>
                <div className="for_header">
                  <h1>{card.header}</h1>
                </div>
                <div className="for_features">
                  <div className="size">
                    <p>
                      <img src={card.cardSizeUrl} alt="er" />
                      {card.cardSizeText}
                    </p>
                    <p>{card.cardSize}</p>
                  </div>
                  <div className="area">
                    <p>
                      <img src={card.cardAreaUrl} alt="er" />
                      {card.cardAreaText}
                    </p>
                    <p>{card.cardArea}</p>
                  </div>
                  <div className="capacity">
                    <p>
                      <img src={card.cardCapacityUrl} alt="er" />
                      {card.cardCapacityText}
                    </p>
                    <p>{card.cardCapacity}</p>
                  </div>
                  <div className="guarantee">
                    <p>
                      <img src={card.cardGuaranteeUrl} alt="er" />
                      {card.cardGuaranteeText}
                    </p>
                    <p>{card.cardGuarantee}</p>
                  </div>
                </div>
                <div className="for_cost_actions">
                  <div className="costs">
                    <p>
                      {card.actualCost} <button>{card.discount}</button>
                    </p>
                    <h2>{card.castWithDiscount}</h2>
                  </div>
                  <div className="buying">
                    <button>Купить</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default BestsellerSlider;
