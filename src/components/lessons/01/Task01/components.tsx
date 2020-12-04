import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors } from '../../../../styles/variables';
import { GeometricItemType } from './types';

const StyledTable = styled.div`
  width: 85%;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(13, 1fr);
  margin: 10px 10px 20px 0px;
  @media (max-width: 900px) {
    margin-left: -30px;
    width: 100%;
  }
  @media (max-width: 800px) {
    grid-template-rows: repeat(13, 1fr);
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 425px) {
    grid-template-rows: repeat(26, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Grid: React.FC = ({ children }) => (
  <StyledTable>
    <>{children}</>
  </StyledTable>
);

export const Data = styled.div`
  position: relative;
  padding: 10px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #00000028;
  }
`;

interface GeometricItemTypeProps {
  type: GeometricItemType;
}

export const GeometricItem = styled.div<GeometricItemTypeProps>`
  margin: auto auto;

  ${({ type }: GeometricItemTypeProps) =>
    type === 'square' &&
    css`
      width: 30px;
      height: 30px;
      border: 2px solid ${colors.green};
      background-color: ${colors.salad};
    `}
  ${({ type }: GeometricItemTypeProps) =>
    type === 'circle' &&
    css`
      width: 30px;
      height: 30px;
      border: 2px solid ${colors.darkOrange};
      border-radius: 30px;
      background-color: ${colors.orange};
    `}
  ${({ type }: GeometricItemTypeProps) =>
    type === 'triangle' &&
    css`
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 31px solid ${colors.purple};
    `};
`;

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

export const Dot = styled.div<GeometricItemTypeProps>`
  position: absolute;
  height: 5px;
  width: 5px;
  border-radius: 5px;
  left: 50%;
  top: ${({ type }: GeometricItemTypeProps) => (type === 'triangle' ? '60%' : '50%')};
  transform: translate(-50%, -50%);
  background-color: black;
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
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
    justify-content: space-evenly;
    flex-direction: row;
    margin-left: -40px;
    margin-bottom: 20px;
  }
`;

export const Box = styled.div`
  height: 50px;
  width: 60px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SquareInput = styled.input`
  height: 40px;
  width: 45px;
  margin: auto auto;
  text-align: center;
`;

export const Image = styled.img``;
