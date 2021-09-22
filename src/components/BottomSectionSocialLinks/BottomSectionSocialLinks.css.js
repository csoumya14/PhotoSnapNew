import styled from 'styled-components';
export const SocialIconContainer = styled.div`
  width: 9.625rem;
  height: 1.25rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .logo-image {
    filter: sepia(100%) grayscale(100%) brightness(20);
  }
  .logo-image:hover {
    filter: none;
  }
  @media only screen and (min-width: 768px) {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 2;
    margin-bottom: 65px;
    justify-self: end;
    margin-top: 0rem;
  }
  @media only screen and (min-width: 1024px) {
    grid-row-start: 2;
    grid-row-end: 3;
    align-self: start;
  }
`;
