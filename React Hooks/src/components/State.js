import React, { useState } from 'react';

const initialState = () => {
    console.log('run function');
    
    return {
        count: 0,
        theme: 'blue'
    };
}

const State = () => {
    const [state, setState] = useState(() => initialState());

    const descrementCount = () => {
        setState(prevState => {
            return {
                ...prevState,
                count: prevState.count - 1
            }
        });
    }

    const incrementCount = () => {
        setState(prevState => {
            return {
                ...prevState,
                count: prevState.count + 1
            }
        });
    }

    return (
        <>
            <button onClick={descrementCount}>-</button>
            <p>{state.count}</p>
            <p>{state.theme}</p>
            <button onClick={incrementCount}>+</button>
        </>
    )
}

export default State;