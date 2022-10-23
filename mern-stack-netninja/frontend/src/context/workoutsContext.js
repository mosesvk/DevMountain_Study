import { createContext, useReducer } from 'react';

export const WorkoutsContext = createContext(); // this creates a brand new context
const Provider = WorkoutsContext.Provider;

export const workoutReducer = (state, action) => {
  switch(action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload
      }
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts]
      }
    default:
      return state
  }
}

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null
  })

  return (
    <Provider value={{...state, dispatch}}>{children}</Provider>
  );
};
