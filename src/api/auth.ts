import { SignInDTO, SignUpDTO } from '../dto/Auth/index';
import instance from '../utility/axios';

export const authApi = {
    postSignUp: (data: SignUpDTO) => {
        return new Promise((resolve, reject) => {
            instance
                .post(`/v1/users`, data)
                .then((res) => {
                    console.log('join test', res);
                    if (res.data.status.code !== 201) {
                        reject(res);
                    }

                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                    console.log('err', err);
                });
        });
    },
    postSignIn: (data: SignInDTO) => {
        return new Promise((resolve, reject) => {
            instance
                .post(`/v1/users/signin`, data)
                .then((res) => {
                    console.log('login test', res);
                    if (res.data.status.code !== 201) {
                        reject(res);
                    }

                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                    console.log('err', err);
                });
        });
    },
};
