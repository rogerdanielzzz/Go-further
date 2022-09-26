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
    DELETE_ACTIVTY_BY_ID


} from "../actions/index.js";

const initialState = {
    countries: [],
    finded: [],
    countryDetail: {},
    activities: [],
    activitiesAuxiliar:0,
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
                activitiesAuxiliar: state.activitiesAuxiliar-1,


            };
        case FILTER_BY_NAME:
            let arrFiltered = state.countries.filter((el) => (el.name.toLowerCase()).includes(action.payload.toLowerCase()))
            if (arrFiltered.length < 1) {
                arrFiltered = {
                    error: `😭 Sorry our lovely duck cant find a country named ${action.payload}`
                }
            }
            return {
                ...state,
                finded: arrFiltered,
            };
        case FILTER_BY_CONTINENT:
            let filterCont;
            if (action.payload === "All") {
                filterCont = state.countries

            } else {
                filterCont = state.countries.filter((el) => el.continent === action.payload)
            }
            console.log(filterCont)
            return {
                ...state, finded: filterCont
            };


        case FILTER_BY_ACTIVITY:

            let filterAct;
            if (action.payload === "All") {
                filterAct = state.countries

            } else {

                filterAct = state.countries.filter(e => e.activities && e.activities.map(c => c.name).includes(action.payload))

            }


            return {
                ...state,
                finded: filterAct
            };

        case DELETE_ACTIVTY_BY_ID:
            return {
                ...state,
                activitiesAuxiliar: state.activitiesAuxiliar+1,
                activities: state.activities.filter((el) => el.id !== action.payload)
            }
            case ORDER_BY:

                let sorted;
                state.finded.length < 1 ? sorted = [...state.countries] : sorted = [...state.finded]

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