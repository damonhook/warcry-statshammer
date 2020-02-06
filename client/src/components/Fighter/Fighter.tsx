import { Card, CardContent, IconButton, TextField } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Add, Delete, DragHandle } from '@material-ui/icons';
import appConfig from 'appConfig';
import DividerButton from 'components/DividerButton';
import React from 'react';
import {
  DragDropContext,
  DraggableProvidedDragHandleProps,
  Droppable,
  DroppableProvided,
  DropResult,
} from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { fighters as fightersStore, notifications as notificationsStore } from 'store/slices';
import { IFighter } from 'types/fighter';

import DraggableProfile from './DraggableProfile';

const useStyles = makeStyles((theme: Theme) => ({
  fighter: {},
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
  profile: {
    margin: theme.spacing(0, 0, 1, 1),
  },
}));

interface IFighterProps {
  fighter: IFighter;
  index: number;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
}
const Fighter = ({ fighter, index, dragHandleProps }: IFighterProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleAddProfile = () => {
    dispatch(fightersStore.actions.addProfile({ index }));
  };

  const handleDeleteFighter = () => {
    dispatch(
      notificationsStore.actions.addNotification({
        message: 'Deleted Fighter',
        action: {
          label: 'Undo',
          onClick: () => dispatch(fightersStore.actions.insertFighter({ fighter, index })),
        },
      }),
    );
    dispatch(fightersStore.actions.deleteFighter({ index }));
  };

  const handleEditName = (event: any) => {
    dispatch(fightersStore.actions.editFighterName({ index, name: event.target.value }));
  };

  const handleMoveProfile = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    dispatch(
      fightersStore.actions.moveProfile({
        index,
        profileIndex: source.index,
        newProfileIndex: destination.index,
      }),
    );
  };

  const isAddProfileDisabled = fighter.profiles.length >= appConfig.limits.profiles;

  return (
    <div className={classes.fighter}>
      <Card>
        <CardContent>
          <div className={classes.header}>
            <div {...dragHandleProps} tabIndex={-1}>
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
            <IconButton onClick={handleDeleteFighter} tabIndex={1}>
              <Delete />
            </IconButton>
          </div>
          <DragDropContext onDragEnd={handleMoveProfile}>
            <Droppable droppableId={`profiles-${index}`}>
              {(provided: DroppableProvided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {fighter.profiles.map((profile, profileIndex) => (
                    <DraggableProfile
                      fighterIndex={index}
                      profileIndex={profileIndex}
                      profile={profile}
                      key={profile.uuid}
                      deleteEnabled={fighter.profiles.length > 1}
                      draggableId={profile.uuid ?? String(profileIndex)}
                      className={classes.profile}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
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
    </div>
  );
};

export default Fighter;
