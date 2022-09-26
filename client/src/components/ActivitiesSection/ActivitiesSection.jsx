import React, { useEffect, useState } from 'react'
import Style from './ActivitiesSection.module.scss'
import { getAllActivities, deleteActivityById, getAllCountries } from "../../redux/actions/index.js"
import { useDispatch, useSelector } from "react-redux";
import ActivityCard from '../ActivityCard/ActivityCard.jsx';

const ActivitiesSection = () => {
 /*Es un componente donde se tenderizan todas las actividades, llama con los use selector los estados 
 y se usa un estado auxiliar para cuando se modifique llamar al useEffect se pasan toda la info a la card por 
 props*/
 
 
 
  const dispatch = useDispatch();
  const activitiesRedux = useSelector((state) => state.activities)
  const auxiliar = useSelector((state) => state.activitiesAuxiliar)
  const handleDelete = async (id) => {
    dispatch(deleteActivityById(id))
  }

  useEffect(() => {
    document.title = "Go Further | Activities";
    dispatch(getAllCountries())
    dispatch(getAllActivities())
  }, [dispatch, auxiliar]);


  return (
    <React.Fragment>
      <div className={Style.container}>
        {activitiesRedux.length > 0 ? activitiesRedux.map((el) => (
          <ActivityCard onDelete={() => handleDelete(el.id)} key={el.id} id={el.id}
            image={el.image} name={el.name} difficulty={el.difficulty} duration={el.duration} season={el.season} countries={el.countries} />
        )) : <h1>With out activities, you could create one</h1>
        }

      </div>
    </React.Fragment>
  )
}
export default ActivitiesSection;