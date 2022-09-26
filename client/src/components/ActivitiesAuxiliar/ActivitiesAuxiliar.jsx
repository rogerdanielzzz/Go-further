import React  from "react";
import{getAllCountries, getAllActivities} from "../../redux/actions/index.js"
import { useDispatch, useSelector } from "react-redux";
import ActivityCard from "../ActivityCard/ActivityCard.jsx";
import { useEffect } from "react";
import Style from './ActivitiesAuxiliar.auxiliar.module.scss'


const ActivitiesAuxiliar = () => {
    const dispatch= useDispatch();
    const actividades= useSelector((state)=>state.activities)
    useEffect(()=>{

        return{

    }

    },[])
    
    
  return (
    <div>ActivitiesAuxiliar</div>
  )
}

export default ActivitiesAuxiliar