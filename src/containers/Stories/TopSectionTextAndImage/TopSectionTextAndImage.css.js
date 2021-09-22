import styled from 'styled-components';
export const FirstSectionContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 421px) {
    border: 1px solid transparent;
  }

  @media only screen and (min-width: 768px) {
    height: 650px;
  }
`;

export const TextSection = styled.div`
  width: 50vw;
  @media only screen and (min-width: 768px) {
    margin-top: 122px;
  }
`;
