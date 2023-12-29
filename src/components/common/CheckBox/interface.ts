export interface CheckBoxProps {
    className?: string;
    name?: string;
    value?: any;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
