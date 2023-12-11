import { Sql } from 'postgres';

// Create Event type
export type Event = {
  event_id: number;
  sport_id: number;
  team_id: number;
  sport_name: string;
  team_name: string;
  event_date: Date | null;
  weekday: string;
};
// Create migrate function UP
export async function up(sql: Sql) {
  await sql`
  CREATE TABLE events (
  event_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  sport_id integer,
  team_id integer,
  sport_name varchar(225),
  team_name varchar(225),
  event_date date DEFAULT NULL,
  weekday varchar(20)
  )
`;
}
// Create migrate function DOWN
export async function down(sql: Sql) {
  await sql`
  DROP TABLE events`;
}
