import React from 'react';

import { CharContainer, Figure, Caption, Text } from './CharacteristicSection.css';

const CharSection = ({ feature }) => {
  return (
    <CharContainer>
      {feature.slice(0, 3).map(item => {
        return (
          <Figure key={item.id}>
            <img src={item.featureImage} alt="" />
            <Caption>{item.featureTitle}</Caption>
            <Text>{item.featureText}</Text>
          </Figure>
        );
      })}
    </CharContainer>
  );
};

export default CharSection;
