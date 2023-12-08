import styled from 'styled-components';
import { ButtonStyleProps } from './interface';

export const ButtonContainer = styled.button<ButtonStyleProps>`
    cursor: pointer;
    border: 1px solid red;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
