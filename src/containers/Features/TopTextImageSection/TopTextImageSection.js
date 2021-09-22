import React from 'react';
import tabScreenImg from '../../../assets/features/tablet/hero.jpg';
import desktopImg from '../../../assets/features/desktop/hero.jpg';
import hero from '../../../assets/features/mobile/hero.jpg';
import TopImageSection from '../../../components/TopSectionComponents/TopImageSection/TopImageSection';
import TopTextSection from '../../../components/TopSectionComponents/TopTextSection/TopTextSection';
import PinkRectangle from '../../../components/PinkRectangle/PinkRectangle';
import { SectionContainer, FirstSectionText } from './TopTextImageSection.css';

const FeatureFirstSection = () => {
  const altText = 'a man holding camera';
  const heading = 'Features';
  const paragraph =
    'We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories';
  const showInviteLink = false;
  const blackBackgroundColor = true;
  return (
    <SectionContainer>
      <TopImageSection
        hero={hero}
        desktopImg={desktopImg}
        tabScreenImg={tabScreenImg}
        altText={altText}
      />
      <FirstSectionText>
        <PinkRectangle />
        <TopTextSection
          heading={heading}
          paragraph={paragraph}
          showInviteLink={showInviteLink}
          blackBackgroundColor={blackBackgroundColor}
        />
      </FirstSectionText>
    </SectionContainer>
  );
};

export default FeatureFirstSection;
