import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const plus = () => {
        setNumber(n => n + 1);
    }
    const minus = () => {
        setNumber(n => n - 1);
    }
    const reset = () => {
        setNumber(n => n - n);
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