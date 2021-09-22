import styled from 'styled-components';
export const ImageSection = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 317px;
  margin: 0px;

  @media only screen and (min-width: 421px) {
    height: 650px;
    object-fit: cover;
  }
  @media only screen and (min-width: 768px) {
    position: absolute;
    z-index: -1;
  }
`;
