export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";


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

  export const getAllActivities = () => {
    return function (dispatch) {
      return fetch("http://localhost:3001/activities")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: GET_ALL_ACTIVITIES, payload: data });
        });
    };
  };
  
export const createActivty = (activity) => {
    return { type:CREATE_ACTIVITY , payload: activity}
};