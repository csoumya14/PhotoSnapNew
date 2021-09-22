import React from 'react';
import FeatureFirstSection from '../../containers/Features/TopTextImageSection/TopTextImageSection';
import MiddleSection from '../../containers/Features/SecondIconSection/SecondIconSection';
import Beta from '../../containers/BetaSection/BetaSection';
import BottomSection from '../../containers/BottomSection/BottomSection';
import { Container } from './Features.css';

const FeaturesPage = ({ feature }) => {
  return (
    <Container>
      <FeatureFirstSection />
      <MiddleSection feature={feature} />
      <Beta />
      <BottomSection />
    </Container>
  );
};

export default FeaturesPage;
