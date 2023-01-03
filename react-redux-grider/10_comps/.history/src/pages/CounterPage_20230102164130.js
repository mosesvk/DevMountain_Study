import { useState, useEffect } from 'react';
import Button from '../components/Button';

function CounterPage({initialCount}) {

    const [count, setCount] = useState(initialCount)

    const clickHandler = () => {
        setCount(count + 1)
    }

    useEffect(() => {

    }, [count])

    return (
        <>
            <h2>Count: {count}</h2>
            <Button onClick={clickHandler}>Increment</Button>
        </>
    )
}

export default CounterPage