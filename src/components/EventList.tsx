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
    const interval = setInterval(fetchEvents, 5000); // Poll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <ul className="space-y-4">
        {events.map(event => (
          <li
            key={event.id}
            onClick={() => onSelectEvent(event)}
            className="p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition"
          >
            <div className="text-xl font-semibold">{event.title}</div>
            <div className="text-gray-500">{new Date(event.date).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
