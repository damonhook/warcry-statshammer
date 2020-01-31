import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';

type IStyleProps = { fontSize: number };
const useStyles = makeStyles((theme: Theme) => ({
  logo: (props: IStyleProps) => ({
    fontSize: `${props.fontSize}rem`,
  }),
  icon: {
    height: '100%',
  },
}));

interface ILogoProps {
  fontSize?: number;
}
const Logo = ({ fontSize = 7 }: ILogoProps) => {
  const classes = useStyles({ fontSize });

  return (
    <Icon className={classes.logo}>
      <img src="/logo.svg" alt="Warcry Statshammer" className={classes.icon} />
    </Icon>
  );
};

export default Logo;
