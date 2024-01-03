import styled from 'styled-components';

export const ModalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 200px;
    padding: 0px 20px;
    background: #fff;

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 40px;

        strong {
        }

        button {
            width: 20px;
            height: 20px;

            svg {
                height: inherit;
                width: inherit;
            }
        }
    }

    .modal-content {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100px;
    }

    .modal-bottom {
        width: 100%;
        height: 60px;

        .btn-container {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 0px 24px;
            width: 100%;
            height: 100%;
        }
    }
`;
