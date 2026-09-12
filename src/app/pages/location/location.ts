import { Component, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FaqAccordion } from '../../shared/components/faq-accordion/faq-accordion';
import { LeadForm } from '../../shared/components/lead-form/lead-form';
import { CITIES, CityData, getCityBySlug } from '../../core/data/cities.data';
import { CITY_FAQ_TEMPLATE } from '../../core/data/faq.data';
import { SERVICES } from '../../core/data/services.data';
import { Seo } from '../../core/services/seo';

@Component({
  selector: 'app-location',
  imports: [RouterLink, FaqAccordion, LeadForm],
  templateUrl: './location.html',
  styleUrl: './location.scss',
})
export class Location implements OnInit {
  protected readonly citySlug = signal<string>('');
  protected readonly services = SERVICES;

  protected readonly city = computed<CityData>(() => getCityBySlug(this.citySlug()) ?? CITIES[0]);

  protected readonly relatedCities = computed(() =>
    this.city().relatedCitySlugs.map((slug) => getCityBySlug(slug)).filter((c): c is CityData => !!c),
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
    this.route.data.subscribe((data) => {
      const slug = (data['citySlug'] as string | undefined) ?? 'noida';
      this.citySlug.set(slug);
      this.updateSeo();
    });
  }

  private updateSeo(): void {
    const c = this.city();
    const low = c.packages[0].ratePerSqft;
    const high = c.packages[c.packages.length - 1].ratePerSqft;
    const url = `/home-construction-${c.slug}`;

    this.seo.update({
      title: `Home Construction Company in ${c.name} — Verified Builders & Free Estimate`,
      description: `Looking for a home construction company in ${c.name}? Get verified builders, transparent ₹${low}–₹${high}/sqft pricing, milestone-based payments, and a written 10-year warranty.`,
      url,
    });

    this.seo.setJsonLd('schema-breadcrumb', this.seo.buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: `Home Construction in ${c.name}`, url },
    ]));

    this.seo.setJsonLd('schema-localbusiness', this.seo.buildLocalBusinessSchema({
      cityName: c.name,
      description: `Verified home construction company serving ${c.name}, ${c.state}`,
      lowPrice: low,
      highPrice: high,
      url: `https://www.buildx.in${url}`,
    }));

    this.seo.setJsonLd('schema-service', this.seo.buildServiceSchema({
      name: `Home Construction in ${c.name}`,
      description: `Verified home construction, turnkey building, and villa construction services in ${c.name}, ${c.state}.`,
      url,
      areaServed: [c.name],
    }));

    this.seo.setJsonLd(
      'schema-faq',
      this.seo.buildFaqSchema(this.faqs().map((f) => ({ question: f.question, answer: f.answer }))),
    );
  }
}
