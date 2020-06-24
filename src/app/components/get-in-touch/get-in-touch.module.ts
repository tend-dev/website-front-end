import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetInTouchComponent } from './get-in-touch.component';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [GetInTouchComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [GetInTouchComponent]
})
export class GetInTouchModule { }
