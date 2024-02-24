import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { UserInfoProps } from './interface';

const { persistAtom } = recoilPersist();

export const userInfoData: UserInfoProps = {
    isLogin: false,
    userId: 0,
    nickname: '',
    email: '',
    company: '',
    type: '',
    token: '',
};

export const userInfoState = atom<UserInfoProps>({
    key: 'userInfo',
    default: userInfoData,
    effects_UNSTABLE: [persistAtom],
});
