import axios from 'axios';

const baseURL = process.env.NEXT_BASE_URL;

const instance = axios.create({
    // baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Content-Type': `application/json; charset=utf8`,
    },
});

export default instance;
