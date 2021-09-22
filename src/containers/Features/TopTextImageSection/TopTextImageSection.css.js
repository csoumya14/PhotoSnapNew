import styled from 'styled-components';
export const SectionContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 421px) {
    height: 490px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. .';
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1.8fr 1fr;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 0.8fr 1fr;
  }
`;
export const FirstSectionText = styled.section`
  background-color: #000000;
  height: 300px;
  margin-top: -5.5px;
  display: flex;
  flex-direction: row;
  color: #ffffff;
  @media only screen and (min-width: 421px) {
    object-fit: cover;
    grid-row: 1/2;
    grid-column: 1/2;
    height: 490px;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;
