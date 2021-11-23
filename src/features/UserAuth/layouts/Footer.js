import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const FooterLayout = function ({ text, link }) {
  return (
    <Footer>
      <FooterText>{text}</FooterText>
      {link || ''}
    </Footer>
  );
};

FooterLayout.propTypes = {
  text: PropTypes.string,
  link: PropTypes.element,
};

export default FooterLayout;
