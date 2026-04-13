import { c as createComponent } from './astro-component_C0aOnk7E.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead, a3 as addAttribute, b7 as unescapeHTML } from './sequence_Cf8J0QyC.mjs';
import { r as renderComponent } from './entrypoint_CnFHr9Fc.mjs';
import { $ as $$MainLayout, a as $$Navbar, b as $$Footer } from './Footer_BmLgtzz7.mjs';
import { d as db, B as BlogPosts } from './_astro_db_OV1MA9mI.mjs';
import { marked } from 'marked';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/blog");
  const posts = await db.select().from(BlogPosts).where(eq(BlogPosts.id, slug));
  const post = posts[0];
  if (!post) {
    return Astro2.redirect("/blog");
  }
  const htmlContent = await marked.parse(post.body || "");
  const allPosts = await db.select().from(BlogPosts);
  const relatedPosts = allPosts.filter((p) => p.category === post.category && p.id !== post.id).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 3);
  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }
  function estimateReadTime(body) {
    const words = body.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  }
  const readTime = estimateReadTime(post.body || "");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${post.title} | Flyger Aviation Blog`, "description": post.excerpt, "data-astro-cid-7jjqptxk": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-7jjqptxk": true })} ${maybeRenderHead()}<main class="blog-post-page" data-astro-cid-7jjqptxk> <!-- ═══ HERO IMAGE ═══ --> <section class="post-hero" data-astro-cid-7jjqptxk> <div class="post-hero__bg" data-astro-cid-7jjqptxk> <img${addAttribute(post.featuredImage, "src")}${addAttribute(post.title, "alt")} class="post-hero__image" loading="eager" data-astro-cid-7jjqptxk> <div class="post-hero__overlay" data-astro-cid-7jjqptxk></div> </div> <div class="container post-hero__content" data-astro-cid-7jjqptxk> <a href="/blog" class="post-hero__back" data-astro-cid-7jjqptxk> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-7jjqptxk> <line x1="19" y1="12" x2="5" y2="12" data-astro-cid-7jjqptxk></line> <polyline points="12 19 5 12 12 5" data-astro-cid-7jjqptxk></polyline> </svg>
Back to all posts
</a> <span class="post-hero__category" data-astro-cid-7jjqptxk>${post.category}</span> <h1 class="post-hero__title" data-astro-cid-7jjqptxk>${post.title}</h1> <div class="post-hero__meta" data-astro-cid-7jjqptxk> <span class="post-hero__author" data-astro-cid-7jjqptxk>${post.author}</span> <span class="post-hero__sep" data-astro-cid-7jjqptxk>·</span> <time${addAttribute(new Date(post.createdAt).toISOString(), "datetime")} data-astro-cid-7jjqptxk> ${formatDate(post.createdAt)} </time> <span class="post-hero__sep" data-astro-cid-7jjqptxk>·</span> <span data-astro-cid-7jjqptxk>${readTime} min read</span> </div> </div> </section> <!-- ═══ ARTICLE BODY ═══ --> <article class="post-article" data-astro-cid-7jjqptxk> <div class="container" data-astro-cid-7jjqptxk> <div class="prose" data-astro-cid-7jjqptxk>${unescapeHTML(htmlContent)}</div> </div> </article> <!-- ═══ RELATED POSTS ═══ --> ${relatedPosts.length > 0 && renderTemplate`<section class="related-section" data-astro-cid-7jjqptxk> <div class="container" data-astro-cid-7jjqptxk> <h2 class="related-section__heading" data-astro-cid-7jjqptxk>Related Articles</h2> <div class="related-grid" data-astro-cid-7jjqptxk> ${relatedPosts.map((rp) => renderTemplate`<a${addAttribute(`/blog/${rp.id}`, "href")} class="related-card" data-astro-cid-7jjqptxk> <div class="related-card__image-wrap" data-astro-cid-7jjqptxk> <img${addAttribute(rp.featuredImage, "src")}${addAttribute(rp.title, "alt")} class="related-card__image" loading="lazy" data-astro-cid-7jjqptxk> </div> <div class="related-card__body" data-astro-cid-7jjqptxk> <span class="related-card__category" data-astro-cid-7jjqptxk>${rp.category}</span> <h3 class="related-card__title" data-astro-cid-7jjqptxk>${rp.title}</h3> <time class="related-card__date"${addAttribute(new Date(rp.createdAt).toISOString(), "datetime")} data-astro-cid-7jjqptxk> ${formatDate(rp.createdAt)} </time> </div> </a>`)} </div> </div> </section>`} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-7jjqptxk": true })} ` })}`;
}, "D:/N3 Projects/aero_website/src/pages/blog/[...slug].astro", void 0);

const $$file = "D:/N3 Projects/aero_website/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
