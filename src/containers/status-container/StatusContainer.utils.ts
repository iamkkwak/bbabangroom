import { Events } from '@apis/events';
import { StatusData, Time } from '@components/status/Status.types';
import {
  convertUTCtoLocalTime,
  formatDate,
  formatTime,
  getFurtherDatesFromToday,
  isKoreanHoliday,
} from '@utils/dayjs.utils';
import { forEach, transform } from 'lodash';

export const getEventData = (events: Events): StatusData => {
  const dateRange = getFurtherDatesFromToday();
  const eventData: StatusData = {};

  forEach(dateRange, (date) => {
    eventData[date] = {
      time: transform(
        Array(24).fill(false),
        (result, __value, index) => {
          result[formatTime(index)] = !!events && false;
        },
        {} as Time,
      ),
      isHoliday: isKoreanHoliday(date),
    };
  });

  forEach(events, (event) => {
    const startAt = convertUTCtoLocalTime(event.attributes.start_at);
    const endAt = convertUTCtoLocalTime(event.attributes.end_at);

    for (let date = startAt; date.isBefore(endAt); date = date.add(1, 'hour')) {
      const dateKey = formatDate(date);
      const timeKey = formatTime(date);
      eventData[dateKey].time[timeKey] = true;
    }
  });

  return eventData;
};
