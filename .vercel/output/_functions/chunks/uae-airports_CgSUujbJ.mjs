import { c as createComponent } from './astro-component_C0aOnk7E.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead, a3 as addAttribute, b7 as unescapeHTML } from './sequence_Cf8J0QyC.mjs';
import { r as renderComponent } from './entrypoint_CnFHr9Fc.mjs';
import { $ as $$MainLayout, a as $$Navbar, b as $$Footer } from './Footer_BmLgtzz7.mjs';

const $$UaeAirports = createComponent(($$result, $$props, $$slots) => {
  const WHATSAPP = "971501234567";
  const EMAIL = "ops@flyger.aero";
  const airports = [
    { name: "Zayed International Airport", city: "Abu Dhabi", iata: "AUH", icao: "OMAA", img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1200" },
    { name: "Al Bateen Executive Airport", city: "Abu Dhabi", iata: "AZI", icao: "OMAD", img: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=1200" },
    { name: "Al Ain International Airport", city: "Al Ain", iata: "AAN", icao: "OMAL", img: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1200" },
    { name: "Dubai International Airport", city: "Dubai", iata: "DXB", icao: "OMDB", img: "/images/uae-dubai_airport.webp" },
    { name: "Al Maktoum International Airport", city: "Dubai (DWC)", iata: "DWC", icao: "OMDW", img: "/images/uae-al_maktoum_airport.webp" },
    { name: "Sharjah International Airport", city: "Sharjah", iata: "SHJ", icao: "OMSJ", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200" },
    { name: "Ras Al Khaimah International Airport", city: "RAK", iata: "RKT", icao: "OMRK", img: "/images/uae-rak_airport.webp" },
    { name: "Fujairah International Airport", city: "Fujairah", iata: "FJR", icao: "OMFJ", img: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1200" },
    { name: "Sir Bani Yas Airport", city: "Sir Bani Yas", iata: "XSB", icao: "OMBY", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200" }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "UAE Airports Network — Flyger Consultancy", "data-astro-cid-piawqzzi": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-piawqzzi": true })} ${maybeRenderHead()}<main class="ua-main" data-astro-cid-piawqzzi> <!-- Header --> <header class="ua-header" data-astro-cid-piawqzzi> <a href="/consultancy" class="ua-back" data-astro-cid-piawqzzi> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-piawqzzi> <path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-piawqzzi></path> </svg>
Back to Consultancy
</a> <h1 class="ua-title" data-astro-cid-piawqzzi>UAE Airports Network</h1> <p class="ua-desc" data-astro-cid-piawqzzi>
We provide priority handling and extensive support at all 9 major terminals in the UAE. Get in touch with our fast-response operations team directly.
</p> </header> <!-- Airports Grid --> <div class="ua-grid-container" data-astro-cid-piawqzzi> <div class="ua-grid" data-astro-cid-piawqzzi> ${airports.map((ap) => {
    const encodedName = encodeURIComponent(`Hi Flyger, I'd like to enquire about flight support at ${ap.name} (${ap.iata}).`);
    const subj = encodeURIComponent(`Consultancy Inquiry: ${ap.name} (${ap.iata})`);
    const waUrl = `https://wa.me/${WHATSAPP}?text=${encodedName}`;
    const emailUrl = `mailto:${EMAIL}?subject=${subj}`;
    return renderTemplate`<div class="ca-card" data-astro-cid-piawqzzi> <div class="ca-card-img-wrapper" data-astro-cid-piawqzzi> <img${addAttribute(ap.img, "src")}${addAttribute(ap.name, "alt")} class="ca-card-img" loading="lazy" decoding="async" data-astro-cid-piawqzzi> <div class="ca-card-gradient" data-astro-cid-piawqzzi></div> </div> <div class="ca-card-content" data-astro-cid-piawqzzi> <h2 class="ca-card-name" data-astro-cid-piawqzzi>${unescapeHTML(ap.name.replace(" ", "<br/>"))}</h2> <div class="ca-card-bullets" data-astro-cid-piawqzzi> <div class="ca-bullet" data-astro-cid-piawqzzi><span class="ca-bullet-dot" data-astro-cid-piawqzzi>°</span><span data-astro-cid-piawqzzi>IATA: ${ap.iata}</span></div> <div class="ca-bullet" data-astro-cid-piawqzzi><span class="ca-bullet-dot" data-astro-cid-piawqzzi>°</span><span data-astro-cid-piawqzzi>ICAO: ${ap.icao}</span></div> <div class="ca-bullet" data-astro-cid-piawqzzi><span class="ca-bullet-dot" data-astro-cid-piawqzzi>°</span><span data-astro-cid-piawqzzi>VIP Handling</span></div> <div class="ca-bullet" data-astro-cid-piawqzzi><span class="ca-bullet-dot" data-astro-cid-piawqzzi>°</span><span data-astro-cid-piawqzzi>24/7 Ops</span></div> </div> <!-- Direct Inline Contact Actions --> <div class="ca-card-actions" data-astro-cid-piawqzzi> <a${addAttribute(waUrl, "href")} class="ca-btn ca-btn-wa" target="_blank" rel="noopener"${addAttribute(`WhatsApp operations for ${ap.name}`, "aria-label")} data-astro-cid-piawqzzi> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-piawqzzi> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-piawqzzi></path> </svg>
WhatsApp
</a> <a${addAttribute(emailUrl, "href")} class="ca-btn ca-btn-email" target="_blank" rel="noopener"${addAttribute(`Email operations for ${ap.name}`, "aria-label")} data-astro-cid-piawqzzi> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-piawqzzi> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-piawqzzi></path> <polyline points="22,6 12,13 2,6" data-astro-cid-piawqzzi></polyline> </svg>
Email
</a> </div> </div> </div>`;
  })} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-piawqzzi": true })} ` })}`;
}, "D:/N3 Projects/aero_website/src/pages/consultancy/uae-airports.astro", void 0);

const $$file = "D:/N3 Projects/aero_website/src/pages/consultancy/uae-airports.astro";
const $$url = "/consultancy/uae-airports";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$UaeAirports,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
