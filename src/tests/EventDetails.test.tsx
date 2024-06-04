import React from 'react';
import { render, screen } from '@testing-library/react';
import EventDetails from '../components/EventDetails';

const event = { id: -1, title: 'Event 1', date: '2024-06-10', desc: "", weather: {temperature: ""} };

test('renders event details and fetches weather', async () => {
  // Arrange
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        properties: {
          timeseries: [{
            data: {
              instant: {
                details: { air_temperature: 15 },
              },
              next_1_hours: {
                summary: { symbol_code: 'cloudy' },
              },
            },
          }],
        },
      }),
    }),
  ) as jest.Mock;

  // Act
  render(<EventDetails event={event} />);

  // Assert
  expect(screen.getByText('Event 1')).toBeInTheDocument();
  expect(screen.getByText('6/10/2024')).toBeInTheDocument();
  expect(await screen.findByText(/Temperature: 15°C/)).toBeInTheDocument();
  expect(screen.getByText(/Weather: cloudy/)).toBeInTheDocument();
});
