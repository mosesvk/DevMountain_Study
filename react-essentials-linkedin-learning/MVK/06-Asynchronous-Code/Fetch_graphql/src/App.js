import { useState, useEffect } from 'react';

const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}
`;

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`https://snowtooth.moonhighway.com/`)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, []);

  console.log(data)

  if (loading) return <h1>Loading...</h1>
  if (error) return <pre>{JSON.stringify(error)}</pre>
  if (!data) return null

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default App;
