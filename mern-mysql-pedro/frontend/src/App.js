import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [postsList, setPostsList] = useState([]);
  const url = process.env.REACT_APP_URL;

  useEffect(() => {
    axios.get(`${url}/api/posts`).then(({ data }) => {
      console.log(data.body);
      setPostsList(data.body);
    });
  }, []);

  return (
    <div className='App'>
      {postsList?.map((post, key) => {
        <div className='posts' key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
          <p>written by: {post.username}</p>
        </div>;
      })}
    </div>
  );
}

export default App;
