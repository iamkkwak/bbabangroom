import 'dayjs/locale/ko';

import { useEffect, useState } from 'react';
import { getEvents } from '@apis/events';
import Status from '@components/status/Status';
import { StatusData } from '@components/status/Status.types';
import { DatesProvider } from '@mantine/dates';

import { getEventData } from './StatusContainer.utils';

interface StatusContainerProps {}

const StatusContainer: React.FC<StatusContainerProps> = () => {
  const [data, setData] = useState<StatusData>({});

  useEffect(() => {
    const init = async () => {
      const events = await getEvents();
      setData(getEventData(events));
    };

    init();
  }, []);

  return (
    <DatesProvider
      settings={{ locale: 'ko', firstDayOfWeek: 0, weekendDays: [0] }}
    >
      <Status data={data} />
    </DatesProvider>
  );
};

export default StatusContainer;
