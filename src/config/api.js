import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://api-test-geloelimao.herokuapp.com',
    baseURL: 'http://localhost:3000',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api
