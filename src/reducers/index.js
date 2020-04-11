import {combineReducers} from 'redux'

const moviesReducer = () => {
    return [
        {
            title: 'Spider-Man: Homecoming', 
            releaseDate: '05-07-2017',
            rating: 7.4,
        },

        {
            title: 'AquaMan', 
            releaseDate: '05-09-2018',
            rating: 7,
        },
        {
            title: 'Black Panther', 
            releaseDate: '05-07-2017',
            rating: 7.4,
        },
        {
            title: 'Avenger Infinity War', 
            releaseDate: '05-02-2019',
            rating: 8.3,
        }
    ]
}
const selectedMovieReducer = (state = null, action) => {

    switch(action.type) {
        case 'MOVIE_SELECTED': 
            return action.payload
        default: 
            return state
    }
}
export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
})