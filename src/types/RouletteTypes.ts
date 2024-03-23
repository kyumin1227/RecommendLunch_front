export interface WheelData {
  option?: string;
  image?: ImageProps;
  style?: StyleType; // Optional
  optionSize?: number; // Optional
}

export interface StyleType {
  backgroundColor?: string; // Optional
  textColor?: string; // Optional
  fontFamily?: string; // Optional
  fontSize?: number; // Optional
  fontWeight?: number | string; // Optional
  fontStyle?: string; // Optional
}

export interface ImageProps {
  uri: string;
  offsetX?: number; // Optional
  offsetY?: number; // Optional
  sizeMultiplier?: number; // Optional
  landscape?: boolean; // Optional
}

export interface PointerProps {
  src?: string; // Optional
  style?: React.CSSProperties; // Optional
}
