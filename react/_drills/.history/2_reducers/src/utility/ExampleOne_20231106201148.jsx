import React, { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
    return {count: state.count + 1}
}

const ExampleOne = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    // reducer -> function
    // dispatch -> action

    const increment = () => {
        dispatch()
    }

    const decrement = () => {

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
