import React from 'react';
import { ISocialButtonProps } from './props';
import SocialItem from './SocialItem';
import { Reddit as RedditIcon } from '@material-ui/icons';

const Reddit: React.FC<ISocialButtonProps> = ({ className }) => {
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
