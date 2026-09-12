import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../core/services/seo';
import { avatarImage } from '../../core/utils/image.util';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  protected readonly stats = [
    { value: '12,000+', label: 'Homeowners Served' },
    { value: '50+', label: 'Cities Covered' },
    { value: '500+', label: 'Verified Designs' },
    { value: '₹1,200 Cr+', label: 'Construction Value Estimated' },
  ];

  protected readonly team = [
    { name: 'Er. Ramesh Kapoor', role: 'Chief Structural Engineer', credential: '20+ years, IIT Delhi', avatar: avatarImage(5) },
    { name: 'Ar. Priya Nair', role: 'Head of Design', credential: 'CEPT University, 300+ homes designed', avatar: avatarImage(45) },
    { name: 'Ar. Sanjay Verma', role: 'Head of Approvals & Compliance', credential: 'Former DTCP consultant', avatar: avatarImage(15) },
  ];

  constructor(private readonly seo: Seo) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'About BuildX — Home Construction Company in Delhi NCR',
      description: 'BuildX is a home construction company offering verified contractors, transparent cost estimation, house designs, and AI guidance to help homeowners across Delhi NCR build with confidence.',
      url: '/about',
    });
  }
}
