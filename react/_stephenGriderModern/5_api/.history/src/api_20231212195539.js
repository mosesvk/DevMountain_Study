import axios from 'axios';

const searchImages = async () => {
  const res = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    },
    params: {
      query: 'cars'
    }
  });

  console.log(res.data.results);
  return res.data.results;
};

export default searchImages;