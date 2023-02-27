export const VIEWPORT_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;
export type VIEWPORT_SIZE = (typeof VIEWPORT_SIZE)[keyof typeof VIEWPORT_SIZE];
