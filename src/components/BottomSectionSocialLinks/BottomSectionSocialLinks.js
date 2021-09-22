import socialIconLinks from '../../data/SocialIconLinkData';
import { SocialIconContainer } from './BottomSectionSocialLinks.css';

const SocialIconLinks = () => {
  return (
    <SocialIconContainer>
      {socialIconLinks.map(icons => (
        <a href="/#" key={icons.id}>
          <img className="logo-image" src={icons.logoImage} alt={icons.altText} />
        </a>
      ))}
    </SocialIconContainer>
  );
};

export default SocialIconLinks;
