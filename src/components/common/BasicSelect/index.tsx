import { BasicSelectProps } from './interface';
import * as S from './style';
export default function BasicSelect({
    className,
    onChange,
    name,
    value,
    onClick,
    selectData,
}: BasicSelectProps) {
    return (
        <S.BasicSelectContainer
            onClick={onClick}
            className={className}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
        >
            {selectData?.map((item: any, idx: number) => (
                <option value={item?.name} key={idx}>
                    {item?.name}
                </option>
            ))}
        </S.BasicSelectContainer>
    );
}
