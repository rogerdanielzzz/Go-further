import React, { useEffect, useState } from "react";
import Style from "./CountriesContainer.module.scss";
import {  getAllCountries,getAllActivities,loadingSwitcher,pageSwitcher} from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import CountryCard from "../CountryCard/CountryCard.jsx";
import SearchBar from "../searchbar/SearchBar";
import PaginationTool from "../PaginationTool/PaginationTool.jsx";
import LoadingScreen from "../LoadingScreen/LoadingScreen.jsx";
 
const CountriesContainer = () => {
  const countries = useSelector((state) => state.countries);
  const findedCountries = useSelector((state) => state.error);
  const isLoading = useSelector((state)=> state.isLoading)
  const dispatch = useDispatch();
  const page = useSelector((state)=> state.currentPage)
  const [elementsPerPage] = useState(8);


  const indexTo = page * elementsPerPage; //
  const indexFrom = indexTo - elementsPerPage; //
  const countriesToRender = countries.slice(indexFrom, indexTo); //arrray with 10 countries
  const paginate = (el) => dispatch(pageSwitcher(el));
  

  useEffect(() => {
    document.title = "Go Further | Countries";
    dispatch(loadingSwitcher(true))
    dispatch(getAllCountries());
    dispatch(getAllActivities());
  }, [dispatch]);


  return (
    <React.Fragment>
      <SearchBar />
      <div className={Style.container}>
        { isLoading? <LoadingScreen/> : findedCountries ? (
          <h1>{findedCountries}</h1>
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
      {!isLoading&& <PaginationTool
        elementsPerPage={elementsPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />}
    </React.Fragment>
  );
};
export default CountriesContainer;
