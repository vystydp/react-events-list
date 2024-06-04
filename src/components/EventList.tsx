import { Event } from '../types/event'

interface EventListProps {
  events: Event[];
  selectEvent: (event: Event) => void;
  selectedEventId: number | null
}

const EventList = ({ events, selectEvent }: EventListProps) => {
  return (
    <div className="" onClick={() => selectEvent({id: -1, title: '', date: '', desc: '', weather: {temperature: ""}})}>
        {events.map((event) => event.date)}
    </div>
  );
};

export default EventList;
