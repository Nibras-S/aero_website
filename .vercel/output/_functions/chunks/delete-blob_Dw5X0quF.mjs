import { del } from '@vercel/blob';

async function POST({ request }) {
  try {
    const cookieHeader = request.headers.get("cookie") || "";
    if (!cookieHeader.includes("flyger_admin_auth=")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    const { url } = await request.json();
    if (!url) {
      return new Response(JSON.stringify({ error: "Blob URL is required" }), { status: 400 });
    }
    await del(url, {
      token: "vercel_blob_rw_gBCGSmLYaPc6VVGw_xY8IzQ6QkPWfymieAaNyj5Iz4Hc18q"
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Delete failed:", error);
    return new Response(JSON.stringify({ error: error.message || "Delete failed" }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
