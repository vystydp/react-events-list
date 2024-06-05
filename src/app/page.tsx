import ClientWrapper from '../components/ClientWrapper';

export default async function Page() {
  console.log('Building Page component'); // Debug log
  const initialEvents = [];
  console.log('Fetched initial events:', initialEvents); // Debug log
  
  return (
    <ClientWrapper initialEvents={initialEvents} />
  );
}
