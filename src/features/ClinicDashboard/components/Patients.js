import Card from "../components/Card";
import React from "react";
import ContentHeaderHoc from "../components/ContentHeaderHoc";
import styled from "styled-components";
import StyledControlButton from "../core/StyledControlButton";
import iconSearch from "../images/icon-search.svg";
import iconSettings from "../images/icon-settings.svg";
import ContentContainer from "./ContentContainer";

const SearchButton = styled(StyledControlButton)`
  background: url(${iconSearch}) no-repeat center;
`

const SettingsButton = styled(StyledControlButton)`
  background: url(${iconSettings}) no-repeat center;
`

const Patients = ({cards}) => {
    return (
        <>
            <ContentHeaderHoc title={'My Patients'}>
                <SearchButton/>
                <SettingsButton/>
            </ContentHeaderHoc>
            <ContentContainer>
                {cards.map(card =>
                    <Card
                        avatar={card.avatar}
                        status={card.status}
                        name={card.name}
                        result={card.result}
                        time={card.time}/>
                )}
            </ContentContainer>
        </>
    )
}

export default Patients
