/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useCallback, useEffect, useState } from 'react';
import Price from '@components/price/Price';
import { DatesProvider } from '@mantine/dates';
import { dayjs, formatDate } from '@utils/dayjs.utils';

import { initPriceSession } from './PriceContainer.utils';

type DateValue = Date | null;
type TimeValue = string | null;
type DurationValue = number | '';
type PersonValue = number | '';

interface PriceContextType {
  date: DateValue;
  setDate: (date: DateValue) => void;
  time: TimeValue;
  setTime: (time: TimeValue) => void;
  duration: DurationValue;
  setDuration: (duration: DurationValue) => void;
  person: PersonValue;
  setPerson: (person: PersonValue) => void;
}

export const PriceContext = createContext<PriceContextType>({
  date: null,
  setDate: () => {},
  time: null,
  setTime: () => {},
  duration: '',
  setDuration: () => {},
  person: '',
  setPerson: () => {},
});

interface PriceContainerProps {}

const PriceContainer: React.FC<PriceContainerProps> = () => {
  const [date, setDate] = useState<DateValue>(null);
  const [time, setTime] = useState<TimeValue>(null);
  const [duration, setDuration] = useState<DurationValue>('');
  const [person, setPerson] = useState<PersonValue>('');

  const handleDate = useCallback((date: DateValue) => {
    setDate(date);

    if (date) {
      const formattedDate = formatDate(date);
      window.sessionStorage.setItem('price-date', formattedDate);
    }
  }, []);

  const handleTime = useCallback((time: TimeValue) => {
    setTime(time);

    if (time) {
      window.sessionStorage.setItem('price-time', time);
    }
  }, []);

  const handleDuration = useCallback((duration: DurationValue) => {
    setDuration(duration);

    if (duration) {
      window.sessionStorage.setItem('price-duration', duration.toString());
    }
  }, []);

  const handlePerson = useCallback((person: PersonValue) => {
    setPerson(person);

    if (person) {
      window.sessionStorage.setItem('price-person', person.toString());
    }
  }, []);

  useEffect(() => {
    const initCallback = (sessionDate: string) => {
      const sessionTime = window.sessionStorage.getItem('price-time');
      const sessionDuration = window.sessionStorage.getItem('price-duration');
      const sessionPerson = window.sessionStorage.getItem('price-person');

      setDate(dayjs(sessionDate).toDate());
      setTime(sessionTime);
      setDuration(Number(sessionDuration));
      setPerson(Number(sessionPerson));
    };

    initPriceSession(initCallback);
  }, []);

  return (
    <PriceContext.Provider
      value={{
        date,
        setDate: handleDate,
        time,
        setTime: handleTime,
        duration,
        setDuration: handleDuration,
        person,
        setPerson: handlePerson,
      }}
    >
      <DatesProvider
        settings={{ locale: 'ko', firstDayOfWeek: 0, weekendDays: [0] }}
      >
        <Price />
      </DatesProvider>
    </PriceContext.Provider>
  );
};

export default PriceContainer;
