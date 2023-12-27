import { authApi } from '@/src/api/auth';
import Button from '@/src/components/common/Button';
import TextInput from '@/src/components/common/TextInput';
import useInput from '@/src/hooks/useInput';
import * as S from './style';

const SignIn = () => {
    const { form, onChangeInput } = useInput({
        email: '',
        password: '',
    });

    const emailRegex: boolean = form.email.includes('@');
    const passwordRegex: boolean =
        /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,25}$/.test(
            form.password,
        );

    const isRegex = emailRegex && passwordRegex;

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isRegex) {
            return;
        }

        try {
            const postData = await authApi.postSignIn(form);
            console.log('postData', postData);

            // todo:  백엔드 API 수정 완료되면 로그인 후 유저 정보 recoil 사용하여 저장 예정
        } catch (err) {
            console.log('err', err);
        }
    };

    return (
        <S.SignInContainer>
            <form
                method='post'
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    login(e);
                }}
            >
                <strong>로그인</strong>
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
                <div className=''>
                    <Button onClick={() => {}}>취소</Button>
                    <Button
                        onClick={() => {}}
                        type={isRegex ? 'submit' : 'disable'}
                    >
                        로그인
                    </Button>
                </div>
            </form>
        </S.SignInContainer>
    );
};

export default SignIn;
