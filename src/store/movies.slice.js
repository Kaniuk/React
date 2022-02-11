import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services/movie.service";


export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({page, genreFilter}, {rejectWithValue}) => {
        try {
            const movies = await movieService.getAll(page, genreFilter);
            return movies;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        movies: [],
        // genreFilter: [28, 12],
        pageInfo: {
            page: 1,
            total_pages: null,
            total_results: null,
        },
        state: null,
        error: null
    },

    extraReducers: {
        [getAllMovies.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            const {results, total_pages, total_results, page} = action.payload;
            state.movies = results;
            state.pageInfo = {page, total_pages, total_results};

        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        }
    }
});

const moviesReducer = moviesSlice.reducer;
export default moviesReducer;