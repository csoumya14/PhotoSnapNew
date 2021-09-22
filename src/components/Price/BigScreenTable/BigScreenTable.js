import React from 'react';
import RowItem from './RowItem';
import { Table } from './BigScreenTable.css';

const BigScreenTableSection = () => {
  return (
    <Table>
      <thead>
        <tr className="row-heading">
          <th className="feature-heading">the features</th>
          <th className="heading">basic</th>
          <th className="heading">pro</th>
          <th className="heading">business</th>
        </tr>
      </thead>
      <tbody>
        <RowItem label={'unlimited story posting'} basic pro business />
        <RowItem label={'unlimited photo upload'} basic pro business />
        <RowItem label={'embedding custom content'} pro business />
        <RowItem label={'customize metadata'} pro business />
        <RowItem label={'advanced metrics'} business />
        <RowItem label={'photo downloads'} business />
        <RowItem label={'search engine indexing'} business />
        <RowItem label={'custom analytics'} business />
      </tbody>
    </Table>
  );
};
export default BigScreenTableSection;
