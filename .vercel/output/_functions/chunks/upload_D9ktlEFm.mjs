import { put } from '@vercel/blob';

async function POST({ request }) {
  try {
    const cookieHeader = request.headers.get("cookie") || "";
    if (!cookieHeader.includes("flyger_admin_auth=")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get("filename");
    if (!filename) {
      return new Response(JSON.stringify({ error: "Filename is required" }), { status: 400 });
    }
    const body = await request.arrayBuffer();
    const blob = await put(filename, body, {
      access: "public",
      token: "vercel_blob_rw_gBCGSmLYaPc6VVGw_xY8IzQ6QkPWfymieAaNyj5Iz4Hc18q"
    });
    return new Response(JSON.stringify(blob), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Upload failed:", error);
    return new Response(JSON.stringify({ error: error.message || "Upload failed" }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
