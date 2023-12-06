import { Sport } from '@/migrations/1701860667-createTableSports';
import { cache } from 'react';
import { sql } from './connect';

export const createSport = cache(
  async (sport_id: number, sport_name: string) => {
    const [sports] = await sql<Sport[]>`

  INSERT INTO sports(sport_id, sport_name)
  VALUES
(${sport_id}, ${sport_name})
RETURNING
sport_id,
sport_name
  `;
    return sports;
  },
);
