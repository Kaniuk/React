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


export default Counters;