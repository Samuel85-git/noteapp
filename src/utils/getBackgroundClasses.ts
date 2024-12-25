import { BackgroundConfig } from '../types/background';

export const getBackgroundClasses = (config: BackgroundConfig): string => {
  switch (config.type) {
    case 'gradient':
      return `bg-gradient-to-br ${config.color1} ${config.color2}`;
    case 'solid':
      return config.color1.replace('from-', 'bg-');
    case 'pattern':
      return `bg-white ${config.pattern}`;
    default:
      return '';
  }
};