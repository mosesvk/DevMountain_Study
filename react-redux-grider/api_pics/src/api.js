import axios from 'axios'
const unsplashID = process.env.REACT_APP_CLIENT_ID

const searchImages = () => {
    console.log(unsplashID)
    axios.get(`https://api.unsplash.com/photos/?client_id`)
}