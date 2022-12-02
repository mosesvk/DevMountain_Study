import axios from 'axios'

const searchImages = () => {

    axios.get(`https://api.unsplash.com/photos`, {
        headers: {
            Authorization: 'Client-ID R2M7dXFHNsXs25FinddRQEJ7jZUODsR9icWfh0dp9W0'
        },
        params: {
            query: 'cars'
        }
    })

    console.log(Response)

    return reponse

}

export default searchImages