import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
    @media only screen and (min-width: 560px) {
        display: flex;
        align-items: center;
    }
`;
const FooterText = styled.p`
    font-size: 15px;
    line-height: 21px;
    margin: 0 12px 0 0;
`;
type FooterProps = {
  text: string,
  link: React.ReactElement
};
const FooterLayout = function ({ text, link }:FooterProps) {
  return (
    <Footer data-testid="form-footer">
      <FooterText>{text}</FooterText>
      {link || ''}
    </Footer>
  );
};

export default FooterLayout;
