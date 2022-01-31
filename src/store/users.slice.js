import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersService} from "../services/users.service";


export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await usersService.getAll();
            return users;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        status: null,
        error: null
    },

    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;

        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload;

        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        }
    }
});


const usersReducer = usersSlice.reducer;
export default usersReducer;