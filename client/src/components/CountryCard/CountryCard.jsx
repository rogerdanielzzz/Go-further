import React from 'react'
import Style from "./CountryCard.module.scss"
import Button from '../button/button'

const CountryCard = (props) => {
let formatedPopulation= props.population.toLocaleString("de-DE")

return (
<div className={Style.container}>
    <img className={Style.flag} src={props.flags} alt={`${props.name} flag`} />
    <div className={Style.textContainer}>
    <h3 className={Style.countryName}> {props.name} </h3>
    <h3 className={Style.continent}>Continent: {props.continent} </h3>
    <h3 className={Style.subRegion}>Sub Area: {props.subregion} </h3>

    <h3 className={Style.population}>Population: {formatedPopulation} </h3>
    <Button text= "See details"/>
    
    </div>
</div>
)
}

export default CountryCard