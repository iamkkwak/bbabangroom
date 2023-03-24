type TimeKey = string; // 00:00
type DateKey = string; // YYYY-MM-DD

export type Time = Record<TimeKey, boolean>;

export type EventData = {
  time: Record<TimeKey, boolean>;
  isHoliday: boolean;
};

export type StatusData = Record<DateKey, EventData>;
