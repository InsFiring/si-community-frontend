import styled, { css } from 'styled-components';
import { textareaStyleProps } from './interface';

export const TextareaContainer = styled.div<textareaStyleProps>`
    display: flex;
    flex-direction: column;
    gap: 10px 0px;

    &:active {
        textarea {
            border: 2px solid ${({ theme }) => theme.colors.ActiveColor};
        }
    }

    &:hover {
        textarea {
            border: 2px solid ${({ theme }) => theme.colors.HoverColor};
        }
    }

    textarea {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        color: ${({ theme }) => theme.colors.DefaultText};
        font-size: 18px;
        padding: 10px 0px 0px 10px;
        border: 2px solid ${({ theme }) => theme.colors.DisabledColor};
    }

    ${(props) =>
        props.isError &&
        css`
            textarea {
                border: 2px solid ${({ theme }) => theme.colors.DefaultError};
            }

            p {
                display: block;
                font-size: 10px;
                color: ${({ theme }) => theme.colors.DefaultError};
            }

            label {
                color: ${({ theme }) => theme.colors.DefaultError};
            }
        `}
`;
