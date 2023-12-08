import { ButtonProps } from './interface';
import * as S from './style';

const Button = ({
    className,
    children,
    width = '100px',
    height = '40px',
    disabled = false,
    onClick,
    btnType = 'submit',
}: ButtonProps) => {
    return (
        <S.ButtonContainer
            className={className}
            width={width}
            height={height}
            disabled={disabled}
            onClick={onClick}
            btnType={btnType}
        >
            {children}
        </S.ButtonContainer>
    );
};

export default Button;
