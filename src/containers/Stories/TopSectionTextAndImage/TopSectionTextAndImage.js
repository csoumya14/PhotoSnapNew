import React from 'react';
import ImageSection from '../../../components/Stories/FirstSectionImage/FirstSectionImage';
import MiddleSection from '../../../components/Stories/FirstSectionText/FirstSectionText';
import { FirstSectionContainer, TextSection } from './TopSectionTextAndImage.css';

const FirstSection = () => {
  return (
    <FirstSectionContainer>
      <ImageSection />
      <TextSection>
        <MiddleSection />
      </TextSection>
    </FirstSectionContainer>
  );
};

export default FirstSection;
