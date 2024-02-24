import { atom } from 'recoil';
import { LoadingProps } from './interface';

export const commonLoadingState = atom<LoadingProps>({
    key: 'commonLoading',
    default: false,
});
