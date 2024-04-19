import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      <Card monsters={monsters} />
    </div>
  );
};

export default CardList;
