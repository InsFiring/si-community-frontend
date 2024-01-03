export interface RadioButtonProps {
    className?: string;
    radioList: {
        id: any;
        value: string | number;
        label: string;
        name: string;
        checked: boolean;
    }[];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
