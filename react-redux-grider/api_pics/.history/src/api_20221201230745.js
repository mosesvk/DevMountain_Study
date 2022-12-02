import axios from 'axios'

const searchImages = async (search) => {

   const {data} = await axios.get(`https://api.unsplash.com/photos`, {
        headers: {
            Authorization: 'Client-ID R2M7dXFHNsXs25FinddRQEJ7jZUODsR9icWfh0dp9W0'
        },
        params: {
            query: search
        }
    })

    console.log(data.results)

    return data.results

}

export default searchImages


