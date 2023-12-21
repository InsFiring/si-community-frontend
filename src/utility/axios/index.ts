import axios from 'axios';

const baseURL = process.env.NEXT_BASE_URL;

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': `application/json; charset=utf8`,
    },
});

export default instance;
