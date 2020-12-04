interface CSSModule {
  [className: string]: string;
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.module.css' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module 'react-transformable-draggable' {
  export const DeleteTarget: any;
  export const DndProvider: any;
  export const Droppable: any;
  export const Transformable: any;
  export const TransformableTarget: any;
}
