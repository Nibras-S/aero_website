import { del } from '@vercel/blob';

export async function POST({ request }: { request: Request }) {
  try {
    const cookieHeader = request.headers.get('cookie') || '';
    if (!cookieHeader.includes('flyger_admin_auth=')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { url } = await request.json();

    if (!url) {
      return new Response(JSON.stringify({ error: 'Blob URL is required' }), { status: 400 });
    }

    await del(url, {
      token: import.meta.env.BLOB_READ_WRITE_TOKEN,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Delete failed:', error);
    return new Response(JSON.stringify({ error: error.message || 'Delete failed' }), { status: 500 });
  }
}
