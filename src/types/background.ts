export type BackgroundType = 'gradient' | 'solid' | 'pattern';

export interface BackgroundConfig {
  type: BackgroundType;
  color1: string;
  color2?: string;
  pattern?: string;
}

export const defaultBackground: BackgroundConfig = {
  type: 'gradient',
  color1: 'from-blue-50',
  color2: 'to-purple-50'
};