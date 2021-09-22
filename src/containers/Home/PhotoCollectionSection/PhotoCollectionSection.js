import React from 'react';
import { useViewPort } from '../../../helpers//CustomViewPort';
import PictureCollection from '../../../components/Home/PhotoCollection/PhotoCollection';
import { PhotoContainer, ImageItem, ImageLink } from './PhotoCollectionSection.css';

const PhotoSection = ({ image }) => {
  const [isSmallScreen] = useViewPort();

  return (
    <PhotoContainer>
      {image.slice(0, 4).map(img => {
        return (
          <ImageLink to="/stories" className="image-link" key={img.id}>
            {isSmallScreen ? (
              <ImageItem src={img.mobileImage} alt="" />
            ) : (
              <ImageItem src={img.desktopImage} alt="" />
            )}
            <PictureCollection img={img} />
          </ImageLink>
        );
      })}
    </PhotoContainer>
  );
};

export default PhotoSection;
