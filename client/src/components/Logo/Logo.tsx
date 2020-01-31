import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

type IStyleProps = { fontSize: number };
const useStyles = makeStyles(() => ({
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
