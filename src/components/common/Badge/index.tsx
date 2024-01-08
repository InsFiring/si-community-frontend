import { BadgeProps } from './interface';
import * as S from './style';
const Badge = ({
    className,
    children,
    badgeColorType,
    type = '',
}: BadgeProps) => {
    return (
        <S.BadgeContainer
            badgeColorType={badgeColorType}
            className={className}
            type={type}
        >
            {children}
        </S.BadgeContainer>
    );
};

export default Badge;
