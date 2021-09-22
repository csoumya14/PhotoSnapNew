import styled from 'styled-components';
export const HamburgerImg = styled.input`
  width: 1.25rem;
  height: 0.375rem;
  margin-top: 2.063rem;
  margin-right: 0rem;
  opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  transition: opacity ease-in-out 0.5s;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-right: 5rem;
  }
`;
export const CloseImg = styled.input`
  position: absolute;
  width: 1.25rem;
  height: 0.938rem;
  margin-top: 1.813rem;
  margin-left: -1.5em;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity ease-in-out 0.5s;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-left: 28rem;
  }
`;

export const ButtonImage = styled.button`
  margin-right: 2rem;
  background: transparent;
  outline: none;
  border: none;
  width: 5rem;
`;
