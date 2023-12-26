import { Team } from '@/migrations/1703595875-createTableTeams';
import { cache } from 'react';
import { sql } from './connect';

export const getTeamById = cache(async (team_id: number) => {
  const [team] = await sql<Team[]>`
  SELECT
   *
  FROM
   teams
  WHERE
    team_id = ${team_id}
  `;
  return team;
});

export const createTeam = cache(
  async (
    sport_name: string,
    home_team_name: string,
    guest_team_name: string,
    stadium_name: string,
    country: string,
  ) => {
    const [team] = await sql<Team[]>`
  INSERT INTO teams (
        sport_name, home_team_name, guest_team_name,
        stadium_name, country
        )
  VALUES
  (
  ${sport_name}
  ${home_team_name},
  ${guest_team_name},
  ${stadium_name},
  ${country},
  )
  RETURNING *
`;
    return team;
  },
);
