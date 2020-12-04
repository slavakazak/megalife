import styled from '@emotion/styled';
import { widths } from '../../../../styles/variables';
import { getEmSize } from '../../../../styles/mixins';

export const DndContainer = styled.div`
  position: relative;
  height: 100%;
  max-width: ${getEmSize(widths.lg)}em;
  background-color: #969696;
`;

export const DraggableContainer = styled.div`
  width: 50%;

  display: inline-flex;
  align-items: center;
  width: auto;
  /* justify-content: space-between; */
  @media (max-width: 1200px) {
    margin-top: 20px;
  }
`;

export const IconsContainer = styled.div`
  width: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const DeleteField = styled.div``;

export const Figure = styled.div`
  width: 110px;
  height: 110px;
  margin: 2px;

  @media (max-width: 1200px) {
    margin: 5px;
    width: 14vw;
    height: 14vw;
  }
`;

export const FiguresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Picture = styled.div`
  max-height: 185px;
  max-width: 185px;

  width: 25vw;
  height: 25vw;
`;
export const TrashContainer = styled.div<{ isHover: boolean }>`
  max-height: 185px;
  max-width: 185px;

  height: 25vw;
  width: 25vw;

  border: 2px solid ${({ isHover }) => (isHover ? 'white' : 'black')};
`;
