/**
 * Curated, license-free architectural/construction photography (Unsplash CDN, direct links —
 * no API key required). Used across hero, design cards, project cards, and resource thumbnails.
 * Swap for proprietary project photography (via a DAM/CDN + NgOptimizedImage) in production.
 */
export const STOCK_IMAGES = {
  heroHouse: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
  modernVilla: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  luxuryVilla: 'https://images.unsplash.com/photo-1613977257363-707ba9348227',
  poolVilla: 'https://images.unsplash.com/photo-1613977257363-707ba9348227',
  duplexHome: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
  farmhouse: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
  minimalistHome: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
  contemporaryHome: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde',
  interiorLiving: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
  blueprintPlans: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
  cementMaterials: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
  constructionSite: 'https://images.unsplash.com/photo-1541976590-713941681591',
  vastuInterior: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
} as const;

/** Appends Unsplash sizing/format/compression params for responsive, optimized delivery. */
export function optimizedImage(url: string, width: number, height: number): string {
  return `${url}?w=${width}&h=${height}&q=75&auto=format&fit=crop`;
}

/** Deterministic real portrait photos for team/review avatars (no API key required). */
export function avatarImage(seed: number, size = 96): string {
  return `https://i.pravatar.cc/${size}?img=${seed}`;
}

