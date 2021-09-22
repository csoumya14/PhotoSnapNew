import styled from 'styled-components';
export const ImageSection = styled.div`
  z-index: -1;
  position: absolute;
  overflow: hidden;
  @media only screen and (min-width: 421px) {
    width: 100vw;
    overflow: hidden;
    max-width: 100%;
    height: 480px;
  }
  @media only screen and (min-width: 768px) {
    height: 280px;
  }
`;
