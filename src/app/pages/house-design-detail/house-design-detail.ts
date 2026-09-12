import { Component, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LeadForm } from '../../shared/components/lead-form/lead-form';
import { HOUSE_DESIGNS, HouseDesign, designImage } from '../../core/data/designs.data';
import { STOCK_IMAGES, optimizedImage } from '../../core/utils/image.util';
import { Seo } from '../../core/services/seo';

@Component({
  selector: 'app-house-design-detail',
  imports: [RouterLink, LeadForm],
  templateUrl: './house-design-detail.html',
  styleUrl: './house-design-detail.scss',
})
export class HouseDesignDetail implements OnInit {
  protected readonly designId = signal('');

  protected readonly design = computed<HouseDesign>(() => {
    return HOUSE_DESIGNS.find((d) => d.id === this.designId()) ?? HOUSE_DESIGNS[0];
  });

  protected readonly relatedDesigns = computed<HouseDesign[]>(() => {
    const current = this.design();
    return HOUSE_DESIGNS.filter((d) => d.id !== current.id && d.style === current.style).slice(0, 3);
  });

  protected readonly estimatedCost = computed(() => this.design().startingCost);
  protected readonly designImage = designImage;
  protected readonly heroThumb = computed(() => designImage(this.design(), 900, 640));
  protected readonly detailThumbs = [
    optimizedImage(STOCK_IMAGES.interiorLiving, 300, 220),
    optimizedImage(STOCK_IMAGES.blueprintPlans, 300, 220),
    optimizedImage(STOCK_IMAGES.constructionSite, 300, 220),
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly seo: Seo,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.designId.set(params.get('id') ?? '');
      this.updateSeo();
    });
  }

  private updateSeo(): void {
    const d = this.design();
    this.seo.update({
      title: `${d.name} — ${d.bhk}BHK ${d.style} House Design (${d.sqft} sqft)`,
      description: `${d.description} Starting cost: ₹${d.startingCost.toLocaleString('en-IN')}. Estimate your build cost instantly.`,
      url: `/house-designs/${d.id}`,
    });

    this.seo.setJsonLd('schema-breadcrumb', this.seo.buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'House Designs', url: '/house-designs' },
      { name: d.name, url: `/house-designs/${d.id}` },
    ]));
  }

  formatCurrency(value: number): string {
    return '₹' + value.toLocaleString('en-IN');
  }
}
