import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { userInfoProps } from './interface';

const { persistAtom } = recoilPersist();

export const userInfoData: userInfoProps = {
    isLogin: false,
    userId: 0,
    nickname: '',
    email: '',
    company: '',
    type: '',
    token: '',
};

export const userInfoState = atom<userInfoProps>({
    key: 'userInfo',
    default: userInfoData,
    effects_UNSTABLE: [persistAtom],
});
