import React from 'react';
import hero from '../../../assets/home/mobile/beautiful-stories.jpg';
import desktopImg from '../../../assets/home/desktop/beautiful-stories.jpg';
import tabScreenImg from '../../../assets/home/tablet/beautiful-stories.jpg';
import TopTextSection from '../../../components/TopSectionComponents/TopTextSection/TopTextSection';

import {
  SecondSectionContainer,
  ImageSection,
  SecondSection,
} from './SecondSectionTextAndImage.css';

const MiddleSection = () => {
  const heading = 'Beautiful Stories every time';
  const paragraph =
    ' We provide design templates to ensure your stories look terrific. Easily add photos,text, embed maps and media from other networks. Then share your story with everyone.';
  const linkName = 'view the stories';
  const showInviteLink = true;
  const blackBackgroundColor = false;
  return (
    <SecondSectionContainer>
      <ImageSection>
        <picture className="picture">
          <source media="(min-width:1024px)" srcSet={desktopImg}></source>
          <source media="(min-width:500px)" srcSet={tabScreenImg}></source>
          <img
            src={hero}
            alt=" a woman holding camera during sunset or sunrise"
            className="hero-image"
          ></img>
        </picture>
      </ImageSection>
      <SecondSection>
        <TopTextSection
          heading={heading}
          paragraph={paragraph}
          linkName={linkName}
          showInviteLink={showInviteLink}
          blackBackgroundColor={blackBackgroundColor}
        />
      </SecondSection>
    </SecondSectionContainer>
  );
};

export default MiddleSection;
