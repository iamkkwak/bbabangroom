import PriceContainer from '@containers/price-container/PriceContainer';
import { useLandscape } from '@hooks/useViewport';

import * as styles from './PriceLayout.styles';

interface PriceLayoutProps {}

const PriceLayout: React.FC<PriceLayoutProps> = () => {
  const isLandscape = useLandscape();
  return (
    <div css={styles.priceLayout}>
      <div css={styles.price(isLandscape)}>
        <PriceContainer />
      </div>
    </div>
  );
};

export default PriceLayout;
