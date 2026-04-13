// ============================================================================
// Astro DB Seed — runs automatically on every `astro dev` start
// and on every `astro build`.
//
// PURPOSE
//   Restores the 4 baseline blog posts and 5 sample inquiries so the admin
//   panel and public blog are never empty after a server restart or a fresh
//   deploy.
//
// WHAT THIS DOES
//   ✅ Blogs and inquiries are guaranteed present after every dev restart
//   ✅ Same data appears in production builds (until/unless a remote DB is linked)
//   ✅ Idempotent — duplicates are skipped, so it's safe to re-run
//
// WHAT THIS DOES NOT DO
//   ❌ Persist NEW inquiries submitted by website visitors after a deploy
//   ❌ Persist NEW blog posts created via the admin UI after a deploy
//   ❌ Preserve EDITS made to seeded blogs via the admin UI (next restart wipes them)
//
// FOR TRUE PRODUCTION PERSISTENCE (when ready):
//   1. Sign up for a free Turso account: https://turso.tech
//   2. Run: `npx astro db link`
//   3. Add the Turso credentials to your .env and Vercel env vars
//   4. Run: `npx astro db push --remote`
//   See: https://docs.astro.build/en/guides/astro-db/#libsql
//
// HOW TO ADD/EDIT CONTENT
//   - To add a blog post permanently: append a new object to `blogPosts` below
//   - To remove a sample inquiry: delete its entry from `sampleInquiries`
//   - Restart the dev server to apply changes
// ============================================================================

import { db, BlogPosts, Inquiries } from 'astro:db';

// ─────────────────────────────────────────────────────────────────────────────
// 1. BLOG POSTS — 4 articles restored from source files
// ─────────────────────────────────────────────────────────────────────────────

