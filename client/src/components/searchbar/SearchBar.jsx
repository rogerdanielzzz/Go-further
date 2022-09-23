import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getCountryByQuery, filterByName} from "../../redux/actions/index.js"
import Style from "./SearchBar.module.scss";
import FilterAndSort from "../FilterAndSort/FilterAndSort.jsx";




const SearchBar=()=> {
  // acá va tu código
  const dispatch = useDispatch()
  const [texto, setTexto] = useState("") //Estado para guardar valor del input
  
  const handleChange = (e) => { 
    setTexto(e.target.value)
    dispatch(filterByName(texto))


  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(texto)
    dispatch(getCountryByQuery(texto))
    
  }
  return (
    <div className={Style.toolsBar}>
       <FilterAndSort/>
    <form className={Style.SearchBarContainer} onSubmit={(e)=> handleSubmit(e)}>
      <input onChange={(e) => handleChange(e)}
        className={Style.input}
        type="text"
        placeholder="Find a specific Country"
      />
      <button type="submit" className={Style.searchButton}>
        Search
      </button>
    </form>
   
    </div>
  );

}

export default  SearchBar


