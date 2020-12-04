import * as React from 'react';
import { useRef, useCallback, useState } from 'react';
import DrawCanvas from 'react-canvas-draw';
import useWindowWidth from '../../../../hooks/useWindowWidth';
import Paragraph from '../../../Paragraph';
import TaskContainer from '../../../TaskContainer';
import triggerRenderContainer from '../../../../hoks/triggerRenderContainer';
import { Button, AnswerInput, FlexContainer } from './components';
import hiddenLetters from './hidden-letters.png';

const Task = () => {
  const width = useWindowWidth();

  const drawCanvasRef = useRef<DrawCanvas>(null);

  const [answer, setAnswer] = useState<string | number>('');
  const [isValidated, setIsValidated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerChange = useCallback(event => {
    const { value } = event.target;

    const isValid = +value || value === '';

    if (isValid) {
      setAnswer(value);
    }
  }, []);

  const validate = useCallback(() => {
    setIsValidated(true);

    setIsCorrect(+answer === 6);
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
        <u>Обведи:</u> все спрятанные буквы «А» на картинке:
      </Paragraph>
      <FlexContainer>
        <DrawCanvas
          ref={drawCanvasRef}
          imgSrc={hiddenLetters}
          // eslint-disable-next-line no-nested-ternary
          canvasWidth={width >= 900 ? 900 : width <= 500 ? 300 : width / 1.2}
          // eslint-disable-next-line no-nested-ternary
          canvasHeight={width >= 900 ? 450 : width <= 500 ? 150 : width / 2.4}
          brushRadius={3}
          lazyRadius={0}
          brushColor="blue"
        />
      </FlexContainer>

      <Paragraph>Сколько спрятанных букв ты нашёл? </Paragraph>

      <Button onClick={validate}>Проверить</Button>
      <Button onClick={clear}>Начать заново</Button>
      <AnswerInput type="text" value={answer} onChange={handleAnswerChange} />
      {isValidated ? (
        <Paragraph>{isCorrect ? 'Молодец! Всё верно!' : 'Ты где-то ошибся. Попробуй ещё раз!'}</Paragraph>
      ) : (
        <Paragraph>:-)</Paragraph>
      )}
    </TaskContainer>
  );
};

export default triggerRenderContainer(Task);
