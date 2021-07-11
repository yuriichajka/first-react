const initialState = {
    movies: [],
}

const reducer = (state = initialState, action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case 'SET_MOVIES':
            return {...state, movies: [...action.payload.results]}
        default:
            return state;
    }
}

export {reducer}