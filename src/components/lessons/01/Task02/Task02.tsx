import * as React from 'react';
import { useState, useCallback } from 'react';
import Paragraph from '../../../Paragraph';
import { GeometricItemGrid } from './types';
import { Grid, GridItem, GeometricItem, Line, Button, FlexContainer, VerticalFlexContainer, Image } from './components';
import TaskContainer from '../../../TaskContainer';
import { generateGrid, validateGrid } from './helpers';
import crossImage from './cross.png';

const Task = ({ rows = 8, columns = 10 }) => {
  const [geometricGrid, setGeometricGrid] = useState<GeometricItemGrid>(generateGrid(rows, columns));
  const [isValidated, setIsValidated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const setCrossOrDot = useCallback(
    (index: number) => {
      const newGeometricGrid = [...geometricGrid];
      const currentItem = newGeometricGrid[index];
      currentItem.crossed = !currentItem.crossed;

      setGeometricGrid(newGeometricGrid);
    },
    [geometricGrid]
  );

  const validate = useCallback(() => {
    setIsValidated(true);
    setIsCorrect(validateGrid(geometricGrid));
  }, [geometricGrid]);

  const restart = useCallback(() => {
    setGeometricGrid(generateGrid(rows, columns));
    setIsCorrect(false);
    setIsValidated(false);
  }, []);

  return (
    <TaskContainer>
      <Paragraph large>
        <u>Тест на устойчивость внимания:</u> зачеркни все крестики.
      </Paragraph>
      <Paragraph>
        Чтобы <strong>зачеркнуть</strong> нажми по фигуре мышкой.
      </Paragraph>
      <FlexContainer>
        <Grid>
          {geometricGrid.map((item, itemIndex) => (
            <GridItem key={item.id} onClick={() => setCrossOrDot(itemIndex)}>
              <GeometricItem type={item.type} />
              {item.crossed && <Line type={item.type} />}
            </GridItem>
          ))}
        </Grid>
        <VerticalFlexContainer>
          <Image src={crossImage} />
        </VerticalFlexContainer>
      </FlexContainer>
      <Button onClick={validate}>Проверить</Button>
      <Button onClick={restart}>Начать заново</Button>
      {isValidated ? (
        <Paragraph>{isCorrect ? 'Молодец! Всё верно!' : 'Ты где-то ошибся. Присмотрись повнимательнее!'}</Paragraph>
      ) : (
        <Paragraph>:-)</Paragraph>
      )}
    </TaskContainer>
  );
};

export default Task;
