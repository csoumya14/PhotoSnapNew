import React from 'react';

import check from '../../../assets/pricing/desktop/check.svg';
import { TableSection, Table } from './SmallScreenTable.css';

const SmallScreenTableSection = ({ tableData }) => {
  return (
    <TableSection>
      <h5 className="table-heading">The features</h5>
      <div className="line"></div>
      {tableData.map(info => {
        return (
          <Table key={info.id}>
            <colgroup span="3"></colgroup>
            <thead className="first-header">
              <tr>
                <th colSpan="3" scope="colgroup" className="row-heading">
                  {info.name}
                </th>
              </tr>
            </thead>
            <thead>
              <tr className="heading-row">
                <th scope="col" className="column-heading basic">
                  Basic
                </th>
                <th scope="col" className="column-heading">
                  Pro
                </th>
                <th scope="col" className="column-heading">
                  Business
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="check-line">
                <td>{info.basic ? <img src={check} alt="" /> : ''}</td>
                <td>{info.pro ? <img src={check} alt="" /> : ''}</td>
                <td>{info.business ? <img src={check} alt="" /> : ''}</td>
              </tr>
            </tbody>
          </Table>
        );
      })}
    </TableSection>
  );
};
export default SmallScreenTableSection;
