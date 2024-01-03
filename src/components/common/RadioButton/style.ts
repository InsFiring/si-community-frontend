import styled from 'styled-components';

export const RadioButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0px 16px;
    width: 100%;

    span {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.DefaultBlackText};
    }

    label {
        display: flex;
        align-items: center;
    }

    input {
        margin-left: 4px;
    }
`;
