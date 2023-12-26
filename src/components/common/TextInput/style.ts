import styled, { css } from 'styled-components';
import { TextInputStyleProps } from './interface';

export const TextInputContainer = styled.div.attrs((props) => ({
    ...props,
}))<TextInputStyleProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
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

    &:focus {
        input {
            border: 2px solid ${({ theme }) => theme.colors.FocusColor};
        }

        label {
        }
    }

    label {
        padding-left: 10px;
    }

    b {
        position: absolute;
        left: 0px;
        top: 0px;
        font-size: 10px;
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

        &::placeholder {
            font-size: 12px;
        }

        &:focus-visible {
            outline-style: none;
        }
    }

    ${(props) =>
        props.isError &&
        css`
            input {
                border: 2px solid ${({ theme }) => theme.colors.DefaultError};
            }

            .error-msg {
                font-size: 10px;
                position: absolute;
                bottom: -10px;
                display: block;
                color: ${({ theme }) => theme.colors.DefaultError};
            }

            label {
            }

            &:focus {
                input {
                    border: 2px solid ${({ theme }) => theme.colors.FocusError};
                }

                label {
                }
            }

            &:hover {
                input {
                    border: 2px solid ${({ theme }) => theme.colors.HoverError};
                }

                label {
                }
            }

            &:active {
                input {
                    border: 2px solid ${({ theme }) => theme.colors.ActiveError};
                }

                label {
                }
            }
        `}
`;
