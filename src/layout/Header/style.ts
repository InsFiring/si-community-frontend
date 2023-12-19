import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 60px);
    height: 80px;
    padding-right: 60px;
    color: ${({ theme }) => theme.colors.DefaultText};
    background: ${({ theme }) => theme.colors.DefaultColor};

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 75px;
            height: 75px;
            cursor: pointer;
        }
    }

    .auth {
        display: flex;
        gap: 0px 16px;

        li {
            button {
                font-size: 12px;
            }
        }
    }
`;
