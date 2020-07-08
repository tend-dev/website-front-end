import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BlogFormComponent } from './blog-form.component';
import { QuillModule } from 'ngx-quill';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [BlogFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuillModule,

    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [BlogFormComponent]
})
export class BlogFormModule { }
