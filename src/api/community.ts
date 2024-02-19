import { AddCommunityDTO } from '../dto/Community';
import instance from '../utility/axios';

export const communityApi = {
    getCommunityList: (requestData: any) => {
        return new Promise((resolve, reject) => {
            instance
                .get(
                    `v1/article/${requestData.page}/?offset=${requestData.offset}`,
                )
                .then((res) => {
                    if (res.status !== 200) {
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
