import { TIMETREE_CALENDAR_ID } from '@constants/id.constants';
import { fetchWithTimeout } from '@utils/api.utils';

const { VITE_TIMETREE_TOKEN } = import.meta.env;

// https://developers.timetreeapp.com/en/docs/api/oauth-app#list-upcoming-events
// 필요한 부분만 정의
interface Event {
  id: string;
  type: string;
  attributes: {
    title: string;
    all_day: boolean;
    start_at: string;
    start_timezone: string;
    end_at: string;
    end_timezone: string;
    location: string;
    category: string;
  };
}

export type Events = Array<Event>;

const headers = {
  Accept: 'application/vnd.timetree.v1+json',
  Authorization: `Bearer ${VITE_TIMETREE_TOKEN}`,
};

export async function getEvents(): Promise<Events> {
  const url = new URL(
    `https://timetreeapis.com/calendars/${TIMETREE_CALENDAR_ID}/upcoming_events`,
  );
  const params = {
    timezone: 'Asia/Seoul',
    days: '7',
  };
  url.search = new URLSearchParams(params).toString();

  const response = await fetchWithTimeout(url, {
    method: 'GET',
    headers,
  });

  const { data } = await response.json();

  return data;
}
