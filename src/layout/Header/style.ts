import { NotoM } from '@/src/styles/font';
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
                color: #fff;
                font-size: 12px;
                white-space: nowrap;
            }
        }
    }

    .user-content {
        display: flex;
        gap: 0px 12px;
        align-items: center;

        .user-name {
            font-size: 12px;
            font-family: ${NotoM.style.fontFamily};
            white-space: nowrap;
        }

        .logout {
            font-size: 12px;
            line-height: 12px;
            white-space: nowrap;
            font-family: ${NotoM.style.fontFamily};
            color: #fff;
        }
    }
`;
