import Overlay from '../Overlay';
import { ModalProps } from './interface';
import * as S from './style';

const Modal = ({ className, children }: ModalProps) => {
    return (
        <Overlay>
            <S.ModalContainer className={className}>
                {children}
            </S.ModalContainer>
            ;
        </Overlay>
    );
};

export default Modal;
