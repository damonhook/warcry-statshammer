import { Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Add } from '@material-ui/icons';
import appConfig from 'appConfig';
import React from 'react';
import { DragDropContext, Droppable, DroppableProvided, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { fighters as fightersStore } from 'store/slices';
import { IStore } from 'types/store';

import DraggableFighter from './DraggableFighter';

const useStyles = makeStyles((theme: Theme) => ({
  fighters: {
    paddingBottom: theme.spacing(2),
  },
  fighter: {
    marginBottom: theme.spacing(2),
  },
}));

const Fighters = () => {
  const classes = useStyles();
  const fighters = useSelector((state: IStore) => state.fighters);
  const dispatch = useDispatch();

  const handleAddFighter = () => {
    dispatch(fightersStore.actions.addFighter());
  };

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    dispatch(fightersStore.actions.moveFighter({ index: source.index, newIndex: destination.index }));
  };

  const isAddFighterDisabled = fighters.length >= appConfig.limits.fighters;

  return (
    <div className={classes.fighters}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="fighters">
          {(provided: DroppableProvided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {fighters.map((fighter, index) => (
                <DraggableFighter
                  fighter={fighter}
                  index={index}
                  key={fighter.uuid}
                  draggableId={fighter.uuid ?? String(index)}
                  className={classes.fighter}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddFighter}
        disabled={isAddFighterDisabled}
        startIcon={<Add />}
      >
        Add a Fighter
      </Button>
    </div>
  );
};

export default Fighters;
