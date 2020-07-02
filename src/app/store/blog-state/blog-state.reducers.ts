import { Action, createReducer, on } from '@ngrx/store';
import * as EditBlogActions from './blog-state.actions';
import { EditBlogState, initialState } from './blog-state.state';

export const editBlogFeatureKey = 'editBlog';

const editBlogReducer = createReducer(
  initialState,
  on(EditBlogActions.editBlog, (state: EditBlogState, { id, title, content, created, author, image, thumbnail }: Partial<EditBlogState>) => ({
    ...state,
    blogIsUpdating: true,
    id,
    title,
    content,
    created,
    author,
    image,
    thumbnail
  })),
  on(EditBlogActions.editBlogFinished, (state: EditBlogState) => ({
    ...initialState
  }))
);

export function reducer(state: EditBlogState, action: Action) {
  return editBlogReducer(state, action);
}
