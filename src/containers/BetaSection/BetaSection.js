import React from 'react';
import BetaSectionImage from '../../components/BetaSection/BetaSectionImage/BetaSectionImage';
import BetaSectionText from '../../components/BetaSection/BetaSectionText/BetaSectionText';
import { Container } from './BetaSection.css';

const Beta = () => {
  return (
    <Container>
      <BetaSectionImage />
      <BetaSectionText />
    </Container>
  );
};

export default Beta;
