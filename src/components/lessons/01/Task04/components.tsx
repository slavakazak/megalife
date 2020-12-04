import styled from '@emotion/styled';

export const Button = styled.button``;

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 950px) {
    margin-left: -30px;
    flex-direction: column;
  }
`;

export const InstructionContainer = styled.div`
  width: 100%;
  font-size: 2.5em;
  letter-spacing: 0.04em;
  font-weight: normal;

  @media (max-width: 950px) {
    padding-top: 10px;
    padding-bottom: 10px;

    font-size: 1.5em;
  }
`;

export const AnswerInput = styled.input`
  margin: 10px;
`;
