import ClientWrapper from '../components/ClientWrapper';
import { Event } from '../types/event'

export default function Page() {
  let initialEvents: Event[] = [];
  
  return (
    <ClientWrapper initialEvents={initialEvents} />
  );
}
