import SignIn from "./SignIn";
import SignUp from "./SignUp";
import RestorePassForm from "./components/RestorePassForm";
import AuthPageLayout from "./layouts/AuthPageLayout";
import {Route, Routes} from "react-router-dom";
import {routes} from "./services/routes";
import React from "react";

const AuthPage = props => {
    return (
        <AuthPageLayout>
            <Routes>
                <Route exact path={'/'} element={<SignUp/>}/>
                <Route path={routes.signup} element={<SignUp/>}/>
                <Route path={routes.signin} element={<SignIn/>}/>
                <Route path={routes.restorepassword} element={<RestorePassForm/>}/>
            </Routes>
        </AuthPageLayout>
    )
}

export default AuthPage
