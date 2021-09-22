import GetAnInvite from '../../GetAnInviteLink/GetAnInviteLink';
import { TextSection, HeadLine, Para } from './TopTextSection.css';

const TopTextSection = ({ heading, paragraph, linkName, showInviteLink, blackBackgroundColor }) => {
  return (
    <TextSection>
      <HeadLine showInviteLink={showInviteLink}>{heading}</HeadLine>
      <Para>{paragraph}</Para>
      {showInviteLink ? (
        <GetAnInvite blackBackgroundColor={blackBackgroundColor} linkName={linkName} />
      ) : (
        ''
      )}
    </TextSection>
  );
};

export default TopTextSection;
