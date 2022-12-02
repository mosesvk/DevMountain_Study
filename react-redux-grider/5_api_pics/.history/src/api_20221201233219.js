// import axios from 'axios';

// const searchImages = async (search) => {
//   const res = await axios.get('https://api.unsplash.com/search/photos', {
//     headers: {
//         Authorization: 'Client-ID R2M7dXFHNsXs25FinddRQEJ7jZUODsR9icWfh0dp9W0'
//     },
//     params: {
//       query: search,
//     },
//   });

//   return res.data.results;
// };

// export default searchImages;



import axios from 'axios';

const searchImages = async (search) => {
  const res = await axios.get(`https://api.unsplash.com/search/photos`, {
    headers: {
      Authorization: 'Client-ID R2M7dXFHNsXs25FinddRQEJ7jZUODsR9icWfh0dp9W0'
    },
    params: {
      query: search
    }
  });

  // console.log(data)

  return res.data.results;
};

export default searchImages;
