import { ImageSection } from './TopImageSection.css';

const TopImageSection = ({ desktopImg, tabScreenImg, hero, altText }) => {
  return (
    <ImageSection>
      <picture className="picture">
        <source media="(min-width:1024px)" srcSet={desktopImg}></source>
        <source media="(min-width:500px)" srcSet={tabScreenImg}></source>
        <img src={hero} alt={altText} className="hero-image"></img>
      </picture>
    </ImageSection>
  );
};

export default TopImageSection;
