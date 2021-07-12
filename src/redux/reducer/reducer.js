const initialState = {
    popularMovies: [],
    totalPages: 0,
    page: 1,
    genres: []
}


const reducer = (state = initialState, action) => {
    // console.log(action)
    // console.log(state)
    switch (action.type) {
        case 'GET_ALL_MOVIES':
            return {
                ...state,
                popularMovies: [...action.payload.results],
                totalPages: action.payload.total_pages,
                page: action.payload.page,
            }
        case 'CHANGE_PAGINATION':
            return {
                ...state,
                page: action.payload
            }
        case 'GET_ALL_GENRES':
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state;
    }
}

export {reducer}