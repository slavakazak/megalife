import { GeometricItemGrid, GeometricItemType } from './types';

const generateType = (): GeometricItemType => {
  const random = Math.random() * 3;

  switch (true) {
    case random < 1:
      return 'square';
    case random > 2:
      return 'circle';
    default:
      return 'triangle';
  }
};

export const generateGrid = (rows: number, columns: number): GeometricItemGrid =>
  Array(columns * rows)
    .fill(null)
    .map((__, itemIndex) => ({
      type: generateType(),
      dotted: false,
      crossed: false,
      id: `${itemIndex}`
    }));

export const validateGrid = (grid: GeometricItemGrid): boolean =>
  !grid.some(
    item =>
      (item.type === 'square' && (item.crossed || item.dotted)) ||
      (item.type === 'circle' && !item.dotted) ||
      (item.type === 'triangle' && !item.crossed)
  );

export const validateNumberOfTriangles = (grid: GeometricItemGrid, numberOfTriangles: number) =>
  numberOfTriangles === grid.reduce((itemAccumulator, item) => itemAccumulator + (item.type === 'triangle' ? 1 : 0), 0);
