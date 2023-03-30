import { useContext, useEffect } from 'react';
import {
  MIN_WEEKDAY_DURATION,
  MIN_WEEKEND_DURATION,
} from '@constants/price.constants';
import { PriceContext } from '@containers/price-container/PriceContainer';
import { faHourglassHalf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NumberInput } from '@mantine/core';
import { isWeekendOrHoliday } from '@utils/dayjs.utils';

import * as styles from './PriceDurationInput.styles';

interface PriceDurationInputProps {}

const PriceDurationInput: React.FC<PriceDurationInputProps> = () => {
  const { date, duration, setDuration } = useContext(PriceContext);

  const minDuration = isWeekendOrHoliday(date)
    ? MIN_WEEKEND_DURATION
    : MIN_WEEKDAY_DURATION;

  useEffect(() => {
    if (!date) return;
    setDuration(MIN_WEEKEND_DURATION);
  }, [date, setDuration]);

  return (
    <div css={styles.priceDurationInput}>
      <NumberInput
        size="xl"
        icon={<FontAwesomeIcon icon={faHourglassHalf} />}
        placeholder={'시간'}
        value={duration}
        onChange={setDuration}
        min={minDuration}
        max={24}
      />
    </div>
  );
};

export default PriceDurationInput;
