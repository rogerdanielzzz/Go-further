import React, { useEffect } from 'react'
import Style from './CountriesContainer.module.scss'
import{getAllCountries} from "../../redux/actions/index.js"
import { useDispatch, useSelector } from "react-redux";
import CountryCard from '../CountryCard/CountryCard.jsx';
import SearchBar from '../searchbar/SearchBar';

const CountriesContainer = () => {
  const dispatch = useDispatch();

const country= useSelector((state)=>state.countries)
const findedCountries = useSelector((state)=> state.finded)

useEffect(()=>{

    document.title = "Go Further" ;
    dispatch(getAllCountries())
 

},[dispatch]);

return (
  <React.Fragment> 
    <SearchBar/>

<div className={Style.container}>
 { !Array.isArray(findedCountries)? <h1>{findedCountries.error}</h1>: findedCountries.length>=1? findedCountries.map((el) => (
        
        <CountryCard key={el.id} id={el.id}
        flags={el.flags} name={el.name} population={el.population} continent={el.continent} subregion={el.subregion} />
        ))
       : country.map((el) => (
        <CountryCard key={el.id} id={el.id}
        flags={el.flags} name={el.name} population={el.population} continent={el.continent} subregion={el.subregion} />
        )) }
</div>
</React.Fragment>
)
}
export default CountriesContainer;