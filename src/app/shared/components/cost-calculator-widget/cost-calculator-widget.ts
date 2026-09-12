import { Component, computed, effect, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CITIES, COST_PACKAGES_DEFAULT, CostPackage, getCityBySlug } from '../../../core/data/cities.data';

interface CostBreakdownRow {
  label: string;
  percent: number;
  amount: number;
}

@Component({
  selector: 'app-cost-calculator-widget',
  imports: [FormsModule, RouterLink],
  templateUrl: './cost-calculator-widget.html',
  styleUrl: './cost-calculator-widget.scss',
})
export class CostCalculatorWidget {
  /** Optionally lock the city selector (used on city landing pages). */
  lockedCitySlug = input<string | null>(null);
  /** Compact mode removes the breakdown chart (used in hero embeds). */
  compact = input<boolean>(false);

  protected readonly cities = CITIES;

  protected readonly citySlug = signal<string>('delhi');
  protected readonly sqft = signal<number>(1500);
  protected readonly tier = signal<CostPackage['tier']>('Standard');

  private readonly syncLockedCity = effect(() => {
    const locked = this.lockedCitySlug();
    if (locked) {
      this.citySlug.set(locked);
    }
  });

  protected readonly selectedCity = computed(() => getCityBySlug(this.citySlug()) ?? CITIES[0]);

  protected readonly packages = computed<CostPackage[]>(() => this.selectedCity()?.packages ?? COST_PACKAGES_DEFAULT);

  protected readonly selectedPackage = computed<CostPackage>(() => {
    return this.packages().find((p) => p.tier === this.tier()) ?? this.packages()[1];
  });

  protected readonly totalCost = computed(() => this.selectedPackage().ratePerSqft * this.sqft());

  /** Rough construction cost breakdown by phase — used for the GEO-friendly data block. */
  protected readonly breakdown = computed<CostBreakdownRow[]>(() => {
    const total = this.totalCost();
    const phases: { label: string; percent: number }[] = [
      { label: 'Structure (RCC, brickwork)', percent: 45 },
      { label: 'Finishing (flooring, painting, tiles)', percent: 25 },
      { label: 'Electrical & Plumbing', percent: 15 },
      { label: 'Doors, Windows & Fittings', percent: 10 },
      { label: 'Miscellaneous & Site Overheads', percent: 5 },
    ];
    return phases.map((p) => ({ ...p, amount: Math.round((total * p.percent) / 100) }));
  });

  protected readonly resultSlug = computed(() => `${this.sqft()}-sqft-${this.citySlug()}-${this.tier().toLowerCase()}`);

  formatCurrency(value: number): string {
    return '₹' + Math.round(value).toLocaleString('en-IN');
  }

  onCityChange(slug: string): void {
    this.citySlug.set(slug);
  }

  onSqftChange(value: number): void {
    this.sqft.set(Math.max(200, Math.min(10000, value || 0)));
  }

  onTierChange(tier: CostPackage['tier']): void {
    this.tier.set(tier);
  }
}
