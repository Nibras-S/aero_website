import { db, Inquiries } from 'astro:db';

export async function POST({ request }: { request: Request }) {
  try {
    const data = await request.json();

    const { firstName, lastName, company, email, phone, service, message } = data;

    // Insert into Astro DB
    await db.insert(Inquiries).values({
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      serviceArea: service,
      message,
      status: 'New',
    });

    return new Response(JSON.stringify({ success: true, message: 'Inquiry received.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to submit inquiry:', error);
    return new Response(JSON.stringify({ success: false, message: 'Internal server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
