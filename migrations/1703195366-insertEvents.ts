import { Sql } from 'postgres';

// Create insert Event type
export type Event = {
  event_id: number;
  sport_name: string;
  stadium_name: string;
  home_team_name: string;
  guest_team_name: string;
  event_date: Date;
  time: Date;
};

const events = [
  {
    event_id: 1,
    sport_name: 'Golf',
    stadium_name: 'Noa',
    home_team_name: 'Nico',
    guest_team_name: 'Kati',
    event_date: '15-08-2024',
    time: '18:00',
  },
];
