import { db, BlogPosts } from 'astro:db';

export async function GET() {
  try {
    const samples = [
      {
        id: 'future-of-sustainable-aviation',
        title: 'The Future of Sustainable Aviation: Navigating SAF and Beyond',
        excerpt: 'As the aviation industry faces mounting pressure to decarbonize, Sustainable Aviation Fuel (SAF) has emerged as the most viable near-term solution. Here is what operators need to know.',
        featuredImage: '/images/airport_jets.webp',
        author: 'Flyger Insights',
        category: 'Aviation Insights',
        featured: true,
        body: `### The Urgency for Decarbonization
The global aviation industry contributes approximately 2.5% of all CO2 emissions. While that number seems small, the high-altitude release compounds its atmospheric impact.

### Enter Sustainable Aviation Fuel (SAF)
Unlike traditional Jet A-1, SAF is derived from renewable sources such as cooking oil, solid waste, and forestry residues. Its lifecycle carbon footprint can be up to 80% lower.

**Key Challenges:**
- Production scalability
- Infrastructure adaptation
- Price premiums (currently 2x to 4x traditional fuel)

As regulatory mandates like *ReFuelEU* come into effect, operators must proactively secure SAF supply chains to remain compliant and competitive.`,
        createdAt: new Date('2025-10-15T10:00:00Z')
      },
      {
        id: 'understanding-flight-permits',
        title: 'Demystifying International Flight Permits',
        excerpt: 'Securing overflight and landing clearances in complex geopolitical regions requires precision. Learn how global trip support teams navigate the bureaucratic maze.',
        featuredImage: '/images/feature_permit_map.webp',
        author: 'Operations Team',
        category: 'Aviation Insights',
        featured: false,
        body: `Navigating the airspace of sovereign nations requires meticulous planning. Missing a single clearance can result in severe fines or route deviations lasting hours.

### Overflight vs. Landing Permits
An **Overflight Permit** is required to simply cross a nation's airspace. A **Landing Permit** involves deeper scrutiny, including customs, immigration, and slot coordination.

*Flyger Aviation* maintains direct relationships with Civil Aviation Authorities (CAAs) globally to expedite this process, ensuring uninterrupted operational flow even during short-notice VIP charters.`,
        createdAt: new Date('2025-11-01T14:30:00Z')
      },
      {
        id: 'flyger-crm-launch',
        title: 'Announcing Flyger CRM: The New Standard in Dispatch',
        excerpt: 'We are thrilled to unveil our unified dispatch tracking portal, designed specifically for VIP and cargo operations.',
        featuredImage: '/images/hero_jets.webp',
        author: 'Flyger Core Team',
        category: 'Company Updates',
        featured: false,
        body: `After months of rigorous development alongside industry veterans, Flyger Aviation is officially launching a unified digital CRM and dispatch system.

### Why We Built It
We recognized a massive latency gap in traditional ground handling communications. Operators were forced to rely on fragmented email chains and WhatsApp groups.

Our new portal offers:
- Real-time fuel uplift tracking
- Automated permit status updates
- Concierge arrangement confirmation

Welcome to the future of mission support.`,
        createdAt: new Date('2026-01-10T09:00:00Z')
      }
    ];

    for (const post of samples) {
      try {
        await db.insert(BlogPosts).values(post);
      } catch (e) {
        // Ignore if already exists
      }
    }

    return new Response('Seeded successfully! Check your admin dashboard.', { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
