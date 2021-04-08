import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        case 'RESET':
            return state - state;
        default:
            throw new Error('Unhandled Action');
    }
}

function Counter() {

    const [number, dispatch] = useReducer(reducer, 0);
    const plus = () => {
        dispatch({
            type: 'INCREASE'
        });
    }
    const minus = () => {
        dispatch({
            type: 'DECREASE'
        });
    }
    const reset = () => {
        dispatch({
            type: 'RESET'
        });
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
};

export default Counter;