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
    height = '35px',
    label,
    type = 'text',
    isError = false,
    required = false,
    errorMsg = '',
    fontSize = '14px',
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
            {required && <b>✴︎</b>}
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
            {isError && errorMsg.length !== 0 && value?.length !== 0 && (
                <p className='error-msg'>{errorMsg}</p>
            )}
        </S.TextInputContainer>
    );
};
export default TextInput;
