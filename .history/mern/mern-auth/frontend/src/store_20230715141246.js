// import configureStore
import {configureStore} from '@reduxjs/toolkit'

// create a store variable that is equal to the configureStore configuration
// it will call an object with 3 properties
    // 1. reducer equal to a blank object for now
    // 2. middleware equal to a invoked function taking in 'getDefaultMiddleware' as an argument then invoking it right away
    // 3. devTools equal to true

const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
})

// remember to export the store
export default store