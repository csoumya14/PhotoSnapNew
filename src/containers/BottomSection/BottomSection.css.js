import styled from 'styled-components';

export const BottomContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 33.688rem;
  margin-top: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  padding-left: 2rem;
  @media only screen and (min-width: 768px) {
    display: grid;
    height: 284px;
    grid-template-columns: 1fr 2fr 1.9fr;
    grid-template-rows: 1fr 1fr;
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    height: 250px;
    grid-template-columns: 1fr 4fr 1.9fr;
    grid-template-rows: 1fr 1fr;
  }
`;
export const LogoImg = styled.img`
  filter: invert(1);
  object-fit: cover;
  margin-top: 3.5rem;
  width: 10.625rem;
  height: 1 rem;
  @media only screen and (min-width: 768px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    margin-top: 4rem;
    justify-self: end;
    width: 170px;
  }
  @media only screen and (min-width: 1024px) {
    align-self: start;
  }
`;

export const InviteLink = styled.div`
  margin-top: 7.438rem;
  font-size: 12px;
  align-self: flex-start;
  margin-left: 6.375rem;
  @media only screen and (min-width: 768px) {
    margin-top: 64px;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 3;
    grid-column-end: 4;
  }
  @media only screen and (min-width: 1024px) {
    height: 1rem;
    grid-column-start: 3;
    grid-column-end: 4;
  }
`;

export const CopyRightInfo = styled.p`
  color: #fff;
  font-size: 15px;
  width: 15.938rem;
  opacity: 50.25%;
  margin-top: 2.125rem;
  margin-bottom: 3.5rem;
  @media only screen and (min-width: 768px) {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 3;
    grid-column-end: 4;
  }
  @media only screen and (min-width: 1024px) {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 3;
    grid-column-end: 4;
    margin-top: -10px;
  }
`;
