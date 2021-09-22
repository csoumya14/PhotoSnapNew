import hero from '../../../assets/stories/mobile/moon-of-appalacia.jpg';
import desktopImg from '../../../assets/stories/desktop/moon-of-appalacia.jpg';
import tabScreenImg from '../../../assets/stories/tablet/moon-of-appalacia.jpg';
import { ImageSection } from './FirstSectionImage.css';
const Image = () => {
  return (
    <ImageSection>
      <picture className="picture">
        <source media="(min-width:1024px)" srcSet={desktopImg}></source>
        <source media="(min-width:500px)" srcSet={tabScreenImg}></source>
        <img src={hero} alt="" className="hero-image"></img>
      </picture>
    </ImageSection>
  );
};

export default Image;
