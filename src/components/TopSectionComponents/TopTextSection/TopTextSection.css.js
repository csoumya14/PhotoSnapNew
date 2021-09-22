import styled from 'styled-components';

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    width: 387px;
    height: 304px;
    margin-top: 80px;
    margin-left: 44px;
    margin-right: 54px;
    margin-bottom: 173px;
  }
`;
export const Para = styled.p`
  width: calc(100% - 70px);
  font-size: 15px;
  font-weight: 400;
  opacity: 0.6;
  line-height: 25px;
  margin-top: 0rem;
  @media only screen and (min-width: 421px) {
    margin-top: 2rem;
  }
  @media only screen and (min-width: 768px) {
    width: 387px;
    margin-top: 0rem;
  }
`;
export const HeadLine = styled.h1`
  margin-top: 1rem;
  width: calc(100% - 70px);
  height: ${({ showInviteLink }) => (showInviteLink ? '110px' : '40px')};
  font-size: 32px;
  line-height: 2.5rem;
  font-weight: 700;
  letter-spacing: 3.33333px;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
    margin-top: 6rem;
    width: 387px;
    height: 144px;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 4.16667px;
  }
`;
