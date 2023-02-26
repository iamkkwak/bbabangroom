import { Outlet } from 'react-router-dom';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';

import * as styles from './RootLayout.styles';

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = () => {
  return (
    <div css={styles.wrapper}>
      <Header />
      <section css={styles.section}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default RootLayout;
