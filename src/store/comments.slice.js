import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersService} from "../services/users.service";


export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            const comments = await usersService.getAllComments();
            return comments;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: {
        comments: [],
        status: null,
        error: null
    },

    extraReducers: {
        [getAllComments.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;

        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;

        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        }
    }
});


const commentsReducer = commentsSlice.reducer;
export default commentsReducer;