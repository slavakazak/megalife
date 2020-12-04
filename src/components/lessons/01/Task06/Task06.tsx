/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable global-require */
import * as React from 'react';
import { useState } from 'react';
import Paragraph from '../../../Paragraph';
import TaskContainer from '../../../TaskContainer';
import {
  DndContainer,
  Toolbar,
  DeleteField,
  Figure,
  Picture,
  FiguresContainer,
  IconsContainer,
  TrashContainer,
  DraggableContainer
} from './components';
import trash from './trash.png';
import house from './house.png';
import './index.css';

import square from '../../../../assets/images/square.png';
import semiCircle from '../../../../assets/images/semi-circle.png';
import circle from '../../../../assets/images/circle.png';
import triangle from '../../../../assets/images/triangle.png';

let Draggable: any = {
  DeleteTarget: () => null,
  DndProvider: () => null,
  Droppable: () => null,
  TransformableTarget: () => null
};

if (typeof window !== 'undefined') {
  Draggable = require('react-transformable-draggable');
}

const { DeleteTarget, DndProvider, Droppable, TransformableTarget } = Draggable;

interface DraggableItem {
  id: string;
}

const Task = () => {
  const [deleteIsHover, setDeleteIsHover] = useState(false);
  const [renderItems, setRenderItems] = useState<DraggableItem[]>([]);

  const onDelete = (id: string) => {
    const updatedRenderItems = renderItems.filter(item => item.id !== id);

    setRenderItems(updatedRenderItems);
  };

  const onHoverEnd = () => {
    setDeleteIsHover(false);
  };

  const onHoverStart = () => {
    setDeleteIsHover(true);
  };

  return (
    <TaskContainer>
      <Paragraph large>
        <u>Придумай</u> что можно нарисовать из этих геометрических фигур. Каждую фигуру можно использовать по нескольку раз и можно менять
        их размеры. Но другие фигуры использовать нельзя.
      </Paragraph>
      <DndContainer>
        <DndProvider>
          <Toolbar>
            <IconsContainer>
              <Picture>
                <img alt="example" src={house} />
              </Picture>
              <DeleteTarget onDelete={onDelete} onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
                <DeleteField>
                  <TrashContainer isHover={deleteIsHover}>
                    <img alt="trash-can" src={trash} />
                  </TrashContainer>
                </DeleteField>
              </DeleteTarget>
            </IconsContainer>

            <DraggableContainer>
              <FiguresContainer>
                <Droppable type="square" hideBoundingBox>
                  <Figure>
                    <img src={square} alt="square" />
                  </Figure>
                </Droppable>
                <Droppable type="circle" hideBoundingBox>
                  <Figure>
                    <img src={circle} alt="circle" />
                  </Figure>
                </Droppable>
                <Droppable type="semi-circle" hideBoundingBox>
                  <Figure>
                    <img src={semiCircle} alt="semi-circle" />
                  </Figure>
                </Droppable>
                <Droppable type="triangle" hideBoundingBox>
                  <Figure>
                    <img src={triangle} alt="triangle" />
                  </Figure>
                </Droppable>
              </FiguresContainer>
            </DraggableContainer>
          </Toolbar>
          <TransformableTarget className="app-transformable-target" />
        </DndProvider>
      </DndContainer>
    </TaskContainer>
  );
};

export default Task;
