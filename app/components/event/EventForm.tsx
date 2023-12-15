'use client';
import '../event/eventFrom.css';
import { Event } from '@/migrations/1701860652-createTableEvents';
import { useRouter } from 'next/navigation';
import { use, useState } from 'react';

//DDefine type for Props
type Props = {
  events: Event[];
  sport_name: string;
  home_team_name: string;
  guest_team_name: string;
  event_date: Date;
  weekday: string;
};

// Create variables for input fields
export default function EventsForm({ events }: Props) {
  const [eventList, setEventList] = useState(events);
  const [sportNameInput, setSportNameInput] = useState('');
  const [homeTeamNameInput, setHomeTeamNameInput] = useState('');
  const [guestTeamNameInput, setGuestTeamNameInput] = useState('');
  const [eventDateInput, setEventDateInput] = useState('');
  const [weekdayInput, setWeekdayInput] = useState('');

  const router = useRouter();
  // Create function that will fetch from API
  async function createEvent() {
    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({
        sport_name: sportNameInput,
        home_team_name: homeTeamNameInput,
        guest_team_name: guestTeamNameInput,
        event_date: eventDateInput.toString(),
        weekday: eventDateInput,
      }),
    });
    // Refresh the page after submitting the event details
    router.refresh();

    const data = await response.json();
    console.log(data);

    setEventList([...eventList, data.event]);
  }

  return (
    <div className="inputDiv">
      <label>Weekday: </label>
      <input
        type="text"
        value={weekdayInput}
        onChange={(event) => setWeekdayInput(event.currentTarget.value)}
      />
      <br />
      <label>Sport name: </label>
      <input
        type="text"
        value={sportNameInput}
        onChange={(event) => setSportNameInput(event.currentTarget.value)}
      />
      <br />
      <label>Event date: </label>
      <input
        type="date"
        value={eventDateInput}
        onChange={(event) => setEventDateInput(event.currentTarget.value)}
      />
      <br />
      <label>Home team </label>
      <input
        type="text"
        value={homeTeamNameInput}
        onChange={(event) => setHomeTeamNameInput(event.currentTarget.value)}
      />
      vs
      <input
        value={guestTeamNameInput}
        onChange={(event) => setGuestTeamNameInput(event.currentTarget.value)}
        placeholder="Write here:"
      />
      <br />
      <label> Guest team</label>
      <button type="button" onClick={async () => await createEvent()}>
        Make
      </button>
      <tr className="form">
        <td>Weekday </td>
        <td>Event Date </td>
        <td>Home Team </td>
        <span>vs</span>
        <td> Guest team </td>
      </tr>
      <div>
        <tr>
          <td>{sportNameInput}</td>
          <td>{weekdayInput} </td>
          <td>{eventDateInput} </td>
          <td>{homeTeamNameInput} </td>
          <span></span>
          <td>{guestTeamNameInput} </td>
        </tr>
      </div>
    </div>
  );
}
