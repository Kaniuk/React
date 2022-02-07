import {configureStore} from '@reduxjs/toolkit';

import moviesReducer from "./movies.slice";
import singleMovieReducer from "./singleMovie.slice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: singleMovieReducer
    }
});

export default store;