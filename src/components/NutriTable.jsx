import React, { useState } from "react";
import "./NutriTable.css";

const imagiData = {
  1: {
    fruits: 3,
    vegetables: 3,
    cereal: 3,
    leguminosas: 2,
    leche: 1,
    sugar: 0,
    meat: 12,
    grasas: 2,
  },
};

const NutriTable = () => {
  const NutriElement = ({ name, id }) => {
    const [desayuno, setDesayuno] = useState(0);
    const [comida, setComida] = useState(0);
    const [cena, setCena] = useState(0);
    const [entreComida, setEntreComida] = useState(0);
    const [total, setTotal] = useState(0);

    const HandleClick = (bar, setBar, much) => {
      if (bar >= 0 && total >= 0) {
        if (much < 0) {
          if (bar == 0 || total == 0) {
            return 0;
          }
        }
        setTotal(total + much);
        setBar(bar + much);
      }
    };

    const NutriRow = ({ bar, setBar }) => {
      return (
        <div className="nutrielement__container">
          <span>{bar > 0 ? bar : "-"}</span>
          <div className="nutrielement__buttons">
            <div
              className="nutrielement__left"
              onClick={() => HandleClick(bar, setBar, -1)}
            >
              -
            </div>
            <div
              className="nutrielement__right"
              onClick={() => HandleClick(bar, setBar, 1)}
            >
              +
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="nutritable__grid">
        {/* Nutritable row */}
        <span id={id} className={`nutritable__font nutritable__element__${id}`}>
          {name}
        </span>
        <NutriRow bar={desayuno} setBar={setDesayuno}></NutriRow>
        <NutriRow bar={comida} setBar={setComida}></NutriRow>
        <NutriRow bar={cena} setBar={setCena}></NutriRow>
        <NutriRow bar={entreComida} setBar={setEntreComida}></NutriRow>
        <span className="nutritable__line"></span>
        <span className="nutrielement__total">{total}</span>
      </div>
    );
  };

  return (
    <div className="nutritable__table">
      <small>Click right to add +1, left to substract -1!</small>
      <div className="nutritable__grid nutritable__grid__title">
        <span></span>
        <span>Desayuno</span>
        <span>Comida</span>
        <span>Cena</span>
        <span>Entre comidas</span>
        <span className="nutritable__line"></span>
        <span>Porciones Totales</span>
      </div>
      <NutriElement name="Fruits" id="fruit"></NutriElement>
      <NutriElement name="Vegetables" id="vegetable"></NutriElement>
      <NutriElement name="Cereales" id="cereal"></NutriElement>
      <NutriElement name="Leguminosas" id="leguminosas"></NutriElement>
      <NutriElement name="Leche" id="leche"></NutriElement>
      <NutriElement name="Azucares" id="sugar"></NutriElement>
      <NutriElement name="Carne" id="meat"></NutriElement>
      <NutriElement name="Grasas" id="grasas"></NutriElement>
    </div>
  );
};

export default NutriTable;
