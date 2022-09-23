import {
    CREATE_ACTIVITY,
    GET_ALL_ACTIVITIES,
    GET_ALL_COUNTRIES,
    GET_COUNTRY_DETAILS,
    GET_COUNTRY_BY_QUERY,
    FILTER_BY_ACTIVITY,
    FILTER_BY_CONTINENT,
    FILTER_BY_NAME,
    ORDER_BY,


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
            let arrFiltered = state.countries.filter((el) => el.name.toLowerCase().includes(action.payload.toLowerCase()))

            return {
                ...state,
                finded: arrFiltered,
            };
        case FILTER_BY_CONTINENT:
            let filterCont = state.countries.filter((el) => el.continent === action.payload)

            return {
                ...state, finded: filterCont
            };

        case ORDER_BY:
            let sorted;
            if (state.finded.length < 1) {
                sorted = [...state.countries]
            } else sorted = [...state.finded]

            let key = JSON.parse(action.payload)[0];
            let value = JSON.parse(action.payload)[1];



            if (value === "asc") {
                sorted.sort(function (a, b) {
                    if (a[key] > b[key]) {
                        return 1;
                    }
                    if (a[key] < b[key]) {
                        return -1
                    }
                    return 0
                })
            }
            if (value === "desc") {
                sorted.sort(function (a, b) {
                    if (a[key] > b[key]) {
                        return -1;
                    }
                    if (a[key] < b[key]) {
                        return 1
                    }
                    return 0
                })
            }
            return {
                ...state,
                finded: sorted
            };


        default:
            return {
                ...state
            };


    }

};
export default rootReducer;