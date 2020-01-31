import { GitHub as GitHubIcon } from '@material-ui/icons';
import React from 'react';

import { ISocialButtonProps } from './props';
import SocialItem from './SocialItem';

const Github = ({ className }: ISocialButtonProps) => {
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
