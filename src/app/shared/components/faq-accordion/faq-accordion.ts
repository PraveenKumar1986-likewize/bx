import { Component, input, signal } from '@angular/core';
import { GeoFaqBlock } from '../../../core/data/faq.data';

@Component({
  selector: 'app-faq-accordion',
  imports: [],
  templateUrl: './faq-accordion.html',
  styleUrl: './faq-accordion.scss',
})
export class FaqAccordion {
  /** GEO-formatted Q&A blocks: Question / Answer / Data / Example / Summary */
  faqs = input.required<GeoFaqBlock[]>();
  heading = input<string>('Frequently Asked Questions');

  private readonly openIndexSignal = signal<number | null>(0);

  isOpen(index: number): boolean {
    return this.openIndexSignal() === index;
  }

  toggle(index: number): void {
    this.openIndexSignal.update((current) => (current === index ? null : index));
  }
}
