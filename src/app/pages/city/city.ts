import { Component, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CostCalculatorWidget } from '../../shared/components/cost-calculator-widget/cost-calculator-widget';
import { FaqAccordion } from '../../shared/components/faq-accordion/faq-accordion';
import { LeadForm } from '../../shared/components/lead-form/lead-form';
import { CITIES, getCityBySlug } from '../../core/data/cities.data';
import { CITY_FAQ_TEMPLATE } from '../../core/data/faq.data';
import { Seo } from '../../core/services/seo';

@Component({
  selector: 'app-city',
  imports: [RouterLink, CostCalculatorWidget, FaqAccordion, LeadForm],
  templateUrl: './city.html',
  styleUrl: './city.scss',
})
export class City implements OnInit {
  protected readonly citySlug = signal<string>('');

  protected readonly city = computed(() => getCityBySlug(this.citySlug()) ?? CITIES[0]);

  protected readonly relatedCities = computed(() =>
    this.city().relatedCitySlugs.map((slug) => getCityBySlug(slug)).filter((c) => !!c),
  );

  protected readonly faqs = computed(() => {
    const c = this.city();
    const low = c.packages[0].ratePerSqft;
    const high = c.packages[c.packages.length - 1].ratePerSqft;
    return CITY_FAQ_TEMPLATE(c.name, low, high);
  });

  constructor(
    private readonly route: ActivatedRoute,
    private readonly seo: Seo,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('city') ?? 'delhi';
      this.citySlug.set(slug);
      this.updateSeo();
    });
  }

  private updateSeo(): void {
    const c = this.city();
    const low = c.packages[0].ratePerSqft;
    const high = c.packages[c.packages.length - 1].ratePerSqft;

    this.seo.update({
      title: `Construction Cost in ${c.name} (2026) — Rates, Materials & Calculator`,
      description: `Construction cost in ${c.name} ranges from ₹${low}–₹${high} per sqft. Check your FAR/buildable area, live material prices, and cost breakdowns — every BuildX-verified builder backed by a 10-year warranty and milestone-based payments.`,
      url: `/construction-cost-in/${c.slug}`,
    });

    this.seo.setJsonLd('schema-breadcrumb', this.seo.buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Construction Cost Calculator', url: '/cost-calculator' },
      { name: `Construction Cost in ${c.name}`, url: `/construction-cost-in/${c.slug}` },
    ]));

    this.seo.setJsonLd('schema-localbusiness', this.seo.buildLocalBusinessSchema({
      cityName: c.name,
      description: `Construction services and cost estimation for ${c.name}, ${c.state}`,
      lowPrice: low,
      highPrice: high,
      url: `https://www.buildx.in/construction-cost-in/${c.slug}`,
    }));

    this.seo.setJsonLd(
      'schema-faq',
      this.seo.buildFaqSchema(this.faqs().map((f) => ({ question: f.question, answer: f.answer }))),
    );
  }
}
