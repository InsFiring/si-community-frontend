import SVG from 'react-inlinesvg';
import Overlay from '../Overlay';
import { ModalProps } from './interface';
import * as S from './style';

const Modal = ({ className, title, children, buttonContent }: ModalProps) => {
    return (
        <Overlay>
            <S.ModalContainer className={className}>
                <div className='modal-header'>
                    <strong>{title}</strong>
                    <button>
                        <SVG src='/svg/close-btn.svg'></SVG>
                    </button>
                </div>
                <div className='modal-content'>{children}</div>
                <div className='modal-bottom'>
                    <div className='btn-container'>{buttonContent}</div>
                </div>
            </S.ModalContainer>
            ;
        </Overlay>
    );
};

export default Modal;
