import { Sql } from 'postgres';

// Create Event type
export type Event = {
  event_id: number;
  event_date: Date | null;
  time: Date;
};
// Create migrate function UP
export async function up(sql: Sql) {
  await sql`
  CREATE TABLE events (
  event_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  event_date date DEFAULT NULL,
  time TIME DEFAULT NULL
  )
`;
}
// Create migrate function DOWN
export async function down(sql: Sql) {
  await sql`
  DROP TABLE events
  `;
}
