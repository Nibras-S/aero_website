import { c as createComponent } from './astro-component_C0aOnk7E.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_Cf8J0QyC.mjs';
import { r as renderComponent } from './entrypoint_CnFHr9Fc.mjs';
import { $ as $$MainLayout, a as $$Navbar, b as $$Footer } from './Footer_BmLgtzz7.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Consultancy — Flyger", "data-astro-cid-u3sqywws": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-u3sqywws": true })} ${maybeRenderHead()}<main class="ca-main" data-astro-cid-u3sqywws> <!-- Cinematic Header --> <section class="cons-hero" data-astro-cid-u3sqywws> <div class="cons-bg" aria-hidden="true" data-astro-cid-u3sqywws></div> <div class="cons-content" data-astro-cid-u3sqywws> <div class="cons-content-inner" data-astro-cid-u3sqywws> <p class="cons-eyebrow" data-astro-cid-u3sqywws>Expert Guidance</p> <h1 class="cons-title" data-astro-cid-u3sqywws>Consultancy &<br data-astro-cid-u3sqywws>Services</h1> <p class="cons-desc" data-astro-cid-u3sqywws>
Comprehensive operational expertise, bespoke service planning, and dedicated ground handling support across the Middle East.
</p> <div class="cons-actions" data-astro-cid-u3sqywws> <a href="/contact-us" class="cons-cta-ghost" data-astro-cid-u3sqywws>Contact Our Team ↗</a> </div> </div> </div> </section> <!-- Services Grid --> <div id="services" class="ca-services-container" data-astro-cid-u3sqywws> <div class="ca-grid-header" data-astro-cid-u3sqywws> <h2 data-astro-cid-u3sqywws>Our Services</h2> <p data-astro-cid-u3sqywws>Explore our dedicated support areas and operational solutions.</p> </div> <div class="ca-services-grid" data-astro-cid-u3sqywws> <!-- UAE Airports Service Card --> <a href="/consultancy/uae-airports" class="ca-service-card" data-astro-cid-u3sqywws> <div class="ca-sc-img-wrapper" data-astro-cid-u3sqywws> <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1200&auto=format&fit=crop" alt="UAE Airports Network" class="ca-sc-img" loading="lazy" decoding="async" data-astro-cid-u3sqywws> </div> <div class="ca-sc-content" data-astro-cid-u3sqywws> <h2 class="ca-sc-name" data-astro-cid-u3sqywws>UAE Airports Network</h2> <p class="ca-sc-desc" data-astro-cid-u3sqywws>
End-to-end operational support, permits, handling, and priority terminal access across all major UAE terminals.
</p> <button class="ca-view-btn outline" tabindex="-1" data-astro-cid-u3sqywws>
View airports
</button> </div> </a> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-u3sqywws": true })} ` })}`;
}, "D:/N3 Projects/aero_website/src/pages/consultancy/index.astro", void 0);

const $$file = "D:/N3 Projects/aero_website/src/pages/consultancy/index.astro";
const $$url = "/consultancy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
