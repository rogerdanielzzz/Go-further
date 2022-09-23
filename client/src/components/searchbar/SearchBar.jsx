import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getCountryByQuery, filterByName} from "../../redux/actions/index.js"
import Style from "./SearchBar.module.scss";
import za from "../../img/za.png"
import az from "../../img/az.png"
import T from "../../img/T.png"




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
    <div className={Style.filters}>
    <img src={T} className={Style.icon} alt="az" />
    <img src={T} className={Style.icon} alt="za" />
    </div>
    </div>
  );

}

export default  SearchBar


