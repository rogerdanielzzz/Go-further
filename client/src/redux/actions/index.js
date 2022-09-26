import Axios from 'axios'

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const GET_COUNTRY_BY_QUERY = "GET_COUNTRY_BY_QUERY";
export const FILTER_BY_ACTIVITY= "FILTER_BY_ACTIVITY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const ORDER_BY= "ORDER_BY";
export const DELETE_ACTIVTY_BY_ID= "DELETE_ACTIVTY_BY_ID";



export const getAllCountries = () => {
    return function (dispatch) {
      return fetch("http://localhost:3001/countries")
        .then((response) => response.json())
        .then((data) => {

          dispatch({ type: GET_ALL_COUNTRIES, payload: data });
        });
    };
  };

  export const getCountryDetails = (idPais) => {
    return function (dispatch) {
      return fetch(`http://localhost:3001/countries/${idPais}`)
        .then((response) => response.json())
        .then((data) => {

          dispatch({ type: GET_COUNTRY_DETAILS, payload: data });
        });
    };
  };
  
  export const getCountryByQuery = (query) => {
    return function (dispatch) {
      return fetch(`http://localhost:3001/countries?name=${query}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: GET_COUNTRY_BY_QUERY, payload: data });
        }).catch(error => {
          dispatch({ type: GET_COUNTRY_BY_QUERY, payload: error });
      });
    };
  };

  export const getAllActivities = () => {
    return async function (dispatch) {
      const response = await fetch("http://localhost:3001/activities");
      const data = await response.json();
      dispatch({ type: GET_ALL_ACTIVITIES, payload: data });
    };
  };
  
export const filterByName = (name) => {
  return { type: FILTER_BY_NAME , payload: name}
};
export const filterByContinet = (continent) => {
  return { type: FILTER_BY_CONTINENT , payload: continent}
  
};
export const orderBy = (orientation) => {
  return { type: ORDER_BY , payload: orientation}
  
};
export const filterByActivity = (activity) => {
  return { type: FILTER_BY_ACTIVITY , payload: activity}
};
export const createActivity = (activity) => {
  return async function (dispatch) {
    try {
        let res = await Axios.post("http://localhost:3001/activities", activity);
        return dispatch({
            type: CREATE_ACTIVITY,
            payload: res.data,
        })
    } catch (error) {
        throw(error);
    }
}
};

export const deleteActivityById = (id) => {
  return async function (dispatch) {
    try {
        let res = await Axios.delete(`http://localhost:3001/activities/${id}`);
        return dispatch({
            type: DELETE_ACTIVTY_BY_ID,
            payload: res.data,
        })
    } catch (error) {
        throw(error);
    }
}
};




