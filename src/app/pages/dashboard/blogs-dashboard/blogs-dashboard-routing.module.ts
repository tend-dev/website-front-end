import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsDashboardComponent } from './blogs-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: BlogsDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsDashboardRoutingModule { }
