import React, {useReducer} from 'react';
import {useForm} from 'react-hook-form';

const petInitState = {
    cats: [],
};

const petReducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cats: [...state.cats, action.payload.name]};
        default:
            return state;
    }
};

const App = () => {
    const [petsState, dispatch] = useReducer(petReducer, petInitState);
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const handleAddCat = (data) => {
        dispatch({type: 'addCat', payload: {name: data.catName}});
        reset()
    };
    return (
        <div>
            <form onSubmit={handleSubmit(handleAddCat)}>
                <input {...register("catName")} placeholder="введи ім'я котіку"/>
                <button>Add</button>
            </form>
            {petsState.cats.map(catName => <div>
                {catName}
            </div>)}
        </div>
    );
};

export default App;