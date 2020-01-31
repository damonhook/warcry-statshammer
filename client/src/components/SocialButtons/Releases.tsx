import { LocalOffer as ReleasesIcon } from '@material-ui/icons';
import React from 'react';

import { ISocialButtonProps } from './props';
import SocialItem from './SocialItem';

const Releases = ({ className }: ISocialButtonProps) => {
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
