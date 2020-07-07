import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BlogFormComponent } from './blog-form.component';
import { QuillModule } from 'ngx-quill';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [BlogFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuillModule,

    MatFormFieldModule,
    MatDatepickerModule
  ],
  exports: [BlogFormComponent]
})
export class BlogFormModule { }
