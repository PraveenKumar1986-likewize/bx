import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CITIES } from '../../core/data/cities.data';
import {
  CALC_V2_BREAKDOWN,
  CALC_V2_BUILDING_TYPES,
  CALC_V2_CONSTRUCTION_TYPES,
  CALC_V2_FEATURES,
  CALC_V2_FLOOR_OPTIONS,
  CALC_V2_PRICE_TREND_MONTHS,
  CALC_V2_TIERS,
  CALC_V2_TRUST_BADGES,
  CALC_V2_WHY_BETTER,
  CalcV2Tier,
} from '../../core/data/calculator-v2.data';
import { avatarImage, optimizedImage, STOCK_IMAGES } from '../../core/utils/image.util';
import { Seo } from '../../core/services/seo';

type WizardStep = 1 | 2 | 3 | 4;

@Component({
  selector: 'app-cost-calculator-v2',
  imports: [FormsModule, RouterLink],
  templateUrl: './cost-calculator-v2.html',
  styleUrl: './cost-calculator-v2.scss',
})
export class CostCalculatorV2 implements OnInit {
  protected readonly stepLabels = ['Project Details', 'Building Specs', 'Customization', 'Estimate'];
  protected readonly activeStep = signal<WizardStep>(1);

  protected readonly constructionTypes = CALC_V2_CONSTRUCTION_TYPES;
  protected readonly buildingTypes = CALC_V2_BUILDING_TYPES;
  protected readonly floorOptions = CALC_V2_FLOOR_OPTIONS;
  protected readonly features = CALC_V2_FEATURES;
  protected readonly whyBetter = CALC_V2_WHY_BETTER;
  protected readonly trustBadges = CALC_V2_TRUST_BADGES;
  protected readonly tiers = CALC_V2_TIERS;
  protected readonly cities = CITIES;
  protected readonly priceTrendMonths = CALC_V2_PRICE_TREND_MONTHS;

  protected readonly constructionType = signal<string>('Residential');
  protected readonly buildingType = signal<string>('Independent House');
  protected readonly builtUpArea = signal<number>(2400);
  protected readonly floors = signal<string>('G+1');
  protected readonly citySlug = signal<string>('bangalore');
  protected readonly selectedTier = signal<CalcV2Tier['tier']>('Premium');
  protected readonly previewMode = signal<'2D' | '3D'>('3D');
  protected readonly activeSlide = signal<number>(1);

  protected readonly qualityGrade = signal<'Basic' | 'Standard' | 'Premium'>('Premium');
  protected readonly hasBasement = signal<boolean>(false);
  protected readonly hasParking = signal<boolean>(true);
  protected readonly materialBrand = signal<'Standard' | 'Branded' | 'Luxury'>('Branded');
  protected readonly interiorLevel = signal<number>(65);

  protected readonly selectedCity = computed(() => this.cities.find((c) => c.slug === this.citySlug()) ?? this.cities[0]);

  protected readonly activeTier = computed<CalcV2Tier>(() => {
    return this.tiers.find((t) => t.tier === this.selectedTier()) ?? this.tiers[1];
  });

  protected readonly estimatedCost = computed(() => this.builtUpArea() * this.activeTier().ratePerSqft);

  protected readonly breakdownRows = computed(() => {
    const total = this.estimatedCost();
    return CALC_V2_BREAKDOWN.map((row) => ({
      ...row,
      amount: Math.round((total * row.percent) / 100),
    }));
  });

  /** Conic-gradient stops computed from breakdown percentages, for the CSS donut chart. */
  protected readonly donutGradient = computed(() => {
    let cumulative = 0;
    const stops = this.breakdownRows().map((row) => {
      const start = cumulative;
      cumulative += row.percent;
      return `${row.color} ${start}% ${cumulative}%`;
    });
    return `conic-gradient(${stops.join(', ')})`;
  });

  protected readonly priceTrend = computed(() => {
    const end = this.activeTier().ratePerSqft;
    const start = Math.round(end * 0.89);
    const step = (end - start) / 5;
    return Array.from({ length: 6 }, (_, i) => Math.round(start + step * i));
  });

  protected readonly trendPoints = computed(() => {
    const values = this.priceTrend();
    const max = Math.max(...values);
    const min = Math.min(...values) - 100;
    const range = max - min || 1;
    return values
      .map((v, i) => {
        const x = (i / (values.length - 1)) * 280 + 10;
        const y = 120 - ((v - min) / range) * 100;
        return `${x},${y}`;
      })
      .join(' ');
  });

  protected readonly trendCoords = computed(() => {
    const values = this.priceTrend();
    const max = Math.max(...values);
    const min = Math.min(...values) - 100;
    const range = max - min || 1;
    return values.map((v, i) => ({
      x: (i / (values.length - 1)) * 280 + 10,
      y: 120 - ((v - min) / range) * 100,
      value: v,
    }));
  });

  protected readonly heroPreviewImage = computed(() =>
    this.previewMode() === '3D'
      ? optimizedImage(STOCK_IMAGES.modernVilla, 1000, 640)
      : optimizedImage(STOCK_IMAGES.blueprintPlans, 1000, 640),
  );

  protected readonly expertAvatar = avatarImage(22, 64);
  protected readonly expertAvatar2 = avatarImage(51, 64);

  constructor(private readonly seo: Seo) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Construction Cost Calculator V2 (Beta) — AI-Powered Estimate',
      description: 'Try BuildX\'s next-gen AI construction cost calculator: interactive 3D preview, detailed cost breakdown, smart package comparisons, and live price trends.',
      url: '/cost-calculator-v2',
    });
  }

  goToStep(step: number): void {
    this.activeStep.set(step as WizardStep);
  }

  nextStep(): void {
    this.activeStep.update((s) => (s < 4 ? ((s + 1) as WizardStep) : s));
  }

  prevStep(): void {
    this.activeStep.update((s) => (s > 1 ? ((s - 1) as WizardStep) : s));
  }

  selectTier(tier: CalcV2Tier['tier']): void {
    this.selectedTier.set(tier);
  }

  setPreviewMode(mode: '2D' | '3D'): void {
    this.previewMode.set(mode);
  }

  setSlide(index: number): void {
    this.activeSlide.set(index);
  }

  onAreaChange(value: number): void {
    this.builtUpArea.set(Math.max(200, Math.min(20000, value || 0)));
  }

  formatCurrency(value: number): string {
    return '₹' + Math.round(value).toLocaleString('en-IN');
  }

  formatLakh(value: number): string {
    return (value / 100000).toFixed(2) + 'L';
  }
}
