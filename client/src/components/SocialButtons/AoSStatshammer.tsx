import { AoSStatshammerIcon } from 'components/Icons';
import React from 'react';

import { ISocialButtonProps } from './props';
import SocialItem from './SocialItem';

const Github = ({ className }: ISocialButtonProps) => {
  return (
    <SocialItem
      className={className}
      href="https://aos-statshammer.herokuapp.com/"
      text="AoS Stats"
      icon={<AoSStatshammerIcon />}
    />
  );
};

export default Github;
