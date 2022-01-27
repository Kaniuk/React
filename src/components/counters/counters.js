/*
import React, {useReducer} from 'react';

import'./counters.css'

let count = 0;
const reducer = (state, action) => {
    if (action.type === 'inc') {
        return state + 1;
    }
    if (action.type === 'dec') {
        return state - 1;
    }
    if (action.type === 'res') {
        return count;
    }else
        return state;
};


const Counters = () => {
    const [stateOne, dispatchOne] = useReducer(reducer, count);
    const [stateTwo, dispatchTwo] = useReducer(reducer, count);
    const [stateThree, dispatchThree] = useReducer(reducer, count);
    return (
        <div className='counters'>
            <div className='state'>{stateOne}</div>
            <button onClick={() => dispatchOne({type: 'inc'})}>inc</button>
            <button onClick={() => dispatchOne({type: 'dec'})}>dec</button>
            <button onClick={() => dispatchOne({type: 'res'})}>reset</button>

            <div className='state'>{stateTwo}</div>
            <button onClick={() => dispatchTwo({type: 'inc'})}>inc</button>
            <button onClick={() => dispatchTwo({type: 'dec'})}>dec</button>
            <button onClick={() => dispatchTwo({type: 'res'})}>reset</button>

            <div className='state'>{stateThree}</div>
            <button onClick={() => dispatchThree({type: 'inc'})}>inc</button>
            <button onClick={() => dispatchThree({type: 'dec'})}>dec</button>
            <button onClick={() => dispatchThree({type: 'res'})}>reset</button>
        </div>
    );
};


export default Counters;*/

import './counters.css';

import React, {useReducer} from 'react';

const reducer = (state, action) => {

    const {counterName} = action.payload;
    switch (action.type) {
        case 'inc':
            return {...state, [counterName]: state[counterName] + 1};
        case 'dec':
            return {...state, [counterName]: state[counterName] - 1};
        case 'rez':
            return {...state, [counterName]: 0};
        default:
            return state;
    }
};

const Counters = () => {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div className="counters">
            <div className="state">{state.count1}</div>
            <button onClick={() => dispatch({type: 'inc', payload: {counterName: 'count1'}})}>INC</button>
            <button onClick={() => dispatch({type: 'dec', payload: {counterName: 'count1'}})}>DEC</button>
            <button onClick={() => dispatch({type: 'rez', payload: {counterName: 'count1'}})}>RESET</button>
            <div className="state">{state.count2}</div>
            <button onClick={() => dispatch({type: 'inc', payload: {counterName: 'count2'}})}>INC</button>
            <button onClick={() => dispatch({type: 'dec', payload: {counterName: 'count2'}})}>DEC</button>
            <button onClick={() => dispatch({type: 'rez', payload: {counterName: 'count2'}})}>RESET</button>
            <div className="state">{state.count3}</div>
            <button onClick={() => dispatch({type: 'inc', payload: {counterName: 'count3'}})}>INC</button>
            <button onClick={() => dispatch({type: 'dec', payload: {counterName: 'count3'}})}>DEC</button>
            <button onClick={() => dispatch({type: 'rez', payload: {counterName: 'count3'}})}>RESET</button>
        </div>
    );
};


const reducer1 = (state, action) => {

    switch (action.type) {
        case 'inc1':
            return {...state, count1: state.count1 + 1};
        case 'inc2':
            return {...state, count2: state.count2 + 1};
        case 'inc3':
            return {...state, count3: state.count3 + 1};
        case 'dec1':
            return {...state, count1: state.count1 - 1};
        case 'dec2':
            return {...state, count2: state.count2 - 1};
        case 'dec3':
            return {...state, count3: state.count3 - 1};
        case 'rez1':
            return {...state, count1: 0};
        case 'rez2':
            return {...state, count2: 0};
        case 'rez3':
            return {...state, count3: 0};
        default:
            return state;
    }
};

const Counters2 = () => {
    const [state, dispatch] = useReducer(reducer1, {count1: 0, count2: 0, count3: 0});

    return (
        <div className="counters">
            <div className="state">{state.count1}</div>
            <button onClick={() => dispatch({type: 'inc1'})}>INC</button>
            <button onClick={() => dispatch({type: 'dec1'})}>DEC</button>
            <button onClick={() => dispatch({type: 'rez1'})}>RESET</button>
            <div className="state">{state.count2}</div>
            <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
            <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
            <button onClick={() => dispatch({type: 'rez2'})}>RESET</button>
            <div className="state">{state.count3}</div>
            <button onClick={() => dispatch({type: 'inc3'})}>INC</button>
            <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>
            <button onClick={() => dispatch({type: 'rez3'})}>RESET</button>
        </div>
    );
};

export {
    Counters,
    Counters2
};