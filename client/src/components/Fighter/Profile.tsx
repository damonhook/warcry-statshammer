import { IconButton, Switch, TextField } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Delete, DragHandle } from '@material-ui/icons';
import appConfig from 'appConfig';
import clsx from 'clsx';
import DamageField from 'components/DamageField';
import React, { useCallback, useEffect } from 'react';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { fighters as fightersStore } from 'store/slices';
import { IDamage, IProfile } from 'types/fighter';

const useStyles = makeStyles((theme: Theme) => ({
  profile: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
  },
  field: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexBasis: '45%',
    },
  },
  range: {
    [theme.breakpoints.down('xs')]: {
      flexBasis: '100%',
    },
  },
  damage: {
    [theme.breakpoints.up('md')]: {
      flex: 2,
    },
  },
}));

interface IProfileProps {
  fighterIndex: number;
  profileIndex: number;
  profile: IProfile;
  deleteEnabled?: boolean;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
}

const Profile = ({
  fighterIndex,
  profileIndex,
  profile,
  dragHandleProps,
  deleteEnabled = true,
}: IProfileProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeleteProfile = () => {
    dispatch(fightersStore.actions.deleteProfile({ index: fighterIndex, profileIndex }));
  };

  const handleEditProfile = useCallback(
    (name: string, value: any) => {
      dispatch(
        fightersStore.actions.editProfile({
          index: fighterIndex,
          profileIndex,
          name,
          value,
        }),
      );
    },
    [dispatch, fighterIndex, profileIndex],
  );

  useEffect(() => {
    if (profile.attacks > appConfig.limits.maxAttacks) {
      handleEditProfile('attacks', appConfig.limits.maxAttacks);
    }
  }, [handleEditProfile, profile]);

  const handleSetActive = () => {
    dispatch(fightersStore.actions.setActiveProfile({ index: fighterIndex, profileIndex }));
  };

  const handleEditRange = (event: any) => {
    handleEditProfile('range', event.target.value);
  };

  const handleEditAttacks = (event: any) => {
    handleEditProfile('attacks', event.target.value);
  };

  const handleEditStrength = (event: any) => {
    handleEditProfile('strength', event.target.value);
  };

  const handleEditDamage = (newDamage: IDamage) => {
    handleEditProfile('damage', newDamage);
  };

  return (
    <div className={classes.profile}>
      <div {...dragHandleProps} tabIndex={-1}>
        <DragHandle cursor="move" />
      </div>
      <Switch checked={profile.active} onChange={handleSetActive} disabled={!deleteEnabled} tabIndex={1} />
      <div className={classes.item}>
        <TextField
          className={clsx(classes.field, classes.range)}
          label="Range"
          variant="filled"
          value={profile.range}
          onChange={handleEditRange}
          size="small"
        />
        <TextField
          className={classes.field}
          type="number"
          label="Attacks"
          variant="filled"
          value={profile.attacks}
          onChange={handleEditAttacks}
          inputProps={{
            min: 0,
            max: appConfig.limits.maxAttacks,
          }}
          size="small"
        />
        <TextField
          className={classes.field}
          type="number"
          label="Strength"
          variant="filled"
          value={profile.strength}
          onChange={handleEditStrength}
          size="small"
        />
        <DamageField
          className={clsx(classes.field, classes.damage)}
          damage={profile.damage}
          setDamage={handleEditDamage}
        />
      </div>
      <IconButton onClick={handleDeleteProfile} disabled={!deleteEnabled} tabIndex={1}>
        <Delete />
      </IconButton>
    </div>
  );
};

export default Profile;
