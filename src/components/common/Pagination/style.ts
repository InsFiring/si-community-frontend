import styled from 'styled-components';

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    button {
        border: none;
    }

    .pagination-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .per-page-content {
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        height: 100%;

        select {
            height: inherit;
        }
    }

    .btn-num-active {
        cursor: not-allowed;
        background: ${({ theme }) => theme.colors.ActiveColor};
    }
`;
