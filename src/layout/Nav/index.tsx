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
                    <button>게시판</button>
                </li>
                <li>
                    <button>모집공고</button>
                </li>
                <li>
                    <button>기업정보</button>
                </li>
            </ul>
        </S.NavContainer>
    );
};

export default Nav;
