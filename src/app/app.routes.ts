import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'BuildX — Home Construction Company in Noida, Greater Noida & Delhi NCR',
  },
  {
    path: 'home-construction',
    loadComponent: () => import('./pages/service/service').then((m) => m.Service),
    data: { serviceSlug: 'home-construction' },
  },
  {
    path: 'house-construction',
    loadComponent: () => import('./pages/service/service').then((m) => m.Service),
    data: { serviceSlug: 'house-construction' },
  },
  {
    path: 'turnkey-construction',
    loadComponent: () => import('./pages/service/service').then((m) => m.Service),
    data: { serviceSlug: 'turnkey-construction' },
  },
  {
    path: 'villa-construction',
    loadComponent: () => import('./pages/service/service').then((m) => m.Service),
    data: { serviceSlug: 'villa-construction' },
  },
  {
    path: 'residential-construction',
    loadComponent: () => import('./pages/service/service').then((m) => m.Service),
    data: { serviceSlug: 'residential-construction' },
  },
  {
    path: 'home-design-services',
    loadComponent: () => import('./pages/service/service').then((m) => m.Service),
    data: { serviceSlug: 'home-design-services' },
  },
  {
    path: 'home-construction-noida',
    loadComponent: () => import('./pages/location/location').then((m) => m.Location),
    data: { citySlug: 'noida' },
  },
  {
    path: 'home-construction-greater-noida',
    loadComponent: () => import('./pages/location/location').then((m) => m.Location),
    data: { citySlug: 'greater-noida' },
  },
  {
    path: 'home-construction-noida-extension',
    loadComponent: () => import('./pages/location/location').then((m) => m.Location),
    data: { citySlug: 'noida-extension' },
  },
  {
    path: 'home-construction-ghaziabad',
    loadComponent: () => import('./pages/location/location').then((m) => m.Location),
    data: { citySlug: 'ghaziabad' },
  },
  {
    path: 'home-construction-gurgaon',
    loadComponent: () => import('./pages/location/location').then((m) => m.Location),
    data: { citySlug: 'gurgaon' },
  },
  {
    path: 'home-construction-delhi',
    loadComponent: () => import('./pages/location/location').then((m) => m.Location),
    data: { citySlug: 'delhi' },
  },
  {
    path: 'cost-calculator',
    loadComponent: () => import('./pages/cost-calculator/cost-calculator').then((m) => m.CostCalculator),
    title: 'Construction Cost Calculator',
  },
  {
    path: 'cost-calculator/by-sqft/:sqft',
    loadComponent: () => import('./pages/cost-calculator/cost-calculator').then((m) => m.CostCalculator),
    title: 'Construction Cost Calculator',
  },
  {
    path: 'cost-calculator/by-city/:city',
    loadComponent: () => import('./pages/city/city').then((m) => m.City),
  },
  {
    path: 'cost-calculator/villa',
    loadComponent: () => import('./pages/cost-calculator/cost-calculator').then((m) => m.CostCalculator),
    title: 'Villa Construction Cost Calculator',
  },
  {
    path: 'cost-calculator-v2',
    loadComponent: () =>
      import('./pages/cost-calculator-v2/cost-calculator-v2').then((m) => m.CostCalculatorV2),
    title: 'Construction Cost Calculator V2 (Beta)',
  },
  {
    path: 'construction-cost-in/:city',
    loadComponent: () => import('./pages/city/city').then((m) => m.City),
  },
  {
    path: 'house-designs',
    loadComponent: () => import('./pages/house-designs/house-designs').then((m) => m.HouseDesigns),
    title: 'House Design Library',
  },
  {
    path: 'house-designs/:id',
    loadComponent: () => import('./pages/house-design-detail/house-design-detail').then((m) => m.HouseDesignDetail),
  },
  {
    path: 'ai-advisor',
    loadComponent: () => import('./pages/ai-advisor/ai-advisor').then((m) => m.AiAdvisor),
    title: 'AI Construction Advisor',
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq').then((m) => m.Faq),
    title: 'Construction FAQ Hub',
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog').then((m) => m.Blog),
    title: 'Projects & Insights',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'About BuildX',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact Us',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
