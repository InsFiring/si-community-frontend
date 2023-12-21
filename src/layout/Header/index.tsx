import { useRouter } from 'next/router';
import SVG from 'react-inlinesvg';
import { UtilMenuList } from '../../utility/index';
import Nav from '../Nav/index';
import { HeaderProps } from './interface';
import * as S from './style';
const Header = ({ className }: HeaderProps) => {
    const router = useRouter();

    return (
        <S.HeaderContainer className={className}>
            <h1>
                <SVG src='/svg/logo.svg'></SVG>
            </h1>
            <Nav />
            <ul className='auth'>
                {UtilMenuList.map((util, idx) => (
                    <li key={idx} onClick={() => router.push(util.url)}>
                        <button>{util.content}</button>
                    </li>
                ))}
            </ul>
        </S.HeaderContainer>
    );
};

export default Header;
