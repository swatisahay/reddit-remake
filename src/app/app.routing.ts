import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubRedditsComponent } from './sub-reddits/sub-reddits.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

const appRoutes: Routes = [
  {
    path: 'categories',
    component: SubRedditsComponent
  },
  {
    path: 'categories/:category',
    component: CategoryDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
