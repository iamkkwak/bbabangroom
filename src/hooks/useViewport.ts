import { useMemo } from 'react';
import { VIEWPORT_SIZE } from '@constants/viewport.constants';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';

export const useViewport = () => {
  const isSmall = useMediaQuery('(max-width: 365px)');
  const isMedium = useMediaQuery('(max-width: 505px)');

  if (isSmall) return VIEWPORT_SIZE.SMALL;
  if (isMedium) return VIEWPORT_SIZE.MEDIUM;

  return VIEWPORT_SIZE.LARGE;
};

export const useLandscape = () => {
  const { height, width } = useViewportSize();
  const isLandscape = useMemo(() => height * 1.25 < width, [height, width]);

  return isLandscape;
};
