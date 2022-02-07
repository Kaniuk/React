import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services/movie.service";


export const getSingleMovie = createAsyncThunk(
    'singleMovieSlice/getSingleMovie',
    async ({id}, {rejectWithValue}) => {

        try {
            const movie = await movieService.getMovieById(id);
            return movie;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const singleMovieSlice = createSlice({
    name: 'singleMovieSlice',
    initialState: {
        movie: [],
        state: null,
        error: null
    },
    extraReducers: {
        [getSingleMovie.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [getSingleMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.movie = action.payload;

        },
        [getSingleMovie.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        }
    }
});

const singleMovieReducer = singleMovieSlice.reducer;
export default singleMovieReducer;
