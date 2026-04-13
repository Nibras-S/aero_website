import { c as createComponent } from './astro-component_C0aOnk7E.mjs';
import 'piccolore';
import { B as maybeRenderHead, Q as renderTemplate, a3 as addAttribute } from './sequence_Cf8J0QyC.mjs';
import { r as renderComponent } from './entrypoint_CnFHr9Fc.mjs';
import { r as renderScript } from './script_DeAGT7yU.mjs';
import { $ as $$MainLayout, a as $$Navbar, b as $$Footer } from './Footer_BmLgtzz7.mjs';
import { $ as $$ContactCTA } from './ContactCTA_B290UsY3.mjs';
import 'clsx';

const $$TripSupportIntro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="trip-support" class="hero" aria-label="Trip Support Hero" data-astro-cid-sj2uq66o> <!-- Background --> <div class="hero__bg" aria-hidden="true" data-astro-cid-sj2uq66o> <img src="/images/trip-support-hero.webp" alt="" class="hero__img" loading="eager" fetchpriority="high" decoding="async" data-astro-cid-sj2uq66o> </div> <!-- Gradient overlay --> <div class="hero__overlay" aria-hidden="true" data-astro-cid-sj2uq66o></div> <!-- Content: Split bottom layout --> <div class="hero__container" data-astro-cid-sj2uq66o> <div class="hero__content" data-astro-cid-sj2uq66o> <!-- Left: Large heading --> <div class="hero__left" data-astro-cid-sj2uq66o> <h1 class="hero__heading" data-astro-cid-sj2uq66o>
Seamless Flight<br data-astro-cid-sj2uq66o>
Operations, Anywhere<br data-astro-cid-sj2uq66o> <span class="text-highlight" data-astro-cid-sj2uq66o>You Fly</span> </h1> </div> <!-- Right: Description + CTA --> <div class="hero__right" data-astro-cid-sj2uq66o> <p class="hero__desc" data-astro-cid-sj2uq66o>
End-to-end operational support designed to keep every flight
          efficient, compliant, and on schedule.
</p> <a href="/contact-us" class="hero__cta" data-astro-cid-sj2uq66o>
Request trip support
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-sj2uq66o> <path d="M7 17L17 7M17 7H7M17 7V17" data-astro-cid-sj2uq66o></path> </svg> </a> </div> </div> </div> </section> <!-- Modal Backdrop --> <div class="modal-backdrop" id="trip-modal-backdrop" aria-hidden="true" data-astro-cid-sj2uq66o></div> <!-- Modal Form --> <dialog class="modal" id="trip-modal" aria-labelledby="modal-title" data-astro-cid-sj2uq66o> <div class="modal__inner" data-astro-cid-sj2uq66o> <div class="modal__header" data-astro-cid-sj2uq66o> <div data-astro-cid-sj2uq66o> <h2 id="modal-title" class="modal__title" data-astro-cid-sj2uq66o>Request Trip Support</h2> <p class="modal__subtitle" data-astro-cid-sj2uq66o>
Our operations team will respond within 2 hours.
</p> </div> <button type="button" class="modal__close" id="close-trip-modal" aria-label="Close dialog" data-astro-cid-sj2uq66o> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-sj2uq66o> <path d="M18 6L6 18M6 6l12 12" data-astro-cid-sj2uq66o></path> </svg> </button> </div> <form class="modal__form" id="trip-form" novalidate data-astro-cid-sj2uq66o> <div class="form-row" data-astro-cid-sj2uq66o> <div class="form-group" data-astro-cid-sj2uq66o> <label for="trip-name" class="form-label" data-astro-cid-sj2uq66o>Full Name <span class="req" data-astro-cid-sj2uq66o>*</span></label> <input type="text" id="trip-name" name="name" class="form-input" placeholder="e.g. James Rodriguez" required autocomplete="name" data-astro-cid-sj2uq66o> </div> <div class="form-group" data-astro-cid-sj2uq66o> <label for="trip-company" class="form-label" data-astro-cid-sj2uq66o>Company</label> <input type="text" id="trip-company" name="company" class="form-input" placeholder="e.g. Meridian Aviation" autocomplete="organization" data-astro-cid-sj2uq66o> </div> </div> <div class="form-group" data-astro-cid-sj2uq66o> <label for="trip-email" class="form-label" data-astro-cid-sj2uq66o>Email Address <span class="req" data-astro-cid-sj2uq66o>*</span></label> <input type="email" id="trip-email" name="email" class="form-input" placeholder="e.g. ops@meridian.aero" required autocomplete="email" data-astro-cid-sj2uq66o> </div> <div class="form-group" data-astro-cid-sj2uq66o> <label for="trip-details" class="form-label" data-astro-cid-sj2uq66o>Trip Details</label> <textarea id="trip-details" name="details" class="form-input form-textarea" rows="4" placeholder="Aircraft type, route, dates, number of pax, special requirements..." data-astro-cid-sj2uq66o></textarea> </div> <button type="submit" class="modal__submit" id="submit-trip" data-astro-cid-sj2uq66o> <span class="submit-text" data-astro-cid-sj2uq66o>Submit Request</span> <span class="submit-loader" aria-hidden="true" data-astro-cid-sj2uq66o> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-sj2uq66o> <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" data-astro-cid-sj2uq66o></path> </svg> </span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-sj2uq66o> <path d="M22 2L11 13" data-astro-cid-sj2uq66o></path> <path d="M22 2L15 22L11 13L2 9L22 2Z" data-astro-cid-sj2uq66o></path> </svg> </button> </form> <!-- Success --> <div class="modal__success" id="trip-success" hidden data-astro-cid-sj2uq66o> <div class="success-icon" data-astro-cid-sj2uq66o> <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-sj2uq66o> <circle cx="12" cy="12" r="10" data-astro-cid-sj2uq66o></circle> <path d="M8 12l3 3 5-5" data-astro-cid-sj2uq66o></path> </svg> </div> <h3 data-astro-cid-sj2uq66o>Request Submitted</h3> <p data-astro-cid-sj2uq66o>Our operations team will reach out shortly.</p> <button type="button" class="modal__submit" id="close-success" data-astro-cid-sj2uq66o>Done</button> </div> </div> </dialog>  ${renderScript($$result, "D:/N3 Projects/aero_website/src/components/sections/trip-support/TripSupportIntro.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/N3 Projects/aero_website/src/components/sections/trip-support/TripSupportIntro.astro", void 0);

