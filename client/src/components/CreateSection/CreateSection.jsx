import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createActivity, getAllCountries} from "../../redux/actions/index.js"
import Style from './CreateSection.module.scss'

function Form() {

    const [input, setinput] = useState({name:"", difficulty:"",duration:"",season:"",image:"", countries: []})
    const [errors, seterrors] = useState({})
    const [isSubmit, setisSubmit] = useState(false)

    const dispatch = useDispatch()
    const navigate = useHistory()

    useEffect(()=>{
      dispatch(getAllCountries())
    },[])
    const countriesSelector = useSelector((state) => state.countries)

const validate = (values) => {
  const errors = {};
  const urlValidator = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/g
  const numberValidator =   /^[1-9][0-9]*$/
  if  (!values.name) {
      errors.name = "An Activity name is required";
     }
  if  (!values.difficulty){
      errors.difficulty = "Difficulty is required"
      } 
  if  (!values.duration){
      errors.duration = "Duration is required"
      }
  
    if (!numberValidator.test(values.duration)){
        errors.duration = "Please select a valid Duration: between 1 to 10 hours, Remember, duration cannot be negative"
      }
  if (!urlValidator.test(values.image) ){
      errors.image = "The image must be in url format"
      }
  if  (!values.season){
      errors.season = "The season is required"
      }
  if  (!values.countries || values.countries.length === 0){
      errors.countries = "At least one country must be selected"
      }
// Validacion del objeto errors - setea isSubmit en True si todos los campos estan ok
  if ((Object.keys(errors).length) === 0){
    setisSubmit(true)
  };
  return errors 
    }
//Input Handlers: 
  function handleChange(e){
    setinput({
      ...input,
      [e.target.name]: e.target.value
    })
      seterrors(validate({
        ...input,
        [e.target.name] : e.target.value
      }))
   }
  function handlecheckDifficulty(e){
      setinput({
        ...input,
        difficulty: e.target.value
      })
    seterrors(validate({
      ...input,
      difficulty : e.target.value
    }))
  }
  function handlecheckSeason(e){
      setinput({
        ...input,
        season: e.target.value
      })
    seterrors(validate({
      ...input,
      season : e.target.value
    }))
  }
  function handleSelectcountry(e){
    e.preventDefault();
    if(Object.values(input.countries).includes(e.target.value)){
      console.log( "Country already selected",
       )
    }
    else{
        setinput({
      ...input,
      countries: [...input.countries,e.target.value]
    })  
    }
    seterrors(validate({
      ...input,
      countries : [...input.countries,e.target.value]
    }))
   }

//Delete Countries selected
   function handleDeleteCountry(e){
    setinput({
      ...input,
      countries: input.countries.filter((el) => el !== e)
    })
  }

//Handle submit Validation:
  async function handlesubmit(e) {
    e.preventDefault();
    seterrors(validate(setinput))
    if(Object.keys(errors).length === 0 && isSubmit){
      dispatch(createActivity(input))
      console.log(input)
    navigate.push("/countries")
  }
    e.preventDefault()
   }

    return (

        <div className={Style.sectionContainer}>
            <div className={Style.boxContainer}>
                <div className={Style.textContainer}><h1>Create Your Activity</h1></div>
                <form className={Style.formContainer} onSubmit={e => handlesubmit(e)}>
                    <label>Name:</label><br />
                    <input autoComplete="off" placeholder="activity name.." type="text" name="name" input={input.name} onChange={(e) => handleChange(e)} />
                    {
                        <p className={Style.errorText}>{errors.name}</p>
                    }
                    <label>Difficulty:</label><br />
                    <select defaultValue={'DEFAULT'} onChange={(e) => handlecheckDifficulty(e)}>
                        <option value="DEFAULT" disabled>Select Difficulty</option>
                        <option name="1" value="1">1</option>
                        <option name="2" value="2">2</option>
                        <option name="3" value="3">3</option>
                        <option name="4" value="4">4</option>
                        <option name="5" value="5">5</option>
                    </select>
                    {
                        <p className={Style.errorText}>{errors.difficulty}</p>
                    }
                    <label>How many hours?:</label><br />
                    <input type="number" name='duration' placeholder='duration in hours' input={input.duration} onChange={(e) => handleChange(e)} />
                    {
                        <p className={Style.errorText}>{errors.duration}</p>
                    }
                    <label>Season:</label><br />
                    <select defaultValue={'DEFAULT'} onChange={(e) => handlecheckSeason(e)}>
                        <option value="DEFAULT" disabled>Select Season</option>
                        <option name="Summer" value="Summer">Summer</option>
                        <option name="Winter" value="Winter">Winter</option>
                        <option name="Spring" value="Spring">Spring</option>
                        <option name="Autumn" value="Autumn">Autumn</option>
                    </select>
                    {
                        <p className={Style.errorText}>{errors.season}</p>
                    }
                    <label>Image Url:</label><br />
                    <input autoComplete="off" type="text" name='image' placeholder='Enter your url' input={input.image} onChange={(e) => handleChange(e)} />
                    {
                        <p className={Style.errorText}>{errors.image}</p>
                    }
                    <label>Countries:</label> <br />
                    <select defaultValue={'DEFAULT'} onChange={(e) => handleSelectcountry(e)}>
                        <option disabled value="DEFAULT ">Select Country</option>
                        {
                            countriesSelector.map((e, i) =>
                                (<option key={i} value={e.name}>{e.name}</option>)
                            )
                        }
                    </select>
                    {
                        <p className={Style.errorText}>{errors.countries}</p>
                    }
                    {input.countries.length > 0 &&
                        <ul className={Style.countriesList}>
                            {input.countries.map((el) =>
                                <div className={Style.listContainer}>
                                    <li>{el}</li>
                                    <button type='button' className={Style.deleteButton} onClick={() => handleDeleteCountry(el)}>X</button>
                                </div>)}
                        </ul>}
                    <button type='submit' disabled={Object.keys(errors).length} className={Style.createButton}>Create Activity</button>
                </form>
            </div>
        </div>

    )
}

export default Form