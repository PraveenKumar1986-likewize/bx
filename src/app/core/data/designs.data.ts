import { optimizedImage, STOCK_IMAGES } from '../utils/image.util';

export interface HouseDesign {
  id: string;
  name: string;
  style: 'Modern' | 'Farmhouse' | 'Duplex' | 'Villa' | 'Minimalist' | 'Contemporary';
  bhk: number;
  sqft: number;
  floors: number;
  facing: 'North' | 'South' | 'East' | 'West';
  startingCost: number;
  imageAlt: string;
  description: string;
}

export const HOUSE_DESIGNS: HouseDesign[] = [
  { id: 'modern-3bhk-duplex-1800', name: 'Aurum — Modern 3BHK Duplex', style: 'Duplex', bhk: 3, sqft: 1800, floors: 2, facing: 'East', startingCost: 3330000, imageAlt: 'Modern duplex house with glass facade and double-height living room', description: 'A light-filled duplex with an open-plan living area, cantilevered balcony, and a minimal material palette of exposed concrete and timber.' },
  { id: 'contemporary-villa-4bhk-3200', name: 'Meridian — Contemporary Villa', style: 'Villa', bhk: 4, sqft: 3200, floors: 2, facing: 'North', startingCost: 7200000, imageAlt: 'Contemporary villa with private pool and landscaped garden', description: 'A private villa featuring a courtyard pool, floor-to-ceiling glazing, and a dedicated home office wing.' },
  { id: 'farmhouse-2bhk-1500', name: 'Birchwood — Farmhouse Retreat', style: 'Farmhouse', bhk: 2, sqft: 1500, floors: 1, facing: 'South', startingCost: 2250000, imageAlt: 'Single-storey farmhouse with sloped roof and wraparound porch', description: 'A single-level farmhouse with a wraparound veranda, exposed timber trusses, and a stone-clad entrance.' },
  { id: 'minimalist-2bhk-1200', name: 'Nova — Minimalist Starter Home', style: 'Minimalist', bhk: 2, sqft: 1200, floors: 1, facing: 'West', startingCost: 1800000, imageAlt: 'Compact minimalist home with clean white facade', description: 'A compact, budget-efficient home optimized for narrow plots, with a clean white facade and skylight-lit stairwell.' },
  { id: 'modern-4bhk-duplex-2600', name: 'Solace — Modern 4BHK Duplex', style: 'Duplex', bhk: 4, sqft: 2600, floors: 2, facing: 'North', startingCost: 4810000, imageAlt: 'Modern duplex with rooftop terrace and dark cladding', description: 'A duplex with a rooftop entertainment terrace, dark vertical cladding, and an integrated home gym.' },
  { id: 'villa-5bhk-4200', name: 'Ederra — Luxury 5BHK Villa', style: 'Villa', bhk: 5, sqft: 4200, floors: 3, facing: 'East', startingCost: 9450000, imageAlt: 'Luxury three-storey villa with landscaped driveway', description: 'A three-level luxury villa with a home theatre, elevator shaft provision, and a landscaped entry driveway.' },
  { id: 'contemporary-3bhk-2000', name: 'Kaia — Contemporary 3BHK', style: 'Contemporary', bhk: 3, sqft: 2000, floors: 2, facing: 'South', startingCost: 3700000, imageAlt: 'Contemporary two-storey home with large windows', description: 'A two-storey family home with a double-height foyer, large format windows, and a compact courtyard.' },
  { id: 'farmhouse-3bhk-2200', name: 'Willowmere — Farmhouse Villa', style: 'Farmhouse', bhk: 3, sqft: 2200, floors: 1, facing: 'West', startingCost: 3300000, imageAlt: 'Single-storey farmhouse villa with large lawn', description: 'An expansive single-storey farmhouse villa set around a central lawn, with a wraparound covered patio.' },
];

export const HOUSE_STYLES = ['Modern', 'Farmhouse', 'Duplex', 'Villa', 'Minimalist', 'Contemporary'] as const;

/** Maps each design style to a representative real photo. Swap for actual project photography in production. */
const STYLE_IMAGE_MAP: Record<HouseDesign['style'], string> = {
  Modern: STOCK_IMAGES.modernVilla,
  Farmhouse: STOCK_IMAGES.farmhouse,
  Duplex: STOCK_IMAGES.duplexHome,
  Villa: STOCK_IMAGES.luxuryVilla,
  Minimalist: STOCK_IMAGES.minimalistHome,
  Contemporary: STOCK_IMAGES.contemporaryHome,
};

/** Returns an optimized, style-matched photo URL for a given design. */
export function designImage(design: Pick<HouseDesign, 'style'>, width = 640, height = 480): string {
  return optimizedImage(STYLE_IMAGE_MAP[design.style], width, height);
}


