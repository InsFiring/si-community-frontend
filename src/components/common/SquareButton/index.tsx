import { SquareButtonProps } from './interface';
import * as S from './style';

const SquareButton = ({
    className,
    disabled,
    active,
    children,
    onClick,
}: SquareButtonProps) => {
    return (
        <S.SquareButtonContainer
            className={className}
            onClick={onClick}
            disabled={disabled}
            active={active}
        >
            {children}
        </S.SquareButtonContainer>
    );
};
export default SquareButton;
