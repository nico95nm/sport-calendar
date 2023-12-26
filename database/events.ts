import { Event } from '@/migrations/1701860652-createTableEvents';
import { cache } from 'react';
import { sql } from './connect';

export const getEventById = cache(async (event_id: number) => {
  const [event] = await sql<Event[]>`
      SELECT
      *
      FROM
        events
      WHERE
        event_id = ${event_id}
  `;
  return event;
});

export const createEvent = cache(
  async (sport_name: string, event_date: Date, time: Date) => {
    const [event] = await sql<Event[]>`
    INSERT INTO events (
      event_date,
      time
      )
    VALUES
(
  ${sport_name},
  ${event_date},
  ${time},
  )
  RETURNING *
`;
    return event;
  },
);
export const updateEventById = cache(
  async (
    sport_name: string,
    home_team_name: string,
    guest_team_name: string,
    stadium_name: string,
    event_date: Date,
    time: Date,
  ) => {
    const [events] = await sql<Event[]>`
    INSERT INTO events
      (sport_name home_team_name, guest_team_name, event_date, time)
    VALUES
    (${sport_name}, ${home_team_name}, ${guest_team_name}, ${stadium_name}  ${event_date}, ${time})
    RETURNING *
    `;
    return events;
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
