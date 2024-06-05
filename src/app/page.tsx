import ClientWrapper from '../components/ClientWrapper';
import { Event } from '../types/event'

async function fetchEvents(): Promise<Event[]> {
  const res = await fetch('http://react-events-list.vercel.app/api/events');
  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  return res.json();
}

export default async function Page() {
  const initialEvents = await fetchEvents();
  
  return (
    <ClientWrapper initialEvents={initialEvents} />
  );
}
