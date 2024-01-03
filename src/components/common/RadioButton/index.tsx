import { RadioButtonProps } from './interface';
import * as S from './style';

const RadioButton = ({ className, radioList, onChange }: RadioButtonProps) => {
    return (
        <S.RadioButtonContainer className={className}>
            {radioList.map((radio, idx) => (
                <label htmlFor={radio.id} key={idx}>
                    {radio.label}
                    <input
                        id={radio.id}
                        type='radio'
                        name={radio.name}
                        value={radio.value}
                        onChange={onChange}
                        checked={radio.checked}
                    />
                </label>
            ))}
        </S.RadioButtonContainer>
    );
};

export default RadioButton;
