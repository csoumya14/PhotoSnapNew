import styled from 'styled-components';
export const ImageSection = styled.div`
  @media only screen and (min-width: 421px) {
    object-fit: cover;
    grid-row: 1/2;
    grid-column: 2/3;
    height: 490px;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    object-fit: cover;
    grid-row: 1/2;
    grid-column-start: 2/3;
    height: 650px;
    overflow: hidden;

    z-index: -1;
  }
`;
