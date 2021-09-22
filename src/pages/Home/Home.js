import React from 'react';
import styled from 'styled-components';
import TopSection from '../../containers/Home/TopSectionTextAndImage/TopSectionTextAndImage';
import MiddleSection from '../../containers/Home/SecondSectionTextAndImage/SecondSectionTextAndImage';
import SecondMiddleSection from '../../containers/Home/ThirdSectionTextAndImage/ThirdSectionTextAndImage';
import PhotoSection from '../../containers/Home/PhotoCollectionSection/PhotoCollectionSection';
import CharSection from '../../containers/Home/CharacteristicsSection/CharacteristicSection';
import BottomSection from '../../containers/BottomSection/BottomSection';

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    max-width: 100%;
  }
`;

const MainPage = ({ image, feature }) => {
  return (
    <Container>
      <TopSection />
      <MiddleSection />
      <SecondMiddleSection />
      <PhotoSection image={image} />
      <CharSection feature={feature} />
      <BottomSection />
    </Container>
  );
};

export default MainPage;
