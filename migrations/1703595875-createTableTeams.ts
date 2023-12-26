import { Sql } from 'postgres';

// Create Teams type
export type Team = {
  sport_name: string;
  home_team_name: string;
  guest_team_name: string;
  stadium_name: string;
  country: string;
};

// Create migrate function UP
export async function up(sql: Sql) {
  await sql`
  CREATE TABLE teams (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    sport_name varchar(100),
    home_team_name varchar(200),
    guest_team_name varchar(200),
    stadium_name varchar(100),
    country varchar(50)
  )
`;
}
// Create migrate function DOWN
export async function down(sql: Sql) {
  await sql`
  DROP TABLE teams
  `;
}
