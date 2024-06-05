import ClientWrapper from '../components/ClientWrapper';

type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
};

const getBaseUrl = () => {
  console.log(process.env.VERCEL_ENV)
  console.log(process.env.VERCEL_URL)
  console.log("ssssssssssssssssssssss")
  if (process.env.VERCEL_ENV === 'production' || process.env.VERCEL_ENV === 'preview') {
    return `http://${process.env.VERCEL_URL}`;
  } else {
    return `https://${process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL}`;
  }
};

async function fetchEvents(): Promise<Event[]> {
  const baseUrl = getBaseUrl();
  console.log(`Fetching events from: ${baseUrl}/api/events`); // Debug log
  const res = await fetch(`${baseUrl}/api/events`, {
    credentials: "same-origin", // include, *same-origin, omit
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  });
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
