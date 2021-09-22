import styled from 'styled-components';
export const TableSection = styled.section`
  width: 90%;
  height: 952px;
  margin-left: 29px;

  .table-heading {
    margin-top: 0rem;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .line {
    border-bottom: 1px solid #000000;
    margin-top: 23px;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-left: 100px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  .row-heading {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: left;
    padding-top: 23px;
  }
  .heading-row {
    text-align: left;
  }
  .column-heading {
    font-weight: 700;
    padding-top: 16px;

    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1.66667px;
    color: #000000;
    opacity: 0.5;
  }
  .check-line td {
    padding-bottom: 24.5px;
    border-bottom: 1px solid #dfdfdf;
  }
`;
