import { NextResponse } from 'next/server';
import { Event } from '../../../types/event'

let events: Event[] = [{ 
  id: "1", 
  title: "title", 
  date: "2024-06-06T14:05:00+02:00", 
  description: "desc" ,
  location: {
    long: 10,
    lat: 10
  }
}];

export async function GET() {
  events.sort((a: Event, b: Event) => new Date(a.date) > new Date(b.date) ? 1 : -1);
  return NextResponse.json(events);
}

export async function POST(req) {
  const { title, date, description, long, lat } = await req.json();
  const id = (Math.random() * 10000).toString();
  const newEvent = { id, title, date, description, location: {long, lat} };
  events.push(newEvent);
  return NextResponse.json(newEvent, { status: 201 });
}
