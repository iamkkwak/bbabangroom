import { useContext } from 'react';
import { PriceContext } from '@containers/price-container/PriceContainer';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePickerInput } from '@mantine/dates';
import { dayjs } from '@utils/dayjs.utils';
import { getDayProps } from '@utils/mantine.utils';

import * as styles from './PriceDatePicker.styles';

interface PriceDatePickerProps {}

const PriceDatePicker: React.FC<PriceDatePickerProps> = () => {
  const { date, setDate } = useContext(PriceContext);

  return (
    <div css={styles.priceDatePicker}>
      <DatePickerInput
        size="xl"
        placeholder="날짜"
        icon={<FontAwesomeIcon icon={faCalendar} />}
        getDayProps={getDayProps}
        value={date}
        onChange={setDate}
        minDate={dayjs().toDate()}
        maxDate={dayjs().add(1, 'month').subtract(1, 'day').toDate()}
        monthLabelFormat="YYYY년 MMMM"
        valueFormat="YYYY.MM.DD (dd)"
      />
    </div>
  );
};

export default PriceDatePicker;
