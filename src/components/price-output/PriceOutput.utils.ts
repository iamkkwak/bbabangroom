import {
  DEFAULT_CAPACITY,
  EXTRA_DISCOUNT_DURATION,
  EXTRA_DISCOUNT_PERCENT,
  EXTRA_PERSON_HOURLY_PRICE,
} from '@constants/price.constants';
import { dayjs, formatDate } from '@utils/dayjs.utils';
import { getHourlyPrice } from '@utils/price.utils';

type PriceForm = {
  date: string;
  time: string;
  duration: number;
  person: number;
};

export const calculatePrice = (form: PriceForm) => {
  const { date, time, duration, person } = form;

  const startedAt = dayjs(date).hour(Number(time.split(':')[0]) ?? 0);
  const endedAt = startedAt.add(duration, 'hour');
  const extraPerson =
    person - DEFAULT_CAPACITY > 0 ? person - DEFAULT_CAPACITY : 0;

  let price = 0;
  for (
    let date = startedAt;
    date.isBefore(endedAt);
    date = date.add(1, 'hour')
  ) {
    price =
      price + getHourlyPrice(date) + EXTRA_PERSON_HOURLY_PRICE * extraPerson;
  }

  return duration < EXTRA_DISCOUNT_DURATION
    ? price
    : price * EXTRA_DISCOUNT_PERCENT;
};

export const getCopyText = (form: PriceForm) => {
  const { date, time, duration, person } = form;

  return [
    '• 예약자명: ',
    `• 총 인원: ${person}명`,
    '• 연락처: ',
    `• 예약일: ${formatDate(date, 'YYYY년 M월 D일 dddd')}`,
    `• 이용시간: ${time.split(':')[0]}시 ~ ${(
      Number(time.split(':')[0] ?? 0) + duration
    )
      .toString()
      .padStart(2, '0')}시 (${duration}시간)`,
    '• 이용목적: ',
  ].join('\n');
};
