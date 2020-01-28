import React, { useRef } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { XYCoord } from 'dnd-core';
import clsx from 'clsx';

interface IStyleProps {
  isDragging: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: ({ isDragging }: IStyleProps) => ({
    opacity: isDragging ? 0.5 : 1,
  }),
}));

interface IDragItem {
  index: number;
  id: string;
  type: string;
}

interface IDraggableItemProps {
  itemCollection: string;
  index: number;
  id: string | number;
  onMove: (dragIndex: number, hoverIndex: number) => void;
  handleRef: React.RefObject<HTMLDivElement>;
  className?: string;
  children?: React.ReactNode;
}

const DraggableItem = ({
  itemCollection,
  index,
  id,
  onMove,
  handleRef,
  className,
  children,
}: IDraggableItemProps) => {
  const handleMove = (dragIndex: number, hoverIndex: number) => {
    onMove(dragIndex, hoverIndex);
  };

  const ref = useRef<HTMLDivElement>(null);
  const [{ hovered }, drop] = useDrop({
    accept: itemCollection,
    hover(item: IDragItem, monitor: DropTargetMonitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current!.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      handleMove(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    collect: (monitor: any) => ({
      hovered: monitor.isOver(),
    }),
  });
  const [, dragHandle, dragContainer] = useDrag({
    item: { type: itemCollection, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const classes = useStyles({ isDragging: hovered });

  drop(dragContainer(ref));
  dragHandle(handleRef);

  return (
    <div ref={ref} className={clsx(classes.card, className)}>
      {children}
    </div>
  );
};

export default DraggableItem;
