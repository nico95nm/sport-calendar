import { Event } from '@/migrations/1701860652-createTableEvents';
import { cache } from 'react';
import { sql } from './connect';

export const createEvent = cache(
  async (
    event_id: number,
    event_date: string,
    weekday: string,
    team_id: number,
    sport_id: number,
  ) => {
    const [events] = await sql<Event[]>`
    INSERT INTO events
      (event_id, event_date, weekday,team_id, sport_id)
    VALUES
    (${event_id}, ${event_date}, ${weekday},${team_id},
    ${sport_id})
    RETURNING
    event_id,
    event,date,
    weekday,
    team_id,
    sport_id
    `;
    return events;
  },
);
