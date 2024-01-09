import axios from 'axios';

const instance = axios.create({
    headers: {
        'Content-Type': `application/json; charset=utf8`,
    },
});

export default instance;
