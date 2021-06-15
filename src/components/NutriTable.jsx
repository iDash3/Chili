import React, { useState } from "react";
import "./NutriTable.css";

const NutriTable = ({ prevData }) => {
  // Each element of the table
  const NutriElement = ({ name, id, preData }) => {
    let preTotal;
    if (preData == null) {
      preData = [0, 0, 0, 0];
      preTotal = 0;
    } else {
      preTotal = preData.reduce((a, b) => {
        return a + b;
      });
    }
    const [food, setFood] = useState(preData);
    const [total, setTotal] = useState(preTotal);

    // Handle click (add +1, substract -1)
    const HandleClicky = (i, much) => {
      let f = food[i];
      let newFood = [...food];
      if (f >= 0) {
        if (f === 0 && much < 0) {
          return 0;
        }
        newFood[i] = newFood[i] + much;
        setTotal(total + much);
      }
      setFood(newFood);
    };

    // Single row of the table, the ones with numbers
    const NutriRow = ({ index }) => {
      return (
        <div className="nutrielement__container">
          <span>{food[index] > 0 ? food[index] : "-"}</span>
          <div className="nutrielement__buttons">
            <div
              className="nutrielement__left"
              onClick={() => HandleClicky(index, -1)}
            >
              -
            </div>
            <div
              className="nutrielement__right"
              onClick={() => HandleClicky(index, 1)}
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
        <NutriRow index={0}></NutriRow>
        <NutriRow index={1}></NutriRow>
        <NutriRow index={2}></NutriRow>
        <NutriRow index={3}></NutriRow>
        <span className="nutritable__line"></span>
        <span className="nutrielement__total">{total}</span>
      </div>
    );
  };

  // Return actual complete table
  return (
    <div className="nutritable__table">
      <small>
        Click right to add <b>+1</b>, left to substract <b>-1</b>!
      </small>
      <div className="nutritable__grid nutritable__grid__title">
        <span></span>
        <span>Desayuno</span>
        <span>Comida</span>
        <span>Cena</span>
        <span>Entre comidas</span>
        <span className="nutritable__line"></span>
        <span>Porciones Totales</span>
      </div>
      {prevData ? (
        prevData.data.map((el) => (
          <NutriElement
            key={el[Object.keys(el)[0]].id}
            name={el[Object.keys(el)[0]].name}
            id={el[Object.keys(el)[0]].id}
            preData={el[Object.keys(el)[0]].data}
          ></NutriElement>
        ))
      ) : (
        <div>
          <NutriElement name="Fruits" id="fruits"></NutriElement>
          <NutriElement name="Vegetables" id="vegetables"></NutriElement>
          <NutriElement name="Cereales" id="cereal"></NutriElement>
          <NutriElement name="Leguminosas" id="leguminosas"></NutriElement>
          <NutriElement name="Leche" id="leche"></NutriElement>
          <NutriElement name="Azucares" id="sugar"></NutriElement>
          <NutriElement name="Carne" id="meat"></NutriElement>
          <NutriElement name="Grasas" id="grasas"></NutriElement>
        </div>
      )}
    </div>
  );
};

export default NutriTable;
