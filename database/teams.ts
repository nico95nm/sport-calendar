import { Team } from '@/migrations/1701860692-createTableTeams';
import { cache } from 'react';
import { sql } from './connect';

export const createTeam = cache(async (team_id: number, team_name: string) => {
  const [teams] = await sql<Team[]>`
    INSERT INTO teams
    (team_id, team_name)
    VALUES
    (${team_id},${team_name})
    RETURNING
    team_id,
    team_name
    `;
  return teams;
});
