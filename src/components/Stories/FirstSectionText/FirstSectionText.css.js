import styled from 'styled-components';
export const SectionContainer = styled.section`
  width: 100vw;
  height: 30.938rem;
  background: #000000;
  color: white;
  margin-top: 0rem;
  border: 1px solid transparent;
  position: relative;
  z-index: -1;
  @media only screen and (min-width: 421px) {
    width: 387px;
    height: 650px;
    margin-top: 5rem;
    background: transparent;
  }
  @media only screen and (min-width: 768px) {
    height: 406px;
    margin-left: 39px;
    margin-top: 0px;
  }
  @media only screen and (min-width: 1024px) {
    margin-left: 112px;
  }
`;

export const FirstLine = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  color: #ffffff;
  padding-top: 2rem;
  margin-left: 1.813rem;
  @media only screen and (min-width: 768px) {
    margin-left: 0rem;
    margin-top: 0rem;
  }
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  width: 19.875rem;
  font-size: 32px;
  line-height: 2.5rem;
  letter-spacing: 0.208rem;
  margin-left: 1.813rem;
  margin-top: 1rem;
  @media only screen and (min-width: 421px) {
    width: 25.875rem;
  }

  @media only screen and (min-width: 768px) {
    width: 90%;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 4.16667px;
    margin-left: 0rem;
  }
`;

export const Date = styled.p`
  margin-left: 1.813rem;
  margin-top: 0rem;
  font-size: 13px;
  line-height: 17px;
  color: white;
  position: absolute;
  opacity: 0.75;
  @media only screen and (min-width: 768px) {
    margin-left: 0rem;
  }
`;
export const Author = styled.p`
  font-size: 13px;
  line-height: 17px;
  margin-top: 1rem;
  margin-left: 9rem;
  font-style: normal;
  color: white;
  @media only screen and (min-width: 768px) {
    margin-top: 0rem;
    margin-left: 8rem;
  }
`;

export const Para = styled.p`
  width: calc(100% - 70px);
  height: 10.375rem;
  font-size: 15px;
  line-height: 25px;
  margin-left: 1.813rem;
  opacity: 0.6;
  @media only screen and (min-width: 421px) {
    width: 25.875rem;
  }
  @media only screen and (min-width: 768px) {
    height: 6.375rem;
    margin-left: 0rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  margin-left: 1.813rem;
  padding-top: 2rem;
  line-height: 16px;
  letter-spacing: 2px;
  height: 1rem;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  @media only screen and (min-width: 768px) {
    margin-left: 0rem;
  }
`;

export const ArrowImage = styled.img`
  width: 2.63rem;
  margin-top: 0.5rem;
  position: absolute;
  margin-left: 1rem;
  height: 0.75rem;
  filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
  @media only screen and (min-width: 768px) {
    margin-left: 2rem;
  }
`;
