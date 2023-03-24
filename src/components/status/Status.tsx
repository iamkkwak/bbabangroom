import { memo, useEffect, useMemo, useState } from 'react';
import StatusDatePicker from '@components/status-date-picker/StatusDatePicker';
import StatusTimeBadges from '@components/status-time-table/StatusTimeTable';
import { LoadingOverlay } from '@mantine/core';
import { mainColor } from '@styles/colors.styles';
import { formatDate } from '@utils/dayjs.utils';
import { get, isEmpty } from 'lodash';

import { StatusData } from './Status.types';
import { getReservedDates } from './Status.utils';

interface StatusProps {
  data: StatusData;
}

const Status: React.FC<StatusProps> = ({ data }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const reservedDates = useMemo(() => getReservedDates(data), [data]);
  const reservedTime = useMemo(
    () => get(data, [selectedDate, 'time']),
    [data, selectedDate],
  );

  useEffect(() => {
    setSelectedDate(formatDate(new Date()));
  }, []);

  return (
    <>
      <LoadingOverlay
        visible={isEmpty(data)}
        loaderProps={{ size: 'xl', color: mainColor.c01 }}
      />
      <StatusDatePicker
        reservedDates={reservedDates}
        selectedDate={selectedDate}
        onChangeSelectedDate={setSelectedDate}
      />
      <StatusTimeBadges reservedTime={reservedTime} />
    </>
  );
};

export default memo(Status);
