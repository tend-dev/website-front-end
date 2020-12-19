export interface Blog {
  id?: string;
  title: string;
  content: string;
  created: number;
  author: string;
  authorName?: string;
  image: string;
  thumbnail: string;
}

export interface BlogPostResponse {
  response: string;
}
