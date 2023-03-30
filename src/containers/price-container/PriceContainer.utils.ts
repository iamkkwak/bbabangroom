import { dayjs, formatDate } from '@utils/dayjs.utils';

export const clearPriceSession = () => {
  window.sessionStorage.removeItem('price-date');
  window.sessionStorage.removeItem('price-time');
  window.sessionStorage.removeItem('price-duration');
  window.sessionStorage.removeItem('price-person');
};

/**
 * 현재 시점보다 date가 이전이면 price 관련 session 초기화함
 * @param callback sessionDate가 유효할 경우 실행할 함수
 */
export const initPriceSession = (callback?: (sessionDate: string) => void) => {
  const sessionDate = window.sessionStorage.getItem('price-date');

  if (!sessionDate || dayjs(sessionDate).isBefore(dayjs(formatDate(dayjs())))) {
    clearPriceSession();
  } else {
    callback?.(sessionDate);
  }
};
