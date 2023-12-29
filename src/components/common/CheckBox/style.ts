import styled from 'styled-components';

// todo: need checkbox img
export const CheckBoxContainer = styled.div`
    width: 20px;
    height: 20px;

    label {
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        border: 2px solid ${({ theme }) => theme.colors.DefaultText};
        border-radius: 3px;

        &:hover {
            border: 2px solid ${({ theme }) => theme.colors.HoverText};
        }
    }

    .disabled-label {
        cursor: not-allowed;
        opacity: 0.32;
    }

    input[type='checkbox'] {
        display: none;
    }

    input[type='checkbox']:checked + .label {
        border: none;

        &:hover {
            border: none;
        }
    }
`;
