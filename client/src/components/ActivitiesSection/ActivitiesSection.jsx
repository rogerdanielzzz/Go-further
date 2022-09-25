import React, { useEffect } from 'react'
import Style from './ActivitiesSection.module.scss'
import{ getAllActivities, deleteActivityById} from "../../redux/actions/index.js"
import { useDispatch, useSelector } from "react-redux";
import ActivityCard from '../ActivityCard/ActivityCard.jsx';

const ActivitiesSection = () => {
  const dispatch = useDispatch();
  const acti = useSelector((state) => state.activities)


 
  const handleDelete=(id)=>{
   dispatch(deleteActivityById(id))


    }

  useEffect(() => {

    document.title = "Go Further | Activities";
  
    dispatch(getAllActivities())
    


  }, [dispatch]);


  return (
    <React.Fragment>
      <div className={Style.container}>
        {acti.length>0? acti.map((el)=>(
        <ActivityCard onDelete={()=>handleDelete(el.id)} key={el.id} id={el.id}
          image={el.image} name={el.name} difficulty={el.difficulty} duration={el.duration} season={el.season} countries={el.countries} />
          )): <h1>With out activities, you could create one</h1>
        }

      </div>
    </React.Fragment>
  )
}
export default ActivitiesSection;