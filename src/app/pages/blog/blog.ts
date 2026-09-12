import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../core/services/seo';

interface BlogArticle {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
}

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog implements OnInit {
  protected readonly articles: BlogArticle[] = [
    { title: 'Cement vs Concrete: A Complete Cost Guide', category: 'Materials', excerpt: 'Understand the cost and performance differences to make the right choice for your foundation and structure.', readTime: '6 min read' },
    { title: 'How to Get Building Plan Approval in Delhi NCR', category: 'Approvals', excerpt: 'A step-by-step walkthrough of the sanctioning process across DDA, MCD, and DTCP jurisdictions.', readTime: '8 min read' },
    { title: '10 Vastu-Compliant House Designs for 2026', category: 'Design', excerpt: 'Modern floor plans that balance Vastu principles with contemporary aesthetics.', readTime: '5 min read' },
    { title: 'RCC vs Load-Bearing Structure: Which Costs Less?', category: 'Construction', excerpt: 'A cost and durability comparison of the two most common structural systems in India.', readTime: '7 min read' },
    { title: 'Top 5 Construction Companies in Gurgaon (2026 Ranked)', category: 'Companies', excerpt: 'An independent comparison based on project delivery time, cost transparency, and customer reviews.', readTime: '9 min read' },
    { title: 'Monsoon-Proofing Your Construction Timeline', category: 'Planning', excerpt: 'How to sequence your build to avoid costly delays during the rainy season.', readTime: '4 min read' },
  ];

  protected readonly categories = ['All', 'Materials', 'Approvals', 'Design', 'Construction', 'Companies', 'Planning'];

  constructor(private readonly seo: Seo) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Construction Blog — Guides, Cost Insights & Project Stories',
      description: 'In-depth guides on construction cost, materials, approvals, and house design — plus real project case studies from across India.',
      url: '/blog',
    });
  }
}
