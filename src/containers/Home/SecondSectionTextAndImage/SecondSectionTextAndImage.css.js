import styled from 'styled-components';
export const SecondSectionContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 421px) {
    width: 100vw;
    height: 490px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. .';
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    height: 600px;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1.3fr 1fr;
  }
`;
export const ImageSection = styled.div`
  @media only screen and (min-width: 421px) {
    grid-row: 1/2;
    grid-column: 1/2;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/2;
    overflow: hidden;
    width: 273px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
  }
`;

export const SecondSection = styled.section`
  height: 26.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  @media only screen and (min-width: 421px) {
    grid-row: 1/2;
    grid-column: 2/3;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    width: 495px;
    height: 600px;
    grid-row: 1/2;
    grid-column: 2/3;
    overflow: hidden;
  }
  @media only screen and (min-width: 1024px) {
    width: 610px;
  }
`;
