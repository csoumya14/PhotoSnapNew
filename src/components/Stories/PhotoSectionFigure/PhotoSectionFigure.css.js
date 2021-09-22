import styled from 'styled-components';
export const Figure = styled.div`
  margin-left: 0px;
  margin-top: 215px;
  color: #fff;

  @media only screen and (min-width: 768px) {
    margin-left: 0px;
    border: 1px solid transparent;
    width: 100vw;
    height: 23.43rem;
    margin-top: 0px;
    color: #fff;
  }
  @media only screen and (min-width: 1024px) {
    margin-left: 0px;
    border: 1px solid transparent;
    padding-top: 21rem;
    color: #fff;
  }
`;
export const Date = styled.p`
  margin-top: 0rem;
  margin-left: 2.063rem;
  @media only screen and (min-width: 421px) {
    margin-top: 18.438rem;
    margin-left: 3.063rem;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 20rem;
    font-size: 13px;
    line-height: 16.93px;
    margin-left: 42.67px;
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 0rem;
  }
`;

export const Caption = styled.figcaption`
  margin-top: 0rem;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  margin-left: 2.063rem;

  @media only screen and (min-width: 421px) {
    margin-top: 0.25rem;
    margin-left: 3.063rem;
  }
  @media only screen and (min-width: 768px) {
    line-height: 1.563rem;
    margin-left: 42.67px;
  }
`;

export const Author = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  margin-top: 0rem;
  margin-left: 2.163rem;

  @media only screen and (min-width: 421px) {
    margin-top: 0.25rem;
    margin-left: 3.163rem;
  }
  @media only screen and (min-width: 768px) {
    line-height: 16.93px;
    margin-top: 0.25rem;
    margin-left: 42.67px;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 19.375rem;
  background: #fff;
  margin-left: 2.063rem;
  margin-top: 0rem;
  opacity: 0.75;

  @media only screen and (min-width: 421px) {
    width: 70%;
    margin-left: 3.063rem;
  }
  @media only screen and (min-width: 768px) {
    width: 298.67px;
    margin-left: 42.67px;
  }
  @media only screen and (min-width: 1024px) {
    width: 20%;
    margin-left: 42.67px;
  }
`;

export const LinkP = styled.p`
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

  @media only screen and (min-width: 421px) {
    margin-top: 1rem;
    margin-left: 3.2rem;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 1rem;
    margin-left: 42.67px;
  }
`;

export const ArrowImage = styled.img`
  width: 2.63rem;
  margin-top: 0.1rem;
  margin-left: 11.063rem;
  height: 0.75rem;
  filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);

  @media only screen and (min-width: 421px) {
    margin-left: 9%;
  }
  @media only screen and (min-width: 768px) {
    margin-left: 9.063rem;
  }
  @media only screen and (min-width: 1024px) {
    margin-left: 9%;
  }
`;
