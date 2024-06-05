import ClientWrapper from '../components/ClientWrapper';
import { Event } from '../types/event'

async function fetchEvents(): Promise<Event[]> {
  var url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/events`;
  const res = await fetch(url);
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
