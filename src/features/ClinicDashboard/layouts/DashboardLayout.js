import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Header from '../components/PageHeader'
import * as constants from '../services/constants'

const Page = styled.div`
    height: 100vh;
    display: flex;
    background-color: ${constants.lightBlue};
    background-image: none;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (min-width: 560px) {
        padding: 20px 64px 48px 64px;
    }
`

const ClinicDashboard = ({ user, children }) => (
    <Page>
        <Header user={user} />
        {children}
    </Page>
)
ClinicDashboard.propTypes = {
    user: PropTypes.object,
    children: PropTypes.array,
}
export default ClinicDashboard
