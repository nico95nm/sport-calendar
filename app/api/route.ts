import { NextResponse } from 'next/server';

export function GET(): NextResponse<{ events: string }> {
  return NextResponse.json({ events: '/api/events' });
}
