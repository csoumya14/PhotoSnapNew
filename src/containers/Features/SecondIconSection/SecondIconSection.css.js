import styled from 'styled-components';

export const SectionContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    width: 100vw;
    display: grid;
    margin-top: 112px;
    grid-template-columns: repeat(2, 50%);
    align-items: center;
    justify-items: center;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 33%);
  }
`;
