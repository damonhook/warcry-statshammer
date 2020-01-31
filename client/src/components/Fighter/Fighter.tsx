import { Card, CardContent, IconButton, TextField } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Add, Delete, DragHandle } from '@material-ui/icons';
import appConfig from 'appConfig';
import DividerButton from 'components/DividerButton';
import DraggableItem from 'components/DraggableItem';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fighters as fightersStore } from 'store/slices';
import { IFighter } from 'types/fighter';

import Profile from './Profile';

const useStyles = makeStyles((theme: Theme) => ({
  fighter: {
    marginBottom: theme.spacing(2),
  },
  handle: {
    cursor: 'move',
  },
  fighterName: {
    margin: theme.spacing(0, 2),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
}));

interface IFighterProps {
  fighter: IFighter;
  index: number;
}

const Fighter = ({ fighter, index }: IFighterProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleRef = useRef<HTMLDivElement>(null);

  const handleMove = (dragIndex: number, hoverIndex: number) => {
    dispatch(fightersStore.actions.moveFighter({ index: dragIndex, newIndex: hoverIndex }));
  };

  const handleAddProfile = () => {
    dispatch(fightersStore.actions.addProfile({ index }));
  };

  const handleDeleteProfile = () => {
    dispatch(fightersStore.actions.deleteFighter({ index }));
  };

  const handleEditName = event => {
    dispatch(fightersStore.actions.editFighterName({ index, name: event.target.value }));
  };

  const isAddProfileDisabled = fighter.profiles.length >= appConfig.limits.profiles;

  return (
    <DraggableItem
      itemCollection="fighters"
      index={index}
      id={fighter.uuid ?? index}
      onMove={handleMove}
      handleRef={handleRef}
      className={classes.fighter}
    >
      <Card>
        <CardContent>
          <div className={classes.header}>
            <div ref={handleRef}>
              <DragHandle className={classes.handle} fontSize="large" />
            </div>
            <TextField
              className={classes.fighterName}
              label="Fighter Name"
              variant="outlined"
              fullWidth
              value={fighter.name}
              onChange={handleEditName}
            />
            <IconButton onClick={handleDeleteProfile}>
              <Delete />
            </IconButton>
          </div>
          <div>
            {fighter.profiles.map((profile, profileIndex) => (
              <Profile
                fighterIndex={index}
                profileIndex={profileIndex}
                profile={profile}
                deleteEnabled={fighter.profiles.length > 1}
                key={profile.uuid ?? profileIndex}
              />
            ))}
          </div>
          <DividerButton
            onClick={handleAddProfile}
            variant="contained"
            color="secondary"
            startIcon={<Add />}
            disabled={isAddProfileDisabled}
          >
            Add Profile
          </DividerButton>
        </CardContent>
      </Card>
    </DraggableItem>
  );
};

export default Fighter;
