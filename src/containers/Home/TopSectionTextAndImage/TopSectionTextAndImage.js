import React from 'react';
import hero from '../../../assets/home/mobile/create-and-share.jpg';
import desktopImg from '../../../assets/home/desktop/create-and-share.jpg';
import tabScreenImg from '../../../assets/home/tablet/create-and-share.jpg';
import TopImageSection from '../../../components/TopSectionComponents/TopImageSection/TopImageSection';
import TopTextSection from '../../../components/TopSectionComponents/TopTextSection/TopTextSection';
import PinkRectangle from '../../../components/PinkRectangle/PinkRectangle';
import { FirstSectionContainer, FirstSectionText } from './TopSectionTextAndImage.css';

const TopSection = () => {
  const altText = 'a woman holding camera during sunset or sunrise';
  const heading = 'Create and share your photo stories.';
  const paragraph =
    'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others';
  const linkName = 'Get an invite';
  const showInviteLink = true;
  const blackBackgroundColor = true;
  return (
    <FirstSectionContainer>
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
          linkName={linkName}
          showInviteLink={showInviteLink}
          blackBackgroundColor={blackBackgroundColor}
        />
      </FirstSectionText>
    </FirstSectionContainer>
  );
};

export default TopSection;
