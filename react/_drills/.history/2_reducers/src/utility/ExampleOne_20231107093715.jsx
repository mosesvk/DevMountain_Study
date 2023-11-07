import React, { useReducer, useEffect } from 'react';



const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return state.count + 1
        case 'decrement': 
            return state.count - 1
        default: 
            return state 
    }
}

const ExampleOne = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})


    const increment = () => {
        dispatch({type: 'increment'})
    }

    const decrement = () => {
        dispatch({type: 'decrement'})
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
