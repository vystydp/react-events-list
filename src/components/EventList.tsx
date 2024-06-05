'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Event } from '../types/event'

const EventList = ({ initialEvents, onSelectEvent }: { initialEvents: Event[], onSelectEvent: (event: Event) => void }) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const fetchEvents = async () => {
    const response = await axios.get('/api/events');
    setEvents(response.data);
  };

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 5000); // Poll every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id} onClick={() => onSelectEvent(event)} className="cursor-pointer">
            {event.title} - {new Date(event.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
