import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import imgAuthPageBackground from '../images/bg.png'
import * as constants from '../../../services/constants'

const AuthPage = styled.div`
    background-image: url(${imgAuthPageBackground});
    height: 100vh;
    background-repeat: no-repeat;
    background-size: contain;
    color: ${constants.grey};
    margin: 0;
    display: flex;
    flex-direction: column-reverse;
    @media only screen and (min-width: 560px) {
        background-size: cover;
        flex-direction: row-reverse;
    }
`

const AuthContent = styled.div`
    max-width: 560px;
    display: flex;
    flex-direction: column;
    background: ${constants.formBackgroundColor};
    border-radius: 24px 24px 0 0;
    padding: 32px 10% 44px;
    height: calc(100% - 72px);
    @media only screen and (min-width: 560px) {
        border-radius: 0;
        height: 100%;
        padding: 168px 96px 80px 96px;
    }
`

const AuthPageLayout = () => (
    <AuthPage>
        <AuthContent>
            <Outlet />
        </AuthContent>
    </AuthPage>
)

export default AuthPageLayout
