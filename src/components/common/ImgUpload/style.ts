import styled, { css } from 'styled-components';
import { ImgUploadStyleProps } from './interface';

export const ImgUploadContainer = styled.div<ImgUploadStyleProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: #fff;
    border-radius: 5px;
    position: relative;
    z-index: 7;
    cursor: pointer;

    input {
        display: none;
    }

    .file-upload {
        width: 100%;
        height: 100%;
        display: block;
        position: relative;
        cursor: pointer;
        z-index: 6;
        border: 1px dashed ${({ theme }) => theme.colors.HoverColor};
        border-radius: 5px;

        &::before {
            content: '';
            position: absolute;
            display: block;
            width: 16px;
            height: 1px;
            background-color: ${({ theme }) => theme.colors.DisabledColor};
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &::after {
            content: '';
            position: absolute;
            display: block;
            width: 1px;
            height: 16px;
            background-color: ${({ theme }) => theme.colors.DisabledColor};
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .file-change {
        width: 100%;
        height: 100%;
        display: block;
        position: relative;
        cursor: pointer;
        z-index: 6;
        border: 1px solid ${({ theme }) => theme.colors.DefaultColor};
        border-radius: 5px;

        svg {
            position: absolute;
            top: 41%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &::before {
            content: '이미지변경';
            font-weight: 500;
            font-size: 12px;
            color: ${({ theme }) => theme.colors.HoverColor};
            position: absolute;
            display: block;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &::after {
            content: '권장 960px * 540px';
            font-weight: 400;
            font-size: 10px;
            color: ${({ theme }) => theme.colors.DisabledColor};
            position: absolute;
            display: block;
            top: 55%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 6;
        border-radius: 5px;
        &:hover {
            z-index: 5;
        }
    }

    &:hover {
        label {
            z-index: 7;
        }

        img {
            opacity: 0.5;
        }
    }

    ${(props) =>
        props.isError &&
        css`
            background: #feefef;
            border-radius: 10px;

            .file-upload {
                border: 2px solid ${({ theme }) => theme.colors.DefaultError};
                &::before {
                    background-color: ${({ theme }) =>
                        theme.colors.DefaultError};
                }

                &::after {
                    background-color: ${({ theme }) =>
                        theme.colors.DefaultError};
                }
            }
            .file-change {
                display: none;
            }
            img {
                display: none;
            }
        `}
`;
