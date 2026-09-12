import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CostCalculatorWidget } from '../../shared/components/cost-calculator-widget/cost-calculator-widget';
import { FaqAccordion } from '../../shared/components/faq-accordion/faq-accordion';
import { LeadForm } from '../../shared/components/lead-form/lead-form';
import { CITIES } from '../../core/data/cities.data';
import { HOUSE_DESIGNS, designImage } from '../../core/data/designs.data';
import { HOME_FAQS } from '../../core/data/faq.data';
import { avatarImage, optimizedImage, STOCK_IMAGES } from '../../core/utils/image.util';
import { Seo } from '../../core/services/seo';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CostCalculatorWidget, FaqAccordion, LeadForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  protected readonly popularSearches = [
    { label: 'House Construction Cost Calculator', path: '/cost-calculator' },
    { label: 'FAR & Ground Coverage Calculator', path: '/cost-calculator' },
    { label: 'Construction Cost in Delhi', path: '/construction-cost-in/delhi' },
    { label: 'Construction Cost in Gurgaon', path: '/construction-cost-in/gurgaon' },
    { label: 'Villa Construction Cost', path: '/house-designs?style=Villa' },
    { label: '1500 Sqft House Cost', path: '/cost-calculator' },
    { label: 'Building Materials Price List', path: '/faq' },
    { label: '2BHK House Designs', path: '/house-designs' },
    { label: 'Home Construction Company Near Me', path: '/about' },
  ];

  protected readonly featuredDesigns = HOUSE_DESIGNS.slice(0, 4);
  protected readonly cities = CITIES;
  protected readonly faqs = HOME_FAQS;
  protected readonly designImage = designImage;

  protected readonly heroImage = optimizedImage(STOCK_IMAGES.heroHouse, 900, 700);
  protected readonly heroEstimate = { city: 'Delhi', low: '48.5L', high: '57.2L', sqft: 2400, tier: 'Premium Package' };

  protected readonly journeySteps = [
    { step: '01', title: 'Estimate', desc: 'Get an instant, city-specific cost estimate — plus your legally buildable area using our FAR & ground coverage calculator.' },
    { step: '02', title: 'Design & Approve', desc: 'Pick from 500+ verified house designs and get architectural drawings, structural design, and building-plan sanction handled end to end.' },
    { step: '03', title: 'Milestone-Based Build', desc: 'Pay only against completed, inspected milestones — booking, foundation, structure, and finishing — never a lump sum upfront.' },
    { step: '04', title: 'Quality Checks', desc: '400+ documented quality checkpoints across every construction stage, verified by an independent site audit — not just the builder\'s word.' },
    { step: '05', title: 'Handover & Warranty', desc: 'Final inspection, snag-list resolution, and handover backed by a minimum 10-year structural warranty in writing.' },
  ];

  protected readonly differentiators = [
    { title: 'Multi-City Cost Data', desc: 'Live, comparable pricing across 50+ Indian cities — not just Delhi NCR. Compare Delhi vs Gurgaon vs Bangalore before you commit to a city or plot.' },
    { title: 'AI Construction Advisor', desc: 'Ask about cost, materials, timelines, or approvals and get instant, cited answers — 24/7, before you ever talk to a salesperson.' },
    { title: 'Verified, Not Self-Reported', desc: 'Every builder profile\'s warranty terms and quality-check documentation are independently audited, not just marketing claims.' },
    { title: 'Design + Cost in One Place', desc: '500+ verified house designs, each with a live cost estimate attached — so you shop by budget and style simultaneously.' },
  ];

  protected readonly featuredProjects = [
    { name: 'Modern Villa', status: 'Completed', location: 'Gurgaon, Haryana', sqft: 2800, cost: '₹62L', alt: 'Modern villa exterior with landscaped garden in Gurgaon', image: optimizedImage(STOCK_IMAGES.modernVilla, 640, 420) },
    { name: 'Dream Home', status: 'Under Construction', location: 'Noida, Uttar Pradesh', sqft: 2400, cost: '₹41L', alt: 'House under construction with scaffolding in Noida', image: optimizedImage(STOCK_IMAGES.constructionSite, 640, 420) },
    { name: 'Luxury Residence', status: 'Completed', location: 'Delhi', sqft: 3200, cost: '₹71L', alt: 'Luxury residence with pool lit up at dusk in Delhi', image: optimizedImage(STOCK_IMAGES.luxuryVilla, 640, 420) },
    { name: 'Contemporary Home', status: 'Under Construction', location: 'Faridabad, Haryana', sqft: 2000, cost: '₹33L', alt: 'Contemporary home facade in Faridabad', image: optimizedImage(STOCK_IMAGES.contemporaryHome, 640, 420) },
  ];

  protected readonly reviews = [
    { name: 'Rohit Malhotra', location: 'Gurgaon', rating: 5, text: 'The cost calculator was spot-on within 4% of our final bill. Transparent pricing throughout the project.', avatar: avatarImage(12) },
    { name: 'Ananya Sharma', location: 'Delhi', rating: 5, text: 'We compared 6 builders — BuildX was the only one that gave us a material-level cost breakdown upfront.', avatar: avatarImage(47) },
    { name: 'Vikram Singh', location: 'Noida', rating: 4, text: 'Great design library. We picked a duplex design and had it customized for our plot within two weeks.', avatar: avatarImage(33) },
  ];

  protected readonly resources = [
    { title: 'FAR & Ground Coverage: What You Can Legally Build on Your Plot', category: 'Approvals', path: '/blog', image: optimizedImage(STOCK_IMAGES.blueprintPlans, 400, 260) },
    { title: 'Cement vs Concrete: A Complete Cost Guide', category: 'Materials', path: '/blog', image: optimizedImage(STOCK_IMAGES.cementMaterials, 400, 260) },
    { title: '10 Vastu-Compliant House Designs for 2026', category: 'Design', path: '/blog', image: optimizedImage(STOCK_IMAGES.vastuInterior, 400, 260) },
    { title: 'Milestone-Based Payments: How to Protect Your Construction Budget', category: 'Construction', path: '/blog', image: optimizedImage(STOCK_IMAGES.constructionSite, 400, 260) },
  ];

  constructor(private readonly seo: Seo) {}

  ngOnInit(): void {
    this.seo.update({
      title: "Home Construction Company in Noida, Greater Noida & Delhi NCR",
      description:
        'BuildX is a home construction company offering house construction, turnkey construction, villa construction, and residential construction services across Noida, Greater Noida, Gurgaon, Ghaziabad & Delhi NCR — with transparent pricing, verified contractors, and a 10-year warranty.',
      url: '/',
    });

    this.seo.setJsonLd('schema-organization', {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: 'BuildX',
      url: 'https://www.buildx.in',
      description: 'BuildX is a home construction company offering house construction, turnkey construction, villa construction, and residential construction services across Delhi NCR, backed by transparent pricing and a verified-contractor network.',
      areaServed: ['Noida', 'Greater Noida', 'Noida Extension', 'Ghaziabad', 'Gurgaon', 'Delhi'],
      priceRange: '₹1,400–₹2,900 per sqft',
    });

    this.seo.setJsonLd(
      'schema-review',
      this.seo.buildReviewSchema({
        itemName: 'BuildX Home Construction Services',
        ratingValue: 4.8,
        reviewCount: 312,
        reviews: this.reviews.map((r) => ({ author: r.name, rating: r.rating, text: r.text })),
      }),
    );

    this.seo.setJsonLd(
      'schema-faq',
      this.seo.buildFaqSchema(this.faqs.map((f) => ({ question: f.question, answer: f.answer }))),
    );
  }
}
