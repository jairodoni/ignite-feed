export interface PostType {
  id: number;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  }
  publishedAt: Date;
  content: {
    type: 'paragraph' | 'link';
    content: string;
  }[];
}