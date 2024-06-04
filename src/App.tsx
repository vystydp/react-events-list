import { useState } from 'react';
import './App.css';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import { Event } from './types/event'

function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  
  const onAddEvent = (event: Event) => {
    setEvents([...events, event]);
  };

  const selectEvent = (event: Event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="">
        <div>
          <EventForm onAddEvent={onAddEvent} />
          <EventList events={events} selectEvent={selectEvent} selectedEventId={selectedEvent?.id || null} />
        </div>
        <EventDetails event={selectedEvent} />
      </div>
    </div>
  );
}

export default App;
