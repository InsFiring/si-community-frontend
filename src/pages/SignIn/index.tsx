import Button from '@/src/components/common/Button';
import TextInput from '@/src/components/common/TextInput';
import useInput from '@/src/hooks/useInput';

const SignIn = () => {
    const { form, onChangeInput } = useInput({
        email: '',
        password: '',
    });

    const isRegex =
        form.email?.includes('@') &&
        /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/.test(
            form.password,
        ) &&
        form.password.length >= 8;

    console.log('isRegex', isRegex);

    return (
        <>
            <div className=''>
                <form method='post' onSubmit={(e) => {}}>
                    <strong>로그인 해주시기 바랍니다.</strong>
                    <TextInput
                        label='이메일'
                        name='email'
                        value={form.email}
                        placeholder='이메일 입력'
                        onChange={onChangeInput}
                        required
                    >
                        @를 포함한 이메일을 입력해주세요.
                    </TextInput>
                    <TextInput
                        label='비밀번호'
                        name='password'
                        value={form.password}
                        type='password'
                        placeholder='비밀번호 입력'
                        onChange={onChangeInput}
                        required
                    >
                        비밀번호는 대소문자, 숫자, 특수기호를 포함한 8글자
                        이상입니다.
                    </TextInput>
                    <div className=''>
                        <Button onClick={() => {}}>취소</Button>
                        <Button btnType={isRegex ? 'submit' : 'disable'}>
                            로그인
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignIn;
