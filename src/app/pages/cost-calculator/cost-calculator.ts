import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CostCalculatorWidget } from '../../shared/components/cost-calculator-widget/cost-calculator-widget';
import { FaqAccordion } from '../../shared/components/faq-accordion/faq-accordion';
import { LeadForm } from '../../shared/components/lead-form/lead-form';
import { CITIES } from '../../core/data/cities.data';
import { HOME_FAQS } from '../../core/data/faq.data';
import { Seo } from '../../core/services/seo';

@Component({
  selector: 'app-cost-calculator',
  imports: [RouterLink, CostCalculatorWidget, FaqAccordion, LeadForm],
  templateUrl: './cost-calculator.html',
  styleUrl: './cost-calculator.scss',
})
export class CostCalculator implements OnInit {
  protected readonly cities = CITIES;
  protected readonly faqs = HOME_FAQS;

  protected readonly sqftShortcuts = [1000, 1500, 2000, 2500, 3000];

  constructor(private readonly seo: Seo) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Construction Cost Calculator — Instant House Building Estimate',
      description:
        'Free construction cost calculator for India. Estimate house building cost by city, built-up area, and package tier (Basic/Standard/Premium) with a full cost breakdown.',
      url: '/cost-calculator',
    });

    this.seo.setJsonLd('schema-breadcrumb', this.seo.buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Construction Cost Calculator', url: '/cost-calculator' },
    ]));

    this.seo.setJsonLd(
      'schema-faq',
      this.seo.buildFaqSchema(this.faqs.map((f) => ({ question: f.question, answer: f.answer }))),
    );
  }
}
