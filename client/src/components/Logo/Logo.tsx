import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

type IStyleProps = { width: number | string | 'auto'; height: number | string | 'auto' };
const useStyles = makeStyles(() => ({
  logo: (props: IStyleProps) => ({
    textAlign: 'center',
    width: props.width,
    height: props.height,
  }),
  icon: (props: IStyleProps) => ({
    maxWidth: '100%',
    height: props.height,
  }),
}));

interface ILogoProps {
  width?: number | string | 'auto';
  height?: number | string | 'auto';
  className?: string;
}
const Logo = ({ width = 'auto', height = 'auto', className }: ILogoProps) => {
  const classes = useStyles({ width, height });

  return (
    <Icon className={className} classes={{ root: classes.logo }}>
      <img src="/logo.svg" alt="Warcry Statshammer" className={classes.icon} />
    </Icon>
  );
};

export default Logo;
