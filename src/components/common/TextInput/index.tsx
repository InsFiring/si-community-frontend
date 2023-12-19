import { TextInputProps } from './interface';
import * as S from './style';

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
    required = false,
    errorMsg,
    fontSize = '16px',
    children,
}: TextInputProps) => {
    return (
        <S.TextInputContainer
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
            {required && <p>{children}</p>}
            {errorMsg && <p>{errorMsg}</p>}
        </S.TextInputContainer>
    );
};
export default TextInput;
