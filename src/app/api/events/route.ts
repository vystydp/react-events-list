import { NextResponse } from 'next/server';
import { Event } from '../../../types/event'

let events: Event[] = [{ 
  id: "1", 
  title: "Interview with Slido / Panaxeo", 
  date: "2024-06-05T02:00:40+00:00", 
  description: "Interview" ,
  location: {
    long: 10,
    lat: 10
  }
}];

export async function GET() {
  return NextResponse.json(events);
}

export async function POST(req) {
  const { title, date, description, long, lat } = await req.json();
  const id = (Math.random() * 10000).toString();
  const newEvent = { id, title, date, description, location: {long, lat} };
  events.push(newEvent);
  return NextResponse.json(newEvent, { status: 201 });
}
