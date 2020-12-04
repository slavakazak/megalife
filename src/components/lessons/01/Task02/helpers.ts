import { GeometricItemGrid, GeometricItemType } from './types';

const generateType = (): GeometricItemType => {
  const random = Math.random() * 7;

  switch (true) {
    case random < 1:
      return 'square';
    case random < 2:
      return 'circle';
    case random < 3:
      return 'triangle';
    case random < 4:
      return 'trapezoid';
    case random < 5:
      return 'star';
    case random < 6:
      return 'rhombus';
    default:
      return 'cross';
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
  !grid.some(item => (item.type === 'cross' && !item.crossed) || (item.type !== 'cross' && item.crossed));
