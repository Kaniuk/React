import {createSlice} from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name: 'toDoSlice',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {

            const lasTaskId = state.tasks [state.tasks.length - 1]?.id ?? 0;
            state.tasks.push({
                id: lasTaskId + 1,
                ...action.payload.data,
                isCompleted: false,
            });
        },
        toggleToDo: (state, action) => {
            const toDoId = action.payload.id;

            for (const toDo of state.tasks) {
                if (toDo.id === toDoId) {
                    toDo.isCompleted = !toDo.isCompleted;
                }
            }
        },
        deleteTask: (state, action) => {
            const toDoId = action.payload.id;

            state.tasks = state.tasks.filter(task => task.id !== toDoId);
        }
    }
});

const tasksReducer = toDoSlice.reducer;

export default tasksReducer;

export const taskActions = toDoSlice.actions;
