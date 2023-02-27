import { Outlet } from 'react-router-dom';
import Footer from '@components/footer/Footer';
import HeaderContainer from '@containers/header-container/HeaderContainer';

import * as styles from './RootLayout.styles';

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = () => {
  return (
    <div css={styles.wrapper}>
      <HeaderContainer />
      <section css={styles.section}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default RootLayout;
