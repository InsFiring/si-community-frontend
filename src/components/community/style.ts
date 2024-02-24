import styled from 'styled-components';

export const AddCommunityContainer = styled.div`
    border: 1px solid red;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px 0px;
        width: 100%;
        margin-top: 24px;

        .title,
        .explanation {
            display: flex;
            justify-content: center;
            align-items: center;
            width: calc(100% - 160px);

            input {
                width: 100%;
            }

            textarea {
                width: 100%;
            }
        }
    }
`;
