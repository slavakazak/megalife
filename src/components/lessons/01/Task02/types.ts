export type GeometricItemType = 'square' | 'circle' | 'triangle' | 'trapezoid' | 'cross' | 'star' | 'rhombus';

export interface GeometricItem {
  type: GeometricItemType;
  crossed: boolean;
  id: string;
}

export type GeometricItemRaw = GeometricItem;
export type GeometricItemGrid = GeometricItemRaw[];
