import { Route, Routes } from 'react-router-dom'
import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import RestorePassForm from './components/RestorePassForm'
import AuthPageLayout from './layouts/AuthPageLayout'
import routes from './services/routes'

const AuthPage = () => (
    <AuthPageLayout>
        <Routes>
            <Route exact path={'/'} element={<SignUp />} />
            <Route path={routes.signup} element={<SignUp />} />
            <Route path={routes.signin} element={<SignIn />} />
            <Route
                path={routes.restorepassword}
                element={<RestorePassForm />}
            />
        </Routes>
    </AuthPageLayout>
)

export default AuthPage
