import styled from 'styled-components';
export const TableContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  margin-top: 64px;

  @media only screen and (min-width: 768px) {
    width: 100vw;
    max-width: 100%;
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .container-heading {
      text-transform: uppercase;
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 4.16667px;
    }
  }
`;

export const HeadingDiv = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 4.16667px;
  }
`;
