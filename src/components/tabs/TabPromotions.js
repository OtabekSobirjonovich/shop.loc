import React from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { useState } from "react";
import useFetch from "../../data/useFetch";
import Loader from "../loader/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tabMain.css";

function TabPromotionals(props) {
  const [activeTab, setActiveTab] = useState("1");
  const { data, isLoading } = useFetch("http://localhost:4000/cards");
  return (
    <div className="for_tab">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === "1" ? "active" : ""}
            onClick={() => setActiveTab("1")}
          >
            Беседки
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "2" ? "active" : ""}
            onClick={() => setActiveTab("2")}
          >
            Бани
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "3" ? "active" : ""}
            onClick={() => setActiveTab("3")}
          >
            Площадки
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "4" ? "active" : ""}
            onClick={() => setActiveTab("4")}
          >
            Дома
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "5" ? "active" : ""}
            onClick={() => setActiveTab("5")}
          >
            Перголы
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "6" ? "active" : ""}
            onClick={() => setActiveTab("6")}
          >
            Бренды
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="cards_collection">
            {isLoading && <Loader />}
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
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div className="cards_collection">
            {isLoading && <Loader />}
            {data &&
              data.map((card) => (
                <div className="card" key={card.bathId}>
                  <div className="content">
                    <div className="for_image">
                      <img src={card.bathImageUrl} alt="er" />
                    </div>
                    <div className="for_subheader">
                      <h3>{card.bathLocation}</h3>
                      <h3>{card.bathLocationId}</h3>
                    </div>
                    <div className="for_header">
                      <h1>{card.bathHeaderText}</h1>
                    </div>
                    <div className="for_features">
                      <div className="size">
                        <p>
                          <img src={card.cardSizeUrl} alt="er" />
                          {card.cardSizeText}
                        </p>
                        <p>{card.bathSize}</p>
                      </div>
                      <div className="area">
                        <p>
                          <img src={card.cardAreaUrl} alt="er" />
                          {card.cardAreaText}
                        </p>
                        <p>{card.bathArea}</p>
                      </div>
                    </div>
                    <div className="for_cost_actions">
                      <div className="costs">
                        <p>
                          {card.bathCostWithoutDiscount}{" "}
                          <button>{card.bathDiscountAmount}</button>
                        </p>
                        <h2>{card.bathCostWithDiscount}</h2>
                      </div>
                      <div className="buying">
                        <button>Купить</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPane>
        <TabPane tabId="3">
          <div className="cards_collection">
            {isLoading && <Loader />}
            {data &&
              data.map((card) => (
                <div className="card" key={card.playgroundId}>
                  <div className="content">
                    <div className="for_image">
                      <img src={card.playgroundImageUrl} alt="er" />
                    </div>
                    <div className="for_subheader">
                      <h3>{card.playgroundLocation}</h3>
                      <h3>{card.playgroundLocationId}</h3>
                    </div>
                    <div className="for_header">
                      <h1>{card.playgroundHeaderText}</h1>
                    </div>
                    <div className="for_features">
                      <div className="size">
                        <p>
                          <img src={card.cardSizeUrl} alt="er" />
                          {card.cardSizeText}
                        </p>
                        <p>{card.playgroundSize}</p>
                      </div>
                      <div className="area">
                        <p>
                          <img src={card.cardAreaUrl} alt="er" />
                          {card.cardAreaText}
                        </p>
                        <p>{card.playgroundArea}</p>
                      </div>
                    </div>
                    <div className="for_cost_actions">
                      <div className="costs">
                        <p>
                          {card.playgroundCostWithoutDiscount}{" "}
                          <button>{card.playgroundDiscountAmount}</button>
                        </p>
                        <h2>{card.playgroundCostWithDiscount}</h2>
                      </div>
                      <div className="buying">
                        <button>Купить</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPane>
        <TabPane tabId="4">
          <div className="cards_collection">
            {isLoading && <Loader />}
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
          </div>
        </TabPane>
        <TabPane tabId="5">
          <div className="cards_collection">
            {isLoading && <Loader />}
            {data &&
              data.map((card) => (
                <div className="card" key={card.bathId}>
                  <div className="content">
                    <div className="for_image">
                      <img src={card.bathImageUrl} alt="er" />
                    </div>
                    <div className="for_subheader">
                      <h3>{card.bathLocation}</h3>
                      <h3>{card.bathLocationId}</h3>
                    </div>
                    <div className="for_header">
                      <h1>{card.bathHeaderText}</h1>
                    </div>
                    <div className="for_features">
                      <div className="size">
                        <p>
                          <img src={card.cardSizeUrl} alt="er" />
                          {card.cardSizeText}
                        </p>
                        <p>{card.bathSize}</p>
                      </div>
                      <div className="area">
                        <p>
                          <img src={card.cardAreaUrl} alt="er" />
                          {card.cardAreaText}
                        </p>
                        <p>{card.bathArea}</p>
                      </div>
                    </div>
                    <div className="for_cost_actions">
                      <div className="costs">
                        <p>
                          {card.bathCostWithoutDiscount}{" "}
                          <button>{card.bathDiscountAmount}</button>
                        </p>
                        <h2>{card.bathCostWithDiscount}</h2>
                      </div>
                      <div className="buying">
                        <button>Купить</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPane>
        <TabPane tabId="6">
          <div className="cards_collection">
            {isLoading && <Loader />}
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
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default TabPromotionals;
