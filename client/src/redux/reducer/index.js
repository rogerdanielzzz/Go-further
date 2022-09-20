import {
    CREATE_ACTIVITY,
    GET_ALL_ACTIVITIES,
    GET_ALL_COUNTRIES,
    GET_COUNTRY_DETAILS,
} from "../actions/index.js";

const initialState = {
    countries: [],
    countriesDetail: {},
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
                countriesDetail: action.payload,
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
        default:
            return {
                ...state
            };


    }

};
export default rootReducer;