const blogPosts = [
  {
    id: 'future-of-sustainable-aviation',
    title: 'The Future of Sustainable Aviation: What Operators Need to Know',
    excerpt:
      "As the aviation industry faces increasing pressure to reduce its carbon footprint, sustainable aviation fuel (SAF) and new operational practices are reshaping how we fly. Here's what every operator should be preparing for.",
    featuredImage: '/images/blog/vini-brasil-aeq-m0bztje-unsplash.webp',
    author: 'Flyger Editorial Team',
    category: 'Aviation Insights',
    featured: true,
    body: `## The Shift Toward Greener Skies

The aviation industry contributes approximately 2.5% of global CO₂ emissions, a figure that has drawn significant scrutiny from regulators, passengers, and operators alike. As the world accelerates toward net-zero targets, the sector is undergoing its most significant transformation since the jet age.

For flight support companies like Flyger, this shift isn't just an environmental imperative — it's a fundamental change in how we coordinate, plan, and execute every mission.

## Sustainable Aviation Fuel: The Immediate Solution

SAF (Sustainable Aviation Fuel) represents the most viable near-term solution for reducing aviation emissions. Produced from renewable sources including used cooking oil, agricultural residues, and even captured carbon, SAF can reduce lifecycle carbon emissions by up to **80%** compared to conventional jet fuel.

### Key facts operators should know:

- **Drop-in compatibility**: SAF can be blended with conventional Jet A-1 up to 50% without any aircraft modifications
- **Growing availability**: Over 45 airports worldwide now offer SAF, with that number expected to triple by 2030
- **Regulatory mandates**: The EU's ReFuelEU Aviation regulation will require all flights departing EU airports to use a minimum SAF blend starting in 2025
- **Cost premium**: SAF currently costs 2-4x more than conventional fuel, but prices are expected to decrease as production scales

## Operational Efficiency: The Often-Overlooked Factor

While SAF grabs headlines, operational efficiency improvements can deliver immediate emissions reductions at no additional cost:

### Route Optimization
Modern flight planning tools can identify routes that reduce fuel burn by 3-8% through better wind utilization and altitude optimization. At Flyger, our operations team works with clients to identify these efficiencies on every mission.

### Ground Operations
Reducing APU usage, optimizing taxi procedures, and implementing single-engine taxi protocols can collectively reduce ground emissions by up to 40%.

### Digital Coordination
By digitizing permit applications, ground handling coordination, and fuel ordering, we eliminate redundant communications and reduce the administrative overhead that often leads to operational delays — and therefore excess fuel burn.

## Electric and Hydrogen: The Long-Term Horizon

While battery-electric and hydrogen-powered aircraft are still in development, they represent the ultimate destination for zero-emission aviation:

- **Electric aircraft**: Viable for flights under 500nm by 2035, with companies like Heart Aerospace and Eviation leading development
- **Hydrogen**: Both combustion and fuel-cell variants are being developed, with Airbus targeting a hydrogen-powered narrowbody by 2035
- **Urban Air Mobility**: eVTOL aircraft for short urban hops are expected to enter service as early as 2026

## What This Means for Your Operations

The transition to sustainable aviation won't happen overnight, but the trajectory is clear. Operators who begin planning now will be better positioned to meet regulatory requirements, satisfy environmentally conscious clients, and potentially reduce long-term fuel costs.

At Flyger, we're actively expanding our SAF sourcing network and developing tools to help clients track and optimize their environmental impact across every flight.

> "The operators who will thrive in the next decade are those who view sustainability not as a cost, but as a competitive advantage." — International Air Transport Association

## Looking Ahead

The future of aviation is undeniably green. Whether through SAF adoption, operational optimization, or the eventual transition to new propulsion technologies, every stakeholder in the aviation value chain has a role to play.

We'll continue sharing insights on this evolving landscape. If you'd like to discuss how Flyger can help optimize your operations for both performance and sustainability, [contact our team](/contact-us).`,
    createdAt: new Date('2025-03-15'),
  },

  {
    id: 'understanding-flight-permits',
    title: 'A Complete Guide to International Flight Permits',
    excerpt:
      'Navigating the complex world of overflight and landing permits can be daunting. This comprehensive guide breaks down everything operators need to know about securing permits efficiently and avoiding common pitfalls.',
    featuredImage:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1400',
    author: 'Flyger Operations Desk',
    category: 'Aviation Insights',
    featured: false,
    body: `## Why Flight Permits Matter

Every international flight requires some form of permission to enter another country's airspace or land at its airports. These permits — commonly divided into overflight permits and landing permits — are the legal foundation of cross-border aviation.

Getting permits wrong can result in delays, diversions, fines, or even denied entry. For operators managing tight schedules and high-value passengers, permit management isn't just administrative work — it's mission-critical.

## Types of Flight Permits

### 1. Overflight Permits
Required when transiting through a country's airspace without landing. Some countries grant blanket overflight rights through bilateral agreements, while others require individual applications for every flight.

**Countries requiring specific overflight permits include:**
- Russia (even for flights not landing)
- China
- Several African nations including Chad, Libya, and Somalia
- Parts of Central Asia

### 2. Landing Permits
Required for any flight intending to land in a foreign country. These are typically more complex than overflight permits and may involve:

- Proof of insurance
- Crew documentation
- Aircraft airworthiness certificates
- Customs and immigration pre-clearance
- Noise certificates (especially for older aircraft types)

### 3. Special Permits
Some operations require additional permits beyond standard overflight/landing authorization:

- **Charter permits**: Required for commercial charter operations in most jurisdictions
- **Cabotage permits**: Required when carrying passengers between two points within a foreign country
- **Military area permits**: Required for routing through restricted or military airspace
- **RVSM authorization**: Required for operations in Reduced Vertical Separation Minimum airspace

## The Permit Application Process

### Timeline Considerations

Permit lead times vary significantly by country and permit type:

| Region | Typical Lead Time | Notes |
|--------|------------------|-------|
| Europe | 1-3 business days | EU members generally straightforward |
| Middle East | 2-5 business days | Some Gulf states offer expedited processing |
| Africa | 5-10 business days | Highly variable; some countries require 15+ days |
| Asia | 3-7 business days | China and India often require longer lead times |
| Russia | 10-15 business days | Complex process with military coordination |

### Required Documentation

Most permit applications require:

1. **Operator details**: AOC, insurance certificates, registration
2. **Flight details**: Route, altitude, timing, crew information
3. **Aircraft information**: Type, registration, noise category
4. **Purpose of flight**: Commercial, private, diplomatic, medical

## Common Pitfalls and How to Avoid Them

### 1. Insufficient Lead Time
The most common cause of permit delays is applying too late. **Best practice**: Submit applications as early as operationally possible, and always have contingency routing planned.

### 2. Inconsistent Documentation
Ensure all documents match across applications. A registration number discrepancy between your permit application and your insurance certificate can trigger a rejection.

### 3. Overlooking Transit Countries
Operators sometimes focus on their destination permit and forget that each country along the route may also require authorization. A flight from London to Dubai, for example, may require overflight permits for multiple countries depending on routing.

### 4. Weekend and Holiday Processing
Many civil aviation authorities do not process permits on weekends or national holidays. Factor this into your timeline, especially when operating to regions with different working weeks (Friday-Saturday weekends in the Middle East, for example).

## How Flyger Streamlines Permit Management

At Flyger, permit management is one of our core competencies. Our operations team handles the entire process:

- **Application preparation and submission** to all relevant authorities
- **Status tracking** with proactive follow-up on pending applications
- **Contingency planning** with alternative routings pre-cleared when possible
- **24/7 monitoring** for any changes or revocations that could affect your flight

Our CRM system automatically tracks permit status, sends alerts for expiring documents, and maintains a complete audit trail for every application.

## Key Takeaways

1. **Start early**: The earlier you submit, the more options you have if issues arise
2. **Use a specialist**: Permit requirements change frequently; a dedicated flight support provider stays current so you don't have to
3. **Document everything**: Maintain organized, up-to-date operator documentation to avoid application delays
4. **Plan for contingencies**: Always have alternative routing available in case a permit is delayed or denied

Need help with permits for an upcoming mission? [Contact our operations team](/contact-us) — we respond within 15 minutes, 24/7.`,
    createdAt: new Date('2025-01-10'),
  },

  {
    id: 'flyger-expands-middle-east-operations',
    title: 'Flyger Expands Ground Handling Network Across the Middle East',
    excerpt:
      "With new strategic partnerships in Saudi Arabia, Qatar, and Bahrain, Flyger strengthens its regional ground handling capabilities to serve the growing demand for premium flight support services.",
    featuredImage: '/images/blog/vini-brasil-aeq-m0bztje-unsplash.webp',
    author: 'Flyger Communications',
    category: 'Company Updates',
    featured: false,
    body: `## A Strategic Move for Regional Growth

Flyger Aviation Services is proud to announce the expansion of its ground handling network across three key Middle Eastern markets: Saudi Arabia, Qatar, and Bahrain. This strategic initiative strengthens our ability to provide seamless, end-to-end flight support across the region's busiest aviation hubs.

## New Partnerships, Enhanced Capabilities

Through carefully selected partnerships with established local operators, Flyger clients can now benefit from:

- **Dedicated supervision** at King Khalid International Airport (OERK), King Fahd International Airport (OEDF), and Prince Mohammed bin Abdulaziz International Airport (OEMA)
- **VIP handling coordination** at Hamad International Airport (OTHH) in Doha
- **Full-service ground support** at Bahrain International Airport (OBBI)

Each partner has been vetted against Flyger's stringent quality standards, ensuring consistent service delivery whether you're operating a quick tech stop or a multi-day layover.

## Why the Middle East Matters

The Middle East continues to be one of the world's fastest-growing aviation markets. With Vision 2030 driving unprecedented infrastructure development in Saudi Arabia, and Qatar solidifying its position as a global transit hub, demand for reliable flight support has never been higher.

### Key regional trends:

1. **Saudi Arabia's General Aviation Authority (GACA)** is actively modernizing its airspace and airport infrastructure
2. **Business aviation movements** in the GCC have increased by 23% year-over-year
3. **New FBOs and private terminals** are being developed across the region, creating opportunities for differentiated service

## What This Means for Our Clients

For operators flying into or through the Middle East, this expansion translates to:

- **Faster turnaround times** through locally coordinated ground handling
- **Real-time supervision** by Flyger-trained personnel
- **Streamlined invoicing** through our centralized CRM system — no more juggling multiple vendor relationships
- **24/7 operations support** from our global operations center, now with enhanced regional expertise

## The Flyger Advantage

What sets Flyger apart in this expansion isn't just the breadth of our network — it's the depth of our coordination. Every flight through our Middle East network is managed through our proprietary CRM, giving clients:

- Real-time proforma estimates before arrival
- Automated vendor coordination for fuel, ground handling, and permits
- Post-flight reconciliation with transparent cost breakdowns

## Looking Forward

This expansion is part of Flyger's broader strategy to build the most comprehensive flight support network across the Middle East, Africa, and South Asia. We have additional partnerships in development and expect to announce further coverage expansions in Q3 2025.

For operators planning missions in the region, our team is ready to demonstrate how these enhanced capabilities can simplify your operations. [Get in touch](/contact-us) to discuss your requirements.`,
    createdAt: new Date('2025-02-20'),
  },

  {
    id: 'saf-mandate-2025-what-operators-need-to-know',
    title: 'The 2025 SAF Mandate: What Every Operator Needs to Know',
    excerpt:
      'With ReFuelEU Aviation now in force, every flight departing an EU airport must carry a minimum blend of Sustainable Aviation Fuel. Here is what it means for business jet operators flying into Europe — and how Flyger is helping crews stay compliant without grounding schedules.',
    // Stable local fallback. To use a Vercel Blob image instead, hit
    // /api/seed-blob-blog (admin auth required) which dynamically picks
    // the first uploaded image and re-inserts this post.
    featuredImage: '/images/blog/vini-brasil-aeq-m0bztje-unsplash.webp',
    author: 'Flyger Operations Desk',
    category: 'Aviation Insights',
    featured: true,
    body: `The **ReFuelEU Aviation** regulation went live on 1 January 2025, and it has quietly changed the economics of every business jet trip into Europe. For the first time, fuel suppliers at EU airports are legally required to blend a minimum percentage of Sustainable Aviation Fuel (SAF) into every uplift — starting at 2% this year and ramping to 70% by 2050.

It sounds gradual. It isn't. Operators flying trans-Atlantic and intra-European charters are already feeling three very real pressures.

### The three things that changed overnight

**1. Higher uplift costs, even on short sectors.**
SAF currently trades at two to four times the price of conventional Jet A-1. The 2% blend requirement is small, but it is priced into every litre pumped at EU airports — whether your client asked for green fuel or not. On a Gulfstream G650 topping off at LFPB (Paris Le Bourget) before a westbound leg, that translates to roughly €1,400–€2,200 in additional fuel cost per trip, before any premium booking.

**2. The tankering loophole is closed.**
Historically, operators would skip Europe's tax-heavy fuel by filling up at the origin — a practice known as tankering. ReFuelEU kills this: any aircraft departing an EU airport must have uplifted at least 90% of its required fuel at that airport. Ferry-fuelling from Dubai or Istanbul to avoid European prices is no longer an option for the return leg.

**3. Documentation burden on the flight crew.**
Every flight must carry a SAF declaration in the trip file. Missing paperwork can trigger ramp checks, delayed clearances, and in some jurisdictions, fines against the operator of record.

### A real example from our desk

Last month our ops team supported a VVIP charter routing **DXB → LFPB → KJFK**. The westbound leg required 8,100 kg of fuel at Le Bourget. Under ReFuelEU, 162 kg of that had to be SAF. Our fuel partner in Paris had sufficient supply, but the SAF certificate wasn't auto-generated in their system — it required a manual request with 48 hours lead time.

Without advance coordination, the crew would have uplifted standard Jet A-1, departed without documentation, and been flagged on return. We caught it 72 hours ahead, locked in the paperwork, and the flight departed on schedule.

### What operators should be doing now

> The operators getting hit by surprise costs and delays all have one thing in common: they are still treating SAF as someone else's problem.

A few practical steps we recommend to every client flying into Europe this year:

- **Audit your European handler relationships.** Not every FBO has SAF on hand, and those that do may require advance notice for small uplifts.
- **Budget the premium into charter quotes.** A 2% blend sounds trivial, but at €4 per litre over baseline, it adds up across a busy season.
- **File SAF certificates with your trip documents.** Treat them like a permit — if it's not in the folder, it didn't happen.
- **Consider block SAF purchase agreements** if you operate more than 50 European legs per year. Several suppliers now offer locked-in pricing for fleet operators.

### Looking ahead to 2030

The mandate climbs to **6% in 2030** and **20% in 2035**. SAF production capacity is expanding — feedstock deals announced by Neste, World Energy, and TotalEnergies in Q4 2024 will roughly double European supply by 2028 — but the supply-demand gap will remain tight through the decade.

For business aviation specifically, that means two things: fuel costs will keep climbing, and operators with established supplier relationships will ride the curve more gracefully than those buying spot.

### How Flyger is helping

Our trip-support desk now includes **automated SAF compliance checks** on every European routing. Before a trip is cleared, we verify:

1. SAF availability at the departure FBO
2. Pre-approved supplier contracts your operator holds (if any)
3. Documentation templates for the flight folder
4. Budget impact flagged to the charter manager before quote-out

It's a small operational shift, but it's saving our clients an average of **2–4 hours per trip** in last-minute coordination, and eliminating the compliance risk entirely.

---

**Have a European trip on the books?** Reach our 24/7 operations desk and we will run a SAF audit on your routing before you file. No cost, no commitment — just the peace of mind that your crew lands without surprises.`,
    createdAt: new Date('2025-04-10'),
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. SAMPLE INQUIRIES — 5 realistic aviation industry leads
// ─────────────────────────────────────────────────────────────────────────────

const ONE_DAY = 24 * 60 * 60 * 1000;

const sampleInquiries = [
  {
    name: 'Charles Mendez',
    email: 'c.mendez@meridianaviation.aero',
    phone: '+1 201 555 0142',
    serviceArea: 'trip-planning',
    message:
      'Need DXB→TEB routing support for a Gulfstream G650 Apr 22–24. 8 pax including principal. Require fuel uplift planning, slot coordination, and ground handling at both ends.',
    status: 'New',
    createdAt: new Date(Date.now() - 1 * ONE_DAY),
  },
  {
    name: 'Sarah Chen',
    email: 'sarah.chen@pacificwings.com',
    phone: '+852 5555 1234',
    serviceArea: 'fuel',
    message:
      'Looking for SAF supply at LFPB for our European charter operations starting May. Approximately 12 trips/month, mostly G280 and Challenger 350. Need quote and contract terms.',
    status: 'In Progress',
    createdAt: new Date(Date.now() - 4 * ONE_DAY),
  },
  {
    name: 'Hassan Al-Maktoum',
    email: 'h.almaktoum@drwing.gov.ae',
    phone: '+971 4 555 8800',
    serviceArea: 'concierge',
    message:
      'State visit logistics for incoming delegation, May 8–12. Will require full VIP handling, security coordination, and overflight permits across UAE-EU corridor. Please contact via secure channel.',
    status: 'New',
    createdAt: new Date(Date.now() - 2 * ONE_DAY),
  },
  {
    name: 'Tom Reichmann',
    email: 'tom.r@bombardier-demo.com',
    phone: '+1 514 555 7790',
    serviceArea: 'ground-handling',
    message:
      'Static display at Dubai Airshow 2026 for our Global 8000 prototype. Need ground handling, hangar parking, and crew accommodation for 8 days. First time operating into DWC.',
    status: 'In Progress',
    createdAt: new Date(Date.now() - 9 * ONE_DAY),
  },
  {
    name: 'Olivia Park',
    email: 'opark@kald.kr',
    phone: '+82 2 5555 9911',
    serviceArea: 'crm',
    message:
      'Interested in a Flyger CRM demo for our 30-aircraft fleet operations team. We currently use a mix of Excel and email for trip coordination and want to evaluate a unified platform.',
    status: 'Closed',
    createdAt: new Date(Date.now() - 21 * ONE_DAY),
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. SEED FUNCTION
// ─────────────────────────────────────────────────────────────────────────────

export default async function seed() {
  // Blog posts use a TEXT primary key (slug) — duplicates throw a UNIQUE
  // constraint error, which we silently catch so re-runs are safe.
  let blogsAdded = 0;
  for (const post of blogPosts) {
    try {
      await db.insert(BlogPosts).values(post);
      blogsAdded++;
    } catch {
      // Already exists — skip
    }
  }

  // Inquiries use auto-increment numeric IDs, so duplicate detection by id
  // doesn't apply. Skip the insert entirely if the table already has rows
  // (avoids piling up duplicate sample inquiries on every restart).
  const existingInquiries = await db.select().from(Inquiries);
  let inquiriesAdded = 0;
  if (existingInquiries.length === 0) {
    for (const inq of sampleInquiries) {
      await db.insert(Inquiries).values(inq);
      inquiriesAdded++;
    }
  }

  console.log(
    `[seed] BlogPosts: +${blogsAdded} new (${blogPosts.length} total defined). ` +
      `Inquiries: +${inquiriesAdded} new (${existingInquiries.length} existing).`
  );
}
