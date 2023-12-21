import { useRouter } from 'next/router';
import { NavList } from '../../utility/index';
import { NavProps } from './interface';
import * as S from './style';
const Nav = ({ className }: NavProps) => {
    const router = useRouter();
    return (
        <S.NavContainer className={className}>
            <ul>
                {NavList.map((nav, idx) => (
                    <li key={nav.id} onClick={() => router.push(nav.url)}>
                        <button>{nav.content}</button>
                    </li>
                ))}
            </ul>
        </S.NavContainer>
    );
};

export default Nav;
