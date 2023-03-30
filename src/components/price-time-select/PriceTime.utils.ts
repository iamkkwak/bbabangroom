import { dayjs, formatTime } from '@utils/dayjs.utils';
import { map } from 'lodash';

export const getTimeData = () => {
  const selectedDate = window.sessionStorage.getItem('price-date');

  return map(Array(24).fill(false), (__, index) => {
    const formattedTime = formatTime(index);
    const disabled = dayjs(selectedDate).add(index, 'hour').isBefore(dayjs())
      ? true
      : false;
    return {
      value: formattedTime,
      label: formattedTime,
      disabled,
    };
  });
};
