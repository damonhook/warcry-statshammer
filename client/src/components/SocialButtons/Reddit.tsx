import { Reddit as RedditIcon } from '@material-ui/icons';
import React from 'react';

import { ISocialButtonProps } from './props';
import SocialItem from './SocialItem';

const Reddit = ({ className }: ISocialButtonProps) => {
  return (
    <SocialItem
      className={className}
      href="https://www.reddit.com/r/WarcryStatshammer"
      text="Reddit"
      icon={<RedditIcon />}
    />
  );
};

export default Reddit;
