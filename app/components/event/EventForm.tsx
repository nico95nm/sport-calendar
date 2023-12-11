'use client';
import { Event } from '@/migrations/1701860652-createTableEvents';
import { use, useState } from 'react';

type Props = {
  events: Event[];
};

export default function EventsForm({ events }: Props) {
  const [eventList, setEventList] = useState(events);
  const [sportNameInput, setSportNameInput] = useState('');
  const [teamNameInput, setTeamNameInput] = useState('');
  const [eventDateInput, setEventDateInput] = useState('');
  const [weekdayInput, setWeekdayInput] = useState('');
  //Variables that will edit value
  const [onEditEventId, setOnEditEventId] = useState('');
  const [onEditSportNameInput, setOnEditSportNameInput] = useState('');
  const [onEditTeamNameInput, setOnEditTeamNameInput] = useState('');
  const [onEditEventDate, setOnEditEventDate] = useState('');
  const [onEditWeekday, setOnEditWeekday] = useState('');

  async function createEvent() {
    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({
        sport_name: sportNameInput,
        team_name: teamNameInput,
        event_date: eventDateInput,
        weekday: eventDateInput,
      }),
    });
    const data = await response.json();

    setEventList([...eventList, data.event]);
  }

  return (
    <div>
      <input
        value={weekdayInput}
        onChange={(event) => setWeekdayInput(event.currentTarget.value)}
      >
        Weekday:
      </input>
      <input>event_date:</input>
      <input>Home team:</input>
      <input>Guest team</input>
    </div>
  );
}
