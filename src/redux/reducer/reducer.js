import * as actionTypes from '../actions/actionTypes'

const initialState = {
    movies: [],
    totalNumberOfPages: 0,
    page: 1,
    genres: [],
    filmData: {},
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_MOVIES:
            return {
                ...state,
                movies: action.payload.results,
                totalNumberOfPages: action.payload.total_pages,
                page: action.payload.page,
            }
        case actionTypes.CHANGE_PAGINATION:
            return {
                ...state,
                page: action.payload
            }
        case actionTypes.GET_ALL_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case actionTypes.GET_FILM_DATA:
            return {
                ...state,
                filmData: action.payload
            }
        default:
            return state;
    }
}

export {reducer}