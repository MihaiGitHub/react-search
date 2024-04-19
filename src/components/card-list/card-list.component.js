import React from "react";

const CardList = ({ monsters }) => {
  return (
    <div>
      {monsters.map((item, index) => {
        return <h1 key={index}>{item.name}</h1>;
      })}
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
    </div>
  );
};

export default CardList;
