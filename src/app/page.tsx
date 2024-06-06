import ClientWrapper from '../components/ClientWrapper';
import { Event } from '../types/event'

export default function Page() {
  // This is actually not needed in this impl 
  // but lets keep it for component reusability
  let initialEvents: Event[] = [];
  
  return (
    <ClientWrapper initialEvents={initialEvents} />
  );
}
