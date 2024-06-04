import {Event} from '../types/event'

interface EventDetailsProps {
  event: Event | null;
}

/* eslint react/prop-types: 0 */
const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  if (!event) {
    return <div className="">Select an event to see the details</div>;
  }

  return (
    <div className="">
    </div>
  );
};

export default EventDetails;
