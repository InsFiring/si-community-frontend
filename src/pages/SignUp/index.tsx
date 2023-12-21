import Button from '@/src/components/common/Button';
import TextInput from '@/src/components/common/TextInput';
import useInput from '@/src/hooks/useInput';
const SignUp = () => {
    const { form, setForm, onChangeInput } = useInput({
        id: '',
        email: '',
        password: '',
    });

    return (
        <>
            <div className=''>
                <form method='post' onSubmit={(e) => {}}>
                    <strong>회원 가입</strong>
                    <TextInput
                        label='아이디'
                        name='id'
                        value={form.id}
                        placeholder='아이디 입력'
                        onChange={onChangeInput}
                        required
                    >
                        아이디를 5글자 이상 입력해주세요.
                    </TextInput>
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
                    <div className='btn-container'>
                        <Button btnType='none' onClick={() => {}}>
                            취소
                        </Button>
                        <Button btnType='submit'>확인</Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;
