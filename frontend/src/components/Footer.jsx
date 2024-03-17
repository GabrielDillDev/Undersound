import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const ContactSection = styled.div`
  margin-bottom: 20px;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ContactInfo = styled.p`
  font-size: 1rem;
`;

const AboutUsSection = styled.div``;

const AboutUsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const AboutUsText = styled.p`
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContactSection>
        <ContactTitle>Contato</ContactTitle>
        <ContactInfo>
          Telefone: (12) 3456-7890<br />
          E-mail: Undersoundmusicshop@gmail.com
        </ContactInfo>
      </ContactSection>

      <AboutUsSection>
        <AboutUsTitle>Sobre Nós</AboutUsTitle>
        <AboutUsText>
          Somos uma loja dedicada a fornecer os melhores produtos para músicos. Com uma variedade de instrumentos musicais e acessórios, buscamos atender às necessidades de todos os amantes da música.
        </AboutUsText>
      </AboutUsSection>
    </FooterContainer>
  );
};

export default Footer;
