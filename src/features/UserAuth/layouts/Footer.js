import React from 'react'
import styled from "styled-components";

const Footer = styled.div`
  @media only screen and (min-width: 560px) {
    display: flex;
    align-items: center;
  }
`
const FooterText = styled.p`
  font-size: 15px;
  line-height: 21px;
  margin: 0 12px 0 0;
`

const FooterLayout = (props) => {
    return (
        <Footer>
            <FooterText>{props.text}</FooterText>
            {props.link ? props.link : ''}
        </Footer>
    )
}

export default FooterLayout
