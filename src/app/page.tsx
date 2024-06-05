import axios from 'axios';
import ClientWrapper from '../components/ClientWrapper';
import { Event } from '../types/event'

export async function generateStaticParams() {
  return [];
}

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_API_BASE_URL) {
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}`;
  } else {
    return `${process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL}`;
  }
};

async function fetchEvents(): Promise<Event[]> {
  var url = `${getBaseUrl()}/api/events`;
  console.log(`Fetching events from: ${url}`); // Debug log
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL + "aaaaaaaaaaa");
  const res = await axios.get(url);
  if (!res.data) {
    throw new Error(`Failed to fetch events from ${url}: ${res.statusText}`);
  }
  try {
    console.log(`RES DATA${res.data}`)
    return res.data;
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
