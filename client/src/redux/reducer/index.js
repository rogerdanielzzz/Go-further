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
    DELETE_ACTIVTY_BY_ID,
    ERROR_CLEANER,
    LOADING_SWITCHER,
    PAGE_SWITCHER,


} from "../actions/index.js";

const initialState = {
    error: false,
    countries: [],
    finded: [],
    countryDetail: {},
    activities: [],
    activitiesAuxiliar: 0,
    isLoading: true,
    currentPage: 1,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_CLEANER:
            return {
                ...state,
                error: action.payload,

            };
        case LOADING_SWITCHER:
            return {
                ...state,
                isLoading: action.payload,

            };
        case PAGE_SWITCHER:
            return {
                ...state,
                currentPage: action.payload,

            };
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                finded: action.payload,
                    countries: action.payload,
                    isLoading: false
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
                activitiesAuxiliar: state.activitiesAuxiliar - 1,


            };

        case FILTER_BY_NAME:

            let arrFiltered = state.finded.filter((el) => (el.name.toLowerCase()).includes(action.payload.toLowerCase()))
            if (arrFiltered.length < 1) {
                arrFiltered =  `😭 Sorry our lovely duck cant find a country named ${action.payload}`
                
                return {
                    ...state,
                    error: arrFiltered,
                    currentPage:1,

                };
            } else
                return {
                    ...state,
                    countries: arrFiltered,
                    currentPage:1,

                };
        case FILTER_BY_CONTINENT:
            let filterCont;
            if (action.payload === "All") {
                filterCont = state.finded

            } else {
                filterCont = state.finded.filter((el) => el.continent === action.payload)
            }
            return {
                ...state, countries: filterCont,
                    currentPage: 1,

            }


            case FILTER_BY_ACTIVITY:

                let filterAct;
                if (action.payload === "All") {
                    filterAct = state.finded

                } else {

                    filterAct = state.finded.filter(e => e.activities && e.activities.map(c => c.name).includes(action.payload))

                }


                return {
                    ...state,
                    countries: filterAct,
                        currentPage: 1,

                };

            case DELETE_ACTIVTY_BY_ID:
                return {
                    ...state,
                    activitiesAuxiliar: state.activitiesAuxiliar + 1,
                        activities: state.activities.filter((el) => el.id !== action.payload)
                }
                case ORDER_BY:

                    let sorted;
                    sorted = [...state.countries]

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
                        countries: sorted
                    };


                default:
                    return {
                        ...state
                    };


    }

};
export default rootReducer;