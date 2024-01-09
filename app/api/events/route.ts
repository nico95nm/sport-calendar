import { createEvent } from '@/database/events';
import { Event } from '@/migrations/1701860652-createTableEvents';
import { NextRequest, NextResponse } from 'next/server';

export type EventResponseBodyPost = { event: Event } | Error;
// With POST function we create event
export async function POST(
  request: NextRequest,
): Promise<NextResponse<EventResponseBodyPost>> {
  const body = await request.json();
  const newEvent = await createEvent(body.data.event_date);
  console.log({ body });
  return NextResponse.json({ event: newEvent });
}
