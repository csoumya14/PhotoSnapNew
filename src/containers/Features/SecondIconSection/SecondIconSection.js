import React from 'react';
import { SectionContainer } from './SecondIconSection.css';
import Figure from '../../../components/Features/MiddleSectionFigure/MiddleSectionFigure';
const MiddleSection = ({ feature }) => {
  return (
    <SectionContainer>
      {feature.map(featureItem => {
        return <Figure featureItem={featureItem} />;
      })}
    </SectionContainer>
  );
};

export default MiddleSection;
