import React from 'react';
import Links from '../../components/BottomSectionLinks/BottomSectionLinks';
import SocialIconLinks from '../../components/BottomSectionSocialLinks/BottomSectionSocialLinks';
import logo from '../../assets/shared/desktop/logo.svg';
import GetAnInvite from '../../components/GetAnInviteLink/GetAnInviteLink';
import { BottomContainer, LogoImg, InviteLink, CopyRightInfo } from './BottomSection.css';

const BottomSection = () => {
  const linkName = 'Get an invite';
  const blackBackgroundColor = true;
  return (
    <BottomContainer>
      <LogoImg src={logo} alt="" />
      <SocialIconLinks />
      <Links />
      <InviteLink>
        <GetAnInvite linkName={linkName} blackBackgroundColor={blackBackgroundColor} />
      </InviteLink>
      <CopyRightInfo>Copyright 2019. All Rights Reserved</CopyRightInfo>
    </BottomContainer>
  );
};

export default BottomSection;
