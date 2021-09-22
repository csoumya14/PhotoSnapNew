import styled from 'styled-components';

export const PhotoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0rem;
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 421px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    height: 4000px;
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    height: 2000px;
  }
`;

export const ImageItem = styled.img`
  height: 375px;
  position: absolute;
  z-index: -1;
  filter: brightness(70%);
  object-fit: cover;
  @media only screen and (min-width: 421px) {
    width: 100%;
    height: 500px;
  }
`;

export const ImageLink = styled.a`
  text-decoration: none;
  height: 375px;
  @media only screen and (min-width: 421px) {
    height: 500px;
    position: relative;
    transition: 300ms ease-in-out transform;
    &:before {
      left: 0;
      width: 0;
      bottom: 0;
      z-index: 1;
      opacity: 0;
      content: '';
      height: 0.6rem;
      position: absolute;
      transition: 300ms ease-in-out opacity, 300ms ease-in-out width;
      background-image: linear-gradient(27deg, #ffc593 0%, #bc7198 49%, #5a77ff 95%);
    }
    &:hover::before {
      opacity: 1;
      width: 100%;
    }
    &:hover {
      transform: translateY(-2.4rem);
    }
  }
`;
