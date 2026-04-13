import { list } from '@vercel/blob';

export async function GET({ request }: { request: Request }) {
  try {
    const cookieHeader = request.headers.get('cookie') || '';
    if (!cookieHeader.includes('flyger_admin_auth=')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const result = await list({
      token: import.meta.env.BLOB_READ_WRITE_TOKEN
    });

    return new Response(JSON.stringify(result.blobs), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('List failed:', error);
    return new Response(JSON.stringify({ error: error.message || 'List failed' }), { status: 500 });
  }
}
