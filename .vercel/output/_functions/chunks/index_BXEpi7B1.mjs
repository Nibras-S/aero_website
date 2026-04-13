import { c as createComponent } from './astro-component_C0aOnk7E.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead, a3 as addAttribute } from './sequence_Cf8J0QyC.mjs';
import { r as renderComponent } from './entrypoint_CnFHr9Fc.mjs';
import { r as renderScript } from './script_DeAGT7yU.mjs';
import { $ as $$MainLayout, a as $$Navbar, b as $$Footer } from './Footer_BmLgtzz7.mjs';
import { d as db, B as BlogPosts } from './_astro_db_OV1MA9mI.mjs';
import { desc } from '@astrojs/db/dist/runtime/virtual.js';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await db.select().from(BlogPosts).orderBy(desc(BlogPosts.createdAt));
  const sortedPosts = allPosts;
  const featuredPost = sortedPosts.find((p) => p.featured) || sortedPosts[0];
  const regularPosts = sortedPosts.filter((p) => p.id !== featuredPost?.id);
  const categories = ["All", ...new Set(allPosts.map((p) => p.category))];
  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }
  function estimateReadTime(body) {
    const words = body.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "News & Insights | Flyger Aviation Services", "description": "Expert aviation insights, company news, and industry analysis from the Flyger team.", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<main class="blog-page" data-astro-cid-5tznm7mj> <!-- ═══ HERO ═══ --> <section class="blog-hero" data-astro-cid-5tznm7mj> <div class="blog-hero__bg" aria-hidden="true" data-astro-cid-5tznm7mj></div> <div class="container blog-hero__content" data-astro-cid-5tznm7mj> <span class="blog-hero__label" data-astro-cid-5tznm7mj>NEWS & INSIGHTS</span> <h1 class="blog-hero__title" data-astro-cid-5tznm7mj>The Flyger Journal.</h1> <p class="blog-hero__tagline" data-astro-cid-5tznm7mj>
Expert perspectives on aviation operations, industry trends, and
          the future of flight support.
</p> </div> </section> <!-- ═══ FEATURED POST ═══ --> ${featuredPost && renderTemplate`<section class="featured-section" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${featuredPost.id}`, "href")} class="featured-card" id="featured-post" data-astro-cid-5tznm7mj> <div class="featured-card__image-wrap" data-astro-cid-5tznm7mj> <img${addAttribute(featuredPost.featuredImage, "src")}${addAttribute(featuredPost.title, "alt")} class="featured-card__image" loading="eager" fetchpriority="high" decoding="async" data-astro-cid-5tznm7mj> <div class="featured-card__image-overlay" data-astro-cid-5tznm7mj></div> <span class="featured-card__badge" data-astro-cid-5tznm7mj>Featured</span> </div> <div class="featured-card__body" data-astro-cid-5tznm7mj> <span class="featured-card__category" data-astro-cid-5tznm7mj>${featuredPost.category}</span> <h2 class="featured-card__title" data-astro-cid-5tznm7mj>${featuredPost.title}</h2> <p class="featured-card__excerpt" data-astro-cid-5tznm7mj>${featuredPost.excerpt}</p> <div class="featured-card__meta" data-astro-cid-5tznm7mj> <span class="featured-card__author" data-astro-cid-5tznm7mj>${featuredPost.author}</span> <span class="featured-card__separator" data-astro-cid-5tznm7mj>·</span> <time${addAttribute(new Date(featuredPost.createdAt).toISOString(), "datetime")} data-astro-cid-5tznm7mj> ${formatDate(featuredPost.createdAt)} </time> <span class="featured-card__separator" data-astro-cid-5tznm7mj>·</span> <span data-astro-cid-5tznm7mj>${estimateReadTime(featuredPost.body || "")} min read</span> </div> <span class="featured-card__cta" data-astro-cid-5tznm7mj>
Read Article
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-5tznm7mj> <line x1="5" y1="12" x2="19" y2="12" data-astro-cid-5tznm7mj></line> <polyline points="12 5 19 12 12 19" data-astro-cid-5tznm7mj></polyline> </svg> </span> </div> </a> </div> </section>`} <!-- ═══ FILTER + SEARCH BAR ═══ --> <section class="filter-section" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="filter-bar" data-astro-cid-5tznm7mj> <div class="filter-pills" id="categoryFilters" data-astro-cid-5tznm7mj> ${categories.map((cat, i) => renderTemplate`<button${addAttribute(`filter-pill ${i === 0 ? "active" : ""}`, "class")}${addAttribute(cat, "data-category")} data-astro-cid-5tznm7mj> ${cat} </button>`)} </div> <div class="search-box" data-astro-cid-5tznm7mj> <svg class="search-box__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-5tznm7mj> <circle cx="11" cy="11" r="8" data-astro-cid-5tznm7mj></circle> <line x1="21" y1="21" x2="16.65" y2="16.65" data-astro-cid-5tznm7mj></line> </svg> <input type="text" class="search-box__input" id="blogSearch" placeholder="Search articles..." aria-label="Search blog posts" data-astro-cid-5tznm7mj> </div> </div> </div> </section> <!-- ═══ BLOG GRID ═══ --> <section class="blog-grid-section" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="blog-grid" id="blogGrid" data-astro-cid-5tznm7mj> ${regularPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.id}`, "href")} class="blog-card"${addAttribute(post.category, "data-category")}${addAttribute(post.title.toLowerCase(), "data-title")} data-astro-cid-5tznm7mj> <div class="blog-card__image-wrap" data-astro-cid-5tznm7mj> <img${addAttribute(post.featuredImage, "src")}${addAttribute(post.title, "alt")} class="blog-card__image" loading="lazy" data-astro-cid-5tznm7mj> <div class="blog-card__image-overlay" data-astro-cid-5tznm7mj></div> </div> <div class="blog-card__body" data-astro-cid-5tznm7mj> <span class="blog-card__category" data-astro-cid-5tznm7mj>${post.category}</span> <h3 class="blog-card__title" data-astro-cid-5tznm7mj>${post.title}</h3> <p class="blog-card__excerpt" data-astro-cid-5tznm7mj>${post.excerpt}</p> <div class="blog-card__meta" data-astro-cid-5tznm7mj> <span data-astro-cid-5tznm7mj>${post.author}</span> <span class="blog-card__dot" data-astro-cid-5tznm7mj>·</span> <time${addAttribute(new Date(post.createdAt).toISOString(), "datetime")} data-astro-cid-5tznm7mj> ${formatDate(post.createdAt)} </time> </div> </div> </a>`)} </div> <p class="no-results hidden" id="noResults" data-astro-cid-5tznm7mj>
No articles found matching your search.
</p> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} ` })}  ${renderScript($$result, "D:/N3 Projects/aero_website/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/N3 Projects/aero_website/src/pages/blog/index.astro", void 0);

const $$file = "D:/N3 Projects/aero_website/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
