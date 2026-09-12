import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  url?: string;
  canonical?: string;
  image?: string;
}

/**
 * Centralized SEO + GEO service.
 * - Sets <title> and meta description/OG/Twitter tags for every route.
 * - Injects JSON-LD structured data (FAQPage, LocalBusiness, Article, etc.)
 *   so both Google and AI crawlers (ChatGPT, Copilot, Gemini, Perplexity)
 *   can extract clean, citable facts from every page.
 */
@Injectable({
  providedIn: 'root',
})
export class Seo {
  private readonly siteName = 'BuildX — Home Construction Company';
  private readonly baseUrl = 'https://www.buildx.in';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  /** Sets title + description + OG/Twitter meta tags for the current page. */
  update(config: SeoConfig): void {
    const fullTitle = `${config.title} | ${this.siteName}`;
    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });

    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }

    const canonicalUrl = config.canonical ?? `${this.baseUrl}${config.url ?? ''}`;
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.setCanonicalLink(canonicalUrl);
  }

  private setCanonicalLink(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /** Injects (or replaces) a JSON-LD <script> block identified by `id`. */
  setJsonLd(id: string, data: Record<string, unknown>): void {
    this.removeJsonLd(id);
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }

  removeJsonLd(id: string): void {
    const existing = this.document.getElementById(id);
    if (existing) {
      existing.remove();
    }
  }

  /** Builds FAQPage structured data from GEO Q&A blocks. */
  buildFaqSchema(faqs: { question: string; answer: string }[]): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    };
  }

  /** Builds LocalBusiness + Dataset-style schema for city cost pages. */
  buildLocalBusinessSchema(params: {
    cityName: string;
    description: string;
    lowPrice: number;
    highPrice: number;
    url: string;
  }): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `BuildX Construction — ${params.cityName}`,
      description: params.description,
      areaServed: params.cityName,
      url: params.url,
      priceRange: `₹${params.lowPrice}–₹${params.highPrice} per sqft`,
    };
  }

  buildBreadcrumbSchema(items: { name: string; url: string }[]): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${this.baseUrl}${item.url}`,
      })),
    };
  }

  /** Builds Service schema for commercial-intent service pages (turnkey, villa, residential, etc). */
  buildServiceSchema(params: {
    name: string;
    description: string;
    url: string;
    areaServed?: string[];
  }): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: params.name,
      name: params.name,
      description: params.description,
      provider: {
        '@type': 'Organization',
        name: 'BuildX',
        url: this.baseUrl,
      },
      areaServed: (params.areaServed ?? ['Delhi NCR', 'Noida', 'Greater Noida', 'Gurgaon', 'Ghaziabad']).map((a) => ({
        '@type': 'City',
        name: a,
      })),
      url: `${this.baseUrl}${params.url}`,
    };
  }

  /** Builds AggregateRating + Review schema for customer testimonial sections. */
  buildReviewSchema(params: {
    itemName: string;
    ratingValue: number;
    reviewCount: number;
    reviews: { author: string; rating: number; text: string }[];
  }): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: params.itemName,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: params.ratingValue,
        reviewCount: params.reviewCount,
      },
      review: params.reviews.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.author },
        reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
        reviewBody: r.text,
      })),
    };
  }
}
