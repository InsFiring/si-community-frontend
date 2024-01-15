import ImgUpload from '@/src/components/common/ImgUpload';
import Pagination from '@/src/components/common/Pagination';
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
    const [page, setPage] = useState<number>(1);
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

    const handleChangePage = (page: number) => {
        page = 1;
        return setPage(page);
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
            <Pagination
                total={20}
                limit={10}
                isPerPage={true}
                page={1}
                perPageList={[
                    {
                        name: 10,
                        value: 10,
                    },
                    {
                        name: 30,
                        value: 30,
                    },
                    {
                        name: 50,
                        value: 50,
                    },
                ]}
                setPage={setPage}
                onCheckedBtn={() => {}}
                handleChangePage={handleChangePage}
            />
        </>
    );
};

export default Home;
