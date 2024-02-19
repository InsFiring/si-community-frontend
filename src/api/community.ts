import { AddCommunityDTO } from '../dto/Community';
import instance from '../utility/axios';

export const communityApi = {
    postAddCommunity: (data: AddCommunityDTO) => {
        return new Promise((resolve, reject) => {
            instance
                .post(`v1/article`, data)
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
