import { Outlet } from 'react-router-dom';

import * as styles from './RootLayout.styles';

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
