import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  max-width: 100%;

  @media only screen and (min-width: 421px) {
    display: grid;
    height: 750px;
    grid-template-columns: repeat(2, 50%);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    width: 100vw;
    height: 1000px;
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    width: 100vw;
    height: 500px;
  }
`;

export const ImageItem = styled.img`
  width: 100vw;
  height: 375px;
  z-index: -5;
  position: absolute;
  object-fit: cover;
  filter: brightness(70%);

  @media only screen and (min-width: 421px) {
    width: 50%;
    z-index: -1;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 1024px) {
    height: 500px;
  }
`;

export const ImageLink = styled(Link)`
  text-decoration: none;
  height: 375px;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    position: relative;
    display: block;
    height: 500px;
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
