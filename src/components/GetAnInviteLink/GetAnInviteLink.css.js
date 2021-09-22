import styled from 'styled-components';

export const LinkElement = styled.a`
  text-decoration: none;
  width: calc(100% - 70px);
  color: ${({ blackBackgroundColor }) => (blackBackgroundColor ? 'white' : 'black')};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  height: 1rem;
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media only screen and (min-width: 768px) {
    width: 387px;
    margin-top: 25px;
  }
`;
export const ArrowImage = styled.img`
  width: 2.63rem;
  filter: ${({ blackBackgroundColor }) =>
    blackBackgroundColor ? 'invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1)' : ''};
  margin-top: 0.2rem;
  position: absolute;
  margin-left: 1rem;
  height: 0.75rem;
  @media only screen and (min-width: 768px) {
    margin-top: 5px;
  }
`;
