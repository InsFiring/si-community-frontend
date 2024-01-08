import styled, { css } from 'styled-components';
import { BadgeProps } from './interface';
const largeBadge = css`
    font-size: 16px;
    letter-spacing: -0.4px;
    width: 90px;
    height: 28px;
    line-height: 28px;
`;
const defaultBadge = css`
    font-size: 12px;
    line-height: 20px;
    height: 20px;
    width: 74px;
`;
export const BadgeContainer = styled.div<BadgeProps>`
    ${(props) => (props.type === 'large' ? largeBadge : defaultBadge)}
    border-radius: 4px;
    font-weight: 500;
    text-align: center;
    box-sizing: border-box;
    display: inline-block !important;

    ${(props) =>
        props.badgeColorType === 'yellow' &&
        css`
            background: #fffbf5;
            color: #ffff33;
            border: 1px solid #ffff00;
        `};

    ${(props) =>
        props.badgeColorType === 'purple' &&
        css`
            background: #f9f8ff;
            color: #926cfe;
            border: 1px solid #926cfe;
        `};

    ${(props) =>
        props.badgeColorType === 'green' &&
        css`
            background: #f3fbfb;
            color: #16b1bd;
            border: 1px solid #16b1bd;
        `};

    ${(props) =>
        props.badgeColorType === 'pink' &&
        css`
            background: #fff9fa;
            color: #fc62a1;
            border: 1px solid #fc62a1;
        `};

    ${(props) =>
        props.badgeColorType === 'gray' &&
        css`
            background: #fdfdfc;
            color: #bababa;
            border: 1px solid #bababa;
        `};

    ${(props) =>
        props.badgeColorType === 'blue' &&
        css`
            background: #f2f5ff;
            color: #545bf8;
            border: 1px solid #545bf8;
        `};
`;
