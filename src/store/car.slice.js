import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../services/car.service";


export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const car = await carService.getAll();
            return car;

        } catch (e) {
            return rejectWithValue(e.message);

        }
    }
);

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data: newCar}, {dispatch}) => {
        try {
            const car = await carService.createCar(newCar);
            console.log(car);
            dispatch(addCar({car}));
        } catch (e) {

        }
    }
);

export const updateCarThunk = createAsyncThunk(
    'carSlice/updateCar',
    async ({data: updatedCar, id}, {dispatch}) => {
        try {
            const car = await carService.updateById(id, updatedCar);
            console.log(car);
            dispatch(updateCar({car}));
        } catch (e) {

        }
    }
);

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCar',
    async (id, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}));
        } catch (e) {

        }
    }
);


const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.car);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        },
        updateCar: (state, action) => {
            const {car: updatedCar} = action.payload;

            let currentCarIndex = state.cars.findIndex(car => car.id === updatedCar.id);
            if (currentCarIndex !== -1) {
                state.cars.splice(currentCarIndex, 1, updatedCar);
            }
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;

        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload;

        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        }
    }
});


const carReducer = carSlice.reducer;
export const {addCar, deleteCar, updateCar} = carSlice.actions;
export default carReducer;