import {Event} from '../types/event'

interface EventFormProps {
    onAddEvent: (event: Event) => void;
}

const EventForm = ({ onAddEvent }: EventFormProps) => {

  const handleSubmit = () => {
    const event: Event = {
        id: Date.now(),
        title: '',
        date: '',
        desc: '',
        weather: {temperature: ""}
    };
    onAddEvent(event);
  };

  return (
    <form onSubmit={handleSubmit} className="">
    </form>
  );
};

export default EventForm;
