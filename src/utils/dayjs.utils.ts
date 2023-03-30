import 'dayjs/locale/ko';

import Dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import updateLocale from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';
import { includes, isNumber } from 'lodash';

Dayjs.extend(duration);
Dayjs.extend(timezone);
Dayjs.extend(utc);
Dayjs.extend(updateLocale);

Dayjs.locale('ko');
Dayjs.updateLocale('ko', {
  weekdays: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  weekdaysShort: ['일', '월', '화', '수', '목', '금', '토'],
});

const localTimezone = 'Asia/Seoul';

export const dayjs = (
  date?: Dayjs.ConfigType,
  format?: Dayjs.OptionType,
  strict?: boolean,
) => {
  const value = Dayjs(date, format, strict);
  return value.isValid() ? value : Dayjs(null);
};

export const formatDate = (
  date: Dayjs.ConfigType,
  formatter = 'YYYY-MM-DD',
) => {
  const value = Dayjs(date);
  return value.isValid() ? value.format(formatter) : '';
};

export const formatTime = (date: Dayjs.ConfigType, formatter = 'HH:mm') => {
  if (isNumber(date)) return `${date.toString().padStart(2, '0')}:00`;

  const value = Dayjs(date);
  return value.isValid() ? value.format(formatter) : '';
};

/**
 * 타임트리의 기본 시간대는 UTC이므로 변환이 필요
 * @param date UTC 시간
 * @returns 변환된 Dayjs 객체
 */
export const convertUTCtoLocalTime = (date: Dayjs.ConfigType): Dayjs.Dayjs => {
  const value = Dayjs(date);
  return value.isValid() ? value.tz(localTimezone, true) : Dayjs(null);
};

/**
 * 오늘 포함 offset일 만큼의 날짜를 담은 배열 반환
 * @param dayOffset 0 이상의 정수
 */
export const getFurtherDatesFromToday = (dayOffset = 7) => {
  const dates = [];
  const today = Dayjs();

  for (let offset = 0; offset < dayOffset; offset += 1) {
    dates.push(formatDate(today.add(offset, 'day')));
  }

  return dates;
};

// 2023년 공휴일
// openAPI 써도 되지만 며칠 없어서 그냥 수작업
const koreanHolidays = [
  '2023-01-01', // 신년
  '2023-01-21',
  '2023-01-22', // 설날
  '2023-01-23',
  '2023-01-24', // 대체공휴일
  '2023-03-01', // 삼일절
  '2023-05-05', // 어린이날
  '2023-05-27', // 석가탄신일
  '2023-05-29', // 대체공휴일
  '2023-06-06', // 현충일
  '2023-08-15', // 광복절
  '2023-09-28',
  '2023-09-29', // 추석
  '2023-09-30',
  '2023-10-03', // 개천절
  '2023-10-09', // 한글날
  '2023-12-25', // 크리스마스
] as const;

export const isKoreanHoliday = (date: Dayjs.ConfigType) => {
  const value = Dayjs(date);
  return value.isValid() && includes(koreanHolidays, formatDate(Dayjs(date)));
};

// 빠방 주말 기준은 금토일
export const isWeekend = (date: Dayjs.ConfigType) => {
  const value = Dayjs(date);
  return (
    value.isValid() &&
    (value.day() === 0 || value.day() === 5 || value.day() === 6)
  );
};

export const isWeekendOrHoliday = (date: Dayjs.ConfigType) => {
  const value = Dayjs(date);
  return value.isValid() && (isKoreanHoliday(value) || isWeekend(value));
};
