import { NextResponse } from 'next/server';
import { z } from 'zod';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

const newsletterSchema = z.object({
  email: z.string().email().max(254),
  website: z.string().max(0).optional(), // honeypot
});

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type');
  if (!contentType?.includes('application/json')) {
    return NextResponse.json({ success: false, message: 'Invalid content type' }, { status: 415 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false, message: 'Too many requests. Try again later.' }, { status: 429 });
  }

  try {
    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    if (result.data.website) {
      return NextResponse.json({ success: true });
    }

    // TODO: Send via Resend when configured

    return NextResponse.json({ success: true, message: 'Subscribed successfully.' });
  } catch {
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
