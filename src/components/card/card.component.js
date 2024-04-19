import React from "react";
import "./card.styles.css";

const Card = ({ monsters }) => {
  return (
    <>
      {monsters.map((item, index) => {
        const { name, email, id } = item;
        return (
          <div className="card-container" key={index}>
            <img
              alt={`monster ${name}`}
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
