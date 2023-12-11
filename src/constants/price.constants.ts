export const WEEKDAY_HOURLY_PRICE = 5000;
export const WEEKEND_HOURLY_PRICE = 6000;
export const HOURLY_PRICE = 8000; // 2023-12-22부터 적용

// 주말에는 최소 4시간 이상 예약 가능
export const MIN_WEEKDAY_DURATION = 1;
export const MIN_WEEKEND_DURATION = 4;
export const MAX_DURATION = 24;

export const DEFAULT_CAPACITY = 6;
export const MAX_CAPACITY = 10;
export const MIN_CAPACITY = 1;

// 6명 초과 시 최대 10명까지 1인 1시간 1000원씩 부과
export const EXTRA_PERSON_HOURLY_PRICE = 1000;

// 10시간 이상 예약 시 10% 할인
export const EXTRA_DISCOUNT_DURATION = 10;
export const EXTRA_DISCOUNT_PERCENT = 0.9;
