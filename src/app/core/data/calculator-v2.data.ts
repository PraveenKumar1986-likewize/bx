export interface CalcV2Tier {
  tier: 'Standard' | 'Premium' | 'Luxury';
  ratePerSqft: number;
  features: string[];
  recommended?: boolean;
}

export const CALC_V2_TIERS: CalcV2Tier[] = [
  { tier: 'Standard', ratePerSqft: 1750, features: ['Standard Quality', 'Basic Finishes', 'Value for Money'] },
  { tier: 'Premium', ratePerSqft: 2030, features: ['Better Quality', 'Premium Finishes', 'Best Balance'], recommended: true },
  { tier: 'Luxury', ratePerSqft: 2550, features: ['Top Quality', 'Luxury Finishes', 'Best in Class'] },
];

export interface CalcV2BreakdownRow {
  label: string;
  percent: number;
  color: string;
}

/** Fixed cost-phase proportions applied to the computed total (matches industry-standard phase split). */
export const CALC_V2_BREAKDOWN: CalcV2BreakdownRow[] = [
  { label: 'Structure', percent: 39.9, color: '#2F6FED' },
  { label: 'Finishes', percent: 25.2, color: '#F5A623' },
  { label: 'Electrical & Plumbing', percent: 14.1, color: '#9B51E0' },
  { label: 'Doors, Windows', percent: 8.7, color: '#F2994A' },
  { label: 'External Works', percent: 6.5, color: '#27AE60' },
  { label: 'Others', percent: 5.6, color: '#9AA0A6' },
];

export const CALC_V2_CONSTRUCTION_TYPES = ['Residential', 'Commercial', 'Industrial'] as const;

export const CALC_V2_BUILDING_TYPES = [
  'Independent House',
  'Duplex',
  'Villa',
  'Builder Floor',
  'Apartment',
];

export const CALC_V2_FLOOR_OPTIONS = ['G', 'G+1', 'G+2', 'G+3+'] as const;

export const CALC_V2_FEATURES = [
  { icon: '🛡️', title: 'AI-Powered Accuracy', desc: 'Real-time price intelligence using location, market trends & material fluctuations.' },
  { icon: '🧊', title: 'Interactive 3D Preview', desc: 'See your building type come to life with an interactive 3D visualization.' },
  { icon: '📋', title: 'Detailed Cost Breakdown', desc: 'Transparent item-wise breakup with material, labor, and extra costs.' },
  { icon: '🔀', title: 'Smart Comparisons', desc: 'Compare by quality, materials, finishes & construction types.' },
  { icon: '⬆️', title: 'Save, Share & Export', desc: 'Save estimates, share with experts, or export to PDF/Excel.' },
  { icon: '✉️', title: 'Expert Consultation', desc: 'Connect with verified professionals for guidance and better quotes.' },
];

export const CALC_V2_WHY_BETTER = [
  { icon: '🔍', title: 'More Accurate', desc: 'AI + real market data for high accuracy.' },
  { icon: '👁️', title: 'More Visual', desc: 'Interactive 3D & modern UI for better clarity.' },
  { icon: '🏠', title: 'More Transparent', desc: 'Detailed breakup with no hidden costs.' },
  { icon: '👤', title: 'More Personalized', desc: 'Tailored estimates as per your needs.' },
  { icon: '🛡️', title: 'More Useful', desc: 'Save, compare, connect & build with confidence.' },
];

export const CALC_V2_TRUST_BADGES = [
  { icon: '💲', title: 'Real-time Material Prices', desc: 'Always up-to-date pricing' },
  { icon: '📍', title: 'Location-Based Estimation', desc: 'Hyperlocal cost accuracy' },
  { icon: '🛠️', title: 'Customizable', desc: 'Tailor every detail' },
  { icon: '🔒', title: 'Secure & Private', desc: 'Your data is 100% safe' },
  { icon: '📱', title: 'Mobile Friendly', desc: 'Works on all devices' },
];

export const CALC_V2_PRICE_TREND_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
