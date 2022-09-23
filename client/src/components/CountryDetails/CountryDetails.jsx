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
  }, []);
  let formatedPopulation= country.population

  return <div className={Style.detailsContainer}>
    <img className={Style.flag} src={country.flags} alt={`${country.name} flag`} />
    <div className={Style.textContainer}>
    <h3 className={Style.countryName}> {country.name} </h3>
    <h3 className={Style.id}> Code CCA3: {country.id} </h3>
    <h3 className={Style.area}> Area: {country.area}  km²</h3>
    <h3 className={Style.continent}>Continent: {country.continent} </h3>
    <h3 className={Style.subRegion}>Sub Area: {country.subregion} </h3>
    <h3 className={Style.population}>Population: {formatedPopulation} </h3>
    <h3 className={Style.activities}>Activities: {country.activities} </h3>
  
    </div>
    </div>;
};

export default CountryDetails