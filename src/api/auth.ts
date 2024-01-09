import { SignInDTO, SignUpDTO } from '../dto/Auth/index';
import instance from '../utility/axios';

export const authApi = {
    postSignUp: (data: SignUpDTO) => {
        return new Promise((resolve, reject) => {
            instance
                .post(`v1/users`, data)
                .then((res) => {
                    if (res.status !== 201) {
                        reject(res);
                    }

                    resolve(res.data);
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
                .post(`v1/users/signin`, data)
                .then((res) => {
                    if (res.status !== 200) {
                        reject(res);
                    }

                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
                    console.log('err', err);
                });
        });
    },
};
