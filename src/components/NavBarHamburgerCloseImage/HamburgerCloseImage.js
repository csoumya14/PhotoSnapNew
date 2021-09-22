import { ButtonImage, HamburgerImg, CloseImg } from './HamburgerCloseImage.css';
import menu from '../../assets/shared/mobile/menu.svg';
import closeButton from '../../assets/shared/mobile/close.svg';
const OpenCloseImage = ({ activatorRef, toggleNav, isOpen }) => {
  return (
    <ButtonImage
      aria-expanded="false"
      aria-haspopup="true"
      aria-controls="dropdown1"
      ref={activatorRef}
      onClick={toggleNav}
    >
      <HamburgerImg type="image" tabIndex="0" src={menu} alt="drop-down-button" isOpen={isOpen} />
      <CloseImg type="image" tabIndex="0" src={closeButton} alt="" isOpen={isOpen} />
    </ButtonImage>
  );
};

export default OpenCloseImage;
