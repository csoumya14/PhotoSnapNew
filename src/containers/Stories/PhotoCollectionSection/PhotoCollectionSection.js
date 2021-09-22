import React from 'react';
import Figure from '../../../components/Stories/PhotoSectionFigure/PhotoSectionFigure';
import { useViewPort } from '../../../helpers/CustomViewPort';
import { PhotoContainer, ImageItem, ImageLink } from './PhotoCollectionSection.css';

const PhotoSection = ({ image }) => {
  const [isSmallScreen] = useViewPort();
  return (
    <PhotoContainer>
      {image.map(item => {
        return (
          <ImageLink href="#/" key={item.id}>
            {isSmallScreen ? (
              <ImageItem src={item.mobileImage} alt="" />
            ) : (
              <ImageItem src={item.desktopImage} alt="" />
            )}
            <Figure item={item} />
          </ImageLink>
        );
      })}
    </PhotoContainer>
  );
};

export default PhotoSection;

/*
--transition: 300ms ease-in-out;


 .image-link:hover {
      -moz-transform: translate(-2px, -2px);
      -ms-transform: translate(-2px, -2px);
      -o-transform: translate(-2px, -2px);
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
*/
