import Header from '../Header/index';
import { ContainerProps } from './interface';
import * as S from './style';

const Container = ({ children, className }: ContainerProps) => {
    return (
        <S.RootContainer className={className}>
            <Header />
            {children}
        </S.RootContainer>
    );
};

export default Container;
