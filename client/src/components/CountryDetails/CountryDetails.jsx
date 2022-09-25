import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {getCountryDetails} from "../../redux/actions/index"
import Style from "./CountryDetails.module.scss"

const CountryDetails = () => {
  let { idPais } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryDetail);
  useEffect(() => {

    dispatch(getCountryDetails(idPais));

    
  }, [dispatch, idPais]);

  let area =country.area
  let population= country.population
  let actividades =country.activities
  console.log(actividades)
  let auxArr=[]

  if (population) population= population.toLocaleString("de-DE")
  if (area) area= area.toLocaleString("de-DE")
  if (actividades) auxArr= [...actividades]



  return <div className={Style.detailsContainer}>
    <img className={Style.flag} src={country.flags} alt={`${country.name} flag`} />
    <div className={Style.textContainer}>
    <h3 className={Style.countryName}> {country.name} </h3>
    <h3 className={Style.id}> Code CCA3: {country.id} </h3>
    <h3 className={Style.area}> Area: {area}  km²</h3>
    <h3 className={Style.continent}>Continent: {country.continent} </h3>
    <h3 className={Style.subRegion}>Sub Area: {country.subregion} </h3>
    <h3 className={Style.population}>Population: {population} </h3>
    <h3 className={Style.activities}>Activities:</h3>
    <ul>{auxArr.length>0 && auxArr.map((el)=><li>You can {el.name} in {el.season}</li>)}</ul>
  
    </div>
    </div>;
};

export default CountryDetails