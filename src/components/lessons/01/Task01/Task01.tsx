import * as React from 'react';
import { useState, useCallback } from 'react';
import Paragraph from '../../../Paragraph';
import { GeometricItemGrid } from './types';
import { Grid, Data, GeometricItem, Line, Dot, Button, Box, SquareInput, FlexContainer, VerticalFlexContainer, Image } from './components';
import TaskContainer from '../../../TaskContainer';
import { generateGrid, validateGrid, validateNumberOfTriangles } from './helpers';
import circleTriangleImage from './circle-triangle.png';

const Task = ({ rows = 6, columns = 13 }) => {
  const [geometricGrid, setGeometricGrid] = useState<GeometricItemGrid>(generateGrid(rows, columns));
  const [isValidated, setIsValidated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [numberOfTriangles, setNumberOfTriangles] = useState<number | string>('');

  const handleChangeNumberOfTriangles = useCallback(event => {
    const { value } = event.target;

    const isValid = +value || value === '';

    if (isValid) {
      setNumberOfTriangles(value);
    }
  }, []);

  const setCrossOrDot = useCallback(
    (index: number) => {
      const newGeometricGrid = [...geometricGrid];
      const currentItem = newGeometricGrid[index];

      if (!currentItem.crossed && !currentItem.dotted) {
        currentItem.crossed = true;
      } else if (currentItem.crossed) {
        currentItem.crossed = false;
        currentItem.dotted = true;
      } else {
        currentItem.dotted = false;
      }

      setGeometricGrid(newGeometricGrid);
    },
    [geometricGrid]
  );

  const validate = useCallback(() => {
    setIsValidated(true);
    setIsCorrect(validateGrid(geometricGrid) && validateNumberOfTriangles(geometricGrid, +numberOfTriangles));
  }, [geometricGrid, numberOfTriangles]);

  const restart = useCallback(() => {
    setGeometricGrid(generateGrid(rows, columns));
    setNumberOfTriangles('');
    setIsCorrect(false);
    setIsValidated(false);
  }, [rows, columns]);

  return (
    <TaskContainer>
      <Paragraph large>
        <u>Тест на распределение внимания:</u> в кружках поставь точку, а треугольники зачеркни. Посчитай количество треугольников, ответ
        запиши в ячейке.
      </Paragraph>
      <Paragraph>
        Чтобы <strong>зачеркнуть</strong> нажми по фигуре мышкой <strong>один раз</strong>, а чтобы поставить <strong>точку - два.</strong>
      </Paragraph>
      <FlexContainer>
        <Grid>
          {geometricGrid.map((item, itemIndex) => (
            <Data key={item.id} onClick={() => setCrossOrDot(itemIndex)}>
              <GeometricItem type={item.type} />
              {item.dotted && <Dot type={item.type} />}
              {item.crossed && <Line type={item.type} />}
            </Data>
          ))}
        </Grid>
        <VerticalFlexContainer>
          <Image src={circleTriangleImage} />
          <FlexContainer>
            <Box>
              <GeometricItem type="triangle" />
            </Box>
            <Box>
              <SquareInput type="text" value={numberOfTriangles} onChange={handleChangeNumberOfTriangles} />
            </Box>
          </FlexContainer>
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
