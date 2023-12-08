import { NavList } from '../../utility/index';
import { NavProps } from './interface';
import * as S from './style';

const Nav = ({ className }: NavProps) => {
    return (
        <S.NavContainer className={className}>
            <ul>
                {NavList.map((nav) => (
                    <li key={nav.id}>
                        <button>{nav.content}</button>
                    </li>
                ))}
            </ul>
        </S.NavContainer>
    );
};

export default Nav;
