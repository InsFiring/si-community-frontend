import { OverlayProps } from './interface';
import * as S from './style';

const Overlay = ({ className, children }: OverlayProps) => {
    return (
        <S.OverlayContainer className={className}>
            {children}
        </S.OverlayContainer>
    );
};

export default Overlay;
