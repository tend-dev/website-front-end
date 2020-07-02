import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { editBlogFeatureKey, reducer } from './blog-state.reducers';


@NgModule({
  imports: [
    StoreModule.forFeature(editBlogFeatureKey, reducer)
  ]
})
export class BlogStateModule { }
