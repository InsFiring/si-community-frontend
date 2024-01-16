import { textareaPorps } from './interface';
import * as S from './style';

const Textarea = ({
    className,
    name,
    value,
    onChange,
    label,
    width = '500px',
    height = '250px',
    isError = false,
    errorMsg,
}: textareaPorps) => {
    return (
        <S.TextareaContainer
            className={className}
            width={width}
            height={height}
            isError={isError}
        >
            <label htmlFor={name}>{label}</label>
            <textarea
                name={name}
                value={value}
                id={name}
                onChange={onChange}
            ></textarea>
            <p>{errorMsg}</p>
        </S.TextareaContainer>
    );
};

export default Textarea;
