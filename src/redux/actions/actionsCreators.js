import * as actionTypes from './actionTypes'


export const getAllMovies = (payload) => {
    return { type: actionTypes.GET_ALL_MOVIES, payload }
}

export const getAllGenres = (payload) => {
    return { type: actionTypes.GET_ALL_GENRES, payload }
}

export const changePagination = (payload) => {
    return { type: actionTypes.CHANGE_PAGINATION, payload }
}

export const getFilmData = (payload) => {
    return { type: actionTypes.GET_FILM_DATA, payload }
}