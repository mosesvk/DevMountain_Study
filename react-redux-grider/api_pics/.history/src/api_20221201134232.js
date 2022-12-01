import axios from 'axios'

const searchImages = () => {
    axios.get(`https://api.unsplash.com/photos/?client_id`)
}