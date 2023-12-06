import { Sql } from 'postgres';

// Create Team type
export type Team = {
  team_id: number;
  team_name: string;
};

// Create migrate function UP
export async function up(sql: Sql) {
  await sql`
  CREATE TABLE teams (
  team_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  team_name varchar(255) NOT NULL
  )
  `;
}

// Create migrate function DOWN
export async function down(sql: Sql) {
  await sql`
  DROP TABLE teams`;
}
