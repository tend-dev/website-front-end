export interface EditBlogState {
  blogIsUpdating: boolean;
  id: string;
  title: string;
  content: string;
  image: string;
  imageUrl: string | ArrayBuffer;
}

export const initialState: EditBlogState = {
  blogIsUpdating: false,
  id: '',
  title: '',
  content: '',
  image: '',
  imageUrl: ''
};
