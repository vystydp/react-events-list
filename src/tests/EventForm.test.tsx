import { render, screen, fireEvent } from '@testing-library/react';
import EventForm from '../components/EventForm';

describe('EventForm', () => {
  it('submits the form with correct data', async () => {
    // Arrange
    const onAddEvent = jest.fn();

    // Act
    render(<EventForm onAddEvent={onAddEvent} />);

    fireEvent.change(screen.getByTestId('title'), { target: { value: 'New Event' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2024-06-03' } });
    fireEvent.change(screen.getByTestId('desc'), { target: { value: 'Event Description' } });
    
    fireEvent.click(screen.getByTestId('add-event'));
    
    // Assert
    await screen.findByText('New Event (2024-06-03)');
    
    expect(onAddEvent).toHaveBeenCalled();
    expect(onAddEvent.mock.calls[0][0]).toMatchObject({
      title: 'New Event',
      date: '2024-06-03',
      desc: 'Event Description'
    });
  });
});
