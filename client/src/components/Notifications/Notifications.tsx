import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useIsMobile } from 'hooks';
import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from 'types/store';

import Notification from './Notification';

const useStyles = makeStyles(theme => ({
  notifications: {
    position: 'fixed',
    right: 'auto',
    bottom: '24px',
    padding: '0 1em',
    zIndex: theme.zIndex.snackbar,
  },
  mobile: {
    left: 0,
    right: 0,
    paddingLeft: 0,
    paddingBottom: theme.spacing(11.5),
  },
}));

/**
 * A component used to display the current notifications
 */
const Notifications = () => {
  const classes = useStyles();
  const mobile = useIsMobile();
  const notifications = useSelector((state: IStore) => state.notifications);

  return (
    <div className={clsx(classes.notifications, { [classes.mobile]: mobile })}>
      {notifications.map(({ message, key, variant, action }) => (
        <Notification message={message} notificationId={key} key={key} variant={variant} action={action} />
      ))}
    </div>
  );
};

export default Notifications;
