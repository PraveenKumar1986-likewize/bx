import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'construction-cost-in/:city',
    renderMode: RenderMode.Server,
  },
  {
    path: 'cost-calculator/by-city/:city',
    renderMode: RenderMode.Server,
  },
  {
    path: 'cost-calculator/by-sqft/:sqft',
    renderMode: RenderMode.Server,
  },
  {
    path: 'house-designs/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
