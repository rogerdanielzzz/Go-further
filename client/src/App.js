import "./App.scss";
import { Route } from "react-router-dom";
import React from "react";

import Navbar from "./components/navbar/Navbar";
import CountriesContainer from "./components/countriesContainer/CountriesContainer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <CountriesContainer />
      </Route>
    </div>
  );
}

export default App;
