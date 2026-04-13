import { c as createComponent } from './astro-component_C0aOnk7E.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead, a3 as addAttribute } from './sequence_Cf8J0QyC.mjs';
import { r as renderComponent } from './entrypoint_CnFHr9Fc.mjs';
import { r as renderScript } from './script_DeAGT7yU.mjs';
import { $ as $$AdminLayout } from './AdminLayout_D53ZVkmL.mjs';
import { list } from '@vercel/blob';

const $$Media = createComponent(async ($$result, $$props, $$slots) => {
  let blobs = [];
  let error = "";
  try {
    const result = await list({
      token: "vercel_blob_rw_gBCGSmLYaPc6VVGw_xY8IzQ6QkPWfymieAaNyj5Iz4Hc18q"
    });
    blobs = result.blobs;
  } catch (err) {
    error = err.message || "Failed to connect to Vercel Blob.";
  }
  function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Media Library" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;"> <div> <h1 style="font-size: 1.875rem; font-weight: 700; margin: 0 0 0.5rem 0;">Media Library</h1> <p style="color: var(--muted-foreground); margin:0;">Manage images currently hosted on your Vercel cloud server.</p> </div> <div style="display: flex; gap: 0.5rem; align-items: center;"> <input class="input" type="file" id="mediaUploadFile" accept="image/*" style="width: auto; padding: 0.25rem 0.75rem;"> <button type="button" id="mediaUploadBtn" class="btn btn-primary">Upload Image</button> </div> </div> <div id="mediaUploadStatus" style="font-size: 0.8rem; margin-bottom: 1rem; color: var(--muted-foreground);"></div> ${error ? renderTemplate`<div style="background: var(--destructive); color: white; padding: 1rem; border-radius: var(--radius); margin-bottom: 1rem;"> ${error} </div>` : renderTemplate`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;"> ${blobs.length === 0 ? renderTemplate`<div class="card" style="grid-column: 1 / -1; text-align: center; padding: 4rem;"> <p style="color: var(--muted-foreground);">No media uploaded yet.</p> </div>` : blobs.map((blob) => renderTemplate`<div class="card"${addAttribute(`card-${blob.url.replace(/[^a-zA-Z0-9]/g, "")}`, "id")} style="display: flex; flex-direction: column; overflow: hidden; padding: 0;"> <div style="height: 160px; overflow: hidden; background: #eee; display: flex; align-items: center; justify-content: center;"> <img${addAttribute(blob.url, "src")}${addAttribute(blob.pathname, "alt")} style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" decoding="async"> </div> <div style="padding: 1rem; flex: 1; display: flex; flex-direction: column;"> <p style="font-weight: 600; font-size: 0.875rem; margin: 0 0 0.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"${addAttribute(blob.pathname, "title")}> ${blob.pathname} </p> <p style="font-size: 0.75rem; color: var(--muted-foreground); margin: 0 0 1rem;"> ${formatBytes(blob.size)} &middot; ${new Date(blob.uploadedAt).toLocaleDateString()} </p> <div style="margin-top: auto; display: flex; gap: 0.5rem;"> <button type="button" class="btn btn-secondary copy-btn"${addAttribute(blob.url, "data-url")} style="flex: 1; font-size: 0.75rem;">
Copy URL
</button> <button type="button" class="btn btn-destructive delete-btn"${addAttribute(blob.url, "data-url")} style="font-size: 0.75rem;">
Delete
</button> </div> </div> </div>`)} </div>`}${renderScript($$result2, "D:/N3 Projects/aero_website/src/pages/admin/media.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/N3 Projects/aero_website/src/pages/admin/media.astro", void 0);
const $$file = "D:/N3 Projects/aero_website/src/pages/admin/media.astro";
const $$url = "/admin/media";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Media,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
