import axios from 'axios';

const instance = axios.create({
    headers: {
        'Content-Type': `application/json; charset=utf8`,
    },
});

if (typeof window !== 'undefined') {
    let user = JSON.parse(window.localStorage.getItem('recoil-persist'));
    console.log('user', user);

    instance.interceptors.request.use(
        (config: any) => {
            if (!config.headers.Authorization) {
                config.headers.Authorization = `Bearer ${user.userInfo.token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    // Add a response interceptor
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (!user.userInfo.token) {
                window.localStorage.removeItem('recoil-persist');
                alert('다시 로그인 해주세요!');
                window?.location?.replace('/');
                return false;
            }

            return Promise.reject(error);
        },
    );
}

export default instance;
