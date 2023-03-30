import { useContext } from 'react';
import { PriceContext } from '@containers/price-container/PriceContainer';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Select } from '@mantine/core';

import { getTimeData } from './PriceTime.utils';
import * as styles from './PriceTimeSelect.styles';

interface PriceTimeSelectProps {}

const PriceTimeSelect: React.FC<PriceTimeSelectProps> = () => {
  const { date, time, setTime } = useContext(PriceContext);
  const timeData = getTimeData();

  return (
    <div css={styles.priceTimeSelect}>
      <Select
        size="xl"
        disabled={!date}
        icon={<FontAwesomeIcon icon={faClock} />}
        placeholder="선택"
        data={timeData}
        value={time}
        onChange={setTime}
        rightSection={<FontAwesomeIcon icon={faAngleDown} />}
        maxDropdownHeight={500}
      />
    </div>
  );
};

export default PriceTimeSelect;
