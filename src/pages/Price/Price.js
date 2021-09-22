import React, { useState } from 'react';
import PriceFirstSection from '../../containers/Price/TopImageTextSection/TopImageTextSection';
import ToggleSwitchSection from '../../containers/Price/ToggleSwitchSection/ToggleSwitchSection';
import TableSection from '../../containers/Price/TableSection/TableSection';
import Beta from '../../containers/BetaSection/BetaSection';
import BottomSection from '../../containers/BottomSection/BottomSection';
import { Container } from './Price.css';

const PricingPage = ({ cardInfo }) => {
  let [checked, setChecked] = useState(false);
  const onToggleChange = checked => {
    setChecked(checked);
  };
  return (
    <Container>
      <PriceFirstSection />
      <ToggleSwitchSection
        name="toggle-between-switch"
        checked={checked}
        onChange={onToggleChange}
        cardInfo={cardInfo}
      />
      <TableSection />
      <Beta />
      <BottomSection />
    </Container>
  );
};

export default PricingPage;
