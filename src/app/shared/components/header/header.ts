import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly mobileNavOpen = signal(false);

  protected readonly navLinks = [
    { label: 'Home Construction', path: '/home-construction' },
    { label: 'Cost Calculator', path: '/cost-calculator' },
    { label: 'House Designs', path: '/house-designs' },
    { label: 'AI Advisor', path: '/ai-advisor' },
    { label: 'Projects', path: '/blog' },
    { label: 'FAQ', path: '/faq' },
  ];

  toggleMobileNav(): void {
    this.mobileNavOpen.update((v) => !v);
  }

  closeMobileNav(): void {
    this.mobileNavOpen.set(false);
  }
}
