type buttonType = 'submit' | 'error' | 'none';

export interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    width?: string;
    height?: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    btnType?: buttonType;
}

export interface ButtonStyleProps {
    width?: string;
    height?: string;
    btnType?: buttonType;
}
