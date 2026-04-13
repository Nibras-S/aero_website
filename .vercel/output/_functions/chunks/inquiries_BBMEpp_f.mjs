import { c as createComponent } from './astro-component_C0aOnk7E.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead, a3 as addAttribute } from './sequence_Cf8J0QyC.mjs';
import { r as renderComponent } from './entrypoint_CnFHr9Fc.mjs';
import { r as renderScript } from './script_DeAGT7yU.mjs';
import { $ as $$AdminLayout } from './AdminLayout_D53ZVkmL.mjs';
import { d as db, I as Inquiries } from './_astro_db_OV1MA9mI.mjs';
import { eq, desc } from '@astrojs/db/dist/runtime/virtual.js';

const $$Inquiries = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Inquiries;
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const idStr = data.get("id");
    const status = data.get("status");
    const deleteIdStr = data.get("deleteId");
    if (deleteIdStr) {
      const deleteId = parseInt(deleteIdStr, 10);
      await db.delete(Inquiries).where(eq(Inquiries.id, deleteId));
    } else if (idStr && status) {
      const id = parseInt(idStr, 10);
      await db.update(Inquiries).set({ status }).where(eq(Inquiries.id, id));
    }
  }
  const inquiries = await db.select().from(Inquiries).orderBy(desc(Inquiries.createdAt));
  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Inquiries CRM", "data-astro-cid-xv6pzp6e": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="inquiries-header" data-astro-cid-xv6pzp6e> <div data-astro-cid-xv6pzp6e> <h1 style="font-size: 1.875rem; font-weight: 700; margin: 0 0 0.5rem 0;" data-astro-cid-xv6pzp6e>Client Inquiries</h1> <p style="color: var(--muted-foreground); margin:0;" data-astro-cid-xv6pzp6e>Manage and track contact requests from your website.</p> </div> <div class="inquiries-filters" data-astro-cid-xv6pzp6e> <input type="date" id="dateFilter" class="input" aria-label="Filter by date" data-astro-cid-xv6pzp6e> <select id="serviceFilter" class="input" data-astro-cid-xv6pzp6e> <option value="All" data-astro-cid-xv6pzp6e>All Services</option> <option value="trip-planning" data-astro-cid-xv6pzp6e>Trip Planning</option> <option value="ground-handling" data-astro-cid-xv6pzp6e>Ground Handling</option> <option value="fuel" data-astro-cid-xv6pzp6e>Fuel Solutions</option> <option value="concierge" data-astro-cid-xv6pzp6e>Concierge & VIP</option> <option value="crm" data-astro-cid-xv6pzp6e>CRM Demo</option> <option value="other" data-astro-cid-xv6pzp6e>Other</option> </select> <select id="statusFilter" class="input" data-astro-cid-xv6pzp6e> <option value="All" data-astro-cid-xv6pzp6e>All Statuses</option> <option value="New" data-astro-cid-xv6pzp6e>New</option> <option value="In Progress" data-astro-cid-xv6pzp6e>In Progress</option> <option value="Closed" data-astro-cid-xv6pzp6e>Closed</option> </select> </div> </div> <div class="card inquiries-card" style="padding: 0;" data-astro-cid-xv6pzp6e> <div class="table-wrapper" data-astro-cid-xv6pzp6e> <table class="table" data-astro-cid-xv6pzp6e> <thead data-astro-cid-xv6pzp6e> <tr data-astro-cid-xv6pzp6e> <th data-astro-cid-xv6pzp6e>Date</th> <th data-astro-cid-xv6pzp6e>Name</th> <th data-astro-cid-xv6pzp6e>Service Requested</th> <th data-astro-cid-xv6pzp6e>Message</th> <th data-astro-cid-xv6pzp6e>Status</th> <th data-astro-cid-xv6pzp6e>Action</th> </tr> </thead> <tbody id="inquiriesTableBody" data-astro-cid-xv6pzp6e> ${inquiries.length === 0 ? renderTemplate`<tr data-astro-cid-xv6pzp6e> <td colspan="6" style="text-align:center; padding: 3rem; color: var(--muted-foreground);" data-astro-cid-xv6pzp6e>No inquiries yet.</td> </tr>` : inquiries.map((inq) => renderTemplate`<tr class="inquiry-row"${addAttribute(inq.status, "data-status")}${addAttribute(inq.serviceArea, "data-service")}${addAttribute(new Date(inq.createdAt).toISOString().split("T")[0], "data-date")} data-astro-cid-xv6pzp6e> <td data-label="Date" style="white-space: nowrap;" data-astro-cid-xv6pzp6e>${formatDate(inq.createdAt)}</td> <td data-label="Name" data-astro-cid-xv6pzp6e> <div style="font-weight: 500;" data-astro-cid-xv6pzp6e>${inq.name}</div> <div style="font-size: 0.75rem; color: var(--muted-foreground);" data-astro-cid-xv6pzp6e>${inq.email}</div> <div style="font-size: 0.75rem; color: var(--muted-foreground);" data-astro-cid-xv6pzp6e>${inq.phone}</div> </td> <td data-label="Service" data-astro-cid-xv6pzp6e><span class="badge badge-secondary" data-astro-cid-xv6pzp6e>${inq.serviceArea || "General"}</span></td> <td data-label="Message" style="max-width: 300px;" data-astro-cid-xv6pzp6e> <p style="margin:0; font-size: 0.8rem; overflow:hidden; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;" data-astro-cid-xv6pzp6e>${inq.message}</p> </td> <td data-label="Status" data-astro-cid-xv6pzp6e> <span${addAttribute(`badge ${inq.status === "New" ? "badge-warning" : inq.status === "Closed" ? "badge-secondary" : "badge-success"}`, "class")} data-astro-cid-xv6pzp6e> ${inq.status} </span> </td> <td data-label="Action" data-astro-cid-xv6pzp6e> <div style="display: flex; gap: 0.5rem;" data-astro-cid-xv6pzp6e> <form method="POST" style="margin: 0;" data-astro-cid-xv6pzp6e> <input type="hidden" name="id"${addAttribute(inq.id, "value")} data-astro-cid-xv6pzp6e> <select name="status" class="input" style="height: 2rem; width: auto; font-size: 0.75rem; padding: 0 0.5rem;" onchange="this.form.submit()" data-astro-cid-xv6pzp6e> <option value="New"${addAttribute(inq.status === "New", "selected")} data-astro-cid-xv6pzp6e>New</option> <option value="In Progress"${addAttribute(inq.status === "In Progress", "selected")} data-astro-cid-xv6pzp6e>In Progress</option> <option value="Closed"${addAttribute(inq.status === "Closed", "selected")} data-astro-cid-xv6pzp6e>Closed</option> </select> </form> <form method="POST" style="margin: 0;" onsubmit="return confirm('Permanently delete this inquiry?');" data-astro-cid-xv6pzp6e> <input type="hidden" name="deleteId"${addAttribute(inq.id, "value")} data-astro-cid-xv6pzp6e> <button type="submit" class="btn btn-destructive" style="height: 2rem; padding: 0 0.5rem; font-size: 0.75rem;" data-astro-cid-xv6pzp6e>Delete</button> </form> </div> </td> </tr>`)} </tbody> </table> </div> </div> ${renderScript($$result2, "D:/N3 Projects/aero_website/src/pages/admin/inquiries.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/N3 Projects/aero_website/src/pages/admin/inquiries.astro", void 0);

const $$file = "D:/N3 Projects/aero_website/src/pages/admin/inquiries.astro";
const $$url = "/admin/inquiries";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Inquiries,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
