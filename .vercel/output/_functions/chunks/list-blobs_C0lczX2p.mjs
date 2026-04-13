import { list } from '@vercel/blob';

async function GET({ request }) {
  try {
    const cookieHeader = request.headers.get("cookie") || "";
    if (!cookieHeader.includes("flyger_admin_auth=")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    const result = await list({
      token: "vercel_blob_rw_gBCGSmLYaPc6VVGw_xY8IzQ6QkPWfymieAaNyj5Iz4Hc18q"
    });
    return new Response(JSON.stringify(result.blobs), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("List failed:", error);
    return new Response(JSON.stringify({ error: error.message || "List failed" }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
