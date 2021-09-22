import React from 'react';
import hero from '../../../assets/home/mobile/designed-for-everyone.jpg';
import desktopImg from '../../../assets/home/desktop/designed-for-everyone.jpg';
import tabScreenImg from '../../../assets/home/tablet/designed-for-everyone.jpg';
import TopTextSection from '../../../components/TopSectionComponents/TopTextSection/TopTextSection';
import {
  SecondSectionContainer,
  ImageContainer,
  ThirdSection,
} from './ThirdSectionTextAndImage.css';

const SecondMiddleSection = () => {
  const heading = 'Designed For Everyone';
  const paragraph =
    'Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all level, brands, businesses you name it.';
  const linkName = 'view the stories';
  const showInviteLink = true;
  const blackBackgroundColor = false;
  return (
    <SecondSectionContainer>
      <ImageContainer>
        <picture className="picture">
          <source media="(min-width:1024px)" srcSet={desktopImg}></source>
          <source media="(min-width:500px)" srcSet={tabScreenImg}></source>
          <img
            src={hero}
            alt=" a woman holding camera during sunset or sunrise"
            className="hero-image"
          ></img>
        </picture>
      </ImageContainer>
      <ThirdSection>
        <TopTextSection
          heading={heading}
          paragraph={paragraph}
          linkName={linkName}
          showInviteLink={showInviteLink}
          blackBackgroundColor={blackBackgroundColor}
        />
      </ThirdSection>
    </SecondSectionContainer>
  );
};

export default SecondMiddleSection;
