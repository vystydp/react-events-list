import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import EventDetails from "../components/EventDetails";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockEvent = {
  id: "1",
  title: "Event 1",
  date: "2023-06-04",
  description: "Description 1",
  location: {
    lat: 10,
    long: 10,
  },
};

const mockWeather = {
  properties: {
    timeseries: [
      {
        data: {
          instant: {
            details: {
              air_temperature: 25,
            },
          },
        },
      },
    ],
  },
};

test("renders event details with weather information", async () => {
  // ARRANGE
  mockedAxios.get.mockResolvedValueOnce({ data: mockWeather });

  // ACT
  render(<EventDetails event={mockEvent} />);

  // ASSERT
  expect(screen.getByText("Event 1")).toBeInTheDocument();
  expect(screen.getByText("6/4/2023")).toBeInTheDocument();
  expect(screen.getByText("Description 1")).toBeInTheDocument();
  const temperatureElement = await screen.findByText(/Temperature: 25°C/i);
  expect(temperatureElement).toBeInTheDocument();
});
