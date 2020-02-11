import { AppBar, DialogTitle, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import { useIsMobile } from 'hooks';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    display: 'flex',
  },
  appBar: {
    marginBottom: theme.spacing(3),
  },
  closeIcon: {
    marginRight: theme.spacing(1),
  },
}));

interface IToughnessHeaderProps {
  onClose: () => void;
}
const ToughnessHeader = ({ onClose }: IToughnessHeaderProps) => {
  const classes = useStyles();
  const mobile = useIsMobile();

  const handleClose = () => {
    onClose();
  };

  return mobile ? (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar>
        <IconButton onClick={handleClose} className={classes.closeIcon}>
          <Close />
        </IconButton>
        <Typography variant="h6">Customize Toughness Ranges</Typography>
      </Toolbar>
    </AppBar>
  ) : (
    <DialogTitle className={classes.title}>
      <IconButton onClick={handleClose} size="small" className={classes.closeIcon}>
        <Close />
      </IconButton>
      <span>Customize Toughness Ranges</span>
    </DialogTitle>
  );
};

export default ToughnessHeader;
