import React from "react";
import "./MenuContainer.css";

import Menu from "./Menu";

const imaginaryData = [
  {
    title: "Huevos a la mexicana",
    data: {
      ingredients: [
        {
          name: "2 Huevos",
          equivalentNum: 2,
          equivalentTypeName: "Carne",
          equivalentTypeId: "meat",
        },
        {
          name: "1 aceite",
          equivalentNum: 1,
          equivalentTypeName: "Grasas",
          equivalentTypeId: "grasas",
        },
        {
          name: "3 Jitomates",
          equivalentNum: 3,
          equivalentTypeName: "Vegetales",
          equivalentTypeId: "vegetables",
        },
      ],
    },
  },
  {
    title: "Salchicha frita",
    data: {
      ingredients: [
        {
          name: "2 Salchichas",
          equivalentNum: 2,
          equivalentTypeName: "Carne",
          equivalentTypeId: "meat",
        },
        {
          name: "1 mantequilla",
          equivalentNum: 1,
          equivalentTypeName: "Grasas",
          equivalentTypeId: "grasas",
        },
      ],
    },
  },
  {
    title: "Salchicha a la francesa",
    data: {
      ingredients: [
        {
          name: "4 Papas",
          equivalentNum: 4,
          equivalentTypeName: "Vegetales",
          equivalentTypeId: "vegetables",
        },
        {
          name: "3 Manzanas",
          equivalentNum: 3,
          equivalentTypeName: "Fruta",
          equivalentTypeId: "fruits",
        },
      ],
    },
  },
  {
    title: "Sandwich de aguacate",
    data: {
      ingredients: [
        {
          name: "2 Piezas de pan",
          equivalentNum: 2,
          equivalentTypeName: "Cereales",
          equivalentTypeId: "cereal",
        },
        {
          name: "2 Huevos",
          equivalentNum: 2,
          equivalentTypeName: "Carne",
          equivalentTypeId: "meat",
        },
        {
          name: "1 azucar",
          equivalentNum: 1,
          equivalentTypeName: "Azucar",
          equivalentTypeId: "sugar",
        },
        {
          name: "3 Manzanas",
          equivalentNum: 3,
          equivalentTypeName: "Fruta",
          equivalentTypeId: "fruits",
        },
      ],
    },
  },
];

const MenuContainer = ({ menus }) => {
  menus = imaginaryData;

  return (
    <div className="menucontainer">
      <div className="menucontainer__wrapper">
        {menus ? (
          menus.map((menu) => <Menu title={menu.title} data={menu.data}></Menu>)
        ) : (
          <div>No menus!</div>
        )}
      </div>
      <div className="menucontainer__buttons">
        <div className="menucontainer__make">Make menu</div>
        <div className="menucontainer__import">Add menu from library</div>
      </div>
    </div>
  );
};

export default MenuContainer;
