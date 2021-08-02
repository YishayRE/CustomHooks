import { useState } from 'react';


export const useCounter = ( initialState = 10 ) => {
    
    const [state, setCounter] = useState(initialState); // 10

    const reset = () => {
        setCounter( initialState );
    }

    const increment = () => {
        setCounter( state + 1 );
    }

    const decrement = () => {
        setCounter( state - 1 );
    }

    return {
        state,
        increment,
        decrement,
        reset
    };

}