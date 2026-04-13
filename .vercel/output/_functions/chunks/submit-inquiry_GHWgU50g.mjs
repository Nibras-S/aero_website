import { d as db, I as Inquiries } from './_astro_db_OV1MA9mI.mjs';

async function POST({ request }) {
  try {
    const data = await request.json();
    const { firstName, lastName, company, email, phone, service, message } = data;
    await db.insert(Inquiries).values({
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      serviceArea: service,
      message,
      status: "New"
    });
    return new Response(JSON.stringify({ success: true, message: "Inquiry received." }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Failed to submit inquiry:", error);
    return new Response(JSON.stringify({ success: false, message: "Internal server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
