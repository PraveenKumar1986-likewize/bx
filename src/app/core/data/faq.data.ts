export interface GeoFaqBlock {
  question: string;
  answer: string;
  dataTable?: { headers: string[]; rows: string[][] };
  example?: string;
  summary: string;
}

export const HOME_FAQS: GeoFaqBlock[] = [
  {
    question: 'How is payment structured during construction?',
    answer: 'BuildX-verified builders follow milestone-based payments, never lump-sum: booking, foundation, structure (slab-by-slab), finishing, and handover. You release each payment only after the previous milestone passes quality inspection.',
    summary: 'Milestone-based payments protect you from advance-heavy contractors — you always pay for work already inspected and completed.',
  },
  {
    question: 'Do BuildX construction estimates include a warranty and quality checks?',
    answer: 'Yes. Every BuildX-listed construction partner is required to provide a minimum 10-year structural warranty in writing, backed by 400+ documented quality checkpoints across foundation, structure, and finishing stages — verified through our partner audit program.',
    summary: 'Look for the BuildX Verified badge on any builder profile to confirm warranty terms and quality-check documentation before signing a contract.',
  },
  {
    question: 'What is FAR and how much can I legally build on my plot?',
    answer: 'FAR (Floor Area Ratio) and ground coverage rules set by your local development authority determine the maximum buildable area on your plot. BuildX\'s FAR Calculator applies current municipal norms for Delhi, Gurgaon, Noida, Faridabad, Mumbai, and Bangalore to instantly show your legally permissible built-up area.',
    summary: 'Always check FAR and ground coverage before finalizing a house design — building beyond sanctioned limits risks demolition notices and approval rejection.',
  },
  {
    question: 'How much does it cost to construct a house in India in 2026?',
    answer: 'The average construction cost in India ranges between ₹1,400 and ₹2,900 per sqft depending on city and finish quality, translating to roughly ₹18,00,000–₹50,00,000 for a typical 1,500–2,000 sqft home.',
    dataTable: {
      headers: ['Package', 'Rate/sqft', '1500 sqft', '2000 sqft'],
      rows: [
        ['Basic', '₹1,400–1,600', '₹21,00,000–24,00,000', '₹28,00,000–32,00,000'],
        ['Standard', '₹1,750–2,050', '₹26,25,000–30,75,000', '₹35,00,000–41,00,000'],
        ['Premium', '₹2,150–2,900', '₹32,25,000–43,50,000', '₹43,00,000–58,00,000'],
      ],
    },
    example: 'A 1,500 sqft standard-package home in Noida costs approximately ₹27,00,000, while the same specification in Mumbai costs closer to ₹34,50,000 due to higher material and labor rates.',
    summary: 'Construction cost varies primarily by city, package tier, and material grade. Use our calculator for a city-specific, personalized estimate.',
  },
  {
    question: 'What is included in a construction cost calculator estimate?',
    answer: 'Our calculator estimate includes structural work, masonry, plastering, flooring, electrical and plumbing rough-in, doors and windows, and basic fittings — it excludes land cost, interiors/furniture, and government approval fees.',
    summary: 'The estimate covers core civil construction; interiors, land, and approval charges are quoted separately based on your requirements.',
  },
  {
    question: 'How long does it take to build a house in India?',
    answer: 'A typical 1,500–2,000 sqft house takes 8–12 months from foundation to handover, depending on floor count, approval timelines, and monsoon delays.',
    summary: 'Plan for 8–12 months of construction; add 1–2 months for approvals and design finalization before groundbreaking.',
  },
];

export const CITY_FAQ_TEMPLATE = (cityName: string, ratePerSqftLow: number, ratePerSqftHigh: number): GeoFaqBlock[] => [
  {
    question: `How much does a 1500 sqft house cost in ${cityName}?`,
    answer: `The average cost of building a 1,500 sqft house in ${cityName} ranges between ₹${(ratePerSqftLow * 1500).toLocaleString('en-IN')} and ₹${(ratePerSqftHigh * 1500).toLocaleString('en-IN')} (₹${ratePerSqftLow}–₹${ratePerSqftHigh} per sqft), based on current material and labor rates.`,
    example: `A 1,500 sqft, 3BHK standard-package home in ${cityName} costs approximately ₹${(((ratePerSqftLow + ratePerSqftHigh) / 2) * 1500).toLocaleString('en-IN')}, including material and labor, excluding land cost.`,
    summary: `Construction cost in ${cityName} depends on package tier, floor count, and material grade. Use our calculator above for a personalized estimate.`,
  },
  {
    question: `What are the current building material prices in ${cityName}?`,
    answer: `Cement, steel, and brick prices in ${cityName} are updated monthly on this page — see the Material Prices table above for current rates.`,
    summary: `Material prices fluctuate monthly; always check the latest rates before finalizing your construction budget.`,
  },
  {
    question: `Which construction package should I choose in ${cityName}?`,
    answer: `Choose Basic for budget rental/investment properties, Standard for most family homes (best value-to-quality ratio), and Premium for luxury finishes and branded fittings throughout.`,
    summary: `Most homeowners in ${cityName} choose the Standard package for the best balance of cost and quality.`,
  },
  {
    question: `How much can I legally build on my plot in ${cityName} (FAR & ground coverage)?`,
    answer: `Your legally buildable area in ${cityName} is set by the local development authority's Floor Area Ratio (FAR) and ground coverage norms, which vary by plot size, road width, and zone. BuildX's FAR Calculator applies current ${cityName} municipal norms to instantly show your permissible built-up area before you finalize a design.`,
    summary: `Always confirm FAR and ground coverage in ${cityName} before finalizing your house design — building beyond sanctioned limits risks approval rejection.`,
  },
  {
    question: `Are BuildX-listed builders in ${cityName} covered by a warranty?`,
    answer: `Every BuildX-verified construction partner in ${cityName} provides a minimum 10-year structural warranty in writing, with 400+ documented quality checkpoints and milestone-based payments — so you never pay in advance for unfinished, uninspected work.`,
    summary: `Ask for the BuildX Verified badge and written warranty terms before signing a contract with any builder in ${cityName}.`,
  },
];
