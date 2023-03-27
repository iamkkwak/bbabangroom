import { memo } from 'react';
import { Indicator } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { dayjs, formatDate } from '@utils/dayjs.utils';
import { getDayProps } from '@utils/mantine.utils';
import { includes } from 'lodash';

import * as styles from './StatusDatePicker.styles';

interface StatusDatePickerProps {
  reservedDates: Array<string>;
  selectedDate: string | null;
  onChangeSelectedDate: (date: string) => void;
}

const StatusDatePicker: React.FC<StatusDatePickerProps> = ({
  reservedDates = [],
  selectedDate,
  onChangeSelectedDate,
}) => {
  return (
    <div css={styles.datePickerWrap}>
      <DatePicker
        value={dayjs(selectedDate).toDate()}
        onChange={(date) => onChangeSelectedDate(formatDate(date))}
        renderDay={(date) => {
          const formattedDate = formatDate(date);
          const disabled = !includes(reservedDates, formattedDate);
          const day = date.getDate();
          return (
            <Indicator
              size={8}
              color={formattedDate === selectedDate ? 'white' : 'red'}
              offset={-1}
              disabled={disabled}
            >
              <span>{day}</span>
            </Indicator>
          );
        }}
        getDayProps={getDayProps}
        minDate={dayjs().toDate()}
        maxDate={dayjs().add(6, 'day').toDate()}
        monthLabelFormat="YYYY년 MMMM"
      />
    </div>
  );
};

export default memo(StatusDatePicker);
