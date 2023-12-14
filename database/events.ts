import { Event } from '@/migrations/1701860652-createTableEvents';
import { cache } from 'react';
import { sql } from './connect';

export const saveData = cache(
  async (
    sport_id: number,
    home_team_id: number,
    guest_team_id: number,
    home_team_name: string,
    guest_team_name: string,
    event_date: Date | null,
    weekday: string,
  ) => {
    const [events] = await sql<Event[]>`
    INSERT INTO events
      (sport_id, home_team_id, guest_team_id)
    VALUES
    (${sport_id}, ${home_team_id}, ${guest_team_id})
    RETURNING
    sport_id,
    home_team_id,
    guest_team_name
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
    (sport_name, home_team_name, guest_team_name, event_date, weekday)
    VALUES
      events
  `;
  return events;
});
export const updateEventById = cache(
  async (
    sport_name: string,
    home_team_name: string,
    guest_team_name: string,
    event_date: Date,
    weekday: string,
  ) => {
    const [events] = await sql<Event[]>`
    INSERT INTO events
      (sport_name home_team_name, guest_team_name, event_date, weekday)
    VALUES
    (${sport_name}, ${home_team_name}, ${guest_team_name} , ${event_date}, ${weekday})
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
