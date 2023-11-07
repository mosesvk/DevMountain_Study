import { useState } from 'react';

const ExampleTwo = () => {
  const [name, setName] = useState('');

  return (
    <form>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default ExampleTwo;
