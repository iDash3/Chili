import React from "react";
import "./Menu.css";

const Menu = ({ title, data }) => {
  return (
    <article className="menu">
      <div className="menu__title">
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      </div>
      {data ? (
        data.ingredients.map((ingredient) => (
          <div className="menu__ingredient" key={ingredient.name}>
            <span>{ingredient.name}</span>
            <div className={`menu__type ${ingredient.equivalentTypeId}`}>
              <span>+{ingredient.equivalentNum} </span>
              {ingredient.equivalentTypeName}
            </div>
          </div>
        ))
      ) : (
        <div>No ingredients!</div>
      )}
      <div className="menu__line"></div>
      <div className="menu__second">
        <div className="menu__drop">
          <div className="menu__price">
            <span>Precio estimado: </span>
            <span>$200</span>
          </div>
        </div>
        <button className="menu__add">Añadir al carrito</button>
      </div>
    </article>
  );
};

export default Menu;
