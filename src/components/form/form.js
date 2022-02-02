import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {taskActions} from "../../store/toDo.slice";
import './form.css';

const Form = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(taskActions.addTask({data}));
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Task <input type="text" {...register('task', {required: true, minLength: 3})}
                                   placeholder={'What should I do?'}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;