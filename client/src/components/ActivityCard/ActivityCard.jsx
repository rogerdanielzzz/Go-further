import React from 'react'
import Style from "./ActivityCard.module.scss"
import summer from "../../img/summer2.jpg"
import Autumn from "../../img/autum1.jpg"
import Winter from "../../img/winter2.jpg"
import Spring from "../../img/spring1.jpg"




const ActivityCard = (props) => {
    let image= props.image
    if(!props.image){
        if(props.season=== "Summer") image= summer
        if(props.season=== "Autumn") image= Autumn 
        if(props.season=== "Winter") image= Winter
        if(props.season=== "Spring") image= Spring
    }

return (
<div className={Style.container}>
    <img className={Style.flag} src={image} alt={`${props.name} flag`} />
    <div className={Style.textContainer}>
    <h3 className={Style.countryName}> {props.name} </h3>
    <h3 className={Style.subRegion}>Season: {props.season} </h3>
    <h3 className={Style.continent}>Difficulty: {props.difficulty}/5 </h3>
    <h3 className={Style.subRegion}>Duration: {props.duration} Hours </h3>
    <h3 className={Style.subRegion}>Countries Avalaible: </h3>
    {props.countries.map((el)=><h3 key={el.id}>{el.name}</h3>)} 
    <button type="button"  className={Style.deleteButton} onClick={props.onDelete}>
        Delete Acticity
      </button>
    </div>
</div>
)
}

export default ActivityCard