import PriceGuide from '@components/price-guide/PriceGuide';
import PriceInput from '@components/price-input/PriceInput';
import PriceOutput from '@components/price-output/PriceOutput';

import * as styles from './Price.styles';

interface PriceProps {}

const Price: React.FC<PriceProps> = () => {
  return (
    <>
      <div css={styles.priceLeft}>
        <PriceInput />
        <PriceOutput />
      </div>
      <div css={styles.priceRight}>
        <PriceGuide />
      </div>
    </>
  );
};

export default Price;
