import { useState, useEffect } from 'react';
import Button from '../components/Button';

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

function CounterPage({initialCount}) {

    const {count, incrementHandler} = useCounter(initialCount)

    return (
        <>
            <h2>Count: {count}</h2>
            <Button onClick={clickHandler}>Increment</Button>
        </>
    )
}

export default CounterPage