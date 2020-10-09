import React from "react";
import "./Cards.css";
import CardItem from "./CardIem";

function Cards() {
  return (
    <div className="cards">
      <div className="cards-tittle">Gallery</div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src={require("../Images/mario.jpg")} path="/services" />
            <CardItem src={require("../Images/mario1.jpg")} path="/services" />
            <CardItem src={require("../Images/mario5.jpg")} path="/services" />
          </ul>
          <ul className="cards__items">
            <CardItem src={require("../Images/mario3.jpg")} path="/services" />
            <CardItem src={require("../Images/mario4.jpg")} path="/products" />
            <CardItem src={require("../Images/mario2.jpg")} path="/sign-up" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
