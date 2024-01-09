import { ChangeEvent, useState } from 'react';

type InputValueType = string | number | object;
// type InputValueType = any;

function useInput(initialValue: InputValueType) {
    const [form, setForm] = useState<InputValueType>(initialValue);

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        if (typeof form === 'object') {
            setForm({ ...form, [name]: value });
        } else {
            setForm(value);
        }
    };

    return { form, setForm, onChangeInput };
}

export default useInput;
