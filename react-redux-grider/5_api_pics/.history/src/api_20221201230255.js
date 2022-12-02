import axios from 'axios';

const searchImages = async (term) => {
  const {data} = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
        Authorization: 'Client-ID R2M7dXFHNsXs25FinddRQEJ7jZUODsR9icWfh0dp9W0'    },
    params: {
      query: term,
    },
  });

  console.log(data.results)

  return data.results;
};

export default searchImages;



