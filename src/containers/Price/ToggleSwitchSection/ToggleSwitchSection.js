import React from 'react';
import { SectionContainer, PriceCardContainer, Article } from './ToggleSwitchSection.css';
import ToggleSwitch from '../../../components/Price/ToggleSwitchComponent/ToggleSwitchComponent';
const ToggleSwitchSection = ({ name, checked, onChange, cardInfo }) => {
  return (
    <SectionContainer>
      <ToggleSwitch checked={checked} name={name} onChange={onChange} />
      <PriceCardContainer>
        {cardInfo.map(info => {
          return (
            <Article key={info.id}>
              <h3 className="article-heading">{info.title}</h3>
              <p className="article-para">{info.text}</p>
              {!checked ? (
                <div className="rate">
                  <span>{'\u0024'}</span>
                  <span className="article-rate">{info.monthlyRate}</span>
                  <p className="article-plan">{info.planMonth}</p>
                </div>
              ) : (
                <div className="rate">
                  <span>{'\u0024'}</span>
                  <span className="article-rate">{info.yearlyRate}</span>
                  <p className="article-plan">{info.planYear}</p>
                </div>
              )}

              <button className="article-button">{info.buttonText}</button>
            </Article>
          );
        })}
      </PriceCardContainer>
    </SectionContainer>
  );
};

export default ToggleSwitchSection;
