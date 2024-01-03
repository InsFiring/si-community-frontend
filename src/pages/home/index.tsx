import RadioButton from '@/src/components/common/RadioButton';
import useInput from '@/src/hooks/useInput';

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
        </>
    );
};

export default Home;
