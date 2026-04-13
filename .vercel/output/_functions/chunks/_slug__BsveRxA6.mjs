import { c as createComponent } from './astro-component_C0aOnk7E.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead, a3 as addAttribute } from './sequence_Cf8J0QyC.mjs';
import { r as renderComponent } from './entrypoint_CnFHr9Fc.mjs';
import { r as renderScript } from './script_DeAGT7yU.mjs';
import { $ as $$MainLayout, a as $$Navbar, b as $$Footer } from './Footer_BmLgtzz7.mjs';

const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const services = [
    {
      slug: "trip-planning",
      title: "Trip Planning",
      label: "OPERATIONAL EXCELLENCE",
      tagline: "Every mission begins with a plan. We make it flawless.",
      heroImage: "/images/svc-detail-trip-planning.webp",
      detailImage: "/images/svc-detail-trip-planning.webp",
      overview: "Every successful operation begins with precise planning. We provide fast, reliable trip support tailored to your mission, ensuring optimized routing, cost control, and full regulatory compliance.",
      detail: "Our trip planning covers all essential requirements, including flight clearances, slot coordination, fuel arrangements, and accurate flight plan filing. We work directly with aviation authorities and ground handlers globally to anticipate challenges before they arise — allowing you to operate with confidence and efficiency from takeoff to touchdown.",
      highlights: [
        {
          title: "Optimized Routing",
          desc: "We analyze airspace, weather, and NOTAM data to choose the most efficient and cost-effective routing for every leg.",
          img: "/images/routing.jpg"
        },
        {
          title: "Regulatory Compliance",
          desc: "Fully aligned with ICAO, regional, and national aviation regulations across every territory you operate in.",
          img: "/images/compliance.webp"
        },
        {
          title: "Fuel Arrangements",
          desc: "Competitive fuel sourcing and supplier coordination at departure, en route, and destination airports.",
          img: "/images/fueling.webp"
        },
        {
          title: "Slot Coordination",
          desc: "Precise slot management to minimize ground delays and keep turnaround times commercial.",
          img: "/images/uae-dubai_airport.webp"
        },
        {
          title: "Flight Plan Filing",
          desc: "Accurate, ATC-compliant flight plans filed through official channels for every departure.",
          img: "/images/svc-detail-trip-planning.webp"
        },
        {
          title: "Proforma Costing",
          desc: "Transparent cost estimates delivered within minutes of trip confirmation.",
          img: "/images/proforma-costing.webp"
        }
      ]
    },
    {
      slug: "flight-permits",
      title: "Flight Permits",
      label: "GLOBAL COMPLIANCE",
      tagline: "Clearances secured. On time, every time.",
      heroImage: "/images/svc-detail-flight-permits.webp",
      detailImage: "/images/svc-detail-flight-permits.webp",
      overview: "Securing permits on time is critical to any operation. We manage the entire process with speed and accuracy, coordinating directly with aviation authorities to obtain approvals even within tight timeframes.",
      detail: "From overflight and landing permits to block and seasonal clearances, we handle every regulatory touchpoint across hundreds of jurisdictions. Our relationships with CAAs, embassies, and handling agents worldwide allow us to cut through bureaucracy and deliver approvals when it matters most.",
      highlights: [
        {
          title: "Over Fly Permit",
          desc: "Rapid coordination with transit state authorities to obtain all required overflight clearances before your departure.",
          img: "/images/over-fly-permit.webp"
        },
        {
          title: "Landing Permit",
          desc: "Full-service landing permit management for commercial, charter, and state aircraft at any airport worldwide.",
          img: "/images/landing-permit.webp"
        },
        {
          title: "Block Permit",
          desc: "Ensuring seamless high-frequency operations with block permits, reducing lead times per trip.",
          img: "/images/block-permit.webp"
        },
        {
          title: "Seasonal Clearance",
          desc: "Secured seasonal clearances for scheduled operations, guaranteeing long-term regulatory compliance.",
          img: "/images/seasonal-clearence.webp"
        }
      ]
    },
    {
      slug: "dispatch",
      title: "Flyger's Dispatch Team",
      label: "PRECISION EXECUTION",
      tagline: "Real-time coordination. Zero-tolerance for delays.",
      heroImage: "/images/svc-detail-dispatch.webp",
      detailImage: "/images/svc-detail-dispatch.webp",
      overview: "Our dispatch support is built around precision and real-time coordination. Working closely with flight crews and operational stakeholders, we ensure every flight is planned, monitored, and executed efficiently.",
      detail: "This includes route optimization, weather analysis, fuel planning including EDTO/ETOPS, and continuous flight tracking — ensuring smooth operations from departure to arrival. Our dispatchers are on call around the clock, maintaining constant situational awareness and providing crews with critical updates throughout every phase of flight.",
      highlights: [
        {
          title: "Test Plan & Trip Times",
          desc: "Comprehensive pre-departure planning including optimized block times, fuel loads, and alternates.",
          img: "/images/trip-time.webp"
        },
        {
          title: "Flight Plan Filing with ATC",
          desc: "ATC-compliant flight plans submitted through official channels with full airspace coordination.",
          img: "/images/plan-filing.webp"
        },
        {
          title: "Weather Monitoring & Pilot Updates",
          desc: "Continuous meteorological analysis and real-time weather briefings delivered directly to the crew.",
          img: "/images/weather.webp"
        },
        {
          title: "SATCOM & FlightRadar24 Tracking",
          desc: "Advanced two-way tracking via SATCOM and third-party systems for complete positional awareness.",
          img: "/images/radar.webp"
        },
        {
          title: "Fuel & EDTO/ETOPS Calculations",
          desc: "Precise extended diversion calculations ensuring safety compliance for long-haul and overwater routes.",
          img: "/images/fuel-one.webp"
        },
        {
          title: "24/7 Operational Availability",
          desc: "Our dispatch team is reachable day or night, ready to respond within minutes to any operational situation.",
          img: "/images/24hours.webp"
        }
      ]
    },
    {
      slug: "diversion-support",
      title: "Diversion Support",
      label: "RAPID RESPONSE",
      tagline: "When the unexpected happens, we are already moving.",
      heroImage: "/images/svc-detail-diversion.webp",
      detailImage: "/images/svc-detail-diversion.webp",
      overview: "Unplanned situations demand immediate and effective solutions. We provide rapid response support for flight diversions, ensuring minimal disruption to both crew and passengers.",
      detail: "From accommodation and transportation to airport coordination and permit amendments, our team manages every aspect of a diversion with speed and reliability. We maintain 24/7 operational availability and have pre-established relationships at airports worldwide to mobilize resources without delay the moment a diversion is confirmed.",
      highlights: [
        {
          title: "24/7 Availability",
          desc: "Immediate response at any hour — our operations team is always on standby and ready to mobilize.",
          img: "/images/24hours.webp"
        },
        {
          title: "Crew Accommodation",
          desc: "Hotel arrangements at or near the diversion airport, coordinated within minutes of confirmation.",
          img: "/images/accomadation.webp"
        },
        {
          title: "Ground Transport",
          desc: "Dedicated vehicles for crew and passenger transfers from aircraft to accommodation and back.",
          img: "/images/ground.webp"
        },
        {
          title: "Permit Amendments",
          desc: "Rapid coordination with authorities for permit changes due to unplanned diversions or re-routes.",
          img: "/images/permit-amm.webp"
        },
        {
          title: "Airport Coordination",
          desc: "Direct liaison with airport operations, handlers, and security for diversion parking and services.",
          img: "/images/airport.webp"
        },
        {
          title: "Full Reporting",
          desc: "Post-diversion reporting and cost documentation for insurance and operational records.",
          img: "/images/reporting.webp"
        }
      ]
    },
    {
      slug: "supervisors",
      title: "Supervisors at Flyger",
      label: "SEAMLESS TURNAROUNDS",
      tagline: "Every turnaround executed with precision and accountability.",
      heroImage: "/images/svc-detail-supervisors.webp",
      detailImage: "/images/svc-detail-supervisors.webp",
      overview: "Our ground supervisors ensure every turnaround is executed seamlessly. By coordinating with all service providers and monitoring activities in real time, we maintain full control over quality and compliance.",
      detail: "Detailed reporting and proactive communication ensure transparency and consistency throughout the handling process. Our supervisors act as an extension of your operations team on the ground — holding every service provider accountable, resolving issues before they escalate, and ensuring the aircraft departs on time and in full regulatory compliance.",
      highlights: [
        {
          title: "Quality Control",
          desc: "Active oversight of all ground handling activities to ensure compliance with your airline's standards and SOPs.",
          img: "/images/quality.webp"
        },
        {
          title: "Real-Time Monitoring",
          desc: "Continuous on-ground presence and situational reporting throughout the entire turnaround period.",
          img: "/images/real-time.webp"
        },
        {
          title: "Detailed Reporting",
          desc: "Structured turnaround reports delivered after every operation, including timing, deviations, and actions taken.",
          img: "/images/reporting.webp"
        },
        {
          title: "Service Provider Coordination",
          desc: "Direct liaison with fuel, catering, cleaning, handling, and security vendors at every station.",
          img: "/images/coordination.webp"
        },
        {
          title: "Regulatory Compliance",
          desc: "Ensuring all ground activities meet local airport authority and civil aviation authority requirements.",
          img: "/images/compliance.webp"
        },
        {
          title: "Proactive Issue Resolution",
          desc: "On-the-spot intervention to resolve delays, discrepancies, or safety concerns before departure.",
          img: "/images/issue-resolution.png"
        }
      ]
    },
    {
      slug: "flyger-crm",
      title: "Smart Operations with FLYGER CRM",
      label: "DIGITAL PLATFORM",
      tagline: "Full visibility. Zero ambiguity. Built for aviation.",
      heroImage: "/images/svc-detail-crm.webp",
      detailImage: "/images/svc-detail-crm.webp",
      overview: "At FLYGER, our operations are powered by a purpose-built CRM system designed to enhance efficiency and transparency at every stage of your trip.",
      detail: "Clients benefit from real-time proforma generation, immediate post-turnaround invoicing, and centralized coordination — providing complete visibility and control over both operational and financial aspects. Every cost, every approval, every document is tracked and accessible from a single platform, eliminating the delays and confusion of fragmented communication.",
      highlights: [
        {
          title: "Real-Time Proforma",
          desc: "Cost estimates generated the moment a trip is confirmed — no waiting, no follow-ups.",
          img: "/images/realtime.webp"
        },
        {
          title: "Instant Invoicing",
          desc: "Invoices delivered immediately after turnaround, eliminating billing delays and uncertainty.",
          img: "/images/invoice.webp"
        },
        {
          title: "Live Dashboard",
          desc: "A real-time view of all active operations, costs, and service status in one centralized interface.",
          img: "/images/dashboard.webp"
        },
        {
          title: "Centralized Operations",
          desc: "Ops, clients, and ground teams all connected through a single communication thread.",
          img: "/images/operations.webp"
        },
        {
          title: "Document Management",
          desc: "Permits, handling confirmations, and fuel receipts stored and accessible at any time.",
          img: "/images/document-management.webp"
        },
        {
          title: "Full Financial Transparency",
          desc: "100% visibility into every cost and approval at every stage of the operation.",
          img: "/images/financial-transparency.webp"
        }
      ]
    },
    {
      slug: "executive-concierge",
      title: "Executive Concierge",
      label: "PREMIUM SERVICE",
      tagline: "Every detail managed. Every journey elevated.",
      heroImage: "/images/svc-detail-concierge.webp",
      detailImage: "/images/svc-detail-concierge.webp",
      overview: "We provide tailored concierge support designed to enhance every aspect of the journey, with a strong focus on efficiency, comfort, and reliability.",
      detail: "With access to our own dedicated drivers at key locations, we ensure immediate availability and seamless transfers — eliminating delays and maintaining a premium standard of service. From ground transportation and hotel arrangements to personalized in-flight requests and local assistance, every detail is managed with precision and discretion by a concierge team that understands the expectations of high-demand aviation clients.",
      highlights: [
        {
          title: "Dedicated Drivers",
          desc: "Our own vehicles and drivers at key airports — no third-party dependency, no delays.",
          img: "/images/dedicated-drivers.webp"
        },
        {
          title: "Hotel Arrangements",
          desc: "Preferred-rate bookings at premium properties, coordinated around your operational schedule.",
          img: "/images/hotel-arrangements.webp"
        },
        {
          title: "Personalized Requests",
          desc: "Special in-flight catering preferences, ground arrangements, and VIP-level personal requests fulfilled discreetly.",
          img: "/images/personalized-requests.webp"
        },
        {
          title: "Airport Transfers",
          desc: "Seamless airside and landside transfers for crew and passengers, timed to the minute.",
          img: "/images/airport-transfers.webp"
        },
        {
          title: "Local Assistance",
          desc: "On-ground local knowledge and contacts at every key destination for any need that arises.",
          img: "/images/local-assistance.webp"
        },
        {
          title: "Discreet & Professional",
          desc: "Our concierge team operates with full confidentiality and the highest standards of professional conduct.",
          img: "/images/discreet-professional.webp"
        }
      ]
    },
    {
      slug: "catering",
      title: "Onboard Catering Solutions",
      label: "INFLIGHT EXCELLENCE",
      tagline: "Premium catering. Delivered directly to your aircraft.",
      heroImage: "/images/svc-detail-catering.png",
      detailImage: "/images/svc-detail-catering.png",
      overview: "We coordinate high-quality onboard catering to enhance the inflight experience, ensuring every detail meets the expectations of crew and passengers.",
      detail: "What sets us apart is our direct delivery approach. With our own dedicated drivers handling deliveries to the aircraft at key locations, we eliminate reliance on third-party logistics — reducing delays and avoiding unnecessary additional costs. This allows us to offer a seamless, reliable, and premium catering service while maintaining full cost efficiency and ensuring the highest standards of food safety and presentation.",
      highlights: [
        {
          title: "Gourmet Catering",
          desc: "High-quality meal options sourced from premium local and international catering providers.",
          img: "/images/gourmet-catering.webp"
        },
        {
          title: "Direct Delivery",
          desc: "Our own drivers deliver directly to the aircraft — no middlemen, no logistics delays.",
          img: "/images/delivery.webp"
        },
        {
          title: "Cost Efficient",
          desc: "Eliminating third-party logistics layers keeps costs competitive without compromising quality.",
          img: "/images/cost-efficient.webp"
        },
        {
          title: "Crew & Pax Options",
          desc: "Separate crew and passenger meal configurations managed to airline and charter standards.",
          img: "/images/crew-pax.webp"
        },
        {
          title: "Special Dietary Needs",
          desc: "Halal, vegan, kosher, and all special dietary requirements accommodated on request.",
          img: "/images/dietary.webp"
        },
        {
          title: "Food Safety Compliance",
          desc: "All catering sourced from HACCP-certified providers and handled in compliance with aviation food safety standards.",
          img: "/images/food-safety.webp"
        }
      ]
    },
    {
      slug: "station-representation",
      title: "Station Representation",
      label: "ON-GROUND OPERATIONS",
      tagline: "Your team on the ground. Every time. Everywhere.",
      heroImage: "/images/svc-detail-station-rep.webp",
      detailImage: "/images/svc-detail-station-rep.webp",
      overview: "We provide dedicated on-ground representation at key locations, ensuring your operations are supported by experienced personnel who understand the local environment and requirements.",
      detail: "With our own staff positioned at strategic airports, we offer direct oversight and faster coordination — reducing dependency on third parties and enhancing service reliability. Our team acts as an extension of your operations, managing coordination with airport authorities, supervising ground handling activities, and ensuring smooth day-to-day execution with full accountability.",
      highlights: [
        {
          title: "On-Ground Staff",
          desc: "Our own dedicated personnel positioned at key airports — not third-party agents.",
          img: "/images/on-ground-staff.webp"
        },
        {
          title: "Ops Management",
          desc: "Direct coordination with airline operations, handling agents, and airport authorities on your behalf.",
          img: "/images/ops-management.webp"
        },
        {
          title: "Compliance Oversight",
          desc: "Ensuring all ground activities meet civil aviation authority and airport operator requirements.",
          img: "/images/compliance-oversight.webp"
        },
        {
          title: "Faster Coordination",
          desc: "Local presence means faster response times and better handling of time-critical issues.",
          img: "/images/faster-coordination.webp"
        },
        {
          title: "Authority Liaison",
          desc: "Direct working relationships with airport management, customs, immigration, and security teams.",
          img: "/images/authority-liaison.webp"
        },
        {
          title: "Performance Reporting",
          desc: "Regular station performance reports with KPIs and operational logs delivered to your team.",
          img: "/images/performance-reporting.webp"
        }
      ]
    }
  ];
  const { slug } = Astro2.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return Astro2.redirect("/trip-support");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${service.title} | Flyger Aviation Services`, "description": service.overview, "data-astro-cid-tcy35dad": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-tcy35dad": true })} ${maybeRenderHead()}<main class="service-page" data-astro-cid-tcy35dad> <!-- ═══ HERO ═══ --> <section class="hero"${addAttribute(service.title, "aria-label")} data-astro-cid-tcy35dad> <div class="hero__bg" data-astro-cid-tcy35dad> <img${addAttribute(service.heroImage, "src")} alt="" class="hero__img" loading="eager" fetchpriority="high" decoding="async" data-astro-cid-tcy35dad> <div class="hero__overlay" aria-hidden="true" data-astro-cid-tcy35dad></div> </div> <div class="hero__content container" data-astro-cid-tcy35dad> <a href="/trip-support#services-pin-container" class="hero__back" data-astro-cid-tcy35dad> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-tcy35dad> <polyline points="15 18 9 12 15 6" data-astro-cid-tcy35dad></polyline> </svg>
All Services
</a> <span class="hero__label" data-astro-cid-tcy35dad>${service.label}</span> <h1 class="hero__title" data-astro-cid-tcy35dad>${service.title}</h1> <p class="hero__tagline" data-astro-cid-tcy35dad>${service.tagline}</p> <a${addAttribute(`/contact-us?service=${encodeURIComponent(service.title)}`, "href")} class="hero__cta" data-astro-cid-tcy35dad>
Request This Service
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-tcy35dad> <line x1="5" y1="12" x2="19" y2="12" data-astro-cid-tcy35dad></line> <polyline points="12 5 19 12 12 19" data-astro-cid-tcy35dad></polyline> </svg> </a> </div> </section> <!-- ═══ DETAIL OVERVIEW ═══ --> <section class="detail" data-astro-cid-tcy35dad> <div class="container detail__grid" data-astro-cid-tcy35dad> <div class="detail__text" data-astro-cid-tcy35dad> <span class="section-eyebrow" data-astro-cid-tcy35dad>Overview</span> <h2 class="detail__heading" data-astro-cid-tcy35dad>What we do</h2> <p class="detail__para detail__para--lead" data-astro-cid-tcy35dad>${service.overview}</p> <p class="detail__para" data-astro-cid-tcy35dad>${service.detail}</p> </div> </div> </section> <!-- ═══ MOBILE FEATURES STACK (< 1000px) ═══ --> <section class="mobile-features-stack" data-astro-cid-tcy35dad> <div class="container mobile-stack-container" data-astro-cid-tcy35dad> ${service.highlights.map((h, idx) => {
    return renderTemplate`<div class="mobile-card" data-astro-cid-tcy35dad> <div class="mobile-card__img-wrapper" data-astro-cid-tcy35dad> ${h.img ? renderTemplate`<img${addAttribute(h.img, "src")} alt="" class="mobile-card__img" loading="lazy" data-astro-cid-tcy35dad>` : renderTemplate`<div class="placeholder-box mobile" data-astro-cid-tcy35dad> <span data-astro-cid-tcy35dad>To Add</span> </div>`} <div class="mobile-card__num" data-astro-cid-tcy35dad>
