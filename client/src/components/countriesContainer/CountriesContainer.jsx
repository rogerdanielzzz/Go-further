import React, { useEffect } from 'react'
import Style from './CountriesContainer.module.scss'
import{getAllCountries} from "../../redux/actions/index.js"
import { useDispatch, useSelector } from "react-redux";
import CountryCard from '../CountryCard/CountryCard.jsx';

const CountriesContainer = () => {
const dispatch = useDispatch();
const country= useSelector((state)=>state.countries)

useEffect(()=>{
dispatch(getAllCountries())
},[]);
return (
<div className={Style.container}>
    {country &&
    country.map((el) => (
    <CountryCard flags={el.flags} name={el.name} population={el.population} continent={el.continent} subregion={el.subregion} />
    ))}
</div>
)
}
export default CountriesContainer;