import { Event } from '@/migrations/1701860652-createTableEvents';
import { cache } from 'react';
import { sql } from './connect';

export const getEvents = cache(
  async (
    event_id: number,
    sport_id: number,
    team_id: number,
    sport_name: string,
    team_name: string,
    event_date: Date | null,
    weekday: string,
  ) => {
    const [events] = await sql<Event[]>`
    INSERT INTO events
      (event_id, sport_id, team_id)
    VALUES
    (${event_id}, ${sport_id}, ${team_id})
    RETURNING
    event_id,
    sport_id,
    team_id
    `;
    return events;
  },
);
export const getEventById = cache(async (event_id: number) => {
  const [event] = await sql<Event[]>`
      SELECT
      *
      FROM
        events
      WHERE
        event_id = ${event_id}
  `;
});

export const createEvent = cache(async () => {
  const events = await sql<Event[]>`
    INSERT INTO events
    (sport_name team_name, event_date, weekday)
    VALUES
      events
  `;
  return events;
});
export const updateEventById = cache(
  async (
    sport_name: string,
    team_name: string,
    event_date: Date,
    weekday: string,
  ) => {
    const [event] = await sql<Event[]>`
    INSERT INTO events
      (sport_name team_name, event_date, weekday)
    VALUES
    (${sport_name}, ${team_name}, ${event_date}, ${weekday})
    RETURNING *
    `;
    return event;
  },
);
export const deleteEventById = cache(async (event_id: number) => {
  const [event] = await sql<Event[]>`
      DELETE FROM
        events
      WHERE
        event_id = ${event_id}
      RETURNING *
      `;
  return event;
});
