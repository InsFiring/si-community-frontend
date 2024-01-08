import ImgUpload from '@/src/components/common/ImgUpload';
import RadioButton from '@/src/components/common/RadioButton';
import useInput from '@/src/hooks/useInput';
import { useState } from 'react';

const Home = () => {
    const { form, setForm, onChangeInput } = useInput([
        {
            id: 1,
            value: 'female',
            label: '여성',
            name: 'female',
            checked: false,
        },
        {
            id: 2,
            value: 'male',
            label: '남성',
            name: 'male',
            checked: false,
        },
    ]);

    const [img, setImg] = useState({
        file: '',
        formDataImg: {},
    });

    const onChangeRadioButton = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const result = form.map((item: any, idx: number) => {
            if (item.value === event.target.value) {
                return {
                    ...item,
                    checked: !item.checked,
                };
            }
            return {
                ...item,
                checked: false,
            };
        });

        setForm(result);
    };

    const onChangeImg = (event: any) => {
        const { name } = event.target;
        const formData = new FormData();
        const fr = new FileReader();
        const file = event.target.files[0];

        if (file) {
            fr.readAsDataURL(file);

            fr.onload = () => {
                if (typeof fr.result === 'string') {
                    formData.append('file', file);
                    setImg({
                        ...img,
                        [name]: fr.result,
                        formDataImg: formData,
                    });
                }
            };
        }
    };

    return (
        <>
            {/* <Modal
                title='Modal Title'
                buttonContent={
                    <>
                        <Button onClick={() => {}}>취소</Button>
                        <Button onClick={() => {}}>저장</Button>
                    </>
                }
            >
                <div>This is Modal Content</div>
            </Modal> */}
            <RadioButton
                radioList={form}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChangeRadioButton(e)
                }
            />
            <ImgUpload
                name='file'
                file={img.file}
                onChange={onChangeImg}
                onClick={() => {}}
                // isError={true}
            />
        </>
    );
};

export default Home;
