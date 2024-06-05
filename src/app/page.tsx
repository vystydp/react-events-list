import ClientWrapper from '../components/ClientWrapper';
import { Event } from '../types/event'

export default function Page() {
  console.log('Building Page component'); // Debug log
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
  console.log('Fetched initial events:', initialEvents); // Debug log
  
  return (
    <ClientWrapper initialEvents={initialEvents} />
  );
}
