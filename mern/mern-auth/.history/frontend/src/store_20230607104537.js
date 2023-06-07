import {configureStore} from '@reduxjs/tookit'

const store = configureStore({
    reducer: {}, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
})

export default store