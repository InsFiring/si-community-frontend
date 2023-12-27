import Overlay from '../Overlay';
import { LoadingProps } from './interface';
import * as S from './style';
const Loading = ({ className }: LoadingProps) => {
    return (
        <Overlay>
            <S.LoadingContainer className={className}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </S.LoadingContainer>
        </Overlay>
    );
};

export default Loading;
