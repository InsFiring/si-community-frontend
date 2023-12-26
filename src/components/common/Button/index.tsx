import { ButtonProps } from './interface';
import * as S from './style';

const Button = ({
    className,
    children,
    width = '75px',
    height = '35px',
    disabled = false,
    onClick,
    type = 'submit',
}: ButtonProps) => {
    return (
        <S.ButtonContainer
            className={className}
            width={width}
            height={height}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {children}
        </S.ButtonContainer>
    );
};

export default Button;
