import { useCallback, useContext, useEffect } from 'react';
import {
  DEFAULT_CAPACITY,
  MAX_CAPACITY,
  MIN_CAPACITY,
} from '@constants/price.constants';
import { PriceContext } from '@containers/price-container/PriceContainer';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NumberInput } from '@mantine/core';

import * as styles from './PricePersonInput.styles';

interface PricePersonInputProps {}

const PricePersonInput: React.FC<PricePersonInputProps> = () => {
  const { date, person, setPerson } = useContext(PriceContext);

  const handleChange = useCallback(
    (value: number | '') => {
      if (!value) {
        setPerson(DEFAULT_CAPACITY);
      } else {
        if (value > MAX_CAPACITY) setPerson(MAX_CAPACITY);
        else if (value < 0) setPerson(MIN_CAPACITY);
        else setPerson(value);
      }
    },
    [setPerson],
  );

  useEffect(() => {
    if (!date) return;
    setPerson(person || DEFAULT_CAPACITY);
  }, [date, person, setPerson]);

  return (
    <div css={styles.pricePersonInput}>
      <NumberInput
        size="xl"
        icon={<FontAwesomeIcon icon={faUserGroup} />}
        placeholder={'명'}
        value={person}
        onChange={handleChange}
        min={1}
        max={MAX_CAPACITY}
      />
    </div>
  );
};

export default PricePersonInput;
