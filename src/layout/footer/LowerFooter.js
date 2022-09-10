import React from "react";

function LowerFooter(props) {
  return (
    <div className="lower_footer">
      <div className="first_part">
        <p>Публичная оферта </p>
        <p>2013-{new Date().getFullYear()} - Товары для дач,</p>
        <p>деревянные конструкции под любые нужды</p>
      </div>
      <div className="second_part">
        <h1>Принимаем к оплате:</h1>
        <div className="payment_companies">
          <img src="./images/visa_icon.png" alt="" />
          <img src="./images/jcb_icon.png" alt="" />
          <img src="./images/maestro_icon.png" alt="" />
          <img src="./images/mastercard_icon.png" alt="" />
          <img src="./images/yandex_icon.png" alt="" />
          <img src="./images/mir_icon.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LowerFooter;
