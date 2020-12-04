import * as React from 'react';
import styled from '@emotion/styled';
import { GeometricItemType } from './types';
import { colors } from '../../../../styles/variables';
import crossImage from './cross.png';

const GridLayout = styled.div`
  width: 85%;
  border-top: 2px solid black;
  border-left: 2px solid black;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(10, 1fr);
  margin: 10px 10px 20px 0px;
  @media (max-width: 900px) {
    margin-left: -30px;
    width: 100%;
  }
  @media (max-width: 800px) {
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(8, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-rows: repeat(16, 1fr);
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-rows: repeat(20, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Grid: React.FC = ({ children }) => (
  <GridLayout>
    <>{children}</>
  </GridLayout>
);

export const GridItem = styled.div`
  position: relative;
  padding: 10px;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  :hover {
    background-color: #00000028;
  }
`;

interface GeometricItemTypeProps {
  type: GeometricItemType;
}

const Square = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid ${colors.darkOrange};
  background-color: ${colors.orange};
`;

const Rhombus = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid ${colors.green};
  background-color: ${colors.salad};
  transform: rotate(45deg);
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid ${colors.darkOrange};
  border-radius: 30px;
  background-color: ${colors.orange};
`;

const Triangle = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 31px solid ${colors.purple};
`;

const Star = styled.div`
  position: relative;

  display: inline-block;
  width: 0;
  height: 0;

  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-bottom: 1.2em;

  border-right: 0.3em solid transparent;
  border-bottom: 0.7em solid #fc0;
  border-left: 0.3em solid transparent;

  font-size: 20px;

  &:before,
  &:after {
    content: '';

    display: block;
    width: 0;
    height: 0;

    position: absolute;
    top: 0.6em;
    left: -1em;

    border-right: 1em solid transparent;
    border-bottom: 0.7em solid #fc0;
    border-left: 1em solid transparent;

    transform: rotate(-35deg);
  }

  &:after {
    transform: rotate(35deg);
  }
`;

const Trapezoid = styled.div`
  border-top: 4em solid gray;
  border-left: 1em solid transparent;
  border-right: 1em solid transparent;
  height: 0;
  width: 4em;

  font-size: 7px;
`;

export const CrossImage = styled.img`
  height: 30px;
  width: 30px;
`;

export const GeometricItem: React.FC<GeometricItemTypeProps> = ({ type }) => {
  switch (type) {
    case 'square':
      return <Square />;
    case 'circle':
      return <Circle />;
    case 'triangle':
      return <Triangle />;
    case 'trapezoid':
      return <Trapezoid />;
    case 'star':
      return <Star />;
    case 'rhombus':
      return <Rhombus />;
    default:
      return <CrossImage src={crossImage} />;
  }
};

export const Line = styled.div<GeometricItemTypeProps>`
  position: absolute;
  height: 90%;
  width: 3px;
  left: 50%;
  top: 50%;
  transform: translate(${({ type }: GeometricItemTypeProps) => (type === 'triangle' ? '-100%' : '50%')}, -50%) rotate(-30deg);
  background-color: black;
  z-index: 1;
`;

export const Button = styled.button``;

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const VerticalFlexContainer = styled.div`
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 15%;
  @media (max-width: 900px) {
    height: 130px;
    width: 45%;
    max-width: 130px;
    margin-bottom: 20px;
    margin-left: -40px;
  }
`;

export const Image = styled.img``;
