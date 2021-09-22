import styled from 'styled-components';
export const Table = styled.table`
  width: 100%;
  height: 552px;
  .row-heading {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    text-align: left;
    letter-spacing: 2px;
    line-height: 16px;
  }
  .feature-heading {
    padding-left: 24px;
  }
  .row-heading th {
    padding-bottom: 16px;
    border-bottom: 1px solid black;
  }
  .heading {
    width: 120px;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`;
