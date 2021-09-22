import arrow from '../../assets/shared/desktop/arrow.svg';
import { LinkElement, ArrowImage } from './GetAnInviteLink.css';

const GetAnInvite = ({ linkName, blackBackgroundColor }) => {
  return (
    <LinkElement href="#/" blackBackgroundColor={blackBackgroundColor}>
      {linkName}
      <span>
        <ArrowImage blackBackgroundColor={blackBackgroundColor} src={arrow} alt=""></ArrowImage>
      </span>
    </LinkElement>
  );
};

export default GetAnInvite;
