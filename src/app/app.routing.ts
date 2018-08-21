import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubRedditsComponent } from './sub-reddits/sub-reddits.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SubRedditsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
