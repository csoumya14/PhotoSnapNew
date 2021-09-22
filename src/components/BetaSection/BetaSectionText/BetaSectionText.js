import GetAnInvite from '../../GetAnInviteLink/GetAnInviteLink';
import { TextSection, PinkRectangle, Heading, Link } from './BetaSectionText.css';

const BetaText = () => {
  const linkName = 'Get an invite';
  const blackBackgroundColor = true;

  return (
    <TextSection>
      <PinkRectangle></PinkRectangle>
      <Heading>We're in beta. Get your invite today!</Heading>
      <Link>
        <GetAnInvite linkName={linkName} blackBackgroundColor={blackBackgroundColor} />
      </Link>
    </TextSection>
  );
};

export default BetaText;
