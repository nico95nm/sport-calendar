import { Sql } from 'postgres';

// Create Event type
export type Event = {
  event_id: number;
  event_date: string;
  weekday: string;
  team_id: number;
  sport_id: number;
};
// Create migrate function UP
export async function up(sql: Sql) {
  await sql`
  CREATE TABLE events (
  event_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  event_date date NOT NULL,
  weekday varchar(20)
  )
`;
}
// Create migrate function DOWN
export async function down(sql: Sql) {
  await sql`
  DROP TABLE events`;
}
