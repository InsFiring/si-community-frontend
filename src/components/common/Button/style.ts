import styled, { css } from 'styled-components';
import { ButtonStyleProps } from './interface';
export const ButtonContainer = styled.button<ButtonStyleProps>`
    cursor: pointer;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: ${({ theme }) => theme.colors.DefaultColor};
    transition: 0.5s;
    border: none;
    border-radius: 5px;

    &:hover {
        background: ${({ theme }) => theme.colors.HoverColor};
    }

    &:active {
        background: ${({ theme }) => theme.colors.ActiveColor};
    }

    &:disabled {
        background: ${({ theme }) => theme.colors.DisabledColor};
    }

    ${(props) =>
        props.btnType === 'disable' &&
        css`
            cursor: not-allowed;
            pointer-events: none;
            opacity: 0.5;

            &:hover {
                background: ${({ theme }) => theme.colors.DefaultColor};
            }

            &:active {
                background: ${({ theme }) => theme.colors.DefaultColor};
            }

            &:disabled {
                background: ${({ theme }) => theme.colors.DefaultColor};
            }
        `};
`;
