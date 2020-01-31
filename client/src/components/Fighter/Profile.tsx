import React, { useRef } from 'react';
import { TextField, Switch, IconButton } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { IProfile, IDamage } from 'types/fighter';
import { Delete, DragHandle } from '@material-ui/icons';
import { fighters as fightersStore } from 'store/slices';
import { useDispatch } from 'react-redux';
import DraggableItem from 'components/DraggableItem';
import DamageField from 'components/DamageField';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  profile: {
    margin: theme.spacing(0, 0, 1, 1),
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
}

const Profile = ({ fighterIndex, profileIndex, profile, deleteEnabled = true }: IProfileProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleRef = useRef<HTMLDivElement>(null);

  const handleDeleteProfile = () => {
    dispatch(fightersStore.actions.deleteProfile({ index: fighterIndex, profileIndex }));
  };

  const handleMoveProfile = (dragIndex: number, hoverIndex: number) => {
    dispatch(
      fightersStore.actions.moveProfile({
        index: fighterIndex,
        profileIndex: dragIndex,
        newProfileIndex: hoverIndex,
      }),
    );
  };

  const handleEditProfile = (name: string, value: any) => {
    dispatch(
      fightersStore.actions.editProfile({
        index: fighterIndex,
        profileIndex,
        name,
        value,
      }),
    );
  };

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
    <DraggableItem
      itemCollection={`profiles-${fighterIndex}`}
      index={profileIndex}
      id={fighterIndex ?? profileIndex}
      onMove={handleMoveProfile}
      handleRef={handleRef}
      className={classes.profile}
    >
      <div ref={handleRef}>
        <DragHandle cursor="move" />
      </div>
      <Switch checked={profile.active} onChange={handleSetActive} disabled={!deleteEnabled} />
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
      <IconButton onClick={handleDeleteProfile} disabled={!deleteEnabled}>
        <Delete />
      </IconButton>
    </DraggableItem>
  );
};

export default Profile;
