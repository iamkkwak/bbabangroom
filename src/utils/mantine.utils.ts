import { MantineTheme } from '@mantine/core';
import { dayjs, isKoreanHoliday } from '@utils/dayjs.utils';

export const getDayProps = (date: Date) => {
  if (isKoreanHoliday(date))
    return {
      sx: (theme: MantineTheme) => ({
        color: theme.colors.red[theme.fn.primaryShade()],
      }),
    };
  if (dayjs(date).day() === 6)
    return {
      sx: (theme: MantineTheme) => ({
        color: theme.colors.blue[theme.fn.primaryShade()],
      }),
    };
  return {};
};
