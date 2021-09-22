import React from 'react';
import arrow from '../../../assets/shared/desktop/arrow.svg';
import {
  SectionContainer,
  FirstLine,
  Heading,
  Date,
  Author,
  Para,
  Link,
  ArrowImage,
} from './FirstSectionText.css';

const MiddleSection = () => {
  return (
    <SectionContainer>
      <FirstLine>Last Month's Featured Story</FirstLine>
      <Heading>Hazy Full Moon of appalachia</Heading>
      <div>
        <Date>March 2nd 2020</Date>
        <Author>by John Appleseed</Author>
      </div>
      <Para>
        The dissected plateau area, while not actually made up of geological mountains, is popularly
        called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges
        are not high, the terrain is extremely rugged.
      </Para>
      <Link href="/">
        Read the Story{' '}
        <span>
          <ArrowImage src={arrow} alt=""></ArrowImage>
        </span>
      </Link>
    </SectionContainer>
  );
};

export default MiddleSection;
