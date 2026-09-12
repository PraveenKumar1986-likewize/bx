export interface CostPackage {
  tier: 'Basic' | 'Standard' | 'Premium';
  ratePerSqft: number;
  description: string;
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  updatedAt: string; // ISO date string, shown as "Last updated"
  packages: CostPackage[];
  materialPrices: { material: string; unit: string; price: number }[];
  relatedCitySlugs: string[];
  projectCount: number;
}

export const COST_PACKAGES_DEFAULT: CostPackage[] = [
  { tier: 'Basic', ratePerSqft: 1500, description: 'Standard cement, basic fittings, single-brand tiles' },
  { tier: 'Standard', ratePerSqft: 1850, description: 'Branded fittings, vitrified tiles, modular kitchen shell' },
  { tier: 'Premium', ratePerSqft: 2250, description: 'Premium fittings, italian marble options, full modular interiors' },
];

export const CITIES: CityData[] = [
  {
    slug: 'delhi',
    name: 'Delhi',
    state: 'Delhi',
    updatedAt: '2026-01-01',
    packages: COST_PACKAGES_DEFAULT,
    materialPrices: [
      { material: 'Cement (OPC 53 Grade)', unit: 'per bag (50kg)', price: 410 },
      { material: 'Steel (TMT Bar Fe-500D)', unit: 'per kg', price: 68 },
      { material: 'Red Bricks', unit: 'per 1000 units', price: 7200 },
      { material: 'Sand (River)', unit: 'per cubic ft', price: 55 },
    ],
    relatedCitySlugs: ['gurgaon', 'noida', 'faridabad'],
    projectCount: 42,
  },
  {
    slug: 'gurgaon',
    name: 'Gurgaon',
    state: 'Haryana',
    updatedAt: '2026-01-01',
    packages: [
      { tier: 'Basic', ratePerSqft: 1600, description: 'Standard cement, basic fittings, single-brand tiles' },
      { tier: 'Standard', ratePerSqft: 1950, description: 'Branded fittings, vitrified tiles, modular kitchen shell' },
      { tier: 'Premium', ratePerSqft: 2400, description: 'Premium fittings, italian marble options, full modular interiors' },
    ],
    materialPrices: [
      { material: 'Cement (OPC 53 Grade)', unit: 'per bag (50kg)', price: 420 },
      { material: 'Steel (TMT Bar Fe-500D)', unit: 'per kg', price: 70 },
      { material: 'Red Bricks', unit: 'per 1000 units', price: 7500 },
      { material: 'Sand (River)', unit: 'per cubic ft', price: 60 },
    ],
    relatedCitySlugs: ['delhi', 'noida', 'faridabad'],
    projectCount: 35,
  },
  {
    slug: 'noida',
    name: 'Noida',
    state: 'Uttar Pradesh',
    updatedAt: '2026-01-01',
    packages: [
      { tier: 'Basic', ratePerSqft: 1450, description: 'Standard cement, basic fittings, single-brand tiles' },
      { tier: 'Standard', ratePerSqft: 1800, description: 'Branded fittings, vitrified tiles, modular kitchen shell' },
      { tier: 'Premium', ratePerSqft: 2200, description: 'Premium fittings, italian marble options, full modular interiors' },
    ],
    materialPrices: [
      { material: 'Cement (OPC 53 Grade)', unit: 'per bag (50kg)', price: 400 },
      { material: 'Steel (TMT Bar Fe-500D)', unit: 'per kg', price: 66 },
      { material: 'Red Bricks', unit: 'per 1000 units', price: 7000 },
      { material: 'Sand (River)', unit: 'per cubic ft', price: 52 },
    ],
    relatedCitySlugs: ['delhi', 'gurgaon', 'faridabad'],
    projectCount: 28,
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    updatedAt: '2026-01-01',
    packages: [
      { tier: 'Basic', ratePerSqft: 1900, description: 'Standard cement, basic fittings, single-brand tiles' },
      { tier: 'Standard', ratePerSqft: 2300, description: 'Branded fittings, vitrified tiles, modular kitchen shell' },
      { tier: 'Premium', ratePerSqft: 2900, description: 'Premium fittings, italian marble options, full modular interiors' },
    ],
    materialPrices: [
      { material: 'Cement (OPC 53 Grade)', unit: 'per bag (50kg)', price: 440 },
      { material: 'Steel (TMT Bar Fe-500D)', unit: 'per kg', price: 72 },
      { material: 'Red Bricks', unit: 'per 1000 units', price: 8200 },
      { material: 'Sand (River)', unit: 'per cubic ft', price: 75 },
    ],
    relatedCitySlugs: ['bangalore', 'delhi', 'gurgaon'],
    projectCount: 51,
  },
  {
    slug: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    updatedAt: '2026-01-01',
    packages: [
      { tier: 'Basic', ratePerSqft: 1700, description: 'Standard cement, basic fittings, single-brand tiles' },
      { tier: 'Standard', ratePerSqft: 2050, description: 'Branded fittings, vitrified tiles, modular kitchen shell' },
      { tier: 'Premium', ratePerSqft: 2550, description: 'Premium fittings, italian marble options, full modular interiors' },
    ],
    materialPrices: [
      { material: 'Cement (OPC 53 Grade)', unit: 'per bag (50kg)', price: 415 },
      { material: 'Steel (TMT Bar Fe-500D)', unit: 'per kg', price: 69 },
      { material: 'Red Bricks', unit: 'per 1000 units', price: 7300 },
      { material: 'Sand (River)', unit: 'per cubic ft', price: 58 },
    ],
    relatedCitySlugs: ['mumbai', 'delhi', 'noida'],
    projectCount: 39,
  },
  {
    slug: 'faridabad',
    name: 'Faridabad',
    state: 'Haryana',
    updatedAt: '2026-01-01',
    packages: [
      { tier: 'Basic', ratePerSqft: 1400, description: 'Standard cement, basic fittings, single-brand tiles' },
      { tier: 'Standard', ratePerSqft: 1750, description: 'Branded fittings, vitrified tiles, modular kitchen shell' },
      { tier: 'Premium', ratePerSqft: 2150, description: 'Premium fittings, italian marble options, full modular interiors' },
    ],
    materialPrices: [
      { material: 'Cement (OPC 53 Grade)', unit: 'per bag (50kg)', price: 405 },
      { material: 'Steel (TMT Bar Fe-500D)', unit: 'per kg', price: 67 },
      { material: 'Red Bricks', unit: 'per 1000 units', price: 6900 },
      { material: 'Sand (River)', unit: 'per cubic ft', price: 50 },
    ],
    relatedCitySlugs: ['delhi', 'gurgaon', 'noida'],
    projectCount: 19,
  },
  {
    slug: 'greater-noida',
    name: 'Greater Noida',
    state: 'Uttar Pradesh',
    updatedAt: '2026-01-01',
    packages: [
      { tier: 'Basic', ratePerSqft: 1420, description: 'Standard cement, basic fittings, single-brand tiles' },
      { tier: 'Standard', ratePerSqft: 1770, description: 'Branded fittings, vitrified tiles, modular kitchen shell' },
      { tier: 'Premium', ratePerSqft: 2180, description: 'Premium fittings, italian marble options, full modular interiors' },
    ],
    materialPrices: [
      { material: 'Cement (OPC 53 Grade)', unit: 'per bag (50kg)', price: 398 },
      { material: 'Steel (TMT Bar Fe-500D)', unit: 'per kg', price: 65 },
      { material: 'Red Bricks', unit: 'per 1000 units', price: 6800 },
      { material: 'Sand (River)', unit: 'per cubic ft', price: 51 },
    ],
    relatedCitySlugs: ['noida', 'noida-extension', 'ghaziabad'],
    projectCount: 24,
  },
  {
    slug: 'noida-extension',
    name: 'Noida Extension',
    state: 'Uttar Pradesh',
    updatedAt: '2026-01-01',
    packages: [
      { tier: 'Basic', ratePerSqft: 1400, description: 'Standard cement, basic fittings, single-brand tiles' },
      { tier: 'Standard', ratePerSqft: 1740, description: 'Branded fittings, vitrified tiles, modular kitchen shell' },
      { tier: 'Premium', ratePerSqft: 2140, description: 'Premium fittings, italian marble options, full modular interiors' },
    ],
    materialPrices: [
      { material: 'Cement (OPC 53 Grade)', unit: 'per bag (50kg)', price: 396 },
      { material: 'Steel (TMT Bar Fe-500D)', unit: 'per kg', price: 65 },
      { material: 'Red Bricks', unit: 'per 1000 units', price: 6750 },
      { material: 'Sand (River)', unit: 'per cubic ft', price: 50 },
    ],
    relatedCitySlugs: ['greater-noida', 'noida', 'ghaziabad'],
    projectCount: 16,
  },
  {
    slug: 'ghaziabad',
    name: 'Ghaziabad',
    state: 'Uttar Pradesh',
    updatedAt: '2026-01-01',
    packages: [
      { tier: 'Basic', ratePerSqft: 1380, description: 'Standard cement, basic fittings, single-brand tiles' },
      { tier: 'Standard', ratePerSqft: 1720, description: 'Branded fittings, vitrified tiles, modular kitchen shell' },
      { tier: 'Premium', ratePerSqft: 2100, description: 'Premium fittings, italian marble options, full modular interiors' },
    ],
    materialPrices: [
      { material: 'Cement (OPC 53 Grade)', unit: 'per bag (50kg)', price: 395 },
      { material: 'Steel (TMT Bar Fe-500D)', unit: 'per kg', price: 64 },
      { material: 'Red Bricks', unit: 'per 1000 units', price: 6700 },
      { material: 'Sand (River)', unit: 'per cubic ft', price: 49 },
    ],
    relatedCitySlugs: ['noida', 'greater-noida', 'delhi'],
    projectCount: 21,
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}
