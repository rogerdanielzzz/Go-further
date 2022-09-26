import React, { useEffect, useState } from "react";
import Style from "./CountriesContainer.module.scss";
import {  getAllCountries,getAllActivities,} from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import CountryCard from "../CountryCard/CountryCard.jsx";
import SearchBar from "../searchbar/SearchBar";
import PaginationTool from "../PaginationTool/PaginationTool.jsx";

const CountriesContainer = () => {
  const countries = useSelector((state) => state.countries);
  const findedCountries = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [elementsPerPage] = useState(10);
  const indexTo = page * elementsPerPage; //10
  const indexFrom = indexTo - elementsPerPage; //0
  const countriesToRender = countries.slice(indexFrom, indexTo); //arrray with 10 countries
  const paginate = (el) => setPage(el);

  useEffect(() => {
    document.title = "Go Further | Countries";
    dispatch(getAllCountries());
    dispatch(getAllActivities());
  }, [dispatch]);

  return (
    <React.Fragment>
      <SearchBar />
      <div className={Style.container}>
        {findedCountries.error ? (
          <h1>{findedCountries.error}</h1>
        ) : (
          countriesToRender.map((el) => (
            <CountryCard
              key={el.id}
              id={el.id}
              flags={el.flags}
              name={el.name}
              population={el.population}
              continent={el.continent}
              subregion={el.subregion}
            />
          ))
        )}
      </div>
      <PaginationTool
        elementsPerPage={elementsPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
    </React.Fragment>
  );
};
export default CountriesContainer;
