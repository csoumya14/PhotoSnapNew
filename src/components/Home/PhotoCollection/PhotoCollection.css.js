import styled from 'styled-components';
export const Figure = styled.div`
  margin-left: 0px;
  margin-top: 236px;
  color: #fff;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    padding-top: 10px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 361px;
  }
  @media only screen and (min-width: 1024px) {
    margin-left: 0px;
    margin-top: 22rem;
  }
`;

export const Caption = styled.figcaption`
  margin-top: 0px;
  font-size: 18px;
  line-height: 1.563rem;
  font-weight: 700;
  margin-left: 2.063rem;
  @media only screen and (min-width: 1024px) {
    margin-top: 0px;
  }
`;

export const Author = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16.93px;
  margin-top: 4px;
  margin-left: 2.163rem;
  @media only screen and (min-width: 1024px) {
    margin-top: 0px;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 19.375rem;
  background: #fff;
  margin-left: 2.063rem;
  opacity: 0.75;
  margin-top: 16px;

  @media only screen and (min-width: 421px) {
    margin-top: 0px;
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    height: 1px;
    width: 302.56px;
    background: #fff;
    margin-left: 2.063rem;
    opacity: 0.75;
  }
`;

export const LinkP = styled.p`
  position: absolute;
  margin-top: 20px;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  margin-left: 2.06rem;
  line-height: 15.62px;
  letter-spacing: 2px;
  height: 1rem;
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media only screen and (min-width: 1024px) {
    position: relative;
    margin-top: 1rem;
  }
`;
export const ArrowImage = styled.img`
  width: 2.63rem;
  margin-top: 0.1rem;
  position: relative;
  margin-left: 11.063rem;
  height: 0.75rem;
  filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);

  @media only screen and (min-width: 421px) {
    margin-top: 0px;
    position: absolute;
    margin-left: 60px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0.1rem;
    position: relative;
    margin-left: 160px;
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 0rem;
    margin-left: 40%;
  }
`;
