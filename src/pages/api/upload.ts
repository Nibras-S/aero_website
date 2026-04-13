import { put } from '@vercel/blob';

export async function POST({ request }: { request: Request }) {
  try {
    // Check authentication token via cookies again for security on this endpoint
    const cookieHeader = request.headers.get('cookie') || '';
    if (!cookieHeader.includes('flyger_admin_auth=')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    if (!filename) {
      return new Response(JSON.stringify({ error: 'Filename is required' }), { status: 400 });
    }

    // Buffer the body fully before handing it to @vercel/blob.
    // Passing request.body directly fails with "body disturbed or locked"
    // because the stream may already be consumed by Astro's SSR pipeline.
    const body = await request.arrayBuffer();

    const blob = await put(filename, body, {
      access: 'public',
      token: import.meta.env.BLOB_READ_WRITE_TOKEN,
    });

    return new Response(JSON.stringify(blob), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Upload failed:', error);
    return new Response(JSON.stringify({ error: error.message || 'Upload failed' }), { status: 500 });
  }
}
