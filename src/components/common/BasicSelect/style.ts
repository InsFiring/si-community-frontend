import styled from 'styled-components';

export const BasicSelectContainer = styled.select`
    width: 125px;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.colors.DefaultColor};
    padding-left: 10px;
    color: ${({ theme }) => theme.colors.DefaultText};
    background: ${({ theme }) => theme.colors.DefaultColor};
    font-size: 14px;

    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.HoverColor};
    }
`;
