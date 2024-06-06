import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import EventForm from "../components/EventForm";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("renders event form and handles submit", async () => {
  // ARRANGE
  const handleEventCreated = jest.fn();
  mockedAxios.post.mockResolvedValueOnce({
    data: {
      id: "3",
      title: "New Event",
      date: "2023-06-10",
      description: "New Description",
    },
  });

  // ACT
  render(<EventForm onEventCreated={handleEventCreated} />);
  fireEvent.change(screen.getByLabelText(/Title/i), {
    target: { value: "New Event" },
  });
  fireEvent.change(screen.getByLabelText(/Date/i), {
    target: { value: "2023-06-10" },
  });
  fireEvent.change(screen.getByLabelText(/Description/i), {
    target: { value: "New Description" },
  });
  fireEvent.click(screen.getByText(/Create Event/i));

  // ASSERT
  await screen.findByText(/Create Event/i);
  await waitFor(() => {
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
  });
  expect(screen.getByLabelText(/Title/i)).toHaveValue("");
  expect(screen.getByLabelText(/Date/i)).toHaveValue("");
  expect(screen.getByLabelText(/Description/i)).toHaveValue("");
  expect(handleEventCreated).toHaveBeenCalled();
});
