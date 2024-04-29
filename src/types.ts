export type User = {
  _id: string;
  email: string;
  password: string;
  posts: Post[];
};

export type Post = {
  _id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};
