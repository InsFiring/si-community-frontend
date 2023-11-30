import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    padding-right: 60px;
    background: #faf8ff;

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
`;
