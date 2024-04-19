import React from "react";

const CardList = ({ monsters }) => {
  return (
    <div>
      {monsters.map((item, index) => {
        return <h1 key={index}>{item.name}</h1>;
      })}
    </div>
  );
};

export default CardList;
