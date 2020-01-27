import React from 'react';
import { ISocialButtonProps } from './props';
import SocialItem from './SocialItem';
import { GitHub as GitHubIcon } from '@material-ui/icons';

const Github: React.FC<ISocialButtonProps> = ({ className }) => {
  return (
    <SocialItem
      className={className}
      href="https://github.com/damonhook/warcry-statshammer"
      text="Github"
      icon={<GitHubIcon />}
    />
  );
};

export default Github;
