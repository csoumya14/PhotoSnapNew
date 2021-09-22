import styled from 'styled-components';

export const Container = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    height: 18rem;
    margin-top: 6.6875rem;
  }
  @media only screen and (min-width: 768px) {
    height: 280px;
    margin-top: 112px;
  }
`;
