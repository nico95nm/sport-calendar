import { Sql } from 'postgres';

export const teams = [
  {
    id: 1,
    sport_name: 'golf',
    home_team_name: 'Nikola',
    guest_team_name: 'Katarina',
    stadium_name: 'Tumberry Resort',
    country: 'France, Paris',
  },
  {
    id: 2,
    sport_name: 'golf',
    home_team_name: 'Barry',
    guest_team_name: 'Tinya',
    stadium_name: 'Sand Hills Golf Club',
    country: 'England, Liverpool',
  },
];

export async function up(sql: Sql) {
  for (const team of teams) {
    await sql`
      INSERT INTO teams
    (
    home_team_name,
    guest_team_name,
    stadium_name,
    sport_name,
    country)
      VALUES
      (
      ${team.home_team_name},
      ${team.guest_team_name},
      ${team.stadium_name},
      ${team.sport_name},
      ${team.country})
      `;
  }
}

export async function down(sql: Sql) {
  for (const team of teams) {
    await sql`
    DELETE FROM teams WHERE id = ${team.id}
    `;
  }
}
