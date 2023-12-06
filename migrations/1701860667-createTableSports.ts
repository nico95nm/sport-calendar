import { Sql } from 'postgres';

// Create Sport type
export type Sport = {
  sport_id: number;
  sport_name: string;
};

// Create migrate function UP
export async function up(sql: Sql) {
  await sql`
  CREATE TABLE sports (
  sport_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  sport_name varchar(50) NOT NULL
)`;
}

// Create migrate function DOWN
export async function down(sql: Sql) {
  await sql`
  DROP TABLE sports`;
}
