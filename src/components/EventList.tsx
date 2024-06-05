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
    <div className='container'>
      <h2 className="text-2xl font-bold mb-3.5">Events</h2>
        {Array.isArray(events) && events.map(event => (
          <div className={'box-border h-42 w-42 p-4 border-1 shadow-lg' + (new Date(event.date).getTime() < new Date().getTime() ? ' previous' : ' upcomming')}
               key={event.id} >
            <div onClick={() => onSelectEvent(event)} className="cursor-pointer">
              {event.title} - {new Date(event.date).toLocaleDateString()}
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventList;
