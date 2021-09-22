import styled from 'styled-components';

export const SecondSectionContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 421px) {
    width: 100vw;
    height: 490px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. .';
  }
  @media only screen and (min-width: 768px) {
    height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1.3fr;
  }
`;
export const ImageContainer = styled.div`
  @media only screen and (min-width: 421px) {
    grid-row: 1/2;
    grid-column: 2/3;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    grid-row: 1/2;
    grid-column: 2/3;
    overflow: hidden;
  }
`;

export const ThirdSection = styled.div`
  height: 26.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 421px) {
    grid-row: 1/2;
    grid-column: 1/2;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/2;
    overflow: hidden;
    width: 495px;
    height: 600px;
  }
  @media only screen and (min-width: 1024px) {
    width: 610px;
  }
`;
