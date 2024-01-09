import { Sql } from 'postgres';

export const events = [
  {
    id: 1,
    date_time: '2024-04-15 16:30:00',
  },
  {
    id: 2,
    date_time: '2025-03-24 20:30:00',
  },
];

export async function up(sql: Sql) {
  for (const event of events) {
    await sql`
    INSERT INTO events
    (
event_date
    )
VALUES
(
${event.date_time}
)
`;
  }
}
// Create function DOWN
export async function down(sql: Sql) {
  for (const event of events) {
    await sql`
    DELETE FROM events WHERE id = ${event.id}
    `;
  }
}
