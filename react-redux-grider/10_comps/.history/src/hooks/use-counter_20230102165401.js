import { useState, useEffect } from 'react';

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount)

    const incrementHandler = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log(count)
    }, [count])

    return {
        count, 
        incrementHandler
    }
}

export default useCounter