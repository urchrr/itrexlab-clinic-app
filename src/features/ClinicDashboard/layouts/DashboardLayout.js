import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/PageHeader/PageHeader'
import NavigationButton from '../components/NavigationButton'
import {
    Page,
    PageNavigationArea,
    PageContent,
} from '../core/PageContentStyles'
import getUser from '../services/getUser'
import getPatient from '../services/getPatient'

const ClinicDashboard = () => {
    //выбор от лица кого открывать клинику
    const doctor = getUser()
    const patient = getPatient()
    //
    const navigate = useNavigate()
    const routes = {
        doctor: ['patients', 'resolutions'],
        patient: ['profile', 'appointments', 'resolutions'],
        admin: {},
    }
    const [user] = useState(doctor)

    const firstRoute = routes[user.role][0]
    const [activePath, setActivePath] = useState(firstRoute)

    const handleNavigate = (path) => {
        setActivePath(path)
        navigate(path)
    }

    return (
        <Page>
            <Header user={user} />
            <PageContent>
                <PageNavigationArea>
                    {routes[user.role].map((path) => (
                        <NavigationButton
                            isActive={activePath === path}
                            key={path}
                            path={path}
                            action={handleNavigate}
                        />
                    ))}
                </PageNavigationArea>
                <Outlet />
            </PageContent>
        </Page>
    )
}

export default ClinicDashboard
