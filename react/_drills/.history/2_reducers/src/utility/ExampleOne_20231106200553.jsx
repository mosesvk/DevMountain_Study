import React, { useReducer, useEffect } from 'react';

const initialState = {
  count: 0,
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + 1 };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const ExampleOne = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.isLoading) {
      // Simulate an asynchronous operation (e.g., fetching data)
      const fetchData = async () => {
        try {
          const response = await fetch('https://example.com/api/data');
          const data = await response.json();
          dispatch({ type: 'INCREMENT_COUNT' });
          dispatch({ type: 'SET_LOADING', payload: false });
        } catch (error) {
          dispatch({ type: 'SET_ERROR', payload: new Error("Data fetch failed") });
          dispatch({ type: 'SET_LOADING', payload: false });
        }
      };

      fetchData();
    }
  }, [state.isLoading]);

  const handleFetchData = () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Loading: {state.isLoading ? 'Yes' : 'No'}</p>
      <p>Error: {state.error ? state.error.message : 'No error'}</p>
      <button onClick={handleFetchData}>Fetch Data</button>
    </div>
  );
}

export default ExampleOne;
