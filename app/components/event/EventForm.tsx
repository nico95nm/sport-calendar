'use client';
import '../event/eventFrom.css';
import { useRouter } from 'next/navigation';
import { use, useState } from 'react';

//DDefine type for Props
type Props = {
  events: Event[];
  event_date: Date | null;
};

// Create variables for input fields
export default function EventsForm({ events }: Props) {
  const [eventList, setEventList] = useState(events);
  const [eventDateInput, setEventDateInput] = useState('');
  const router = useRouter();
  // Create function that will fetch from API
  async function createEvent() {
    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({
        event_date: eventDateInput.toString(),
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
      <br />
      <label>Event date: </label>
      <input
        value={eventDateInput}
        onChange={(event) => setEventDateInput(event.currentTarget.value)}
      />
      <br />
      <label> Guest team</label>
      <button type="button" onClick={async () => await createEvent()}>
        Make
      </button>
      <tr className="form">
        <td>Event Date </td>
      </tr>
      <div>
        <tr>
          <td>{eventDateInput} </td>
        </tr>
      </div>
    </div>
  );
}
