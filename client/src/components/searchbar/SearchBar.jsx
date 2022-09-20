import React, { useState } from "react";
import Style from "./SearchBar.module.scss";

export const  SearchBar=(props)=> {
  // acá va tu código
  const [texto, setTexto] = useState("") //Estado para guardar valor del input
  const handleChange = (e) => { setTexto(e.target.value) }
  return (
    <div className={Style.SearchBarContainer}>
      <input onChange={(e) => handleChange(e)}
        className={Style.input}
        type="text"
        placeholder="Busque una Ciudad"
      />
      <button className={Style.boton} onClick={() => props.onSearch(texto)}>
        Agregar
      </button>
    </div>
  );

}



