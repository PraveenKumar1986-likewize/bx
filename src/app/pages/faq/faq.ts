import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaqAccordion } from '../../shared/components/faq-accordion/faq-accordion';
import { HOME_FAQS, CITY_FAQ_TEMPLATE } from '../../core/data/faq.data';
import { CITIES } from '../../core/data/cities.data';
import { Seo } from '../../core/services/seo';

@Component({
  selector: 'app-faq',
  imports: [RouterLink, FaqAccordion],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq implements OnInit {
  protected readonly generalFaqs = HOME_FAQS;

  protected readonly cityFaqGroups = CITIES.slice(0, 3).map((c) => ({
    city: c.name,
    slug: c.slug,
    faqs: CITY_FAQ_TEMPLATE(c.name, c.packages[0].ratePerSqft, c.packages[c.packages.length - 1].ratePerSqft),
  }));

  protected readonly topicClusters = [
    { title: 'Cost & Budgeting', count: 12, path: '/cost-calculator' },
    { title: 'Materials & Suppliers', count: 9, path: '/faq' },
    { title: 'Approvals & Regulations', count: 7, path: '/ai-advisor' },
    { title: 'Design & Planning', count: 15, path: '/house-designs' },
  ];

  constructor(private readonly seo: Seo) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Construction FAQ Hub — Cost, Materials, Approvals & Design',
      description:
        'Answers to the most common questions about house construction cost, building materials, approvals, and design in India — organized by topic and city.',
      url: '/faq',
    });

    const allFaqs = [...this.generalFaqs, ...this.cityFaqGroups.flatMap((g) => g.faqs)];
    this.seo.setJsonLd('schema-faq', this.seo.buildFaqSchema(allFaqs.map((f) => ({ question: f.question, answer: f.answer }))));
  }
}
