import Button from '@/src/components/common/Button';
import TextInput from '@/src/components/common/TextInput';
import useInput from '@/src/hooks/useInput';
import * as S from './style';

const SignUp = () => {
    const { form, setForm, onChangeInput } = useInput({
        id: '',
        email: '',
        password: '',
        rePassword: '',
    });

    const emailRegex: boolean = form.email.includes('@');
    const passwordRegex: boolean =
        /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/.test(
            form.password,
        );

    const isRegex: boolean =
        form.id.length >= 2 &&
        emailRegex &&
        passwordRegex &&
        form.password.length >= 8 &&
        form.password === form.rePassword;

    console.log('isRegex', isRegex);

    return (
        <S.SignUpContainer>
            <form method='post' onSubmit={(e) => {}}>
                <strong>회원 가입</strong>
                <TextInput
                    label='아이디'
                    name='id'
                    value={form.id}
                    placeholder='아이디 입력'
                    isError={form.id.length !== 0 && form.id.length < 2}
                    errorMsg='아이디를 2글자 이상 입력해주세요.'
                    onChange={onChangeInput}
                    required
                />

                <TextInput
                    label='이메일'
                    name='email'
                    value={form.email}
                    isError={form.email.length !== 0 && !emailRegex}
                    errorMsg='@를 포함한 이메일을 입력해주세요.'
                    placeholder='이메일 입력'
                    onChange={onChangeInput}
                    required
                />

                <TextInput
                    label='비밀번호'
                    name='password'
                    value={form.password}
                    isError={form.password.length !== 0 && !passwordRegex}
                    errorMsg='비밀번호는 대소문자, 숫자, 특수기호를 포함한 8글자 이상입니다.'
                    type='password'
                    placeholder='비밀번호 입력'
                    onChange={onChangeInput}
                    required
                />

                <TextInput
                    label='비밀번호 확인'
                    name='rePassword'
                    value={form.rePassword}
                    isError={
                        form.rePassword !== form.password &&
                        form.rePassword.length !== 0
                    }
                    errorMsg='비밀번호 확인'
                    type='password'
                    placeholder='비밀번호 재입력'
                    onChange={onChangeInput}
                    required
                />

                <div className='btn-container'>
                    <Button onClick={() => {}}>취소</Button>
                    <Button type={isRegex ? 'submit' : 'disable'}>
                        회원가입
                    </Button>
                </div>
            </form>
        </S.SignUpContainer>
    );
};

export default SignUp;
