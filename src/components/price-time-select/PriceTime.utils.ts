import { dayjs, formatTime } from '@utils/dayjs.utils';
import { map } from 'lodash';

type Truthy<T> = T extends false | '' | 0 | null | undefined ? never : T; // from lodash

function truthy<T>(value: T): value is Truthy<T> {
  return !!value;
}

export const getTimeData = () => {
  const selectedDate = window.sessionStorage.getItem('price-date');

  return map(Array(24).fill(false), (__, index) => {
    const formattedTime = formatTime(index);
    const disabled = dayjs(selectedDate).add(index, 'hour').isBefore(dayjs())
      ? true
      : false;

    if (!disabled)
      return {
        value: formattedTime,
        label: formattedTime,
      };
  }).filter(truthy);
};
