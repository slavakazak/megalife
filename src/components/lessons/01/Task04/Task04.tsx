import * as React from 'react';
import { useRef, useCallback, useState } from 'react';
import DrawCanvas from 'react-canvas-draw';
import Paragraph from '../../../Paragraph';
import TaskContainer from '../../../TaskContainer';
import { Button, FlexContainer, InstructionContainer, AnswerInput } from './components';
import checkedField from './checked-field.png';
import triggerRenderContainer from '../../../../hoks/triggerRenderContainer';
import useWindowWidth from '../../../../hooks/useWindowWidth';

const Task = () => {
  const drawCanvasRef = useRef<DrawCanvas>(null);

  const width = useWindowWidth();

  const [answer, setAnswer] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerChange = useCallback(event => {
    const { value } = event.target;

    setAnswer(value);
  }, []);

  const validate = useCallback(() => {
    setIsValidated(true);

    const preparedAnswer = answer.trim().toLocaleLowerCase();

    setIsCorrect(preparedAnswer === 'цветок' || preparedAnswer === 'цветочек');
  }, [answer]);

  const clear = useCallback(() => {
    const drawCanvas = drawCanvasRef.current;

    if (drawCanvas) {
      drawCanvas.clear();
    }

    setIsValidated(false);
    setAnswer('');
  }, []);

  return (
    <TaskContainer>
      <Paragraph large>
        <u>Графический диктант:</u> количество отсчитываемых клеток обозначается цифрой, а направление обозначается стрелкой. Ответ
        получившегося предмета запишите в прямоугольнике.
      </Paragraph>
      <InstructionContainer>
        →1 ↑1 →3 ↓1 →1 ↓3 ←1 ↓1 ←1 ↓3 →1 ↑1 →1 ↓2 ←1 ↓1 ←1 ↓2 ←1 ↑2 ←1 ↑1 ←1 ↑2 →1 ↓1 →1 ↑3 ←1 ↑1 ←1 ↑3
      </InstructionContainer>
      <FlexContainer>
        <DrawCanvas
          ref={drawCanvasRef}
          imgSrc={checkedField}
          // eslint-disable-next-line no-nested-ternary
          canvasWidth={width >= 900 ? 800 : width <= 500 ? 300 : width / 1.2}
          // eslint-disable-next-line no-nested-ternary
          canvasHeight={width >= 900 ? 600 : width <= 500 ? 250 : width / 1.4}
          brushRadius={3}
          lazyRadius={0}
          brushColor="blue"
        />
      </FlexContainer>
      <AnswerInput type="text" value={answer} onChange={handleAnswerChange} />
      <Button onClick={validate}>Проверить</Button>
      <Button onClick={clear}>Начать заново</Button>

      {isValidated ? (
        <Paragraph>{isCorrect ? 'Молодец! Всё верно!' : 'Ты где-то ошибся. Попробуй ещё раз!'}</Paragraph>
      ) : (
        <Paragraph>:-)</Paragraph>
      )}
    </TaskContainer>
  );
};

export default triggerRenderContainer(Task);
