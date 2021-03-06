import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from '@core/guards/auth.guard';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'care-management',
    loadChildren: () => import('./pages/care-management/care-management.module').then(m => m.CareManagementModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy/privacy.module').then(m => m.PrivacyModule),
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./pages/terms/terms.module').then(m => m.TermsModule),
  },
  {
    path: 'blog',
    // redirectTo: 'home',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule),
  },
  {
    path: 'dashboard',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
