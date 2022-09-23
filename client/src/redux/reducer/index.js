import {
    CREATE_ACTIVITY,
    GET_ALL_ACTIVITIES,
    GET_ALL_COUNTRIES,
    GET_COUNTRY_DETAILS,
    GET_COUNTRY_BY_QUERY,
    FILTER_BY_ACTIVITY,
    FILTER_BY_CONTINENT,
    FILTER_BY_NAME
} from "../actions/index.js";

const initialState = {
    countries: [],
    finded: [],
    countryDetail: {},
    activities: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            };
        case GET_COUNTRY_DETAILS:
            return {
                ...state,
                countryDetail: action.payload,
            };
        case GET_COUNTRY_BY_QUERY:
            return {
                ...state,
                finded: action.payload,
            };

        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            };
        case CREATE_ACTIVITY:
            return {
                ...state,
                activities: Array.from(new Set([...state.activities, action.payload])),
            };
        case FILTER_BY_NAME:
            let arrFiltered= state.countries.filter((el)=> el.name.toLowerCase().includes(action.payload.toLowerCase()))

            return {
                ...state,
                finded: arrFiltered,
            };
        default:
            return {
                ...state
            };


    }

};
export default rootReducer;