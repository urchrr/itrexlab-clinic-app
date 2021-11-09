import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import {routes} from './services/routes'
import UserAuth from "./features/UserAuth";

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <>
            {!loggedIn ?
                <UserAuth/>
                :
                <Routes>
                    {/*<Route path="" element={<Patients/>}/>*/}
                    {/*<Route path="patients" element={<Patients/>}/>*/}
                    {/*<Route path="appointments" element={<Appointments/>}/>*/}
                </Routes>
            }
        </>

    );
}

export default App;
