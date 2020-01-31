import Fighter from 'components/Fighter';
import React from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { IFighter } from 'types/fighter';

interface IDraggableFighterProps {
  fighter: IFighter;
  index: number;
  draggableId: string;
  className?: string;
}
const DraggableFighter = React.memo(({ fighter, index, draggableId, className }: IDraggableFighterProps) => {
  return (
    <Draggable index={index} draggableId={draggableId}>
      {(provided: DraggableProvided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} className={className}>
          <Fighter fighter={fighter} index={index} dragHandleProps={provided.dragHandleProps} />
        </div>
      )}
    </Draggable>
  );
});

export default DraggableFighter;
