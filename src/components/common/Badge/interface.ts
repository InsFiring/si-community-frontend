export type badgeColorType =
    | 'yellow'
    | 'purple'
    | 'green'
    | 'pink'
    | 'gray'
    | 'blue';

export interface BadgeProps {
    className?: string;
    children: React.ReactNode;
    badgeColorType: badgeColorType;
    type?: string;
}
