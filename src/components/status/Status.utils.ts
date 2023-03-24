import { map, some } from 'lodash';

import { StatusData } from './Status.types';

export const getReservedDates = (data: StatusData): Array<string> => {
  return map(data, (eventData, dateKey) => {
    return some(map(eventData.time)) ? dateKey : '';
  }).filter((data) => !!data);
};
