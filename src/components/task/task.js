import React from 'react';
import {useDispatch} from "react-redux";
import {taskActions} from "../../store/toDo.slice";

import './task.css';

const Task = ({task: {id, task, isCompleted}}) => {

    const dispatch = useDispatch();

    const toggleCompletedTask = () => {
        dispatch(taskActions.toggleToDo({id}));
    };
    const deleteHandler = () => dispatch(taskActions.deleteTask({id}));

    return (
        <div className='task'>
            <label className={`${isCompleted ? 'completed' : ''}`}>
                <input type="checkbox" onChange={toggleCompletedTask} value={isCompleted} checked={isCompleted}/>
                {task}
            </label>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
};

export default Task;