import React from 'react';
import { ISocialButtonProps } from './props';
import SocialItem from './SocialItem';
import { LocalOffer as ReleasesIcon } from '@material-ui/icons';

const Releases: React.FC<ISocialButtonProps> = ({ className }) => {
  return (
    <SocialItem
      className={className}
      href="https://github.com/damonhook/warcry-statshammer/releases"
      text="Releases"
      icon={<ReleasesIcon />}
    />
  );
};

export default Releases;
