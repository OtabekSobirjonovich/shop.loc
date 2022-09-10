import React from "react";
import "./sendComment.css";

function SendComment(props) {
  const {
    onNameChange,
    onFeedbackChange,
    onToggleLiked,
    number_of_stars,
    qualityStars,
    onToggleStars,
    setQualityStars,
    validityStars,
    setvalidityStars,
    deliveryStars,
    setdeliveryStars,
    serviceStars,
    setServiceStars,
    add_new_comment,
    setShowCommentForm,
  } = props;
  return (
    <div className="sending_comment_form">
      <div className="info">
        <div className="form">
          <button
            className="closing_btn"
            onClick={() => setShowCommentForm(false)}
          >
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
          <div className="for_heading">
            <h1>Оставить отзыв</h1>
            <h2>Оставьте, пожалуйста, честный отзыв о нас</h2>
          </div>
          <input
            type="text"
            placeholder="ФИО *"
            required
            className="for_name"
            onChange={onNameChange}
          />
          <input
            type="text"
            placeholder="Телефон *"
            required
            className="for_number"
          />
          <textarea
            className="for_comment"
            placeholder="Ваш отзыв"
            required
            onChange={onFeedbackChange}
          ></textarea>
          <div className="evaluating">
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
                        onToggleStars(star.id, qualityStars, setQualityStars)
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
                        onToggleStars(star.id, validityStars, setvalidityStars)
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
                        onToggleStars(star.id, deliveryStars, setdeliveryStars)
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
                        onToggleStars(star.id, serviceStars, setServiceStars)
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
          <div className="submit_button">
            <button type="submit" onClick={() => add_new_comment()}>
              Опубликовать
            </button>
            <p>Прикрепить фотографию</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendComment;
