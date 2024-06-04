import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EventList from '../components/EventList';

const events = [
  { id: 1, title: 'Event 1', date: '2024-06-10', desc: '', weather: {temperature: ""} },
  { id: 2, title: 'Event 2', date: '2024-07-10', desc: '',  weather: {temperature: ""} },
];

test('renders events and handles selection', () => {
  const handleSelectEvent = jest.fn();
  render(<EventList events={events} selectEvent={handleSelectEvent} selectedEventId={1} />);

  events.forEach(event => {
    expect(screen.getByText(`${event.title} - ${new Date(event.date).toLocaleDateString()}`)).toBeInTheDocument();
  });

  fireEvent.click(screen.getByText('Event 1 - 6/10/2024'));
  expect(handleSelectEvent).toHaveBeenCalledWith(events[0]);
});