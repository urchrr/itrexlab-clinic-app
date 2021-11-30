import styled from 'styled-components';
import * as constants from '../../../services/constants';

export const Page = styled.div`
    height: 100vh;
    display: flex;
    background-color: ${constants.lightBlue};
    background-image: none;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (min-width: 560px) {
        padding: 20px 64px 48px 64px;
    }
`;

export const PageContent = styled.section`
    background-color: ${constants.formBackgroundColor};
    border-radius: 24px 24px 0 0;
    flex: 1 auto;
    max-height: 95%;
    display: flex;
    flex-direction: column;
    padding: 40px 16px;
    @media only screen and (min-width: 560px) {
        padding: 40px 16px 40px 48px;
        border-radius: 16px;
    }
`;

export const PageNavigationArea = styled.nav`
    display: flex;
    margin-bottom: 60px;
    margin-right: 8px;
    @media only screen and (min-width: 560px) {
        padding-right: 32px;
    }
    @media only screen and (min-width: 1480px) {
        padding-right: 44px;
    }
`;
