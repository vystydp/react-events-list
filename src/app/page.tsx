import ClientWrapper from '../components/ClientWrapper';

type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
};

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_API_BASE_URL) {
    return `https://${process.env.NEXT_PUBLIC_API_BASE_URL}`;
  } else {
    return `http://${process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL}`;
  }
};

async function fetchEvents(): Promise<Event[]> {
  const baseUrl = getBaseUrl();
  console.log(`Fetching events from: ${baseUrl}/api/events`); // Debug log
  const res = await fetch(`${baseUrl}/api/events`);
  if (!res.ok) {
    throw new Error(`Failed to fetch events from ${baseUrl}/api/events: ${res.statusText}`);
  }
  try {
    return await res.json();
  } catch (error) {
    throw new Error(`Failed to parse JSON from ${baseUrl}/api/events: ${error.message}`);
  }
}

export default async function Page() {
  console.log('Building Page component'); // Debug log
  const initialEvents = await fetchEvents();
  console.log('Fetched initial events:', initialEvents); // Debug log
  
  return (
    <ClientWrapper initialEvents={initialEvents} />
  );
}
