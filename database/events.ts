import { Event } from '@/migrations/1701860652-createTableEvents';
import { cache } from 'react';
import { sql } from './connect';

export const getEventById = cache(async (id: number) => {
  const [event] = await sql<Event[]>`
      SELECT
      *
      FROM
        events
      WHERE
        id = ${id}
  `;
  return event;
});

export const createEvent = cache(async (event_date: Date) => {
  const [event] = await sql<Event[]>`
    INSERT INTO events (
      event_date,
      time
      )
    VALUES
(
  ${event_date},
  )
  RETURNING *
`;
  return event;
});
export const updateEventById = cache(async (event_date: Date) => {
  const [events] = await sql<Event[]>`
    INSERT INTO events
      (event_date)
    VALUES
    ( ${event_date})
    RETURNING *
    `;
  return events;
});
export const deleteEventById = cache(async (id: number) => {
  const [event] = await sql<Event[]>`
      DELETE FROM
        events
      WHERE
        id = ${id}
      RETURNING *
      `;
  return event;
});
