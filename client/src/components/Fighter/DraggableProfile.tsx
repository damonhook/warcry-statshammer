import React from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { IProfile } from 'types/fighter';

import Profile from './Profile';

interface IDraggableProfileProps {
  fighterIndex: number;
  profileIndex: number;
  profile: IProfile;
  deleteEnabled?: boolean;
  draggableId: string;
  className?: string;
}
const DraggableProfile = React.memo(
  ({
    fighterIndex,
    profileIndex,
    profile,
    draggableId,
    deleteEnabled,
    className,
  }: IDraggableProfileProps) => {
    return (
      <Draggable index={profileIndex} draggableId={draggableId}>
        {(provided: DraggableProvided) => (
          <div ref={provided.innerRef} {...provided.draggableProps} className={className}>
            <Profile
              fighterIndex={fighterIndex}
              profileIndex={profileIndex}
              profile={profile}
              deleteEnabled={deleteEnabled}
              dragHandleProps={provided.dragHandleProps}
            />
          </div>
        )}
      </Draggable>
    );
  },
);

export default DraggableProfile;
