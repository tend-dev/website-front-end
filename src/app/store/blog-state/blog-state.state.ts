export interface EditBlogState {
  blogIsUpdating: boolean;
  id: string;
  title: string;
  content: string;
  created: number;
  author: string;
  image: string;
  thumbnail: string;
}

export const initialState: EditBlogState = {
  blogIsUpdating: false,
  id: '',
  title: '',
  content: '',
  created: null,
  author: '',
  image: '',
  thumbnail: '',
};
