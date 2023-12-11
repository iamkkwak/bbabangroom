import {
  HOURLY_PRICE,
  WEEKDAY_HOURLY_PRICE,
  WEEKEND_HOURLY_PRICE,
} from '@constants/price.constants';
import { Dayjs } from 'dayjs';

import { isWeekendOrHoliday } from './dayjs.utils';

export const getHourlyPrice = (date: Dayjs) => {
  if (date.isBefore('2023-12-22')) {
    return isWeekendOrHoliday(date)
      ? WEEKEND_HOURLY_PRICE
      : WEEKDAY_HOURLY_PRICE;
  }

  return HOURLY_PRICE;
};
