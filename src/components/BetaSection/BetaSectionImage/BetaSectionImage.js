import { ImageSection } from './BetaSectionImage.css';
import betaImage from '../../../assets/shared/mobile/bg-beta.jpg';
import desktopBeta from '../../../assets/shared/desktop/bg-beta.jpg';
import tabBeta from '../../../assets/shared/tablet/bg-beta.jpg';

const BetaSectionImage = () => {
  return (
    <ImageSection>
      <picture className="picture">
        <source media="(min-width:800px)" srcSet={desktopBeta}></source>
        <source media="(min-width:500px)" className="source" srcSet={tabBeta}></source>
        <img src={betaImage} alt=" a man holding camera"></img>
      </picture>
    </ImageSection>
  );
};

export default BetaSectionImage;
