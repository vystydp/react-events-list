import { NextResponse } from 'next/server';
import { Event } from '../../../../types/event'

let events: Event[] = [];


const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    return `https://${process.env.VERCEL_URL}`;
  } else {
    return 'http://localhost:3000';
  }
};

export async function generateStaticParams() {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/events`);
  const events: Event[] = await res.json();

  return events.map(event => ({
    slug: event.id,
  }));
}

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const event = events.find(e => e.id === slug);
  if (event) {
    return NextResponse.json(event);
  } else {
    return NextResponse.json({ message: 'Event not found' }, { status: 404 });
  }
}

export async function DELETE(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log(params, 'params')
  events = events.filter(e => e.id !== slug);
  return new NextResponse(null, { status: 204 });
}

export const config = {
  methods: ['GET', 'DELETE'],
}
