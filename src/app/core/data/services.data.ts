import { GeoFaqBlock } from './faq.data';

export interface ConstructionService {
  slug: string;
  navLabel: string;
  eyebrow: string;
  h1: string;
  subhead: string;
  intro: string;
  features: { title: string; desc: string }[];
  faqs: GeoFaqBlock[];
  relatedServiceSlugs: string[];
}

/**
 * Commercial-intent service landing pages — each targets a specific high-intent
 * keyword cluster (e.g. "turnkey construction company", "villa construction company")
 * distinct from the cost-calculator/city pages which target research-intent keywords.
 */
export const SERVICES: ConstructionService[] = [
  {
    slug: 'home-construction',
    navLabel: 'Home Construction',
    eyebrow: 'Home Construction Company',
    h1: 'Home Construction Company in Delhi NCR',
    subhead: 'End-to-end home construction — design, approvals, materials, and a verified builder — with transparent, milestone-based pricing.',
    intro: 'BuildX connects you with verified home construction contractors across Delhi NCR, backed by upfront cost estimates, a 500+ verified design library, and a written 10-year structural warranty. No hidden costs, no lump-sum advances.',
    features: [
      { title: 'Verified Contractors', desc: 'Every builder on BuildX is independently audited for warranty compliance and quality-check documentation before being listed.' },
      { title: 'Transparent Pricing', desc: 'Get an itemized, package-wise cost estimate before you sign — no vague lump-sum quotes.' },
      { title: 'Milestone-Based Payments', desc: 'Pay only against completed, inspected stages: booking, foundation, structure, and finishing.' },
      { title: 'Design + Build Under One Roof', desc: 'Pick a verified design or go fully custom — architecture, structural design, and approvals are handled end to end.' },
    ],
    faqs: [
      {
        question: 'What does a home construction company in Delhi NCR typically charge?',
        answer: 'Home construction companies in Delhi NCR typically charge between ₹1,400 and ₹2,900 per sqft depending on package tier (Basic, Standard, Premium) and city — Gurgaon and Delhi run slightly higher than Noida, Faridabad, and Ghaziabad.',
        example: 'A 2,000 sqft home built to Standard-package specification costs approximately ₹35–41 lakh across most Delhi NCR locations.',
        summary: 'Use our free cost calculator for a package-wise, city-specific estimate before hiring a contractor.',
      },
      {
        question: 'How do I choose a reliable home construction company near me?',
        answer: 'Look for a written structural warranty (minimum 10 years), documented quality-check processes (400+ checkpoints is the current industry benchmark), milestone-based payment terms, and verifiable completed projects in your city.',
        summary: 'BuildX-verified builders meet all four criteria — check the Verified badge on any contractor profile before signing.',
      },
    ],
    relatedServiceSlugs: ['turnkey-construction', 'house-construction', 'residential-construction'],
  },
  {
    slug: 'house-construction',
    navLabel: 'House Construction',
    eyebrow: 'House Construction Company',
    h1: 'House Construction Company for Independent Homes & Builder Floors',
    subhead: 'Build your independent house or builder floor with verified contractors, instant cost estimates, and a legal buildable-area (FAR) check.',
    intro: 'From single-storey independent houses to multi-floor builder-floor projects, BuildX gives you a data-backed cost estimate, a FAR/ground-coverage check, and a shortlist of verified house construction contractors in your city.',
    features: [
      { title: 'FAR & Ground Coverage Check', desc: 'Know your legally buildable area before you finalize a design — avoid approval rejections.' },
      { title: 'Small Plot & Builder Floor Experts', desc: 'Specialized packages for compact plots and multi-floor builder-floor construction.' },
      { title: 'Sanctioned Drawings & Approvals', desc: 'Architectural drawings, structural design, and building-plan sanction handled end to end.' },
      { title: '400+ Quality Checkpoints', desc: 'Independent site audits at every construction stage — foundation, structure, and finishing.' },
    ],
    faqs: [
      {
        question: 'Can I build a house on a small or irregular plot?',
        answer: 'Yes — BuildX-verified house construction contractors specialize in small-plot and irregular-plot construction, and our FAR Calculator accounts for plot size and road width when estimating your buildable area.',
        summary: 'Use the FAR Calculator first to confirm your buildable area, then get a package-wise cost estimate for your exact plot.',
      },
    ],
    relatedServiceSlugs: ['home-construction', 'residential-construction', 'home-design-services'],
  },
  {
    slug: 'turnkey-construction',
    navLabel: 'Turnkey Construction',
    eyebrow: 'Turnkey Construction Company',
    h1: 'Turnkey Construction Company — Design to Handover, One Contract',
    subhead: 'A single fixed-price contract covering design, materials, labor, and finishing — you get the keys, we handle everything else.',
    intro: 'Turnkey construction means one contractor, one contract, and one price for your entire home — from architectural design through move-in-ready handover. BuildX turnkey packages include structure, flooring, electrical, plumbing, and finishing, with brand-name materials specified upfront.',
    features: [
      { title: 'Single Fixed-Price Contract', desc: 'No separate contracts for architect, contractor, and material supplier — one turnkey agreement covers it all.' },
      { title: 'Branded Materials Included', desc: 'Cement, fittings, and finishes from named, trusted brands are specified in your package — no surprises on site.' },
      { title: '10–14 Month Timelines', desc: 'A typical turnkey home is delivered in 10–14 months with a milestone schedule shared upfront.' },
      { title: 'Move-In Ready Handover', desc: 'Final inspection and snag-list resolution before handover — walk into a finished home, not a construction site.' },
    ],
    faqs: [
      {
        question: 'What is turnkey construction and how is it different from contractor-based construction?',
        answer: 'Turnkey construction bundles design, materials, labor, and finishing into a single fixed-price contract with one company. Contractor-based construction typically requires you to separately hire an architect, a contractor, and manage material procurement yourself.',
        summary: 'Turnkey construction reduces coordination overhead and price uncertainty — ideal for homeowners who want one point of accountability.',
      },
      {
        question: 'How long does turnkey home construction take?',
        answer: 'A typical 1,500–2,500 sqft turnkey home takes 10–14 months from foundation to handover, depending on floor count, package tier, and approval timelines.',
        summary: 'Ask for a milestone-wise schedule before signing — it should map directly to your payment schedule.',
      },
    ],
    relatedServiceSlugs: ['home-construction', 'villa-construction', 'residential-construction'],
  },
  {
    slug: 'villa-construction',
    navLabel: 'Villa Construction',
    eyebrow: 'Villa Construction Company',
    h1: 'Villa Construction Company — Luxury Homes Built to Spec',
    subhead: 'Custom villa design, premium material packages, and dedicated project management for multi-floor luxury homes.',
    intro: 'BuildX villa construction packages are built for larger plots and premium specifications — home theatres, private pools, courtyards, and multi-floor layouts — with the same transparent, milestone-based pricing as our standard packages.',
    features: [
      { title: 'Premium Package Tier', desc: 'Italian marble, full modular interiors, and branded fittings throughout — priced at ₹2,150–2,900+ per sqft depending on city.' },
      { title: 'Custom Villa Design', desc: 'Work with in-house architects for pools, courtyards, home theatres, and multi-floor layouts.' },
      { title: 'Dedicated Project Manager', desc: 'Villa projects get a single point of contact for the full 12–18 month build cycle.' },
      { title: 'Landscape & Driveway Planning', desc: 'Site planning for landscaped gardens, driveways, and boundary walls included in villa packages.' },
    ],
    faqs: [
      {
        question: 'How much does villa construction cost in Delhi NCR?',
        answer: 'Villa construction with Premium-tier specification costs between ₹2,150 and ₹2,900+ per sqft in Delhi NCR — a 4,000 sqft luxury villa typically costs ₹86 lakh to ₹1.16 crore excluding land.',
        example: 'A 4,200 sqft, 3-floor luxury villa in Delhi costs approximately ₹94,50,000 at Premium-package specification.',
        summary: 'Villa costs scale with plot size, floor count, and finish grade — use our calculator to model your exact specification.',
      },
    ],
    relatedServiceSlugs: ['turnkey-construction', 'home-design-services', 'residential-construction'],
  },
  {
    slug: 'residential-construction',
    navLabel: 'Residential Construction',
    eyebrow: 'Residential Construction Company',
    h1: 'Residential Construction Company for Homes, Floors & Small Apartments',
    subhead: 'Verified residential construction contractors for independent homes, builder floors, and low-rise residential projects.',
    intro: 'Whether you\'re building a single-family home, a set of builder floors for rental income, or a small residential complex, BuildX matches you with verified residential construction contractors and gives you a transparent, city-specific cost estimate upfront.',
    features: [
      { title: 'Residential Specialists', desc: 'Contractors verified specifically for residential — not commercial or industrial — construction.' },
      { title: 'Rental & Investment Packages', desc: 'Basic and Standard tiers optimized for builder-floor rental yield.' },
      { title: 'Compliance & Approvals', desc: 'Residential building-plan sanction and occupancy certificate support included.' },
      { title: 'City-Specific Cost Data', desc: 'Live material and labor rates across 50+ Indian cities, updated monthly.' },
    ],
    faqs: [
      {
        question: 'What is the difference between residential and turnkey construction services?',
        answer: 'Residential construction refers to the category of building (homes, floors, low-rise apartments) as opposed to commercial or industrial projects. Turnkey is a contract model (single fixed-price, design-to-handover) that can apply within residential construction.',
        summary: 'Most BuildX residential projects are also offered on a turnkey basis for simplicity and price certainty.',
      },
    ],
    relatedServiceSlugs: ['home-construction', 'house-construction', 'turnkey-construction'],
  },
  {
    slug: 'home-design-services',
    navLabel: 'Home Design Services',
    eyebrow: 'Home Design Services',
    h1: 'Home Design Services — Architecture, Structural & Interior Planning',
    subhead: 'Architectural drawings, structural design, and interior planning from verified designers — with a live cost estimate attached to every design.',
    intro: 'BuildX\'s design library includes 500+ verified house designs across Modern, Villa, Duplex, Farmhouse, Minimalist, and Contemporary styles — each with an instant cost estimate. Prefer something custom? Our architects design to your plot, budget, and Vastu requirements.',
    features: [
      { title: '500+ Verified Designs', desc: 'Browse by BHK, budget, plot facing, and architectural style — every design includes a cost estimate.' },
      { title: 'Custom Architecture', desc: 'Work directly with architects for a fully custom floor plan matched to your plot dimensions.' },
      { title: 'Structural Design & Drawings', desc: 'Structural engineering and sanctioned drawings prepared for municipal approval submission.' },
      { title: 'Vastu-Compliant Options', desc: 'Filter designs by facing and layout for Vastu-compliant home plans.' },
    ],
    faqs: [
      {
        question: 'Do house design services include a cost estimate?',
        answer: 'Yes — every design in the BuildX design library shows a starting construction cost based on its built-up area and standard-package pricing, so you can shop by budget and style at the same time.',
        summary: 'Open any design in the library to see its BHK, built-up area, and starting cost before contacting an architect.',
      },
    ],
    relatedServiceSlugs: ['house-construction', 'villa-construction', 'home-construction'],
  },
];

export function getServiceBySlug(slug: string): ConstructionService | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
