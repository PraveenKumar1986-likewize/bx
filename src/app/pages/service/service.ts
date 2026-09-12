import { Component, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FaqAccordion } from '../../shared/components/faq-accordion/faq-accordion';
import { LeadForm } from '../../shared/components/lead-form/lead-form';
import { CITIES } from '../../core/data/cities.data';
import { ConstructionService, SERVICES, getServiceBySlug } from '../../core/data/services.data';
import { Seo } from '../../core/services/seo';

@Component({
  selector: 'app-service',
  imports: [RouterLink, FaqAccordion, LeadForm],
  templateUrl: './service.html',
  styleUrl: './service.scss',
})
export class Service implements OnInit {
  protected readonly cities = CITIES.slice(0, 6);
  protected readonly serviceSlug = signal<string>('');

  protected readonly service = computed<ConstructionService>(() => {
    return getServiceBySlug(this.serviceSlug()) ?? SERVICES[0];
  });

  protected readonly relatedServices = computed<ConstructionService[]>(() => {
    return this.service().relatedServiceSlugs
      .map((slug) => getServiceBySlug(slug))
      .filter((s): s is ConstructionService => !!s);
  });

  constructor(
    private readonly route: ActivatedRoute,
    private readonly seo: Seo,
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const slugFromRoute = (data['serviceSlug'] as string | undefined) ?? this.route.snapshot.paramMap.get('service') ?? 'home-construction';
      this.serviceSlug.set(slugFromRoute);
      this.updateSeo();
    });
  }

  private updateSeo(): void {
    const s = this.service();

    this.seo.update({
      title: `${s.h1}`,
      description: s.subhead,
      url: `/${s.slug}`,
    });

    this.seo.setJsonLd('schema-breadcrumb', this.seo.buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: s.navLabel, url: `/${s.slug}` },
    ]));

    this.seo.setJsonLd('schema-service', this.seo.buildServiceSchema({
      name: s.h1,
      description: s.intro,
      url: `/${s.slug}`,
    }));

    this.seo.setJsonLd(
      'schema-faq',
      this.seo.buildFaqSchema(s.faqs.map((f) => ({ question: f.question, answer: f.answer }))),
    );
  }
}
