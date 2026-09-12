import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly columns = [
    {
      title: 'Services',
      links: [
        { label: 'Home Construction', path: '/home-construction' },
        { label: 'House Construction', path: '/house-construction' },
        { label: 'Turnkey Construction', path: '/turnkey-construction' },
        { label: 'Villa Construction', path: '/villa-construction' },
        { label: 'Residential Construction', path: '/residential-construction' },
        { label: 'Home Design Services', path: '/home-design-services' },
      ],
    },
    {
      title: 'Locations',
      links: [
        { label: 'Home Construction in Noida', path: '/home-construction-noida' },
        { label: 'Home Construction in Greater Noida', path: '/home-construction-greater-noida' },
        { label: 'Home Construction in Noida Extension', path: '/home-construction-noida-extension' },
        { label: 'Home Construction in Ghaziabad', path: '/home-construction-ghaziabad' },
        { label: 'Home Construction in Gurgaon', path: '/home-construction-gurgaon' },
        { label: 'Home Construction in Delhi', path: '/home-construction-delhi' },
      ],
    },
    {
      title: 'Cost Calculators',
      links: [
        { label: 'Construction Cost Calculator', path: '/cost-calculator' },
        { label: 'Cost in Delhi', path: '/construction-cost-in/delhi' },
        { label: 'Cost in Gurgaon', path: '/construction-cost-in/gurgaon' },
        { label: 'Cost in Noida', path: '/construction-cost-in/noida' },
        { label: 'Cost in Mumbai', path: '/construction-cost-in/mumbai' },
        { label: 'Cost in Bangalore', path: '/construction-cost-in/bangalore' },
      ],
    },
    {
      title: 'House Designs',
      links: [
        { label: 'All Designs', path: '/house-designs' },
        { label: 'Modern Homes', path: '/house-designs?style=Modern' },
        { label: 'Villas', path: '/house-designs?style=Villa' },
        { label: 'Duplex Homes', path: '/house-designs?style=Duplex' },
        { label: 'Farmhouses', path: '/house-designs?style=Farmhouse' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', path: '/blog' },
        { label: 'FAQ Hub', path: '/faq' },
        { label: 'AI Construction Advisor', path: '/ai-advisor' },
        { label: 'Building Materials', path: '/faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: 'Projects', path: '/blog' },
      ],
    },
  ];
}
