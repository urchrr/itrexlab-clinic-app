import React from 'react';
import AuthPage from "./features/UserAuth";
import ClinicPage from "./features/ClinicDashboard";
import {useRoutes, Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";

const routes = (isLoggedIn) => [
    {
        path: '/clinic',
        element: isLoggedIn ? <ClinicPage/> : <Navigate to="/"/>,
    },
    {
        path: '/',
        element: !isLoggedIn ? <AuthPage/> : <Navigate to="/clinic"/>,
    },
];

function App() {

    const {isLoggedIn} = useSelector(state => state.userAuthReducer)
    const routing = useRoutes(routes(isLoggedIn));


    return (
        <>
            {routing}
        </>

    );
}

export default App;
