import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

function CounterPage({ initialCount }) {
  const { count, incrementHandler } = useCounter(initialCount);

  return (
    <>
      <h2>Count: {count}</h2>
      <Button onClick={incrementHandler}>Increment</Button>
    </>
  );
}

export default CounterPage;
