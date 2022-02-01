import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from "./toDo.slice";

const store = configureStore({
    reducer:{
        tasksReducer
    }

});

export default store;