import { c as createComponent } from './astro-component_C0aOnk7E.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead, a3 as addAttribute } from './sequence_Cf8J0QyC.mjs';
import { r as renderComponent } from './entrypoint_CnFHr9Fc.mjs';
import { r as renderScript } from './script_DeAGT7yU.mjs';
import { $ as $$AdminLayout } from './AdminLayout_D53ZVkmL.mjs';
import { d as db, B as BlogPosts } from './_astro_db_OV1MA9mI.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

const $$Edit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Edit;
  const id = Astro2.url.searchParams.get("id");
  let post = null;
  if (id) {
    const posts = await db.select().from(BlogPosts).where(eq(BlogPosts.id, id));
    if (posts.length > 0) {
      post = posts[0];
    }
  }
  let error = "";
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const saveId = data.get("id")?.toString();
      const title = data.get("title")?.toString() || "";
      const slug = data.get("slug")?.toString() || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      const excerpt = data.get("excerpt")?.toString() || "";
      const featuredImage = data.get("featuredImage")?.toString() || "/images/default-blog.jpg";
      const author = data.get("author")?.toString() || "Flyger Editorial Team";
      const category = data.get("category")?.toString() || "Aviation Insights";
      const featured = data.get("featured") === "on";
      const body = data.get("body")?.toString() || "";
      const createdAt = new Date(data.get("createdAt")?.toString() || (/* @__PURE__ */ new Date()).toISOString());
      if (!slug) throw new Error("Slug could not be generated.");
      if (saveId) {
        await db.update(BlogPosts).set({
          id: slug,
          title,
          excerpt,
          featuredImage,
          author,
          category,
          featured,
          body,
          createdAt
        }).where(eq(BlogPosts.id, saveId));
      } else {
        await db.insert(BlogPosts).values({
          id: slug,
          title,
          excerpt,
          featuredImage,
          author,
          category,
          featured,
          body,
          createdAt
        });
      }
      return Astro2.redirect("/admin/blog");
    } catch (err) {
      error = err.message || "Failed to save post.";
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": post ? "Edit Post" : "New Post", "data-astro-cid-rqdi3l56": true }, { "default": async ($$result2) => renderTemplate` ${renderScript($$result2, "D:/N3 Projects/aero_website/src/pages/admin/blog/edit.astro?astro&type=script&index=0&lang.ts")}  ${maybeRenderHead()}<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;" data-astro-cid-rqdi3l56> <div data-astro-cid-rqdi3l56> <h1 style="font-size: clamp(1.4rem, 4vw, 1.875rem); font-weight: 700; margin: 0 0 0.5rem 0;" data-astro-cid-rqdi3l56>${post ? "Edit Post" : "Create New Post"}</h1> <p style="color: var(--muted-foreground); margin:0; font-size: clamp(0.85rem, 2vw, 0.95rem);" data-astro-cid-rqdi3l56>Write on the left, preview on the right. On mobile, tap Write / Preview to switch.</p> </div> <a href="/admin/blog" class="btn btn-secondary" data-astro-cid-rqdi3l56>Cancel</a> </div> ${error && renderTemplate`<div style="background: var(--destructive); color: white; padding: 1rem; border-radius: var(--radius); margin-bottom: 1rem;" data-astro-cid-rqdi3l56> ${error} </div>`} <div class="editor-tabs" role="tablist" data-astro-cid-rqdi3l56> <button type="button" class="editor-tab is-active" data-pane="write" role="tab" data-astro-cid-rqdi3l56>Write</button> <button type="button" class="editor-tab" data-pane="preview" role="tab" data-astro-cid-rqdi3l56>Preview</button> </div> <div class="editor-grid" data-astro-cid-rqdi3l56> <!-- LEFT PANE: Editor --> <form method="POST" class="card editor-pane editor-pane--write is-active" data-astro-cid-rqdi3l56> ${post && renderTemplate`<input type="hidden" name="id"${addAttribute(post.id, "value")} data-astro-cid-rqdi3l56>`} <div class="edit-grid-2" data-astro-cid-rqdi3l56> <div data-astro-cid-rqdi3l56> <label class="label" for="title" data-astro-cid-rqdi3l56>Title</label> <input class="input" type="text" id="title" name="title" required${addAttribute(post?.title || "", "value")} data-astro-cid-rqdi3l56> </div> <div data-astro-cid-rqdi3l56> <label class="label" for="slug" data-astro-cid-rqdi3l56>URL Slug (identifier)</label> <input class="input" type="text" id="slug" name="slug" placeholder="leave blank to auto-generate"${addAttribute(post?.id || "", "value")} data-astro-cid-rqdi3l56> </div> </div> <div class="edit-grid-3" data-astro-cid-rqdi3l56> <div data-astro-cid-rqdi3l56> <label class="label" for="category" data-astro-cid-rqdi3l56>Category</label> <select class="input" id="category" name="category" data-astro-cid-rqdi3l56> <option value="Aviation Insights"${addAttribute(post?.category === "Aviation Insights", "selected")} data-astro-cid-rqdi3l56>Aviation Insights</option> <option value="Company Updates"${addAttribute(post?.category === "Company Updates", "selected")} data-astro-cid-rqdi3l56>Company Updates</option> <option value="Industry News"${addAttribute(post?.category === "Industry News", "selected")} data-astro-cid-rqdi3l56>Industry News</option> <option value="Technology"${addAttribute(post?.category === "Technology", "selected")} data-astro-cid-rqdi3l56>Technology</option> </select> </div> <div data-astro-cid-rqdi3l56> <label class="label" for="author" data-astro-cid-rqdi3l56>Author</label> <input class="input" type="text" id="author" name="author"${addAttribute(post?.author || "Flyger Editorial Team", "value")} data-astro-cid-rqdi3l56> </div> <div data-astro-cid-rqdi3l56> <label class="label" for="createdAt" data-astro-cid-rqdi3l56>Publish Date</label> <input class="input" type="date" id="createdAt" name="createdAt"${addAttribute(post ? new Date(post.createdAt).toISOString().split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0], "value")} data-astro-cid-rqdi3l56> </div> </div> <div data-astro-cid-rqdi3l56> <label class="label" for="featuredImageFile" data-astro-cid-rqdi3l56>Featured Image</label> <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;" data-astro-cid-rqdi3l56> <input class="input" type="file" id="featuredImageFile" accept="image/*" style="flex: 1; padding: 0.25rem 0.75rem; min-width: 200px;" data-astro-cid-rqdi3l56> <button type="button" id="uploadBtn" class="btn btn-secondary" data-astro-cid-rqdi3l56>Upload New</button> <span style="color: var(--muted-foreground); font-size: 0.875rem;" data-astro-cid-rqdi3l56>- or -</span> <button type="button" id="openLibraryBtn" class="btn btn-secondary" data-astro-cid-rqdi3l56>Select from Library</button> </div> <!-- Hidden Media Library Dropdown Container --> <div id="mediaLibraryModal" style="display: none; border: 1px solid var(--border); border-radius: var(--radius); padding: 1rem; margin-bottom: 0.5rem; background: var(--muted);" data-astro-cid-rqdi3l56> <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;" data-astro-cid-rqdi3l56> <span style="font-weight: 600; font-size: 0.875rem;" data-astro-cid-rqdi3l56>Select an image...</span> <button type="button" id="closeLibraryBtn" class="btn btn-secondary" style="height: 1.5rem; font-size: 0.75rem; padding: 0 0.5rem;" data-astro-cid-rqdi3l56>Close</button> </div> <div id="mediaLibraryGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 0.5rem; max-height: min(300px, 40vh); overflow-y: auto;" data-astro-cid-rqdi3l56> <p style="font-size: 0.8rem; color: var(--muted-foreground);" data-astro-cid-rqdi3l56>Loading library...</p> </div> </div> <input type="hidden" id="featuredImage" name="featuredImage"${addAttribute(post?.featuredImage || "/images/default-blog.jpg", "value")} required data-astro-cid-rqdi3l56> <div id="uploadStatus" style="font-size: 0.75rem; color: var(--muted-foreground);" data-astro-cid-rqdi3l56>
Current Image: <a${addAttribute(post?.featuredImage || "/images/default-blog.jpg", "href")} target="_blank" style="color: var(--primary); text-decoration: underline;" id="currentImageLink" data-astro-cid-rqdi3l56>View File</a> </div> </div> <div data-astro-cid-rqdi3l56> <label class="label" for="excerpt" data-astro-cid-rqdi3l56>Excerpt (Short Summary)</label> <textarea class="input" id="excerpt" name="excerpt" style="height: 60px; padding: 0.5rem 0.75rem 0;" required data-astro-cid-rqdi3l56>${post?.excerpt || ""}</textarea> </div> <div style="flex: 1; display: flex; flex-direction: column;" data-astro-cid-rqdi3l56> <label class="label" for="body" data-astro-cid-rqdi3l56>Body (Markdown Supported)</label> <!-- Markdown Toolbar --> <div class="toolbar" style="margin-bottom: -1px;" data-astro-cid-rqdi3l56> <button type="button" class="toolbar-btn" data-action="bold" title="Bold" data-astro-cid-rqdi3l56>B</button> <button type="button" class="toolbar-btn" data-action="italic" title="Italic" data-astro-cid-rqdi3l56>I</button> <button type="button" class="toolbar-btn" data-action="h2" title="Heading 2" data-astro-cid-rqdi3l56>H2</button> <button type="button" class="toolbar-btn" data-action="quote" title="Quote" data-astro-cid-rqdi3l56>"</button> <button type="button" class="toolbar-btn" data-action="link" title="Link" data-astro-cid-rqdi3l56>Link</button> <button type="button" class="toolbar-btn" data-action="image" title="Image" data-astro-cid-rqdi3l56>Img</button> <button type="button" class="toolbar-btn" data-action="list" title="Bullet List" data-astro-cid-rqdi3l56>List</button> </div> <textarea class="input" id="body" name="body" style="flex: 1; padding: 1rem; font-family: ui-monospace, monospace; font-size: 0.875rem; border-top-left-radius: 0; border-top-right-radius: 0;" required data-astro-cid-rqdi3l56>${post?.body || ""}</textarea> </div> <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem;" data-astro-cid-rqdi3l56> <input type="checkbox" id="featured" name="featured"${addAttribute(post?.featured, "checked")} data-astro-cid-rqdi3l56> <label for="featured" class="label" style="margin:0;" data-astro-cid-rqdi3l56>Make this a Featured Post</label> </div> <div class="action-row" data-astro-cid-rqdi3l56> <button type="submit" class="btn btn-primary" style="padding: 0 2rem; min-height: 44px;" data-astro-cid-rqdi3l56>Save Post</button> </div> </form> <!-- RIGHT PANE: Live Preview --> <div class="card editor-pane editor-pane--preview" data-astro-cid-rqdi3l56> <h2 style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted-foreground); border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; margin-top: 0;" data-astro-cid-rqdi3l56>Live Preview</h2> <!-- Preview Header injected dynamically --> <div id="previewHeader" style="margin-bottom: 2rem;" data-astro-cid-rqdi3l56> <span id="previewCategory" style="color: #2563eb; font-weight: 600; font-size: 0.875rem;" data-astro-cid-rqdi3l56>Category</span> <h1 id="previewTitle" style="font-size: clamp(1.5rem, 4vw, 2.25rem); font-weight: 700; margin: 0.5rem 0;" data-astro-cid-rqdi3l56>Blog Title</h1> <p id="previewExcerpt" style="font-size: clamp(0.95rem, 2vw, 1.125rem); color: #52525b;" data-astro-cid-rqdi3l56>Excerpt goes here...</p> <img id="previewImage" src="/images/default-blog.jpg" style="width: 100%; height: auto; border-radius: 0.5rem; margin-top: 1.5rem;" data-astro-cid-rqdi3l56> </div> <!-- Preview Body --> <div id="previewBody" class="prose-preview" data-astro-cid-rqdi3l56></div> </div> </div> ${renderScript($$result2, "D:/N3 Projects/aero_website/src/pages/admin/blog/edit.astro?astro&type=script&index=1&lang.ts")} ` })}`;
}, "D:/N3 Projects/aero_website/src/pages/admin/blog/edit.astro", void 0);

const $$file = "D:/N3 Projects/aero_website/src/pages/admin/blog/edit.astro";
const $$url = "/admin/blog/edit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Edit,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
