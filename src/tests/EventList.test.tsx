import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventList from '../components/EventList';

const mockEvents = [
  { id: '1', title: 'Event 1', date: '2023-06-04', description: 'Description 1' },
  { id: '2', title: 'Event 2', date: '2023-06-05', description: 'Description 2' },
];

test('renders event list and handles click', () => {
  // ARRANGE
  const handleSelectEvent = jest.fn();

  // ACT
  render(<EventList initialEvents={mockEvents} onSelectEvent={handleSelectEvent} />);
  
  // ASSERT
  expect(screen.getByText('Event 1 - 6/4/2023')).toBeInTheDocument();
  expect(screen.getByText('Event 2 - 6/5/2023')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Event 1 - 6/4/2023'));
  expect(handleSelectEvent).toHaveBeenCalledWith(mockEvents[0]);
});
