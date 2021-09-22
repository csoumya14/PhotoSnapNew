import React from 'react';
import hero from '../../../assets/pricing/mobile/hero.jpg';
import tabScreenImg from '../../../assets/pricing/tablet/hero.jpg';
import desktopImg from '../../../assets/pricing/desktop/hero.jpg';
import TopImageSection from '../../../components/TopSectionComponents/TopImageSection/TopImageSection';
import TopTextSection from '../../../components/TopSectionComponents/TopTextSection/TopTextSection';
import PinkRectangle from '../../../components/PinkRectangle/PinkRectangle';
import { SectionContainer, FirstSectionText } from './TopImageTextSection.css';

const PriceFirstSection = () => {
  const altText = 'a woman holding camera during sunset or sunrise';
  const heading = 'Pricing';
  const paragraph =
    "Create a your stories. Photosnap is a platform for photographers and visual storytellers.It's the simple way to create and share your photos.";
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

export default PriceFirstSection;
