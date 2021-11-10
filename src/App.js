import React from 'react';
import AuthPage from "./features/UserAuth";
import ClinicPage from "./features/ClinicDashboard";
import {useRoutes, Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";


const routes = (isLoggedIn) => [
    {
        path: '/clinic',
        element: isLoggedIn ? <ClinicPage/> : <Navigate to="/"/>,
        children: [
            { path: 'patients', element: <Navigate to="/clinic/patients" /> },
            { path: 'resolutions', element: <Navigate to="/clinic/resolutions" /> },
        ],
    },
    {
        path: '/',
        element: !isLoggedIn ? <AuthPage/> : <Navigate to="/clinic"/>,
        children: [
            { path: 'restore-password', element: <Navigate to="/restore-password" /> },
            { path: 'sign-up', element: <Navigate to="/sign-up" /> },
            { path: 'sign-in', element: <Navigate to="/sign-in" /> },
            { path: '/', element: <Navigate to="/sign-in" /> },
        ],
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
