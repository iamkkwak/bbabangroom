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

    // 23:mm 일 때 드롭다운이 비어있는 경우가 생겨서
    // hh:mm이어도 hh:00을 선택할 수 있도록 함
    const passed = dayjs(selectedDate)
      .add(index + 1, 'hour')
      .isBefore(dayjs());

    if (!passed)
      return {
        value: formattedTime,
        label: formattedTime,
      };
  }).filter(truthy);
};
