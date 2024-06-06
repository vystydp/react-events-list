'use client';

import { useState } from 'react';
import EventList from './EventList';
import EventForm from './EventForm';
import EventDetails from './EventDetails';
import { Event } from '../types/event'

const ClientWrapper = ({ initialEvents }: { initialEvents: Event[] }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="App">
        <header className="App-header">
        </header>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-2">
              <EventList initialEvents={initialEvents} onSelectEvent={setSelectedEvent} />
                {selectedEvent && (
                <div className="mt-4">
                <EventDetails event={selectedEvent} />
                </div>
                )}
              </div>
              <div className="col-span-1">
              <EventForm onEventCreated={() => setSelectedEvent(null)} />
              </div>
          </div>
        </div>
  </div>
  );
};

export default ClientWrapper;
