import { useCallback } from 'react';
import Header, { DataPayload } from '@components/header/Header';
import { useViewport } from '@hooks/useViewport';

interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  const viewport = useViewport();

  const getDataByViewport = useCallback((payload: DataPayload) => payload[viewport], [viewport]);

  return <Header getDataByViewport={getDataByViewport} />;
};

export default HeaderContainer;
