import SVG from 'react-inlinesvg';
import Nav from '../Nav/index';
import { HeaderProps } from './interface';
import * as S from './style';

const Header = ({ className }: HeaderProps) => {
    return (
        <S.HeaderContainer className={className}>
            <h1>
                <SVG src='/svg/logo.svg'></SVG>
            </h1>
            <Nav />
        </S.HeaderContainer>
    );
};

export default Header;
