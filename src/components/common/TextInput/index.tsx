import { TextInputProps } from './interface';
import { TextInputContainer } from './style';

const TextInput = ({
    className,
    onChange,
    name,
    value,
    placeholder,
    width = '250px',
    accept,
    height = '45px',
    label,
    type = 'text',
    isError = false,
    errorMsg,
    fontSize = '16px',
}: TextInputProps) => {
    return (
        <TextInputContainer
            className={className}
            width={width}
            height={height}
            isError={isError}
            fontSize={fontSize}
        >
            <label htmlFor={name}>{label}</label>

            <input
                type={type}
                placeholder={placeholder}
                id={name}
                name={name}
                accept={accept}
                value={value}
                onChange={onChange}
            />
            <p>{errorMsg}</p>
        </TextInputContainer>
    );
};
export default TextInput;
