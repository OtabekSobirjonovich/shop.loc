import React from "react";
import "./footer.css";

function TopFooter(props) {
  return (
    <div className="top_footer">
      <div className="first_part">
        <div className="buttons">
          <div className="btns">
            <button className="orange"></button>
            <button className="white"></button>
            <button className="yellow"></button>
          </div>
          <p>Логотип вашего магазина</p>
        </div>
        <div className="location">
          <p>Наш адрес:</p>
          <p>Москва, ул. Новокосимская д.7</p>
        </div>
      </div>
      <div className="second_part">
        <div className="work_graphics">
          <p>График работы: </p>
          <p>
            Ежедневно с <b>9:00</b> до <b>21:00</b>
          </p>
        </div>
        <button>Заказать звонок</button>
      </div>
    </div>
  );
}

export default TopFooter;
