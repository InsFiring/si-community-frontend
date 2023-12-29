import { CheckBoxProps } from './interface';
import * as S from './style';

const CheckBox = ({
    className,
    name,
    checked,
    value,
    disabled,
    onChange,
}: CheckBoxProps) => {
    return (
        <S.CheckBoxContainer className={className}>
            <input
                disabled={disabled}
                type='checkbox'
                onChange={onChange}
                name={name}
                id={name}
                value={value}
                checked={checked || false}
            />
            <label
                htmlFor={name}
                className={disabled ? 'disabled-label' : 'label'}
            ></label>
        </S.CheckBoxContainer>
    );
};

export default CheckBox;
