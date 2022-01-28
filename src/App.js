import React, {useReducer} from 'react';
import {useForm} from 'react-hook-form';

import './App.css';

const petInitState = {
    cats: [],
    dogs: [],
};

const petReducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            const lastCatId = state.cats[state.cats.length - 1]?.id ?? 0;

            return {
                ...state,
                cats: [
                    ...state.cats,
                    {name: action.payload.name, id: lastCatId + 1}
                ]
            };
        case 'addDog':
            const lastDogId = state.dogs [state.cats.length - 1]?.id ?? 0;

            return {
                ...state,
                dogs: [
                    ...state.dogs,
                    {name: action.payload.name, id: lastDogId + 1}
                ]
            };

        case 'removeCat':
            const removedCatId = action.payload.catId;

            return {
                ...state,
                cats: state.cats.filter(cat => cat.id !== removedCatId)
            };

        case 'removeDog':
            const removedDogId = action.payload.dogId;

            return {
                ...state,
                dogs: state.dogs.filter(dog => dog.id !== removedDogId)
            };

        default:
            return state;
    }
};

const App = () => {
    const [petsState, dispatch] = useReducer(petReducer, petInitState);
    const {register, handleSubmit, reset} = useForm();
    const {register: register2, handleSubmit: handleSubmit2, reset: reset2} = useForm();

    const handleAddCat = (data) => {
        dispatch({type: 'addCat', payload: {name: data.catName}});
        reset();
    };

    const handleAddDog = (data) => {
        dispatch({type: 'addDog', payload: {name: data.dogName}});
        reset2();
    };

    const removeCat = (catId) => {
        dispatch({type: 'removeCat', payload: {catId}});
    };

    const removeDog = (dogId) => {
        dispatch({type: 'removeDog', payload: {dogId}});
    };

    return (
        <div className="page">
            <div className="form-wrapper">
                <form onSubmit={handleSubmit(handleAddCat)}>
                    <input {...register("catName")} placeholder="введи ім'я котіку"/>
                    <button>Add</button>
                </form>

                {petsState.cats.map(cat => (
                    <div key={cat.id}>
                        {cat.name}
                        <button onClick={() => removeCat(cat.id)}>Remove cat</button>
                    </div>
                ))}
            </div>

            <div className="form-wrapper">
                <form onSubmit={handleSubmit2(handleAddDog)}>
                    <input {...register2("dogName")} placeholder="введи ім'я пьосіку"/>
                    <button>Add</button>
                </form>

                {petsState.dogs.map(dog => (
                    <div key={dog.id}>
                        {dog.name}
                        <button onClick={() => removeDog(dog.id)}>Remove dog</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;