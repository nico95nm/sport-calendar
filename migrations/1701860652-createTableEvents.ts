import { Sql } from 'postgres';

// Create Event type
export type Event = {
  id: number;
  event_date: Date | null;
};
// Create migrate function UP
export async function up(sql: Sql) {
  await sql`
  CREATE TABLE events (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    event_date TIMESTAMP(0) WITHOUT TIME ZONE
  )
`;
  /* event_date date DEFAULT NULL,
   */
}
// Create migrate function DOWN
export async function down(sql: Sql) {
  await sql`
  DROP TABLE events
  `;
}
