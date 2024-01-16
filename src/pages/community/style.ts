import styled from 'styled-components';

export const CommunityContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .community-list-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px 0px;
        width: 100%;
        margin-top: 24px;

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0px 16px;
            width: 100%;
        }
    }

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
