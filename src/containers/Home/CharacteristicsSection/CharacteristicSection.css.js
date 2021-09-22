import styled from 'styled-components';

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;
export const CharContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  margin-top: 5rem;

  @media only screen and (min-width: 768px) {
    margin-top: 120px;
    ${Figure}:nth-child(2) {
      margin-top: 2rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 0rem;
    height: 456px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Caption = styled.figcaption`
  margin-top: 3rem;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;

  @media only screen and (min-width: 768px) {
    margin-top: 48px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  width: 19.375rem;
  margin-top: 16px;

  @media only screen and (min-width: 421px) {
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    width: 19.375rem;
    margin-top: 16px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    width: 457px;
    margin-top: 16px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    width: 350px;
    margin-top: 16px;
  }
`;
