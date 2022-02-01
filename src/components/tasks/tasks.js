import React from 'react';
import {useSelector} from "react-redux";

import Task from "../task/task";

const Tasks = () => {
    const {tasks} = useSelector(state => state['tasksReducer']);
    return (
        <div>
            {tasks.map (task => <Task key = {task.id} task = {task}/>)}
        </div>
    );
};

export default Tasks;