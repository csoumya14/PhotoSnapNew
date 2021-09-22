import React from 'react';
import styled from 'styled-components';

import FirstSection from '../../containers/Stories/TopSectionTextAndImage/TopSectionTextAndImage';
import PhotoSection from '../../containers/Stories/PhotoCollectionSection/PhotoCollectionSection';
import BottomSection from '../../containers/BottomSection/BottomSection';
const Container = styled.div`
  width: 100vw;
  max-width: 100%;
`;

const StoriesPage = ({ image }) => {
  return (
    <Container>
      <FirstSection />
      <PhotoSection image={image} />
      <BottomSection />
    </Container>
  );
};

export default StoriesPage;
