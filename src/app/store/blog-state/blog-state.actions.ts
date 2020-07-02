import { createAction, props } from '@ngrx/store';
import { Blog } from '@models/blog.interface';

export const editBlog = createAction(
  '[Dashboard Page] Update Blog',
  props<Blog>()
);

export const editBlogFinished = createAction(
  '[Dashboard Page] Update Blog Finished'
);
