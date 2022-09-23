import "./App.scss";
import { Route } from "react-router-dom";
import React from "react";

import Navbar from "./components/navbar/Navbar";
import CountriesContainer from "./components/countriesContainer/CountriesContainer.jsx";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import CreateSection from "./components/CreateSection/CreateSection";
import ActivitiesSection from "./components/ActivitiesSection/ActivitiesSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <CountriesContainer />
      </Route>
      <Route exact path="/countries/:idPais">
        <CountryDetails/>
      </Route>
      <Route exact path="/create">
        <CreateSection/>
      </Route>
      <Route exact path="/activities">
        <ActivitiesSection/>
      </Route>
    </div>
  );
}

export default App;
