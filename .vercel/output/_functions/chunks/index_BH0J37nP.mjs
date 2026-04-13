import { c as createComponent } from './astro-component_C0aOnk7E.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead, a3 as addAttribute } from './sequence_Cf8J0QyC.mjs';
import { r as renderComponent } from './entrypoint_CnFHr9Fc.mjs';
import { $ as $$AdminLayout } from './AdminLayout_D53ZVkmL.mjs';
import { d as db, B as BlogPosts } from './_astro_db_OV1MA9mI.mjs';
import { del } from '@vercel/blob';
import { eq, desc } from '@astrojs/db/dist/runtime/virtual.js';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const deleteId = data.get("deleteId");
    if (deleteId) {
      const postToDelete = await db.select().from(BlogPosts).where(eq(BlogPosts.id, deleteId));
      if (postToDelete.length > 0 && postToDelete[0].featuredImage && postToDelete[0].featuredImage.includes("public.blob.vercel-storage.com")) {
        try {
          await del(postToDelete[0].featuredImage, { token: "vercel_blob_rw_gBCGSmLYaPc6VVGw_xY8IzQ6QkPWfymieAaNyj5Iz4Hc18q" });
        } catch (err) {
          console.error("Failed to delete orphaned blob image:", err);
        }
      }
      await db.delete(BlogPosts).where(eq(BlogPosts.id, deleteId));
    }
  }
  const allPosts = await db.select().from(BlogPosts).orderBy(desc(BlogPosts.createdAt));
  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Blog Manager" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;"> <div> <h1 style="font-size: 1.875rem; font-weight: 700; margin: 0 0 0.5rem 0;">Blog Manager</h1> <p style="color: var(--muted-foreground); margin:0;">Create, edit, and publish articles.</p> </div> <a href="/admin/blog/edit" class="btn btn-primary" style="gap: 0.5rem;"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
Create Post
</a> </div> <div class="card" style="padding: 0;"> <div class="table-wrapper"> <table class="table"> <thead> <tr> <th>Published</th> <th>Title</th> <th>Category</th> <th>Author</th> <th>Status</th> <th style="text-align:right;">Actions</th> </tr> </thead> <tbody> ${allPosts.length === 0 ? renderTemplate`<tr> <td colspan="6" style="text-align:center; padding: 3rem; color: var(--muted-foreground);">No blog posts found. Create your first!</td> </tr>` : allPosts.map((post) => renderTemplate`<tr> <td style="white-space: nowrap;">${formatDate(post.createdAt)}</td> <td style="font-weight: 500;"> ${post.title} ${post.featured && renderTemplate`<span class="badge badge-success" style="margin-left: 0.5rem;">Featured</span>`} </td> <td><span class="badge badge-secondary">${post.category}</span></td> <td>${post.author}</td> <td><span class="badge badge-default">Published</span></td> <td style="text-align:right;"> <div style="display:flex; gap: 0.5rem; justify-content: flex-end;"> <a${addAttribute(`/blog/${post.id}`, "href")} target="_blank" class="btn btn-secondary" style="height: 2rem; padding: 0 0.75rem; font-size: 0.75rem;">View</a> <a${addAttribute(`/admin/blog/edit?id=${post.id}`, "href")} class="btn btn-secondary" style="height: 2rem; padding: 0 0.75rem; font-size: 0.75rem;">Edit</a> <form method="POST" onsubmit="return confirm('Are you sure you want to delete this post? Please note: If this post uses an uploaded cloud image, that image will be permanently deleted from your library as well.');" style="margin:0;"> <input type="hidden" name="deleteId"${addAttribute(post.id, "value")}> <button type="submit" class="btn btn-destructive" style="height: 2rem; padding: 0 0.75rem; font-size: 0.75rem;">Delete</button> </form> </div> </td> </tr>`)} </tbody> </table> </div> </div> ` })}`;
}, "D:/N3 Projects/aero_website/src/pages/admin/blog/index.astro", void 0);
const $$file = "D:/N3 Projects/aero_website/src/pages/admin/blog/index.astro";
const $$url = "/admin/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
