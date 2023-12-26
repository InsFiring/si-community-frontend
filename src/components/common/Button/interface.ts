type buttonType = 'submit' | 'error' | 'disable';

export interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    width?: string;
    height?: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: buttonType;
}

export interface ButtonStyleProps {
    width?: string;
    height?: string;
    type?: buttonType;
}
