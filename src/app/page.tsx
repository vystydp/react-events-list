import ClientWrapper from '../components/ClientWrapper';
import { Event } from '../types/event'

export async function generateStaticParams() {
  return [];
}

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_API_BASE_URL) {
    return `https://${process.env.NEXT_PUBLIC_API_BASE_URL}`;
  } else {
    return `http://${process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL}`;
  }
};

async function fetchEvents(): Promise<Event[]> {
  var url = `${getBaseUrl()}/api/events`;
  console.log(`Fetching events from: ${url}`); // Debug log
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch events from ${url}: ${res.statusText}`);
  }
  try {
    return await res.json();
  } catch (error) {
    throw new Error(`Failed to parse JSON from ${url}: ${error.message}`);
  }
}

export default async function Page() {
  const initialEvents = await fetchEvents();
  
  return (
    <ClientWrapper initialEvents={initialEvents} />
  );
}
