import { NavProps } from './interface';
import * as S from './style';

const Nav = ({ className }: NavProps) => {
    return (
        <S.NavContainer className={className}>
            <ul>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>Bulletin Board</button>
                </li>
                <li>
                    <button>Job Offers</button>
                </li>
                <li>
                    <button>About SI Company</button>
                </li>
            </ul>
        </S.NavContainer>
    );
};

export default Nav;
