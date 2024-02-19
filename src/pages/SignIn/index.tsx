import { authApi } from '@/src/api/auth';
import Button from '@/src/components/common/Button';
import TextInput from '@/src/components/common/TextInput';
import useInput from '@/src/hooks/useInput';
import { userInfoState } from '@/src/store/user/state';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { SignInProps } from './interface';
import * as S from './style';

const SignIn = () => {
    const router = useRouter();

    const { form, onChangeInput } = useInput({
        email: '',
        current_password: '',
    });

    const userInfoData = useRecoilValue(userInfoState);
    const setUserInfoState = useSetRecoilState(userInfoState);

    const emailRegex: boolean = form.email.includes('@');
    const passwordRegex: boolean =
        /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,25}$/.test(
            form.current_password,
        );

    const isRegex = emailRegex && passwordRegex;

    const { mutate: loginMutation } = useMutation(
        async (form: SignInProps) => {
            const userInfo = await authApi.postSignIn(form);

            setUserInfoState({
                ...userInfoData,
                isLogin: true,
                userId: userInfo.register_number,
                nickname: userInfo.nickname,
                email: userInfo.email,
                company: userInfo.company,
                type: '',
                token: userInfo.access_token,
            });

            router.push('/home');
        },
        {
            onError: (error: any) => {
                console.log('error : ', error);
            },
            onSuccess: () => {
                router.push('/home');
                console.log('onSuccess');
            },
        },
    );

    const login = () => {
        if (!isRegex) {
            return;
        }

        try {
            const postData = loginMutation(form);

            return postData;
        } catch (err) {
            console.log('err', err);
        }
    };

    return (
        <S.SignInContainer>
            <form
                method='post'
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    login();
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
                    name='current_password'
                    value={form.current_password}
                    isError={
                        form.current_password?.length !== 0 && !passwordRegex
                    }
                    errorMsg='비밀번호는 대소문자, 숫자, 특수기호를 포함한 8글자 이상입니다.'
                    type='password'
                    placeholder='비밀번호 입력'
                    onChange={onChangeInput}
                    required
                />
                <div className='btn-container'>
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