const $$ClienteleStatement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="clientele-section" aria-label="Our Clientele" data-astro-cid-knb5df6t> <div class="container statement-container" data-astro-cid-knb5df6t> <h2 class="statement-text" data-astro-cid-knb5df6t>
Delivering seamless support to heads of state, corporate flight departments, and commercial operators across the globe.
</h2> <div class="button-wrapper" data-astro-cid-knb5df6t> <a href="/contact-us" class="btn-talk" data-astro-cid-knb5df6t> <span data-astro-cid-knb5df6t>Talk to us</span> <svg fill="none" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-knb5df6t><path d="M7 17L17 7M17 7H7M17 7V17" data-astro-cid-knb5df6t></path></svg> </a> </div> </div> </section> <!-- Shadcn-Inspired Modal Dialog --> <div class="shadcn-dialog-overlay" id="trip-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="dialog-title" data-astro-cid-knb5df6t> <div class="shadcn-dialog-content" data-astro-cid-knb5df6t> <!-- Close Button --> <button class="shadcn-dialog-close" id="close-modal-btn" aria-label="Close form" data-astro-cid-knb5df6t> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-knb5df6t> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-knb5df6t></line> <line x1="6" y1="6" x2="18" y2="18" data-astro-cid-knb5df6t></line> </svg> </button> <div class="shadcn-dialog-header" data-astro-cid-knb5df6t> <h3 class="shadcn-dialog-title" id="dialog-title" data-astro-cid-knb5df6t>Request Trip Support</h3> <p class="shadcn-dialog-description" data-astro-cid-knb5df6t>Fill out the details below for your upcoming trip and our dispatch team will contact you immediately.</p> </div> <form class="shadcn-form" id="trip-support-form" data-astro-cid-knb5df6t> <div class="form-grid" data-astro-cid-knb5df6t> <div class="form-group" data-astro-cid-knb5df6t> <label for="fullName" data-astro-cid-knb5df6t>Full Name</label> <input type="text" id="fullName" name="fullName" required placeholder="John Doe" data-astro-cid-knb5df6t> </div> <div class="form-group" data-astro-cid-knb5df6t> <label for="company" data-astro-cid-knb5df6t>Company / Operator</label> <input type="text" id="company" name="company" placeholder="Acme Aviation LLC" data-astro-cid-knb5df6t> </div> </div> <div class="form-group" data-astro-cid-knb5df6t> <label for="email" data-astro-cid-knb5df6t>Email Address</label> <input type="email" id="email" name="email" required placeholder="john@example.com" data-astro-cid-knb5df6t> </div> <div class="form-grid" data-astro-cid-knb5df6t> <div class="form-group" data-astro-cid-knb5df6t> <label for="departure" data-astro-cid-knb5df6t>Departure Airport</label> <input type="text" id="departure" name="departure" required placeholder="e.g. KTEB" data-astro-cid-knb5df6t> </div> <div class="form-group" data-astro-cid-knb5df6t> <label for="destination" data-astro-cid-knb5df6t>Destination Airport</label> <input type="text" id="destination" name="destination" required placeholder="e.g. EGSS" data-astro-cid-knb5df6t> </div> </div> <div class="form-group" data-astro-cid-knb5df6t> <label for="details" data-astro-cid-knb5df6t>Additional Requirements</label> <textarea id="details" name="details" rows="3" placeholder="Handling, Permits, Fuel requests..." data-astro-cid-knb5df6t></textarea> </div> <div class="shadcn-dialog-footer" data-astro-cid-knb5df6t> <button type="submit" class="shadcn-btn shadcn-btn-primary" data-astro-cid-knb5df6t>Submit Request</button> </div> </form> <!-- Success State (hidden by default) --> <div class="form-success-state" id="form-success" aria-hidden="true" style="display: none;" data-astro-cid-knb5df6t> <svg class="success-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-knb5df6t> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-astro-cid-knb5df6t></path> <polyline points="22 4 12 14.01 9 11.01" data-astro-cid-knb5df6t></polyline> </svg> <h4 data-astro-cid-knb5df6t>Request Received</h4> <p data-astro-cid-knb5df6t>Our global operations team is reviewing your details and will be in touch shortly.</p> </div> </div> </div>  ${renderScript($$result, "D:/N3 Projects/aero_website/src/components/sections/trip-support/ClienteleStatement.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/N3 Projects/aero_website/src/components/sections/trip-support/ClienteleStatement.astro", void 0);

const $$ServicesGrid = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Trip Planning",
      slug: "trip-planning",
      label: "OPERATIONAL EXCELLENCE",
      desc: "Every successful operation begins with precise planning. We provide fast, reliable trip support tailored to your mission, ensuring optimized routing, cost control, and full regulatory compliance.",
      desc2: "Our trip planning covers all essential requirements, including flight clearances, slot coordination, fuel arrangements, and accurate flight plan filing—allowing you to operate with confidence and efficiency.",
      image: "/images/trip-support-hero-card.webp",
      icons: [
        { icon: "route", text: "Optimized Routing" },
        { icon: "shield", text: "Regulatory Compliance" },
        { icon: "fuel", text: "Fuel Arrangements" }
      ]
    },
    {
      title: "Flight Permits",
      slug: "flight-permits",
      label: "GLOBAL COMPLIANCE",
      desc: "Securing permits on time is critical to any operation. We manage the entire process with speed and accuracy, coordinating directly with aviation authorities to obtain approvals even within tight timeframes.",
      desc2: "From overflight and landing permits to block and seasonal clearances, we ensure all regulatory requirements are met without delays or disruptions.",
      image: "/images/svc-flight-permit.webp",
      icons: [
        { icon: "globe", text: "Overflight Permits" },
        { icon: "landing", text: "Landing Permits" },
        { icon: "calendar", text: "Seasonal Clearances" }
      ]
    },
    {
      title: "Flyger's Dispatch Team",
      slug: "dispatch",
      label: "PRECISION EXECUTION",
      desc: "Our dispatch support is built around precision and real-time coordination. Working closely with flight crews and operational stakeholders, we ensure every flight is planned, monitored, and executed efficiently.",
      desc2: "This includes route optimization, weather analysis, fuel planning (including EDTO/ETOPS), and continuous tracking—ensuring smooth operations from departure to arrival.",
      image: "/images/svc-dispatch.webp",
      icons: [
        { icon: "triptime", text: "Test Plan & Trip Times" },
        { icon: "flightplan", text: "Flight Plan Filing with ATC" },
        { icon: "weather", text: "Weather Monitoring & Pilot Updates" },
        { icon: "radar", text: "SATCOM & FlightRadar24 Tracking" },
        { icon: "fuel", text: "Fuel & EDTO/ETOPS Calculations" }
      ]
    },
    {
      title: "Diversion Support",
      slug: "diversion-support",
      label: "RAPID RESPONSE",
      desc: "Unplanned situations demand immediate and effective solutions. We provide rapid response support for flight diversions, ensuring minimal disruption to both crew and passengers.",
      desc2: "From accommodation and transportation to airport coordination, our team manages every aspect with speed and reliability, supported by 24/7 operational availability.",
      image: "/images/svc-hotac.webp",
      icons: [
        { icon: "clock", text: "24/7 Availability" },
        { icon: "hotel", text: "Crew Accommodation" },
        { icon: "transport", text: "Ground Transport" }
      ]
    },
    {
      title: "Supervisors at Flyger",
      slug: "supervisors",
      label: "SEAMLESS TURNAROUNDS",
      desc: "Ensures every turnaround is executed seamlessly. By coordinating with all service providers and monitoring activities in real time, we maintain full control over quality and compliance.",
      desc2: "Detailed reporting and proactive communication ensure transparency and consistency throughout the handling process.",
      image: "/images/svc-supervisors.webp",
      icons: [
        { icon: "clipboard", text: "Quality Control" },
        { icon: "monitor", text: "Real-Time Monitoring" },
        { icon: "report", text: "Detailed Reporting" }
      ]
    },
    {
      title: "Smart Operations with FLYGER CRM",
      slug: "flyger-crm",
      label: "DIGITAL PLATFORM",
      desc: "At FLYGER, our operations are powered by a purpose-built CRM system designed to enhance efficiency and transparency.",
      desc2: "Clients benefit from real-time proforma generation, immediate post-turn invoicing, and centralized coordination—providing complete visibility and control over both operational and financial aspects.",
      image: "/images/svc-smart-cr.webp",
      icons: [
        { icon: "invoice", text: "Instant Invoicing" },
        { icon: "dashboard", text: "Live Dashboard" },
        { icon: "sync", text: "Centralized Ops" }
      ]
    },
    {
      title: "Executive Concierge",
      slug: "executive-concierge",
      label: "PREMIUM SERVICE",
      desc: "We provide tailored concierge support designed to enhance every aspect of the journey, with a strong focus on efficiency, comfort, and reliability.",
      desc2: "With access to our own dedicated drivers at key locations, we ensure immediate availability and seamless transfers—eliminating delays and maintaining a premium standard of service. From ground transportation and hotel arrangements to personalized in-flight requests and local assistance, every detail is managed with precision and discretion.",
      image: "/images/svc-concierge.webp",
      icons: [
        { icon: "transport", text: "Dedicated Drivers" },
        { icon: "hotel", text: "Hotel Arrangements" },
        { icon: "concierge", text: "Personalized Requests" }
      ]
    },
    {
      title: "Onboard Catering Solutions",
      slug: "catering",
      label: "INFLIGHT EXCELLENCE",
      desc: "We coordinate high-quality onboard catering to enhance the inflight experience, ensuring every detail meets the expectations of crew and passengers.",
      desc2: "What sets us apart is our direct delivery approach. With our own dedicated drivers handling deliveries to the aircraft at key locations, we eliminate reliance on third-party logistics—reducing delays and avoiding unnecessary additional costs. This allows us to offer a seamless, reliable, and premium catering service while maintaining cost efficiency.",
      image: "/images/svc-catering.webp",
      icons: [
        { icon: "catering", text: "Gourmet Catering" },
        { icon: "transport", text: "Direct Delivery" },
        { icon: "invoice", text: "Cost Efficient" }
      ]
    },
    {
      title: "Station Representation",
      slug: "station-representation",
      label: "ON-GROUND OPERATIONS",
      desc: "We provide dedicated on-ground representation at key locations, ensuring your operations are supported by experienced personnel who understand the local environment and requirements.",
      desc2: "With our own staff positioned at strategic airports, we offer direct oversight and faster coordination, reducing dependency on third parties and enhancing service reliability. Our team acts as an extension of your operations, managing coordination with airport authorities, supervising ground handling activities, and ensuring smooth day-to-day execution.",
      image: "/images/svc-station-rep.webp",
      icons: [
        { icon: "stationrep", text: "On-Ground Staff" },
        { icon: "clipboard", text: "Ops Management" },
        { icon: "monitor", text: "Compliance Oversight" }
      ]
    }
  ];
  return renderTemplate`<!-- Outer tall track allowing you to scroll "through" all items length  -->${maybeRenderHead()}<section id="services-pin-container" class="services-showcase" aria-labelledby="services-heading"${addAttribute(`--num-items: ${services.length};`, "style")} data-astro-cid-3vp5f2i3> <header class="sr-only" data-astro-cid-3vp5f2i3> <h2 id="services-heading" data-astro-cid-3vp5f2i3>Trip Support Services</h2> </header> <!-- Invisible snap track so CSS mandatory snapping flawlessly registers the 6 slides --> <div class="snap-track" aria-hidden="true" style="position: absolute; inset: 0; pointer-events: none;" data-astro-cid-3vp5f2i3> ${services.map(() => renderTemplate`<div style="height: 100svh; scroll-snap-align: start; scroll-snap-stop: always;" data-astro-cid-3vp5f2i3></div>`)} </div> <!-- Sticky viewport locks to the screen --> <div class="services-viewport" data-astro-cid-3vp5f2i3> <div class="services-list" id="services-list" data-astro-cid-3vp5f2i3> ${services.map((service, index) => renderTemplate`<div${addAttribute(`service-row ${index === 0 ? "is-active" : ""}`, "class")}${addAttribute(index, "data-index")} data-astro-cid-3vp5f2i3> <!-- Cinematic Full Bleed Background --> <div class="full-screen-bg" data-astro-cid-3vp5f2i3> <img loading="lazy" decoding="async"${addAttribute(service.image, "src")} alt="" class="bg-img"${addAttribute(index < 2 ? "eager" : "lazy", "loading")} data-astro-cid-3vp5f2i3> <div class="bg-overlay" aria-hidden="true" data-astro-cid-3vp5f2i3></div> </div> <!-- Foreground Content Container --> <div class="container container-viewport content-container" data-astro-cid-3vp5f2i3> <div class="glass-card" data-astro-cid-3vp5f2i3> <span class="service-label" data-astro-cid-3vp5f2i3>${service.label}</span> <h3 class="service-title" data-astro-cid-3vp5f2i3>${service.title}</h3> <p class="service-desc" data-astro-cid-3vp5f2i3>${service.desc}</p> <p class="service-desc" style="margin-top: -1rem; margin-bottom: 1.5rem;" data-astro-cid-3vp5f2i3>${service.desc2}</p>  <div class="service-icons" data-astro-cid-3vp5f2i3> ${service.icons.map((feat) => renderTemplate`<div class="icon-badge" data-astro-cid-3vp5f2i3> <span class="icon-badge__icon"${addAttribute(feat.icon, "data-icon")} data-astro-cid-3vp5f2i3>  ${feat.icon === "route" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><circle cx="6" cy="19" r="3" data-astro-cid-3vp5f2i3></circle><circle cx="18" cy="5" r="3" data-astro-cid-3vp5f2i3></circle><path d="M8.59 13.51l6.83-6.83" data-astro-cid-3vp5f2i3></path></svg>`} ${feat.icon === "shield" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-astro-cid-3vp5f2i3></path></svg>`} ${feat.icon === "fuel" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><path d="M3 22h12V2H3zm12-7l4 2V9l-4 2" data-astro-cid-3vp5f2i3></path></svg>`} ${feat.icon === "globe" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><circle cx="12" cy="12" r="10" data-astro-cid-3vp5f2i3></circle><line x1="2" y1="12" x2="22" y2="12" data-astro-cid-3vp5f2i3></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" data-astro-cid-3vp5f2i3></path></svg>`} ${feat.icon === "landing" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><path d="M2 22h20" data-astro-cid-3vp5f2i3></path><path d="M3.77 10.77L2 16h2l1.45-4.34L10 14V22" data-astro-cid-3vp5f2i3></path><path d="M21.5 8.5L22 6l-4-1-2.5 5-5-1.5L12 4l-3 1 1.5 5-3 1.5" data-astro-cid-3vp5f2i3></path></svg>`} ${feat.icon === "calendar" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-astro-cid-3vp5f2i3></rect><line x1="16" y1="2" x2="16" y2="6" data-astro-cid-3vp5f2i3></line><line x1="8" y1="2" x2="8" y2="6" data-astro-cid-3vp5f2i3></line><line x1="3" y1="10" x2="21" y2="10" data-astro-cid-3vp5f2i3></line></svg>`} ${feat.icon === "radar" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><circle cx="12" cy="12" r="10" data-astro-cid-3vp5f2i3></circle><circle cx="12" cy="12" r="6" data-astro-cid-3vp5f2i3></circle><circle cx="12" cy="12" r="2" data-astro-cid-3vp5f2i3></circle><line x1="12" y1="2" x2="12" y2="6" data-astro-cid-3vp5f2i3></line></svg>`} ${feat.icon === "weather" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" data-astro-cid-3vp5f2i3></path></svg>`} ${feat.icon === "dispatch" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" data-astro-cid-3vp5f2i3></polyline></svg>`} ${feat.icon === "triptime" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><circle cx="12" cy="12" r="10" data-astro-cid-3vp5f2i3></circle><polyline points="12 6 12 12 16 14" data-astro-cid-3vp5f2i3></polyline><path d="M22 2L18 6" data-astro-cid-3vp5f2i3></path><path d="M22 6L18 2" data-astro-cid-3vp5f2i3></path></svg>`} ${feat.icon === "flightplan" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><line x1="22" y1="2" x2="11" y2="13" data-astro-cid-3vp5f2i3></line><polygon points="22 2 15 22 11 13 2 9 22 2" data-astro-cid-3vp5f2i3></polygon></svg>`} ${feat.icon === "clock" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><circle cx="12" cy="12" r="10" data-astro-cid-3vp5f2i3></circle><polyline points="12 6 12 12 16 14" data-astro-cid-3vp5f2i3></polyline></svg>`} ${feat.icon === "hotel" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-astro-cid-3vp5f2i3></path></svg>`} ${feat.icon === "transport" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><rect x="1" y="3" width="15" height="13" data-astro-cid-3vp5f2i3></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" data-astro-cid-3vp5f2i3></polygon><circle cx="5.5" cy="18.5" r="2.5" data-astro-cid-3vp5f2i3></circle><circle cx="18.5" cy="18.5" r="2.5" data-astro-cid-3vp5f2i3></circle></svg>`} ${feat.icon === "clipboard" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" data-astro-cid-3vp5f2i3></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1" data-astro-cid-3vp5f2i3></rect></svg>`} ${feat.icon === "monitor" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><rect x="2" y="3" width="20" height="14" rx="2" ry="2" data-astro-cid-3vp5f2i3></rect><line x1="8" y1="21" x2="16" y2="21" data-astro-cid-3vp5f2i3></line><line x1="12" y1="17" x2="12" y2="21" data-astro-cid-3vp5f2i3></line></svg>`} ${feat.icon === "report" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-astro-cid-3vp5f2i3></path><polyline points="14 2 14 8 20 8" data-astro-cid-3vp5f2i3></polyline><line x1="16" y1="13" x2="8" y2="13" data-astro-cid-3vp5f2i3></line><line x1="16" y1="17" x2="8" y2="17" data-astro-cid-3vp5f2i3></line></svg>`} ${feat.icon === "invoice" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><line x1="12" y1="1" x2="12" y2="23" data-astro-cid-3vp5f2i3></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" data-astro-cid-3vp5f2i3></path></svg>`} ${feat.icon === "dashboard" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><rect x="3" y="3" width="7" height="7" data-astro-cid-3vp5f2i3></rect><rect x="14" y="3" width="7" height="7" data-astro-cid-3vp5f2i3></rect><rect x="14" y="14" width="7" height="7" data-astro-cid-3vp5f2i3></rect><rect x="3" y="14" width="7" height="7" data-astro-cid-3vp5f2i3></rect></svg>`} ${feat.icon === "sync" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><polyline points="23 4 23 10 17 10" data-astro-cid-3vp5f2i3></polyline><polyline points="1 20 1 14 7 14" data-astro-cid-3vp5f2i3></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" data-astro-cid-3vp5f2i3></path></svg>`} ${feat.icon === "concierge" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><path d="M18 8A6 6 0 0 0 6 8" data-astro-cid-3vp5f2i3></path><path d="M3 12h18" data-astro-cid-3vp5f2i3></path><path d="M12 2v2" data-astro-cid-3vp5f2i3></path><rect x="2" y="14" width="20" height="4" rx="1" data-astro-cid-3vp5f2i3></rect></svg>`} ${feat.icon === "catering" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" data-astro-cid-3vp5f2i3></path><path d="M7 2v20" data-astro-cid-3vp5f2i3></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" data-astro-cid-3vp5f2i3></path></svg>`} ${feat.icon === "stationrep" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3vp5f2i3><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-astro-cid-3vp5f2i3></path><circle cx="8.5" cy="7" r="4" data-astro-cid-3vp5f2i3></circle><polyline points="17 11 19 13 23 9" data-astro-cid-3vp5f2i3></polyline></svg>`} </span> <span class="icon-badge__text" data-astro-cid-3vp5f2i3>${feat.text}</span> </div>`)} </div> <div class="service-action" data-astro-cid-3vp5f2i3> <a${addAttribute(`/services/${service.slug}`, "href")} class="btn-navigate"${addAttribute(`View ${service.title} details`, "aria-label")}${addAttribute(index === 0 ? "0" : "-1", "tabindex")} data-service-btn data-astro-cid-3vp5f2i3>
Explore
<svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3vp5f2i3> <line x1="5" y1="12" x2="19" y2="12" data-astro-cid-3vp5f2i3></line> <polyline points="12 5 19 12 12 19" data-astro-cid-3vp5f2i3></polyline> </svg> </a> </div> </div> </div> </div>`)} </div> <div class="flight-path-indicator" aria-hidden="true" id="flight-path" data-astro-cid-3vp5f2i3> <div class="flight-track" data-astro-cid-3vp5f2i3></div> <div class="airplane-icon" id="progress-airplane" data-astro-cid-3vp5f2i3> <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3vp5f2i3> <path d="M21 16v-2l-8-5V3.53a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" data-astro-cid-3vp5f2i3></path> </svg> </div> </div> </div> </section>  ${renderScript($$result, "D:/N3 Projects/aero_website/src/components/sections/trip-support/ServicesGrid.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/N3 Projects/aero_website/src/components/sections/trip-support/ServicesGrid.astro", void 0);

const $$FlygerCRM = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="crm" id="flyger-crm" data-astro-cid-nc7t5xfs> <div class="crm__container" data-astro-cid-nc7t5xfs> <!-- Header --> <div class="crm__header" data-astro-cid-nc7t5xfs> <h2 class="crm__heading" data-astro-cid-nc7t5xfs>Built for aviation.<br data-astro-cid-nc7t5xfs>Designed for clarity.</h2> <p class="crm__sub" data-astro-cid-nc7t5xfs>
Our purpose-built CRM puts every operational and financial detail 
        in one place — so nothing falls through the cracks.
</p> </div> <!-- Bento Grid --> <div class="bento" data-astro-cid-nc7t5xfs> <!-- Large: Real-time proforma --> <div class="bento__cell bento__cell--wide" data-bento data-astro-cid-nc7t5xfs> <div class="bento__header-wrap" data-astro-cid-nc7t5xfs> <div class="bento__icon" data-astro-cid-nc7t5xfs> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nc7t5xfs><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" data-astro-cid-nc7t5xfs></polyline></svg> </div> <h3 class="bento__title" data-astro-cid-nc7t5xfs>Real-Time Proforma</h3> </div> <p class="bento__desc" data-astro-cid-nc7t5xfs>Cost estimates generated the moment a trip is confirmed. No waiting, no follow-ups.</p> <span class="bento__metric" data-count="3" data-astro-cid-nc7t5xfs>0<span class="bento__unit" data-astro-cid-nc7t5xfs>sec</span></span> <span class="bento__metric-label" data-astro-cid-nc7t5xfs>Average generation time</span> </div> <!-- Tall: Invoicing --> <div class="bento__cell bento__cell--tall" data-bento data-astro-cid-nc7t5xfs> <div class="bento__header-wrap" data-astro-cid-nc7t5xfs> <div class="bento__icon" data-astro-cid-nc7t5xfs> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nc7t5xfs><circle cx="12" cy="12" r="10" data-astro-cid-nc7t5xfs></circle><text x="12" y="16" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="9" fill="currentColor" stroke="none" data-astro-cid-nc7t5xfs>AED</text></svg> </div> <h3 class="bento__title" data-astro-cid-nc7t5xfs>Instant Invoicing</h3> </div> <p class="bento__desc" data-astro-cid-nc7t5xfs>Invoices delivered immediately after turnaround — eliminating delays and uncertainty.</p> <div class="bento__visual-stack" data-astro-cid-nc7t5xfs> <div class="invoice-line" data-astro-cid-nc7t5xfs><span class="il-dot il-dot--done" data-astro-cid-nc7t5xfs></span><span class="il-text" data-astro-cid-nc7t5xfs>Trip completed</span><span class="il-check" data-astro-cid-nc7t5xfs>✓</span></div> <div class="invoice-line" data-astro-cid-nc7t5xfs><span class="il-dot il-dot--done" data-astro-cid-nc7t5xfs></span><span class="il-text" data-astro-cid-nc7t5xfs>Invoice generated</span><span class="il-check" data-astro-cid-nc7t5xfs>✓</span></div> <div class="invoice-line" data-astro-cid-nc7t5xfs><span class="il-dot il-dot--done" data-astro-cid-nc7t5xfs></span><span class="il-text" data-astro-cid-nc7t5xfs>Client notified</span><span class="il-check" data-astro-cid-nc7t5xfs>✓</span></div> </div> </div> <!-- Regular: Coordination --> <div class="bento__cell" data-bento data-astro-cid-nc7t5xfs> <div class="bento__header-wrap" data-astro-cid-nc7t5xfs> <div class="bento__icon" data-astro-cid-nc7t5xfs> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nc7t5xfs><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-astro-cid-nc7t5xfs></path><circle cx="9" cy="7" r="4" data-astro-cid-nc7t5xfs></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-nc7t5xfs></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-nc7t5xfs></path></svg> </div> <h3 class="bento__title" data-astro-cid-nc7t5xfs>One Platform</h3> </div> <p class="bento__desc" data-astro-cid-nc7t5xfs>Ops, clients, and ground teams — all connected through a single thread.</p> </div> <!-- Regular: Visibility --> <div class="bento__cell" data-bento data-astro-cid-nc7t5xfs> <div class="bento__header-wrap" data-astro-cid-nc7t5xfs> <div class="bento__icon" data-astro-cid-nc7t5xfs> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nc7t5xfs><circle cx="12" cy="12" r="10" data-astro-cid-nc7t5xfs></circle><polyline points="12 6 12 12 16 14" data-astro-cid-nc7t5xfs></polyline></svg> </div> <h3 class="bento__title" data-astro-cid-nc7t5xfs>Full Visibility</h3> </div> <p class="bento__desc" data-astro-cid-nc7t5xfs>Track costs, revenue, and operational status — in real time, from anywhere.</p> </div> <!-- Wide bottom: The big number --> <div class="bento__cell bento__cell--wide bento__cell--accent" data-bento data-astro-cid-nc7t5xfs> <div class="bento__big-number" data-astro-cid-nc7t5xfs> <span class="bento__metric" data-count="100" data-astro-cid-nc7t5xfs>0</span><span class="bento__unit-lg" data-astro-cid-nc7t5xfs>%</span> </div> <div class="bento__accent-text" data-astro-cid-nc7t5xfs> <h3 class="bento__title bento__title--white" data-astro-cid-nc7t5xfs>Complete Transparency</h3> <p class="bento__desc bento__desc--white" data-astro-cid-nc7t5xfs>Every cost, every approval, every document — visible to you at every stage of the operation.</p> </div> </div> </div> </div> </section>  ${renderScript($$result, "D:/N3 Projects/aero_website/src/components/sections/trip-support/FlygerCRM.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/N3 Projects/aero_website/src/components/sections/trip-support/FlygerCRM.astro", void 0);

const $$StationRepDetails = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      id: "01",
      title: "On-Ground Representation",
      desc: "Dedicated personnel embedded at strategic airports worldwide."
    },
    {
      id: "02",
      title: "Planning & Coordination",
      desc: "End-to-end operational management, from brief to execution."
    },
    {
      id: "03",
      title: "Compliance Monitoring",
      desc: "Continuous oversight of facilities, equipment, and procedures."
    },
    {
      id: "04",
      title: "Vendor Management",
      desc: "Curated third-party networks held to the highest standards."
    },
    {
      id: "05",
      title: "Turnaround Operations",
      desc: "Check-in, ramp, and gate — orchestrated to the minute."
    },
    {
      id: "06",
      title: "Permits & Slots",
      desc: "Flight permits secured and slots coordinated without delay."
    },
    {
      id: "07",
      title: "Authority Liaison",
      desc: "Direct communication with airport authorities and partners."
    },
    {
      id: "08",
      title: "Financial Processes",
      desc: "Billing, revenue collection, and transparent reporting."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="srd" id="station-rep-details" data-astro-cid-ikv6nujz> <div class="srd__inner" data-astro-cid-ikv6nujz> <!-- LEFT: Editorial Content --> <div class="srd__editorial" data-astro-cid-ikv6nujz> <span class="srd__eyebrow" data-astro-cid-ikv6nujz>Station Representation</span> <h2 class="srd__heading" data-astro-cid-ikv6nujz>
Precision on<br data-astro-cid-ikv6nujz>the ground.
</h2> <p class="srd__body" data-astro-cid-ikv6nujz>
Every operation depends on what happens between landing and takeoff. 
        We position experienced teams at key airports to manage every detail — 
        from compliance and vendor oversight to turnaround execution and 
        financial coordination.
</p> <p class="srd__body srd__body--muted" data-astro-cid-ikv6nujz>
Your operations, extended. Our people, on the ground.
</p> </div> <!-- RIGHT: Vertical Timeline --> <div class="srd__timeline" id="srd-timeline" data-astro-cid-ikv6nujz> <div class="timeline-line" aria-hidden="true" data-astro-cid-ikv6nujz> <div class="timeline-line__progress" id="timeline-progress" data-astro-cid-ikv6nujz></div> </div> ${steps.map((step, i) => renderTemplate`<div class="timeline-step"${addAttribute(i, "data-step")} data-astro-cid-ikv6nujz> <div class="timeline-step__marker" data-astro-cid-ikv6nujz> <span class="timeline-step__number" data-astro-cid-ikv6nujz>${step.id}</span> </div> <div class="timeline-step__content" data-astro-cid-ikv6nujz> <h3 class="timeline-step__title" data-astro-cid-ikv6nujz>${step.title}</h3> <p class="timeline-step__desc" data-astro-cid-ikv6nujz>${step.desc}</p> </div> </div>`)} </div> </div> </section>  ${renderScript($$result, "D:/N3 Projects/aero_website/src/components/sections/trip-support/StationRepDetails.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/N3 Projects/aero_website/src/components/sections/trip-support/StationRepDetails.astro", void 0);

const $$GlobalReach = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="gr-section" data-astro-cid-pgbycak6> <div class="gr-wrapper" data-astro-cid-pgbycak6> <!-- LEFT 60%: Editorial Content --> <div class="gr-left" data-astro-cid-pgbycak6> <span class="gr-eyebrow" data-astro-cid-pgbycak6>Global Network</span> <h2 class="gr-heading" data-astro-cid-pgbycak6>A True Global Footprint</h2> <p class="gr-desc" data-astro-cid-pgbycak6>
Wherever your flight path takes you, our dedicated local representatives
        and vetted partners ensure exceptional service quality and strict
        compliance with local regulations — across every continent.
</p> </div> <!-- Vertical Divider --> <div class="gr-divider" aria-hidden="true" data-astro-cid-pgbycak6></div> <!-- RIGHT 40%: Metrics Stack --> <div class="gr-right" data-astro-cid-pgbycak6> <div class="gr-metric" data-astro-cid-pgbycak6> <span class="gr-number" data-astro-cid-pgbycak6>100+</span> <span class="gr-label" data-astro-cid-pgbycak6>Countries Covered</span> </div> <div class="gr-rule" data-astro-cid-pgbycak6></div> <div class="gr-metric" data-astro-cid-pgbycak6> <span class="gr-number" data-astro-cid-pgbycak6>24/7</span> <span class="gr-label" data-astro-cid-pgbycak6>Operations Center</span> </div> <div class="gr-rule" data-astro-cid-pgbycak6></div> <div class="gr-metric" data-astro-cid-pgbycak6> <span class="gr-number" data-astro-cid-pgbycak6>500+</span> <span class="gr-label" data-astro-cid-pgbycak6>Partner FBOs</span> </div> </div> </div> </section>`;
}, "D:/N3 Projects/aero_website/src/components/sections/trip-support/GlobalReach.astro", void 0);

const $$TripSupport = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Trip Support | Flyger Aviation Services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "TripSupportIntro", $$TripSupportIntro, {})} ${renderComponent($$result2, "ClienteleStatement", $$ClienteleStatement, {})} ${renderComponent($$result2, "ServicesGrid", $$ServicesGrid, {})} ${renderComponent($$result2, "FlygerCRM", $$FlygerCRM, {})} ${renderComponent($$result2, "StationRepDetails", $$StationRepDetails, {})} ${renderComponent($$result2, "GlobalReach", $$GlobalReach, {})} ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}  ${renderScript($$result, "D:/N3 Projects/aero_website/src/pages/trip-support.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/N3 Projects/aero_website/src/pages/trip-support.astro", void 0);

const $$file = "D:/N3 Projects/aero_website/src/pages/trip-support.astro";
const $$url = "/trip-support";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TripSupport,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
