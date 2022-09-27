import "./App.scss";
import { Route } from "react-router-dom";
import React from "react";

import Navbar from "./components/navbar/Navbar.jsx";
import CountriesContainer from "./components/countriesContainer/CountriesContainer.jsx";
import CountryDetails from "./components/CountryDetails/CountryDetails.jsx";
import CreateSection from "./components/CreateSection/CreateSection.jsx";
import ActivitiesSection from "./components/ActivitiesSection/ActivitiesSection.jsx"
import LandingPage from "./components/LandingPage/LandingPage.jsx";

function App() {
  return (
    <div className="App">

      
     
      <Route exact path="/">
        <LandingPage/>
      </Route>
      <Route exact path="/countries/:idPais">
      <Navbar/>
        <CountryDetails/>
      </Route>
      <Route exact path="/countries">
      <Navbar/>
        <CountriesContainer />
      </Route>
     
      <Route exact path="/create">
      <Navbar/>
        <CreateSection/>
      </Route>
      <Route exact path="/activities">
      <Navbar/>
        <ActivitiesSection/>
      </Route>
    </div>
  );
}

export default App;