#${String(idx + 1).padStart(2, "0")} </div> </div> <div class="mobile-card__content" data-astro-cid-tcy35dad> <h3 class="mobile-card__title" data-astro-cid-tcy35dad>${h.title}</h3> <p class="mobile-card__desc" data-astro-cid-tcy35dad>${h.desc}</p> </div> </div>`;
  })} </div> </section> <!-- ═══ INTERACTIVE GALLERY UI (SCROLL JACKED - DESKTOP ONLY) ═══ --> <section class="interactive-gallery-pin hide-on-mobile" id="gallery-pin"${addAttribute(`height: ${service.highlights.length * 100}svh; position: relative;`, "style")} data-astro-cid-tcy35dad> <div class="interactive-gallery-sticky" data-astro-cid-tcy35dad> <div class="interactive-gallery" data-astro-cid-tcy35dad> <!-- Decorative Borders mimicking the screenshot dash-lines --> <div class="gallery__border gallery__border--top" data-astro-cid-tcy35dad></div> <div class="gallery__border gallery__border--bottom" data-astro-cid-tcy35dad></div> <div class="gallery__container" data-astro-cid-tcy35dad> <!-- Left: Thumbnail Track --> <div class="gallery__track" data-astro-cid-tcy35dad> ${service.highlights.map((h, idx) => {
    return renderTemplate`<div${addAttribute(`gallery__thumb-wrapper ${idx === 0 ? "is-active" : ""}`, "class")}${addAttribute(idx, "data-index")} data-astro-cid-tcy35dad> <div class="gallery__thumb-num" data-astro-cid-tcy35dad>
#${String(idx + 1).padStart(2, "0")} </div> ${h.img ? renderTemplate`<img loading="lazy" decoding="async"${addAttribute(h.img, "src")}${addAttribute(h.title, "alt")} class="gallery__thumb-img" data-astro-cid-tcy35dad>` : renderTemplate`<div class="placeholder-box thumb" data-astro-cid-tcy35dad> <span data-astro-cid-tcy35dad>To Add</span> </div>`} </div>`;
  })} </div> <!-- Center: Featured Canvas --> <div class="gallery__canvas" data-astro-cid-tcy35dad> ${service.highlights.map((h, idx) => {
    return renderTemplate`<div${addAttribute(`gallery__canvas-item ${idx === 0 ? "is-active" : ""}`, "class")}${addAttribute(idx, "data-index")} data-astro-cid-tcy35dad> ${h.img ? renderTemplate`<img loading="lazy" decoding="async"${addAttribute(h.img, "src")} alt="" class="gallery__canvas-img" data-astro-cid-tcy35dad>` : renderTemplate`<div class="placeholder-box canvas" data-astro-cid-tcy35dad> <span data-astro-cid-tcy35dad>To Add</span> </div>`} </div>`;
  })} </div> <!-- Right: Content Panel --> <div class="gallery__content" data-astro-cid-tcy35dad> ${service.highlights.map((h, idx) => renderTemplate`<div${addAttribute(`gallery__content-item ${idx === 0 ? "is-active" : ""}`, "class")}${addAttribute(idx, "data-index")} data-astro-cid-tcy35dad> <h3 class="gallery__item-title" data-astro-cid-tcy35dad>${h.title}</h3> <span class="gallery__item-label" data-astro-cid-tcy35dad>FLYGER</span> <p class="gallery__item-desc" data-astro-cid-tcy35dad>${h.desc}</p> </div>`)} </div> </div> </div> </div> </section> <!-- ═══ CTA ═══ --> <section class="cta-section" data-astro-cid-tcy35dad> <div class="container cta-section__inner" data-astro-cid-tcy35dad> <span class="section-eyebrow" data-astro-cid-tcy35dad>Get Started</span> <h2 class="cta-section__heading" data-astro-cid-tcy35dad>Ready to work with us?</h2> <p class="cta-section__sub" data-astro-cid-tcy35dad>
Contact our team and we'll obtain your clearances safely and
          efficiently.
</p> <div class="cta-section__actions" data-astro-cid-tcy35dad> <a${addAttribute(`/contact-us?service=${encodeURIComponent(service.title)}`, "href")} class="btn-primary" data-astro-cid-tcy35dad>
Request ${service.title} </a> <a href="/trip-support" class="btn-ghost" data-astro-cid-tcy35dad>View All Services</a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-tcy35dad": true })} ` })}  ${renderScript($$result, "D:/N3 Projects/aero_website/src/pages/services/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/N3 Projects/aero_website/src/pages/services/[slug].astro", void 0);

const $$file = "D:/N3 Projects/aero_website/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
