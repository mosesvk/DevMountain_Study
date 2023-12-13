import axios from 'axios';

const searchImages = async (term) => {
  const res = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    },
    params: {
      query: term
    }
  });

  console.log('api', res.data.results);
  return res.data.results;
};

export default searchImages;