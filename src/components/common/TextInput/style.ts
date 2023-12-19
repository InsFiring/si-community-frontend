import styled, { css } from 'styled-components';
import { TextInputStyleProps } from './interface';

export const TextInputContainer = styled.div<TextInputStyleProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    color: ${({ theme }) => theme.colors.BlackColor};
    font-size: ${(props) => props?.fontSize};

    &:active {
        input {
            border: 2px solid ${({ theme }) => theme.colors.ActiveColor};
        }
    }

    &:hover {
        input {
            border: 2px solid ${({ theme }) => theme.colors.HoverColor};
        }

        label {
        }
    }

    label,
    input {
        font-size: inherit;
    }

    input {
        border: 2px solid ${({ theme }) => theme.colors.DefaultColor};
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        margin: 10px 0px;
        padding-left: 10px;

        &:focus-visible {
            outline-style: none;
        }
    }

    ${(props) =>
        props.isError &&
        css`
            input {
                border: 2px solid ${({ theme }) => theme.colors.DisabledColor};
            }

            p {
                font-size: 10px;
                position: absolute;
                bottom: -10px;
                display: block;
            }

            label {
            }

            &:hover,
            &:active {
                input {
                    border: 2px solid ${({ theme }) => theme.colors.ActiveColor};
                }

                label {
                }
            }
        `}
`;
