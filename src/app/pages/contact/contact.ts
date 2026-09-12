import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LeadForm } from '../../shared/components/lead-form/lead-form';
import { Seo } from '../../core/services/seo';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, LeadForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  protected contextNote = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly seo: Seo,
  ) {}

  ngOnInit(): void {
    const { city, sqft, tier } = this.route.snapshot.queryParams;
    if (city || sqft || tier) {
      this.contextNote = `Following up on your estimate: ${sqft ?? ''} sqft in ${city ?? ''} (${tier ?? ''} package).`;
    }

    this.seo.update({
      title: 'Contact Us — Talk to a Construction Expert',
      description: 'Get in touch with BuildX for a personalized construction cost quote, design consultation, or project inquiry.',
      url: '/contact',
    });
  }
}
