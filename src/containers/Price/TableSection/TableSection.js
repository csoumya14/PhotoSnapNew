import React, { useState, useEffect } from 'react';
import TableData from '../../../data/TableData';
import { useViewPort } from '../../../helpers/CustomViewPort';
import BigScreenTableSection from '../../../components/Price/BigScreenTable/BigScreenTable';
import SmallScreenTableSection from '../../../components/Price/SmallScreenTable/SmallScreenTable';
import { TableContainer, HeadingDiv } from './TableSection.css';

const TableSection = () => {
  const [isSmallScreen] = useViewPort();
  const [tableData, setTableData] = useState([]);

  useEffect(() => setTableData(TableData), []);
  return (
    <TableContainer>
      <HeadingDiv>
        <h1>Compare</h1>
      </HeadingDiv>
      {isSmallScreen ? (
        <SmallScreenTableSection tableData={tableData} />
      ) : (
        <BigScreenTableSection />
      )}
    </TableContainer>
  );
};
export default TableSection;
