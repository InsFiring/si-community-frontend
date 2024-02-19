import { userInfoState } from '@/src/store/user/state';
import { UtilMenuList } from '@/src/utility';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Nav from '../Nav/index';
import { HeaderProps } from './interface';
import * as S from './style';
const Header = ({ className }: HeaderProps) => {
    const router = useRouter();
    const userInfoData = useRecoilValue(userInfoState);
    const setUserInfoState = useSetRecoilState(userInfoState);
    const [isLogin, setIsLogin] = useState<boolean>(false);

    const logout = () => {
        localStorage.removeItem('recoil-persist');
        setUserInfoState({
            isLogin: false,
            userId: 0,
            nickname: '',
            email: '',
            company: '',
            type: '',
            token: '',
        });

        router.push('/home');
    };

    useEffect(() => {
        if (userInfoData.isLogin) {
            setIsLogin(true);
        }
    }, [userInfoData.isLogin]);

    return (
        <S.HeaderContainer className={className} suppressHydrationWarning>
            <h1 onClick={() => router.push('/home')}>
                <SVG src='/svg/logo.svg'></SVG>
            </h1>
            <Nav />
            {userInfoData.isLogin && isLogin ? (
                <div className='user-content'>
                    <span className='user-name'>
                        {userInfoData.nickname}님 환영합니다.
                    </span>
                    <button className='logout' onClick={() => logout()}>
                        로그아웃
                    </button>
                </div>
            ) : (
                <ul className='auth'>
                    {UtilMenuList.map((util, idx) => (
                        <li key={idx} onClick={() => router.push(util.url)}>
                            <button>{util.content}</button>
                        </li>
                    ))}
                </ul>
            )}
        </S.HeaderContainer>
    );
};

export default Header;
