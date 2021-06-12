import React from "react";
import "./App.css";

import Header from "./components/Header";
import NutriTable from "./components/NutriTable";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NutriTable></NutriTable>
      <h2>Menus</h2>
      <h2>Desayuno</h2>
      <h2>Comida</h2>
      <h2>Cena</h2>
      <h2>Entre comidas</h2>
    </div>
  );
}

export default App;
