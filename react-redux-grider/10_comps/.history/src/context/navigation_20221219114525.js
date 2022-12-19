import { createContext } from 'react';

const NavigationContext = createContext()

function NavigationProvider({children}) {

    return (
        <NavigationContext.Provider value={{}}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContext