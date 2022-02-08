import {configureStore} from '@reduxjs/toolkit';

import moviesReducer from "./movies.slice";
import singleMovieReducer from "./singleMovie.slice";
import genresReducer from "./genres.slice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: singleMovieReducer,
        genres: genresReducer,
    }
});

export default store;