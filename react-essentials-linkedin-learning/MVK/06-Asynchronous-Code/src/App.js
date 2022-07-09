import { useState, useEffect } from 'react';

const GithubUser = ({ name, location, avatar }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={200} alt={name} />
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/moonhighway`)
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      {data ? (
        <GithubUser
          name={data.name}
          location={data.location}
          avatar={data.avatar_url}
        />
      ) : (
        <h1>Waiting for Data</h1>
      )}
    </div>
  );
};

export default App;
