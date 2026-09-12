import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LeadForm } from '../../shared/components/lead-form/lead-form';
import { HOUSE_DESIGNS, HOUSE_STYLES, HouseDesign, designImage } from '../../core/data/designs.data';
import { Seo } from '../../core/services/seo';

@Component({
  selector: 'app-house-designs',
  imports: [FormsModule, RouterLink, LeadForm],
  templateUrl: './house-designs.html',
  styleUrl: './house-designs.scss',
})
export class HouseDesigns implements OnInit {
  protected readonly allDesigns = HOUSE_DESIGNS;
  protected readonly styles = HOUSE_STYLES;
  protected readonly designImage = designImage;

  protected readonly searchTerm = signal('');
  protected readonly selectedStyle = signal<string>('All');
  protected readonly maxBudget = signal<number>(10000000);
  protected readonly savedIds = signal<Set<string>>(new Set());

  protected readonly filteredDesigns = computed<HouseDesign[]>(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const style = this.selectedStyle();
    const budget = this.maxBudget();

    return this.allDesigns.filter((d) => {
      const matchesTerm = !term || d.name.toLowerCase().includes(term) || d.style.toLowerCase().includes(term);
      const matchesStyle = style === 'All' || d.style === style;
      const matchesBudget = d.startingCost <= budget;
      return matchesTerm && matchesStyle && matchesBudget;
    });
  });

  constructor(
    private readonly route: ActivatedRoute,
    private readonly seo: Seo,
  ) {}

  ngOnInit(): void {
    const styleParam = this.route.snapshot.queryParamMap.get('style');
    if (styleParam) {
      this.selectedStyle.set(styleParam);
    }

    this.seo.update({
      title: 'House Designs — Browse 500+ Verified Home Designs',
      description:
        'Explore modern, villa, duplex, farmhouse, and minimalist house designs with floor plans and instant cost estimates. Filter by BHK, budget, and built-up area.',
      url: '/house-designs',
    });
  }

  toggleSave(id: string): void {
    this.savedIds.update((set) => {
      const next = new Set(set);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  isSaved(id: string): boolean {
    return this.savedIds().has(id);
  }

  formatCurrency(value: number): string {
    return '₹' + value.toLocaleString('en-IN');
  }
}
