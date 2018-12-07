import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID api key removed, go to unsplash.com to add your own free key'
    }
});