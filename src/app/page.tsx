import ClientWrapper from '../components/ClientWrapper';
import { Event } from '../types/event'

export default function Page() {
  let initialEvents: Event[] = [{ 
    id: "1", 
    title: "Interview with Slido / Panaxeo", 
    date: "2024-06-05T02:00:40+00:00", 
    description: "Interview" ,
    location: {
      long: 10,
      lat: 10
    }
  }];
  
  return (
    <ClientWrapper initialEvents={initialEvents} />
  );
}
