import { useContext, useEffect } from 'react';
import { DEFAULT_CAPACITY, MAX_CAPACITY } from '@constants/price.constants';
import { PriceContext } from '@containers/price-container/PriceContainer';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NumberInput } from '@mantine/core';

import * as styles from './PricePersonInput.styles';

interface PricePersonInputProps {}

const PricePersonInput: React.FC<PricePersonInputProps> = () => {
  const { date, person, setPerson } = useContext(PriceContext);

  useEffect(() => {
    if (!date) return;
    setPerson(DEFAULT_CAPACITY);
  }, [date, setPerson]);

  return (
    <div css={styles.pricePersonInput}>
      <NumberInput
        size="xl"
        icon={<FontAwesomeIcon icon={faUserGroup} />}
        placeholder={'명'}
        value={person}
        onChange={setPerson}
        min={1}
        max={MAX_CAPACITY}
      />
    </div>
  );
};

export default PricePersonInput;
