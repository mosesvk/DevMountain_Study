import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;




// import axios from 'axios'

// const searchImages = async (search) => {

//    const { data } = await axios.get(`https://api.unsplash.com/photos`, {
//         headers: {
//             Authorization: 'Client-ID R2M7dXFHNsXs25FinddRQEJ7jZUODsR9icWfh0dp9W0'
//         },
//         params: {
//             query: search
//         }
//     })

//     // console.log(data)

//     return data

// }

// export default searchImages


