import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EditBlogState } from './blog-state.state';
import { editBlogFeatureKey } from './blog-state.reducers';

export const getDashboardPageStore = createFeatureSelector(editBlogFeatureKey);

export const getBlogIsUpdatingSelector = createSelector(
  getDashboardPageStore,
  (store: EditBlogState) => store.blogIsUpdating
);

export const getBlogSelector = createSelector(
  getDashboardPageStore,
  (store: EditBlogState) => ({
    id: store.id,
    title: store.title,
    content: store.content,
    image: store.image,
  })
);

export const getBlogImageUrlSelector = createSelector(
  getDashboardPageStore,
  (store: EditBlogState) => store.imageUrl
);
