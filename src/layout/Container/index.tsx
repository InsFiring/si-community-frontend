import { commonLoadingState } from '@/src/store/common/state';
import Header from '../Header/index';
import { ContainerProps } from './interface';
import * as S from './style';
// import { Orbitron } from 'next/font/google';
import Loading from '@/src/components/common/Loading';
import { useRecoilValue } from 'recoil';

const Container = ({ children, className }: ContainerProps) => {
    const loading = useRecoilValue(commonLoadingState);

    return (
        <S.RootContainer className={className}>
            <Header />
            {loading && <Loading />}
            {children}
        </S.RootContainer>
    );
};

export default Container;
