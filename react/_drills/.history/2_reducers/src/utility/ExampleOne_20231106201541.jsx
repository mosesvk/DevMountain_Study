import React, { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
        default: 
            return state
    }
}

const ExampleOne = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    // reducer -> function
    // dispatch -> action

    const increment = () => {
        dispatch({type: 'INCREMENT'})
    }

    const decrement = () => {
        dispatch({type: 'DECREMENT'})
    }


  return (
    <div>
    <button onClick={decrement}>-</button>
    <p>Count: {state.count}</p>
    <button onClick={increment}>+</button>
  </div>
  );
}

export default ExampleOne;
