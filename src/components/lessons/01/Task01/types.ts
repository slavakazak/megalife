export type GeometricItemType = 'square' | 'circle' | 'triangle';

export interface GeometricItem {
  type: GeometricItemType;
  dotted: boolean;
  crossed: boolean;
  id: string;
}

export type GeometricItemRaw = GeometricItem;
export type GeometricItemGrid = GeometricItemRaw[];
