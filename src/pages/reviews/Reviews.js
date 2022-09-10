import React from "react";
import Header from "../../layout/header/Header";
import MobileHeader from "../../layout/header/MobileHeader";
import Footer from "../../layout/footer/Footer";
import MobileFooter from "../../layout/footer/MobileFooter";
import SendComment from "../../components/commenting/SendComment";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./reviews.css";
Chart.register(Tooltip, Title, ArcElement, Legend);

function Reviews(props) {
  const [filter, setFilter] = useState("all");
  const [term, setTerm] = useState("");
  const [active, setActive] = useState(false);
  const [addingName, setAddingName] = useState("");
  const [addingComment, setAddingComment] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);
  // const [likedPosts, setLikedPosts] = useState([]);

  const [data, setData] = useState([
    {
      id: 1,
      name: "Джонни Б.",
      rating: 0,
      feedback:
        "«Цена хорошая, все соответствует ожиданиям. Подбирала перголу для своего участка. Также мне хотелось бы отметить вежливость работников компании, все подробно рассказали      Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»",
      reply: "",
      date: "28 июня 2021",
      liked: false,
    },
    {
      id: 2,
      name: "Отабек. С . С",
      rating: 0,
      feedback:
        "«Просто супер, продолжайте улучшать качество продукции, чтобы войти в число лучших компаний мира. И иметь с ними конкуренцию.»",
      reply: "",
      date: "28 июня 2021",
      liked: false,
    },
    {
      id: 3,
      name: "Микки. М",
      rating: 0,
      feedback:
        "«Будет лучше, если вы увеличите количество продуктов. Существующие продукты очень хороши, удивительны и стоят своей стоимости. Я действительно рекомендую всем покупать любое жилье от этой компании.»",
      reply: "",
      date: "28 июня 2021",
      liked: false,
    },
    {
      id: 4,
      name: "Отабек. С . С",
      rating: 0,
      feedback:
        "«Просто супер, продолжайте улучшать качество продукции, чтобы войти в число лучших компаний мира. И иметь с ними конкуренцию.»",
      reply: "",
      date: "28 июня 2021",
      liked: false,
    },
    {
      id: 5,
      name: "Микки. М",
      rating: 0,
      feedback:
        "«Будет лучше, если вы увеличите количество продуктов. Существующие продукты очень хороши, удивительны и стоят своей стоимости. Я действительно рекомендую всем покупать любое жилье от этой компании.»",
      reply: "",
      date: "28 июня 2021",
      liked: false,
    },
    {
      id: 6,
      name: "Джонни Б.",
      rating: 0,
      feedback:
        "«Цена хорошая, все соответствует ожиданиям. Подбирала перголу для своего участка. Также мне хотелось бы отметить вежливость работников компании, все подробно рассказали      Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»",
      reply: "",
      date: "28 июня 2021",
      liked: false,
    },
    {
      id: 7,
      name: "Джонни Б.",
      rating: 0,
      feedback:
        "«Цена хорошая, все соответствует ожиданиям. Подбирала перголу для своего участка. Также мне хотелось бы отметить вежливость работников компании, все подробно рассказали      Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»",
      reply: "",
      date: "28 июня 2021",
      liked: false,
    },
    {
      id: 8,
      name: "Отабек. С . С",
      rating: 0,
      feedback:
        "«Просто супер, продолжайте улучшать качество продукции, чтобы войти в число лучших компаний мира. И иметь с ними конкуренцию.»",
      reply: "",
      date: "28 июня 2021",
      liked: false,
    },
    {
      id: 9,
      name: "Микки. М",
      rating: 0,
      feedback:
        "«Будет лучше, если вы увеличите количество продуктов. Существующие продукты очень хороши, удивительны и стоят своей стоимости. Я действительно рекомендую всем покупать любое жилье от этой компании.»",
      reply: "",
      date: "28 июня 2021",
      liked: false,
    },
    {
      id: 10,
      name: "Отабек. С . С",
      rating: 0,
      feedback:
        "«Просто супер, продолжайте улучшать качество продукции, чтобы войти в число лучших компаний мира. И иметь с ними конкуренцию.»",
      reply: "",
      date: "28 июня 2021",
      liked: false,
    },
    {
      id: 11,
      name: "Микки. М",
      rating: 0,
      feedback:
        "«Будет лучше, если вы увеличите количество продуктов. Существующие продукты очень хороши, удивительны и стоят своей стоимости. Я действительно рекомендую всем покупать любое жилье от этой компании.»",
      reply: "",
      date: "28 июня 2021",
      liked: false,
    },
    {
      id: 12,
      name: "Джонни Б.",
      rating: 0,
      feedback:
        "«Цена хорошая, все соответствует ожиданиям. Подбирала перголу для своего участка. Также мне хотелось бы отметить вежливость работников компании, все подробно рассказали      Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»",
      reply: "",
      date: "28 июня 2021",
      liked: false,
    },
  ]);
  const [qualityStars, setQualityStars] = useState([
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "1",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "2",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "3",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "4",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "5",
      important: false,
    },
  ]);
  const [validityStars, setvalidityStars] = useState([
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "6",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "7",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "8",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "9",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "10",
      important: false,
    },
  ]);
  const [deliveryStars, setdeliveryStars] = useState([
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "11",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "12",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "13",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "14",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "15",
      important: false,
    },
  ]);
  const [serviceStars, setServiceStars] = useState([
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "11",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "12",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "13",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "14",
      important: false,
    },
    {
      i: <i className="fa-sharp fa-solid fa-star"></i>,
      id: "15",
      important: false,
    },
  ]);
  const buttons = [
    {
      name: "all",
      label: "all",
    },
    {
      name: "liked",
      label: "liked",
    },
  ];

  const onToggleStars = (id, stars, setStars) => {
    const index = stars.findIndex((element) => element.id === id);
    const oldItem = stars[index];
    const newItem = { ...oldItem, important: !oldItem.important };
    const newArray = [
      ...stars.slice(0, index),
      newItem,
      ...stars.slice(index + 1),
    ];
    setStars(newArray);
  };

  const number_of_stars = (array) => {
    return array.filter((item) => item.important).length;
  };

  const average_rating_of_stars =
    (number_of_stars(qualityStars) +
      number_of_stars(validityStars) +
      number_of_stars(deliveryStars) +
      number_of_stars(serviceStars)) /
    4;
  const onToggleLiked = (id) => {
    if (!active) {
      document.getElementById(id).style.opacity = 1;
      document.getElementById(id).style.transform = "translateX(0)";
      setActive(true);
    } else {
      document.getElementById(id).style.opacity = 0;
      document.getElementById(id).style.transform = "translateX(40px)";
      setActive(false);
    }
  };
  const onToggleLikedCard = (id) => {
    const index = data.findIndex((item) => item.id === id);
    const oldItem = data[index];
    const newItem = { ...oldItem, liked: !oldItem.liked };
    const newArray = [
      ...data.slice(0, index),
      newItem,
      ...data.slice(index + 1),
    ];
    setData(newArray);
  };
  const liked_comments_array = data.filter((item) => item.liked);
  const number_of_liked_cards = liked_comments_array.length;

  const likedPostsArray = data.filter((item) => item.liked);
  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  // for diagramm
  const likedPercentage = (average_rating_of_stars / 5) * 100;
  const unlikedPercentage = 100 - likedPercentage;
  const DoughnutData = {
    labels: ["liked", "not liked"],
    datasets: [
      {
        data: [likedPercentage, unlikedPercentage],
        backgroundColor: ["yellow", "green"],
      },
    ],
  };

  //adding new comment
  const onNameChange = (e) => {
    setAddingName(e.target.value);
  };
  const onFeedbackChange = (e) => {
    setAddingComment(e.target.value);
  };
  const add_new_comment = () => {
    const newPost = {
      id: data[data.length - 1].id + 1,
      name: addingName,
      feedback: `<<${addingComment}>>`,
      reply: "",
      rating: 0,
      date: new Date().getFullYear(),
      liked: false,
    };
    const newArray = [...data, newPost];
    setData(newArray);
    setAddingName("");
    setAddingComment("");
    setShowCommentForm(false);
  };

  return (
    <>
      {showCommentForm && (
        <SendComment
          onNameChange={onNameChange}
          onFeedbackChange={onFeedbackChange}
          onToggleLiked={onToggleLiked}
          number_of_stars={number_of_stars}
          qualityStars={qualityStars}
          onToggleStars={onToggleStars}
          setQualityStars={setQualityStars}
          validityStars={validityStars}
          setvalidityStars={setvalidityStars}
          deliveryStars={deliveryStars}
          setdeliveryStars={setdeliveryStars}
          serviceStars={serviceStars}
          setServiceStars={setServiceStars}
          add_new_comment={add_new_comment}
          setShowCommentForm={setShowCommentForm}
        />
      )}
      <div className="reviews_page">
        <Header />
        <MobileHeader />
        <div className="main_part">
          <div className="heading">
            <Link to="/">Главная</Link>
            <p>»</p>
            <Link to="/reviews">Отзывы</Link>
          </div>
          <div className="for_information">
            <div className="header">
              <h1>Отзывы наших клиентов</h1>
            </div>
            <div className="overall_rating">
              <div className="general_rating">
                <div className="first_part">
                  <h2>Общий рейтинг:</h2>
                  <img src="./images/5star.png" alt="err" />
                  <button onClick={() => setShowCommentForm(!showCommentForm)}>
                    Оставить отзыв
                  </button>
                </div>
                <div className="second_part">
                  <div className="for_images">
                    <Doughnut data={DoughnutData}></Doughnut>
                  </div>
                </div>
              </div>
              <div className="detailed_rating">
                <div>
                  <p onClick={() => onToggleLiked("heart_liked_quality")}>
                    Качество:
                  </p>
                  <div className="for_image">
                    <p>({number_of_stars(qualityStars)},0)</p>
                    {qualityStars.map((star) => {
                      let class_of_btn = "";
                      if (star.important) {
                        class_of_btn = class_of_btn + "important_button";
                      }
                      return (
                        <button
                          className={class_of_btn}
                          key={star.id}
                          onClick={() =>
                            onToggleStars(
                              star.id,
                              qualityStars,
                              setQualityStars
                            )
                          }
                        >
                          {star.i}
                        </button>
                      );
                    })}
                    <i className="fa fa-heart" id="heart_liked_quality"></i>
                  </div>
                </div>
                <div>
                  <p onClick={() => onToggleLiked("heart_liked_validity")}>
                    Сроки:
                  </p>
                  <div className="for_image">
                    <p>({number_of_stars(validityStars)},0)</p>
                    {validityStars.map((star) => {
                      let class_of_btn = "";
                      if (star.important) {
                        class_of_btn = class_of_btn + "important_button";
                      }
                      return (
                        <button
                          className={class_of_btn}
                          key={star.id}
                          onClick={() =>
                            onToggleStars(
                              star.id,
                              validityStars,
                              setvalidityStars
                            )
                          }
                        >
                          {star.i}
                        </button>
                      );
                    })}
                    <i className="fa fa-heart" id="heart_liked_validity"></i>
                  </div>
                </div>
                <div>
                  <p onClick={() => onToggleLiked("heart_liked_delivery")}>
                    Доставка:
                  </p>
                  <div className="for_image">
                    <p>({number_of_stars(deliveryStars)},0)</p>
                    {deliveryStars.map((star) => {
                      let class_of_btn = "";
                      if (star.important) {
                        class_of_btn = class_of_btn + "important_button";
                      }
                      return (
                        <button
                          className={class_of_btn}
                          key={star.id}
                          onClick={() =>
                            onToggleStars(
                              star.id,
                              deliveryStars,
                              setdeliveryStars
                            )
                          }
                        >
                          {star.i}
                        </button>
                      );
                    })}
                    <i className="fa fa-heart" id="heart_liked_delivery"></i>
                  </div>
                </div>
                <div>
                  <p onClick={() => onToggleLiked("heart_liked_service")}>
                    Сервис:
                  </p>
                  <div className="for_image">
                    <p>({number_of_stars(serviceStars)},0)</p>
                    {serviceStars.map((star) => {
                      let class_of_btn = "";
                      if (star.important) {
                        class_of_btn = class_of_btn + "important_button";
                      }
                      return (
                        <button
                          className={class_of_btn}
                          key={star.id}
                          onClick={() =>
                            onToggleStars(
                              star.id,
                              serviceStars,
                              setServiceStars
                            )
                          }
                        >
                          {star.i}
                        </button>
                      );
                    })}
                    <i className="fa fa-heart" id="heart_liked_service"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="for_input_actions">
              <div className="heading">
                <h2>Отзывы</h2>
                <p>
                  <b>{data.length}</b> Отзывы <b>{number_of_liked_cards}</b>{" "}
                  понравилось
                </p>
              </div>
              <div className="actions">
                <input
                  type="text"
                  placeholder="поиск отзывов..."
                  onChange={(event) => setTerm(event.target.value)}
                  id="searchPostsInput"
                />
                <div className="buttons">
                  {buttons.map((button) => {
                    const active = filter === button.name;
                    const class_of_filter = active ? "all" : "liked";
                    return (
                      <button
                        key={button.name}
                        className={class_of_filter}
                        onClick={() => onFilterSelect(button.name)}
                      >
                        {button.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="comments">
              <div className="cards">
                {filter === "all"
                  ? data
                      .filter((card) => {
                        if (setTerm === "") {
                          return card;
                        } else if (
                          card.feedback
                            .toLowerCase()
                            .includes(term.toLowerCase())
                        ) {
                          return card;
                        }
                      })
                      .map((card) => {
                        let class_of_liked_part = "liked_part";
                        if (card.liked) {
                          class_of_liked_part =
                            class_of_liked_part + " show_liked_part";
                        }
                        return (
                          <div className="card" key={card.id}>
                            <div className="heading">
                              <div className="data">
                                <h2>{card.name}</h2>
                                <p>{card.date}</p>
                              </div>
                              <div className="rating">
                                <div className="for_images">
                                  <i
                                    className="fa-sharp fa-solid fa-star"
                                    style={{ color: "yellow" }}
                                  ></i>
                                  <i
                                    className="fa-sharp fa-solid fa-star "
                                    style={{ color: "yellow" }}
                                  ></i>
                                  <i
                                    className="fa-sharp fa-solid fa-star"
                                    style={{ color: "yellow" }}
                                  ></i>
                                  <i
                                    className="fa-sharp fa-solid fa-star"
                                    style={{ color: "yellow" }}
                                  ></i>
                                  <i
                                    className="fa-sharp fa-solid fa-star"
                                    style={{ color: "yellow" }}
                                  ></i>
                                </div>
                                <p>оценить обратную связь</p>
                              </div>
                            </div>
                            <div className="feedback">{card.feedback}</div>
                            <div className="opinion_about_comment">
                              <h1 onClick={() => onToggleLikedCard(card.id)}>
                                нажмите здесь, если вам нравится комментарий
                              </h1>
                            </div>
                            <div className={class_of_liked_part}>
                              <i className="fa fa-heart"></i>
                              <button>liked</button>
                            </div>
                          </div>
                        );
                      })
                  : likedPostsArray
                      .filter((card) => {
                        if (term === "") {
                          return card;
                        } else if (
                          card.feedback
                            .toLowerCase()
                            .includes(term.toLowerCase())
                        ) {
                          return card;
                        }
                      })
                      .map((card) => {
                        let class_of_liked_part = "liked_part";
                        if (card.liked) {
                          class_of_liked_part =
                            class_of_liked_part + " show_liked_part";
                        }
                        return (
                          <div className="card" key={card.id}>
                            <div className="heading">
                              <div className="data">
                                <h2>{card.name}</h2>
                                <p>{card.date}</p>
                              </div>
                              <div className="rating">
                                <div className="for_images">
                                  <i
                                    className="fa-sharp fa-solid fa-star"
                                    style={{ color: "yellow" }}
                                  ></i>
                                  <i
                                    className="fa-sharp fa-solid fa-star "
                                    style={{ color: "yellow" }}
                                  ></i>
                                  <i
                                    className="fa-sharp fa-solid fa-star"
                                    style={{ color: "yellow" }}
                                  ></i>
                                  <i
                                    className="fa-sharp fa-solid fa-star"
                                    style={{ color: "yellow" }}
                                  ></i>
                                  <i
                                    className="fa-sharp fa-solid fa-star"
                                    style={{ color: "yellow" }}
                                  ></i>
                                </div>
                                <p>оценить обратную связь</p>
                              </div>
                            </div>
                            <div className="feedback">{card.feedback}</div>
                            <div className="opinion_about_comment">
                              <h1 onClick={() => onToggleLikedCard(card.id)}>
                                нажмите здесь, если вам нравится комментарий
                              </h1>
                            </div>
                            <div className={class_of_liked_part}>
                              <i className="fa fa-heart"></i>
                              <button>liked</button>
                            </div>
                          </div>
                        );
                      })}
                {/* {data.map((card) => {
                let class_of_liked_part = "liked_part";
                if (card.liked) {
                  class_of_liked_part =
                    class_of_liked_part + " show_liked_part";
                }

                return (
                  <div className="card" key={card.id}>
                    <div className="heading">
                      <div className="data">
                        <h2>{card.name}</h2>
                        <p>{card.date}</p>
                      </div>
                      <div className="rating">
                        <div className="for_images">
                          <i
                            className="fa-sharp fa-solid fa-star"
                            style={{ color: "yellow" }}
                          ></i>
                          <i
                            className="fa-sharp fa-solid fa-star "
                            style={{ color: "yellow" }}
                          ></i>
                          <i
                            className="fa-sharp fa-solid fa-star"
                            style={{ color: "yellow" }}
                          ></i>
                          <i
                            className="fa-sharp fa-solid fa-star"
                            style={{ color: "yellow" }}
                          ></i>
                          <i
                            className="fa-sharp fa-solid fa-star"
                            style={{ color: "yellow" }}
                          ></i>
                        </div>
                        <p>оценить обратную связь</p>
                      </div>
                    </div>
                    <div className="feedback">{card.feedback}</div>
                    <div className="opinion_about_comment">
                      <h1 onClick={() => onToggleLikedCard(card.id)}>
                        нажмите здесь, если вам нравится комментарий
                      </h1>
                    </div>
                    <div className={class_of_liked_part}>
                      <i className="fa fa-heart"></i>
                      <button>liked</button>
                    </div>
                  </div>
                );
              })} */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <MobileFooter />
      </div>
    </>
  );
}

export default Reviews;
