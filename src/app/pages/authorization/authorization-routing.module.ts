import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthorizationRoutingModule {}
